import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';

function sortDate(a, b) {
    console.log('Sorting by date...')
    let yearA = a.meta.date.year;
    let yearB = b.meta.date.year;

    if(yearA != yearB){
        return yearA-yearB;
    }

    let monthA = a.meta.date.month;
    let monthB = a.meta.date.month;

    if(monthA != monthB){
        return monthA-monthB;
    }

    return a.meta.date.day - b.meta.date.day;
}

const orderFunctions = {
    newest: function(a,b){return sortDate(b, a)},
    oldest: function(a,b){return sortDate(a, b)},
    shortest: function(a,b){return a.meta.readTime - b.meta.readTime},
    longest: function(a,b){return b.meta.readTime - a.meta.readTime}
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Septmeber',
    'October',
    'Novemeber',
    'December',
]

function dateToText(date){
    return `${months[date.month-1]} ${date.day}, ${date.year}`;
}

export default function Thumbnails(props) {
    const {items, sort, dir} = props

    let divs = items.sort(orderFunctions[sort]).map(item => {
        return(
        <Link key={item.meta.title} href={`./${dir}/${item.id}`} className='no-decoration'>
            <div className='card'>
                <div className='thumbnail'><Image src={item.meta.image} alt={`${item.meta.title} image`}fill/></div>
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