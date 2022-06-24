import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkCodeTitles from 'remark-code-titles';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import remarkTextr from 'remark-textr';
import apostrophes from 'typographic-apostrophes';
import quotes from 'typographic-quotes';
import apostrophesForPlurals from 'typographic-apostrophes-for-possessive-plurals';
import arrows from 'typographic-arrows';
import copyright from 'typographic-copyright';
import ellipses from 'typographic-ellipses';
import emDashes from 'typographic-em-dashes';
import enDashes from 'typographic-en-dashes';
import mathSymbols from 'typographic-math-symbols';
import registeredTrademark from 'typographic-registered-trademark';
import singleSpaces from 'typographic-single-spaces';
import trademark from 'typographic-trademark';
import imageSize from 'rehype-img-size';
import toc, { ListItemNode, HtmlElementNode } from '@jsdevtools/rehype-toc';
import remarkUnwrapImages from 'remark-unwrap-images';

const customizeTOCItem = (tocItem: ListItemNode, heading: HtmlElementNode) => {
    if (
        heading.children?.some(
            (child) =>
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (child as any)?.value === 'References'
        )
    ) {
        return false;
    }

    return tocItem;
};

const serializeContent = async (
    content: string
): Promise<MDXRemoteSerializeResult> => {
    return await serialize(content, {
        mdxOptions: {
            remarkPlugins: [
                remarkUnwrapImages,
                remarkCodeTitles,
                [
                    remarkTextr,
                    {
                        plugins: [
                            apostrophes,
                            quotes,
                            apostrophesForPlurals,
                            arrows,
                            copyright,
                            ellipses,
                            emDashes,
                            enDashes,
                            mathSymbols,
                            registeredTrademark,
                            singleSpaces,
                            trademark
                        ]
                    }
                ]
            ],
            rehypePlugins: [
                mdxPrism,
                rehypeSlug,
                [
                    toc,
                    {
                        customizeTOCItem
                    }
                ],
                rehypeAutolinkHeadings,
                [imageSize, { dir: 'public' }]
            ]
        }
    });
};

export default serializeContent;
