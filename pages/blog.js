import Link from 'next/link';
import Image from "next/image";
import { dateToText } from './processors';
import Thumbnails from './thumbnails';
import React, { useCallback, useState } from 'react';

export default function Blog(props) {
    const { items, dir } = props
    const [sort, setSort] = useState('newest')
    const reorder = useCallback(()=>{
        console.log('Sorting...')
        let selection = document.getElementById("order");
        setSort(selection.value)
    }, []);
    return(
        <div>
            <div style={{width:'215px'}}>
                <div className='view-options flex'>
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
            </div>
            <Thumbnails items={items} sort={sort} dir={dir}/>
        </div>
    )
}