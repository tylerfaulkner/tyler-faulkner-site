import Link from "next/link";

export default function TopBar() {
    return (
        <div className="topnav">
            <text className="text-black">tyler faulkner</text>
            <div className="elements">
                <Link href={"/"} className="topelement">Home</Link>
                <Link href={"/projects"} className="topelement">Projects</Link>
                <Link href={"/tutorials"} className="topelement">Tutorials</Link>
                <Link href={"/contact"} className="topelement">Contact</Link>
            </div>
        </div>
    );
}