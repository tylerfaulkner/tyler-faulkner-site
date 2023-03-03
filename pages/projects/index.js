import fs from 'fs/promises';
import path from 'path';
import React from 'react';
import Blog from '../../components/blog';

export async function getStaticProps () {
    const root = path.join (process.cwd (), 'pages/projects');
    const listing = await fs.readdir(root);
    const mdx = listing
        .filter (item => item.endsWith ('.mdx'))

    let items = await Promise.all(mdx.map ((async item => {
            let module = await require(`./${item}`);
            let meta = module.meta
            const id = item.replace (/\.mdx$/, '');
            return {id, meta}
        })))
    return { props: { items } };
}

export default function projects({items, ...props}) {
    return (
        <div className='outergrid'>
            <title>Tyler's Projects</title>
            <div className='section-header'>Projects</div>
            <div className='text'>
                Here you can find many of the technical projects I have worked on over the years.
                These are primarily high level overviews discussing the final outcomes and results, so these posts
                are not guaranteed to include the specific details nor code of how I achieved the final product.
                The topics of these projects will range from AI and machine learning, to game development, to 
                web development, and more.
            </div>
            <Blog items={items} dir={'projects'}/>
        </div>
    )
}