import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';
import Image from "next/image";
import React, { useState } from 'react';
import { consumers } from 'stream';
import { dateToText } from '../processors';
import Blog from '../blog';
import Video from '../video';

export async function getStaticProps () {
    const root = path.join (process.cwd (), 'pages/tutorials');
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
            <div className='section-header'>Tutorials</div>
            <div className='text'>
                Here you can find the programming and game development tutorials I have created. 
                These tutorials will include step by step instructions and thorough code analysis to ensure
                clarity and understanding of the code. Some of the tutorials will have an 
                accompanying video on my YouTube channel for those who prefer visual instructions.
            </div>
            <Blog items={items} dir={'tutorials'}/>
        </div>
    )
}