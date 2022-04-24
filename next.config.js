// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: []
    }
});

module.exports = withMDX({
    pageExtensions: ['tsx', 'mdx']
});
