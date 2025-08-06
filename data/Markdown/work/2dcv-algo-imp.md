---
title: 2DCV Algorithms Implementation
author: Leon Cheng
date: 2021
description: Some classic computer vision algorithms implemented in Python.
image: /Images/JBF-0.jpg
github: 'https://github.com/Leon-LCC/2DCV-Implementation/'
tags: ['#Python', '#Computer Vision']
---

# 2DCV Python Implementation

## About

The work contains some classic computer vision algorithms implemented in Python. The purpose of this work is to help me understand the algorithms better. If you find any bugs or have any suggestions, please feel free to contact me.

## List of Contents

More details can be found in the corresponding pages.

-   [Harris Corner Detector](https://github.com/Leon-LCC/2DCV-Implementation/tree/main/Harris_Corner_Detector) (Page 2)
    -   A classic corner detection algorithm.
-   [Joint Bilateral Filter](https://github.com/Leon-LCC/2DCV-Implementation/tree/main/Joint_Bilateral_Filter) (Page 3)
    -   A classic edge-preserving smoothing algorithm.
-   [Robust Principal Component Analysis](https://github.com/Leon-LCC/RobustPCA-Python) (Page 4)
    -   A classic foreground-background separation algorithm.

---

# 2DCV Python Implementation

## I. Harris Corner Detector

### Introduction

-   [Harris Corner Detection](https://en.wikipedia.org/wiki/Harris_corner_detector) is used to detect corners in an image, which is proposed by Chris Harris and Mike Stephens in 1988.

-   The algorithm consists of the following steps:

    1. Compute image gradients

    $$I_x = \frac{\partial I}{\partial x} = \begin{bmatrix} 1 & 0 & -1 \end{bmatrix} * I, \quad I_y = \frac{\partial I}{\partial y} = \begin{bmatrix} 1 \\ 0 \\ -1 \end{bmatrix} * I$$

    2. Compute the second moment matrix

    $$M = \begin{bmatrix} \sum_{x,y} w(x,y)I_x^2 & \sum_{x,y} w(x,y)I_xI_y \\ \sum_{x,y} w(x,y)I_xI_y & \sum_{x,y} w(x,y)I_y^2 \end{bmatrix}$$

    3. Compute the response of the detector

    $$R \approx \frac{det(M)}{trace(M)} = \frac{S_{xx}S_{yy}-S_{xy}^2}{S_{xx}+S_{yy}}$$

    4. Threshold the response

    $$R = \begin{cases} R, & \text{if } R > threshold \\ 0, & \text{otherwise} \end{cases}$$

    5. Non-maximum suppression

    $$\text{Corner} = \{ (x,y) | R[x][y] \text{ is local maximum} \}$$

### Implementation

-   The first three steps are implemented in the function detect_harris_corners as follows.

    ```python
     def detect_harris_corners(self, img):
        # Smooth the image by Gaussian kernel
        img = cv2.GaussianBlur(img, (3,3), 1.5)

        # Step 1: Calculate Ix, Iy (1st derivative of image along x and y axis)
        Ix = cv2.filter2D(img, -1, np.array([1., 0., -1.]).reshape(1, 3))
        Iy = cv2.filter2D(img, -1, np.array([[1.], [0.], [-1.]]))

        # Step 2: Compute Sxx, Sxy, Syy (weighted summation of the 2nd moment matrix in neighbor pixels)
        # Compute Ixx, Ixy, Iyy (Ixx = Ix*Ix, ...)
        Ixx = np.multiply(Ix, Ix)
        Ixy = np.multiply(Ix, Iy)
        Iyy = np.multiply(Iy, Iy)
        # Compute Sxx, Sxy, Syy (weighted summation of Ixx, Ixy, Iyy in neighbor pixels)
        Sxx = cv2.GaussianBlur(Ixx, (3,3), 1.)
        Sxy = cv2.GaussianBlur(Ixy, (3,3), 1.)
        Syy = cv2.GaussianBlur(Iyy, (3,3), 1.)

        # Step 3: Compute the response of the detector
        # Compute the det and trace of matrix M (M = [[Sxx, Sxy], [Sxy, Syy]])
        det = np.multiply(Sxx, Syy) - np.multiply(Sxy, Sxy)
        trace = Sxx + Syy
        # Compute the response of the detector by det/(trace+1e-12)
        response = np.divide(det, trace+1e-12)

        return response
    ```

-   The last two steps are implemented in the function post_processing as follows.

    ```python
    def post_processing(self, response):
        # Step 4: Thresholding
        response = np.where(response>self.threshold, response, 0)

        # Step 5: Find local maximum
        padding_img = np.pad(response, (2, ), constant_values=(0))
        local_max = list()
        for i in range(response.shape[0]):
            for j in range(response.shape[1]):
                kernel = padding_img[i:i+5, j:j+5].reshape(-1)
                kernel[12] = -99999

                corner = True
                for x in range(25):
                    if response[i,j] <= kernel[x]:
                        corner = False
                        break

                if corner:
                    local_max.append([i,j])

        return local_max
    ```

### Examples

-   Some visual results are shown below. The detected corners are marked with red dots.
    -   Lenna.png
        -   Original Image
            ![Lenna](https://github.com/Leon-LCC/2DCV-Implementation/blob/main/Harris_Corner_Detector/data/Lenna.png?raw=true)
        -   Detected Corners
            ![Lenna_corner](https://github.com/Leon-LCC/2DCV-Implementation/blob/main/Harris_Corner_Detector/result/Lenna_corner.png?raw=true)
    -   chessboard.png
        -   Original Image
            ![chessboard](https://github.com/Leon-LCC/2DCV-Implementation/blob/main/Harris_Corner_Detector/data/chessboard.png?raw=true)
        -   Detected Corners
            ![chessboard_corner](https://github.com/Leon-LCC/2DCV-Implementation/blob/main/Harris_Corner_Detector/result/chessboard_corner.png?raw=true)

---

# 2DCV Python Implementation

## II. Joint Bilateral Filter

### Introduction

-   [Joint Bilateral Filter](https://hhoppe.com/flash.pdf), proposed by Petschnigg _et al._, is based on the [bilateral filter](https://en.wikipedia.org/wiki/Bilateral_filter) and was originally used for flash/no-flash denoising. For more details, please refer to the paper:

[:link:](https://hhoppe.com/flash.pdf) *Petschnigg et al., *Digital Photography with Flash and No-Flash Image Pairs*, in ACM Transactions on Graphics, 2004.*
&ensp;

-   The joint bilateral filter can also be used for edge-preserving smoothing and detail enhancement.
-   The joint bilateral filter is defined as follows.

    $$\text{J}(p) = \frac{1}{W_p}\sum_{q\in\Omega_p}G_{\sigma_s}(\|p-q\|)G_{\sigma_r}(\|I_p-I_q\|)I_q$$

    where $G_{\sigma_s}$ and $G_{\sigma_r}$ are the spatial kernel and the range kernel, respectively.

    -   Spatial kernel

        $$G_{\sigma_s}(\|p-q\|) = \frac{1}{2\pi\sigma_s^2}\exp\left(-\frac{\|p-q\|^2}{2\sigma_s^2}\right)$$

    -   Range kernel

        $$G_{\sigma_r}(\|I_p-I_q\|) = \frac{1}{2\pi\sigma_r^2}\exp\left(-\frac{\|I_p-I_q\|^2}{2\sigma_r^2}\right)$$

    -   Notation
        -   $p$: the pixel to be filtered
        -   $q$: the neighbor pixel of $p$
        -   $\Omega_p$: the spatial window centered at $p$
        -   $Ip$: the intensity of $p$ in the guidance image
        -   $Iq$: the intensity of $q$ in the guidance image
        -   $W_p$: the normalization factor

### Implementation

-   The implementation of the joint bilateral filter is shown below.

    ```python
    class Joint_bilateral_filter(object):
        def __init__(self, sigma_s, sigma_r):
            self.sigma_r = sigma_r
            self.sigma_s = sigma_s
            self.wndw_size = 6*sigma_s+1
            self.pad_w = 3*sigma_s

            size = self.wndw_size//2
            x, y = np.mgrid[-size:size+1, -size:size+1]
            self.gaussian_filter = (-(x*x+y*y)/(self.sigma_s*self.sigma_s*2)).reshape(-1,)
            self.rr = self.sigma_r*self.sigma_r*(-2)

        def joint_bilateral_filter(self, img, guidance):
            BORDER_TYPE = cv2.BORDER_REFLECT
            padded_img = cv2.copyMakeBorder(img, self.pad_w, self.pad_w, self.pad_w, self.pad_w, BORDER_TYPE)
            padded_guidance = cv2.copyMakeBorder(guidance, self.pad_w, self.pad_w, self.pad_w, self.pad_w, BORDER_TYPE)

            guidance = guidance/255
            padded_guidance = padded_guidance/255

            win_size = self.wndw_size*self.wndw_size
            x_len = img.shape[1]
            y_len = img.shape[0]

            w = np.exp(((padded_guidance[:y_len, :x_len]-guidance)**2/self.rr)+self.gaussian_filter[0])
            w_total = w

            output = np.zeros(img.shape)
            output[:,:,0] += w*padded_img[:y_len, :x_len, 0]
            output[:,:,1] += w*padded_img[:y_len, :x_len, 1]
            output[:,:,2] += w*padded_img[:y_len, :x_len, 2]

            for i in range(1, win_size):
                x = i%self.wndw_size
                y = i//self.wndw_size
                w = np.exp(((padded_guidance[y:y+y_len, x:x+x_len]-guidance)**2/self.rr)+self.gaussian_filter[i])

                w_total += w
                output[:,:,0] += w*padded_img[y:y+y_len, x:x+x_len, 0]
                output[:,:,1] += w*padded_img[y:y+y_len, x:x+x_len, 1]
                output[:,:,2] += w*padded_img[y:y+y_len, x:x+x_len, 2]

            output[:,:,0] /= w_total
            output[:,:,1] /= w_total
            output[:,:,2] /= w_total

            return np.clip(output, 0, 255).astype(np.uint8)
    ```

&ensp;

### Examples

Some visual examples are shown below. (The standard deviation of the spatial kernel is set to 2, and the standard deviation of the range kernel is set to 0.1. The guidance image is set to the original image.)

-   Lenna.png
    -   Original Image
        ![Lenna](https://github.com/Leon-LCC/2DCV-Implementation/blob/main/Joint_Bilateral_Filter/data/Lenna.png?raw=true)
    -   Filtered Image
        ![Lenna_filtered](https://github.com/Leon-LCC/2DCV-Implementation/blob/main/Joint_Bilateral_Filter/result/Lenna_filtered.png?raw=true)
-   leaf.png
    -   Original Image
        ![leaf](https://github.com/Leon-LCC/2DCV-Implementation/blob/main/Joint_Bilateral_Filter/data/leaf.png?raw=true)
    -   Filtered Image
        ![leaf_filtered](https://github.com/Leon-LCC/2DCV-Implementation/blob/main/Joint_Bilateral_Filter/result/leaf_filtered.png?raw=true)
-   color.png
    -   Original Image
        ![color](https://github.com/Leon-LCC/2DCV-Implementation/blob/main/Joint_Bilateral_Filter/data/color.png?raw=true)
    -   Filtered Image
        ![color_filtered](https://github.com/Leon-LCC/2DCV-Implementation/blob/main/Joint_Bilateral_Filter/result/color_filtered.png?raw=true)

### Application: Color-to-Gray Conversion

A linear color-to-gray conversion can be expressed in the following form.

$$
Y = \alpha R + \beta G + \gamma B
$$

$$
\alpha + \beta + \gamma = 1
$$

$$
\alpha, \beta, \gamma \geq 0
$$

where $R$, $G$, and $B$ are the red, green, and blue channels of the input color image, respectively, $Y$ is the output grayscale image, $\alpha$, $\beta$, and $\gamma$ are the weights of the three channels, respectively.

The joint bilateral filter can be utilized to determine suitable weights for each channel. The process is outlined below:

1. Convert the input color image to a grayscale image using the abovementioned equation.
2. Apply the joint bilateral filter to the input color image, using the grayscale image as the guidance image.
3. Apply the joint bilateral filter to the input color image, using itself as the guidance image.
4. Calculate the average L1 error between the two filtered images.
5. Repeat steps 1-4 for all possible weights in the weight space, and identify the weight that minimizes the average L1 error.
   &ensp;

Below, we present some visual results obtained using various weights.

-   leaf.png
    -   R:0.8, G:0.2, B:0.0, $\rightarrow$ Average L1 error: 3.131372
        ![0](/Images/JBF-0.jpg)
    -   R:0.0, G:0.0, B:1.0, $\rightarrow$ Average L1 error: 3.998800
        ![1](/Images/JBF-1.jpg)
-   color.png
    -   R:0.1, G:0.0, B:0.9, $\rightarrow$ Average L1 error: 0.170934
        ![2](/Images/JBF-2.jpg)
    -   R:0.2, G:0.8, B:0.0, $\rightarrow$ Average L1 error: 0.413212
        ![3](/Images/JBF-3.jpg)

As evidenced by the grayscale images above, those with lower errors demonstrate a heightened clarity in their overall contours and a greater contrast between light and dark regions. Conversely, the images with higher errors exhibit diminished clarity, less defined contours, and a more even brightness level.

---

# 2DCV Python Implementation

## III. Robust Principal Component Analysis

[Robust Principal Component Analysis](https://en.wikipedia.org/wiki/Robust_principal_component_analysis) (RPCA) is used to separate a given data matrix into two distinct matrices: one representing the smooth component, and the other capturing the sparse component.

### Definition

Suppose a noisy matrix, denoted as $D\in R^{h\times w}$, can be divided into two components: a clean part represented by a low-rank matrix $A$, and a noisy part captured by a sparse matrix $E$. The problem of RPCA is to recover the low-rank matrix $A$ and the sparse matrix $E$ from the noisy matrix $D$. The optimization problem can be formulated as follows.

$$
\min_{A,E} \quad \lVert A \rVert_* + \lambda \lVert E \rVert_1 \quad \text{s.t.} \quad D = A + E
$$

### Exact ALM Method

To address the optimization problem, we can employ the Augmented Lagrange Multipliers (ALM) method as outlined in [1]. For a comprehensive explanation of the algorithm, please refer to the original article. Figure 2 illustrates the robust PCA via the exact ALM method.

&ensp;
![Figure 2](/Images/RPCA-2.jpg)
&ensp;

The corresponding Python implementation is shown below.

```python
# Robust PCA via the Exact ALM Method
def RPCA(D, l, mu, rho):
    signD = np.sign(D)
    Y = signD / np.maximum(np.linalg.norm(signD, ord=2, axis=(0,1)), 1/l*np.linalg.norm(signD, ord=np.inf, axis=(0,1)))
    A = np.zeros(D.shape)
    E = np.zeros(D.shape)
    A_prev = np.zeros(D.shape)
    E_prev = np.zeros(D.shape)

    for k in range(500):
        # Solve A and E
        for j in range(500):
            # Solve A
            U, S, Vh = np.linalg.svd(D - E + Y/mu, full_matrices=False)
            A = U @ np.diag(np.where(S > 1/mu, S - 1/mu, np.where(S < -1/mu, S + 1/mu, 0))) @ Vh
            # Solve E
            Q = D - A + Y/mu
            E = np.where(Q > l/mu, Q - l/mu, np.where(Q < -l/mu, Q + l/mu, 0))
            # Convergence condition
            if np.linalg.norm(A - A_prev, ord='fro') / np.linalg.norm(D, ord='fro') < 1e-5
              and np.linalg.norm(E - E_prev, ord='fro') / np.linalg.norm(D, ord='fro') < 1e-5:
                break
            A_prev = A
            E_prev = E

        # Update Y and mu
        Y = Y + mu*(D - A - E)
        mu = rho*mu

        # Convergence condition
        if np.linalg.norm(D - A - E, ord='fro') / np.linalg.norm(D, ord='fro') < 1e-7:
            break

    return A, E
```

&ensp;

### Inexact ALM Method

Alternatively, we can employ the inexact version of the ALM method by removing the inner loop present in the exact version. According to [1], it has been observed that $A$ and $E$ can still converge to an optimal solution without precisely solving the subproblem within the inner loop. Just a single step is sufficient for convergence. The detailed proof can be found in the original article. Figure 3 illustrates the algorithm.

&ensp;
![Figure 3](/Images/RPCA-3.jpg)
&ensp;

The corresponding Python implementation is shown below.

```python
# Robust PCA via the Inexact ALM Method
def RPCA_inexact(D, l, mu, rho):
    Y = D / np.maximum(np.linalg.norm(D, ord=2, axis=(0,1)), 1/l*np.linalg.norm(D, ord=np.inf, axis=(0,1)))
    A = np.zeros(D.shape)
    E = np.zeros(D.shape)
    A_prev = np.zeros(D.shape)
    E_prev = np.zeros(D.shape)
    for k in range(500):
        # Solve A
        U, S, Vh = np.linalg.svd(D - E + Y/mu, full_matrices=False)
        A = U @ np.diag(np.where(S > 1/mu, S - 1/mu, np.where(S < -1/mu, S + 1/mu, 0))) @ Vh
        # Solve E
        Q = D - A + Y/mu
        E = np.where(Q > l/mu, Q - l/mu, np.where(Q < -l/mu, Q + l/mu, 0))
        # Update Y and mu
        Y = Y + mu*(D - A - E)
        mu = rho*mu
        # Convergence condition
        if np.linalg.norm(D - A - E, ord='fro') / np.linalg.norm(D, ord='fro') < 1e-7:
            break

    return A, E
```

### Reference

[1] Zhouchen Lin, Minming Chen, and Yi Ma, The Augmented Lagrange Multiplier
Method for Exact Recovery of Corrupted Low-Rank Matrices, arXiv:1009.5055, 2010.

### Note

The above content is a brief introduction to the RPCA algorithm. For more details on its application, please refer to my [report](https://github.com/Leon-LCC/RobustPCA-Python/blob/main/Applications.pdf).
