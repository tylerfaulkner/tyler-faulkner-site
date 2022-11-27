import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';
import Image from "next/image";
import React, { useState } from 'react';
import { consumers } from 'stream';
import { dateToText } from '../processors';
import Blog from '../blog';

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
            <div className='section-header'>Projects</div>
            <div className='text'>
                Here you can find many of the projects I have worked on over the years.
                While there may be some explanation on how I achieved the final results,
                these are primarilary high level overviews discussing the final outcomes and results.
                The topics of these projects will range from AI and machine learning, to game development, to 
                web development.
            </div>
            <Blog items={items}/>
        </div>
    )
}