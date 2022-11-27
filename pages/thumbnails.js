import Link from 'next/link';
import Image from "next/image";
import { dateToText } from './processors';
import React, { useState } from 'react';

const orderFunctions = {
    newest: function(a,b){return a.meta.date.year - b.meta.date.year},
    oldest: function(a,b){return b.meta.date.year - a.meta.date.year},
    shortest: function(a,b){return a.meta.readTime - b.meta.readTime},
    longest: function(a,b){return b.meta.readTime - a.meta.readTime}
}

export default function Thumbnails(props) {
    const {items, sort} = props

    let divs = items.sort(orderFunctions[sort]).map(item => {
        return(
        <Link href={`./projects/${item.id}`}>
            <div className='card'>
                <div className='thumbnail'><Image src={item.meta.image} fill/></div>
                <div className='card-content'>
                    <div className='card-title'>{item.meta.title}</div>
                    <div className='description'>{item.meta.description}</div>
                    <div className='card-info'>
                        <div className='col'>{dateToText(item.meta.date)}</div>
                        <div className='col'>Reading Time: {item.meta.readTime}</div>
                    </div>
                </div>
            </div>
        </Link>
        );
    })

    return(
        <div className='grid'>
            {divs}
        </div>
    )
}