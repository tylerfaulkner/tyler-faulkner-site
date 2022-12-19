import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function TopBar() {
    const [isMobile, setIsMobile] = useState(null);
    const [currentPage, setCurrentPage] = useState('/');
    useEffect(()=> {
        setIsMobile(window.innerWidth < 600);
        setCurrentPage(window.location.pathname);
        window.addEventListener('resize', ()=>{setIsMobile(window.innerWidth < 600)})
    })
    const router = useRouter();

    function onChange(selector){
        console.log(selector)
        router.push(selector.target.value);
    }
    return (
        <div className="topnav">
            <text className="text-black">tyler faulkner</text>
            {isMobile==null ? <div></div> : !isMobile ? <div className="elements">
                <Link href={"/"} className="topelement">Home</Link>
                <Link href={"/projects"} className="topelement">Projects</Link>
                <Link href={"/tutorials"} className="topelement">Tutorials</Link>
                <Link href={"/contact"} className="topelement">Contact</Link>
            </div>  : 
            <select defaultValue={currentPage} onChange={onChange} className='menu-selector'>               
              <option value="/">Home</option> 
              <option value="/projects">Projects</option> 
              <option value="/tutorials">Tutorials</option> 
              <option value="/contact">Contact</option> 
            </select> 
            }
        </div>
    );
}