import Image from "next/image"
import pic_of_me from "./images/pic_of_me.jpg"
import Linkedin_Logo from "./images/Linkedin_Logo.jpg"
import Github_Logo from "./images/Github_Logo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Main() {
    return(
                <div class="col pt-3" align="center" style={{height:"100%", position:"fixed"}}>
                    <div class="row-sm-1 w-50">
                        <Image src={pic_of_me} class="rounded" />
                    </div>
                    <div class="p-2">
                        <h1>Tyler Faulkner</h1>
                    </div>
                    <div class="w-75">
                        <p class="text-sm-start">I am a computer science major with a minor in mathematics
                         from the Milwaukee School of Enginerring. At MSOE, I learned to use 
                         machine learning and artificial intelligence to solve data science problems. 
                         Recently, I interned at Cognex where I worked as a devloper on the Sphinx scrum team. 
                         At Cognex, I had the oppurtunity to streamline automated testing procedures, improve the user experience 
                         in UI applications, and implemented new functionality for embedded systems. </p>
                    </div>
                    <div class="row gx-4 justify-content-center m-0 w-25">
                        <div class="col">
                            <a href="https://www.linkedin.com/in/tyler-faulkner/">
                                <Image src={Linkedin_Logo} />
                            </a>
                        </div>
                        <div class="col">
                            <a href="https://github.com/tylerfaulkner">
                                <Image src={Github_Logo} />
                            </a>
                        </div>
                    </div>
                </div>
    )
}