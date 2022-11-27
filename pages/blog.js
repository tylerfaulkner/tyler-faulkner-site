import Link from 'next/link';
import Image from "next/image";
import { dateToText } from './processors';
import Thumbnails from './thumbnails';
import React, { useState } from 'react';


const orderFunctions = {
    newest: function(a,b){return a.meta.date.year - b.meta.date.year},
    oldest: function(a,b){return b.meta.date.year - a.meta.date.year},
    shortest: function(a,b){return a.meta.readTime - b.meta.readTime},
    longest: function(a,b){return b.meta.readTime - a.meta.readTime}
}

export default function Blog(props) {
    const { items } = props
    const [sort, setSort] = useState('newest')
    function reorder(evt){
        let selection = document.getElementById("order");
        setSort(selection.value)
    }
    return(
        <div>
            <div className='view-options'>
                <div className='col'>Sort By: </div>
                <div className='col'>
                    <select id='order' onChange={reorder}>
                        <option value='newest'>Newest to Oldest</option>
                        <option value='oldest'>Oldest to Newest</option>
                        <option value='shortest'>Shortest to Longest</option>
                        <option value='longest'>Longest to Shortest</option>
                    </select>
                </div>
            </div>
            <Thumbnails items={items} sort={sort}/>
        </div>
    )
}