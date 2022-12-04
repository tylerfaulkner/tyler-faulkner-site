import Image from "next/image"
import pic_of_me from "./images/pic_of_me.jpg"
import LinkedinLogo from "./images/Linkedin_Logo.jpg"
import GithubLogo from "./images/Github_Logo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Main() {
    return(
                <div className="col pt-3" align="center" style={{height:"100%", position:"fixed"}}>
                    <div className="row-sm-1 w-50">
                        <Image src={pic_of_me} className="rounded" />
                    </div>
                    <div className="p-2">
                        <h1>Tyler Faulkner</h1>
                    </div>
                    <div className="w-75">
                        <p className="text-sm-start">I am a computer science major with a minor in mathematics
                         from the Milwaukee School of Enginerring. At MSOE, I learned to use 
                         machine learning and artificial intelligence to solve data science problems. 
                         Recently, I interned at Cognex where I worked as a devloper on the Sphinx scrum team. 
                         At Cognex, I had the oppurtunity to streamline automated testing procedures, improve the user experience 
                         in UI applications, and implemented new functionality for embedded systems. </p>
                    </div>
                    <div className="row gx-1 justify-content-center m-5 w-75">
                        <div className="col">
                            <div href="https://www.linkedin.com/in/tyler-faulkner/" style={{height:'100px', width:'350px', position: 'relative'}}>
                                <Image src={LinkedinLogo} fill/>
                            </div>
                        </div>
                        <div className="col">
                            <div href="https://github.com/tylerfaulkner" style={{height:'100px', width:'350px', position: 'relative'}}>
                                <Image src={GithubLogo} fill/>
                            </div>
                        </div>
                    </div>
                </div>
    )
}