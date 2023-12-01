


const WorkPage = ({ title, frontmatter, markdownBody }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }

    const imageSrc = frontmatter.image;

    return (
        <motion.div initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 1, type: 'easeInOut' }} style={{ position: 'relative', backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Box style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
                <Box pt='100pt' pb='5%' px='10%' w='100%'>
                    <NextLink href="/work">
                        <Button variant="solid3" size='lg' fontSize='2xl' color='white'>
                            &#8810; &#xa0; Back
                        </Button>
                    </NextLink>
                </Box>
                <Box px='20%' w='100%'>
                    <Heading as="h1" size="2xl" mb='4' mt='4' color='white'> 123 </Heading>
                </Box>
            </Box>
            <Box width='100%' w='100%'>
                {imageSrc}
            </Box>
        </motion.div>
    );
};

export default WorkPage;

export async function getStaticProps(context) {
    const { slug } = context.params;

    const config = await import(`../../data/config.json`);
    
    const content = await import(`/Markdown/${slug}.md`);
    const data = matter(content.default);

    return {
        props: {
            title: config.title,
            frontmatter: data.data,
            markdownBody: data.content,
        },
    };
}

export async function getStaticPaths() {
    const workSlugs = glob.sync('/Markdown/*.md').map(file => {
         return file.split('/')[2].replace(/ /g, '-').slice(0, -3).trim();
    });

    const paths = workSlugs.map((slug) => `/work/${slug}`);

    return {
        paths,
        fallback: false,
    };
}