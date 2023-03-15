import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function TopBar() {
    const [isMobile, setIsMobile] = useState(null);
    const [currentPage, setCurrentPage] = useState('/');
    const [showMenu, setShowMenu] = useState(false);
    useEffect(()=> {
        setIsMobile(window.innerWidth < 600);
        setCurrentPage(window.location.pathname);
        window.addEventListener('resize', ()=>{setIsMobile(window.innerWidth < 600)})
        window.addEventListener('click', (event)=>{
            if(event.target.id != 'show nav'){
                setShowMenu(false)
            }
        })
        window.addEventListener('scroll', ()=>{
            setShowMenu(false);
        })
    })
    const router = useRouter();

    function onChange(selector){
        console.log(selector)
        router.push(selector.target.id);
    }

    function click(){
        setShowMenu(true);
    }

    return (
        <div className="topnav">
            <text className="text-black"><Link href={'/'}>tyler faulkner</Link></text>
            {isMobile==null ? <div></div> : !isMobile ? <div className="elements">
                <Link href={"/"} className="topelement">Home</Link>
                <Link href={"/Tyler Faulkner Resume 2023.pdf"} className="topelement"> Resume </Link>
                <Link href={"/projects"} className="topelement">Projects</Link>
                <Link href={"/experiments"} className="topelement">Experiments</Link>
                <Link href={"/contact"} className="topelement">Contact</Link>
            </div>  : 
            <a onClick={click}>
                <span id='show nav' className="material-symbols-outlined mr">
                menu
                </span>
            </a>
            }
            {showMenu &&
            <table className="nav-menu">
                <tbody>
                <tr onClick={onChange}>
                    <td id='/'>
                        Home
                    </td>
                </tr>
                <tr>
                <a download href='/Tyler Faulkner Resume 2023.pdf' className="no-decoration">
                    <td id='/Tyler Faulkner Resume 2023.pdf'>
                        Resume
                    </td>
                </a>
                </tr>
                <tr onClick={onChange}>
                    <td id='/projects'>
                        Projects
                    </td>
                </tr>
                <tr onClick={onChange}>
                    <td id='/contact'>
                        Contact
                    </td>
                </tr>
                </tbody>
            </table>
            }
        </div>
    );
}