import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useRouter } from 'next/router'

const SPRITES = [
    {
        url: '/Images/taiwan.png',
        link: '/profile',
        description: 'Profile',
        home: new THREE.Vector3(-3.5, 1.8, 0),
    },
    {
        url: '/Images/coffee.jpg',
        link: '/work',
        description: 'Work',
        home: new THREE.Vector3(-0.5, -1.8, 0),
    },
    {
        url: '/Images/kyoto.png',
        link: '/post',
        description: 'Post',
        home: new THREE.Vector3(3.5, 1.3, 0),
    },
]

function FloatingSprite({ url, link, home, description }) {
    const router = useRouter()
    const ref = useRef()
    const tex = useMemo(() => new THREE.TextureLoader().load(url), [url])

    const attractionRadius = 1.5
    const maxPull = 0.04
    const returnSpeed = 0.04
    const spin = 0.003

    const homeVec = useMemo(() => home.clone(), [home])
    const { camera, pointer } = useThree()

    useFrame(() => {
        if (!ref.current) return

        const planeZ = 0
        const pWorld = new THREE.Vector3(pointer.x, pointer.y, 0).unproject(
            camera
        )
        const dir = pWorld.clone().sub(camera.position).normalize()
        const distance = (planeZ - camera.position.z) / dir.z
        pWorld.copy(camera.position).add(dir.multiplyScalar(distance))

        const toPointer = pWorld.clone().sub(ref.current.position)
        const d = toPointer.length()

        if (d < attractionRadius) {
            const strength = (1 - d / attractionRadius) * maxPull
            ref.current.position.add(toPointer.multiplyScalar(strength))
        } else {
            ref.current.position.lerp(homeVec, returnSpeed)
        }

        const cam = camera
        const sprite = ref.current
        const halfH =
            (cam.position.z - 0) *
            Math.tan(THREE.MathUtils.degToRad(cam.fov * 0.5))
        const halfW = halfH * cam.aspect

        const xLimit = halfW - sprite.scale.x * 0.5
        const yLimit = halfH - sprite.scale.y * 0.5

        sprite.position.x = THREE.MathUtils.clamp(
            sprite.position.x,
            -xLimit,
            xLimit
        )
        sprite.position.y = THREE.MathUtils.clamp(
            sprite.position.y,
            -yLimit,
            yLimit
        )

        const maxHomeRadius = 1.2
        const offset = ref.current.position.clone().sub(homeVec)
        if (offset.length() > maxHomeRadius) {
            offset.setLength(maxHomeRadius)
            ref.current.position.copy(homeVec.clone().add(offset))
        }
        ref.current.rotation.z += spin
    })

    const handlePointerDown = () => router.push(link)

    return (
        <sprite
            ref={ref}
            position={home}
            scale={[3, 9 / 5, 1]}
            onPointerDown={handlePointerDown}
            onPointerEnter={() => {
                ref.current.material.opacity = 0.9
            }}
            onPointerLeave={() => {
                ref.current.material.opacity = 0.8
            }}
        >
            <spriteMaterial map={tex} transparent opacity={0.8} />
        </sprite>
    )
}

export default function FloatingMenu() {
    return (
        <Canvas
            camera={{ fov: 60, position: [0, 0, 5] }}
            style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'auto',
            }}
        >
            {SPRITES.map((cfg) => (
                <FloatingSprite key={cfg.link} {...cfg} />
            ))}
        </Canvas>
    )
}
