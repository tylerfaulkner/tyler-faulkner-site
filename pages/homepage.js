import me_cropped from "./images/me_cropped.jpeg"
import Image from "next/image"
import project_pic from "./images/projects.PNG"
import tutorials from "./images/tutorials.png"
import github from "./images/github.png"
import linkedin from "./images/linkedIn.png"
import youtube from "./images/youtube_logo.png"
import Link from "next/link"

export default function Homepage() {
    const sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 100vw"
    return (
        <div>
            <div className="overview center">
                <div className="section">
                    <div className="text-area">
                        <div className="header">
                            <div className="fit-content-width">
                                <div className="typed-out">
                                    Hi, I'm Tyler
                                </div>
                            </div>
                        </div>
                        <div className="text fade-in">
                        a programmer with experience in machine learning, embedded systems, and automated testing architectures.
                        I am completing my B.S. in Computer Science with a Minor in Mathematics at the Milwaukee School of Engineering.
                        My major focuses on the creation of machine learning and artificial intelligence models for large scale data analysis and predictions. Over the Summer in 2022, I interned at
                        Cognex which allowed me to apply my skills by creating thorough tests for new camera systems and creating new features in user applications.
                        </div>
                    </div>
                    <div id='pic-of-me' className="image-div fade-in-pic">
                        <Image src={me_cropped} fill={true} alt="Image of Tyler" sizes={sizes}/>
                    </div>
                </div>
            </div>
            <div className="projects center">
                <div className="section fade-in">
                    <div className="col image-div">
                        <Image src={project_pic} fill={true} alt="Image of an N-Body Simulation Render" sizes={sizes}/>
                    </div>
                    <div className="col text-area">
                        <div className="header">
                            <Link href={'/projects'} className='no-decoration'>
                                <div className="section-header">
                                    Projects
                                </div>
                            </Link>
                        </div>
                        <div className="text fade-in">
                            Explore high-level overviews of some of my favorite personal and school projects.
                            The image to the left is from a rendering of my N-Body simulation project for my GPU Programming course.
                            Click on the image to read about my N-Body Simulation project or click the header above to see all of my projects.
                        </div>
                    </div>
                </div>
            </div>
            <div className="tutorials center">
                <div className="section fade-in">
                    <div className="col text-area">
                        <div className="header">
                            <Link href='https://www.youtube.com/channel/UC4KtZoq7MzRdJ2EtWExAK1w' className="no-decoration">
                                <div className="section-header">
                                    YouTube
                                </div>
                            </Link>
                        </div>
                        <div className="text fade-in">
                            One of the primary ways I learn new technologies is through guides I find online. 
                            I want to contirbute back to this pool of online knowledge by creating YouTube videos on my own expertise and skills. 
                            Tutorial topics will range from game development, to data analysis, to CUDA programming, and more.
                            Click on the image or the header to check out my channel.
                        </div>
                    </div>
                    <div className="col image-div">
                        <Link href='https://www.youtube.com/channel/UC4KtZoq7MzRdJ2EtWExAK1w' className="no-decoration" target='_blank'>
                            <Image src={youtube} fill={true} alt="Image of random code" sizes={sizes}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="about center">
                <div className="section about fade-in">
                    <div className="col about-container">
                        <Link href={'/contact'} className='no-decoration'>
                            <div className="section-header">
                                Reach Out
                            </div>
                        </Link>
                        <div className="text text-about">
                            I would love to hear from you! If you have a professional inquiry please reach out on LinkedIn. If you want to explore 
                            the source code of any of my projects, feel free to explore my github profile.
                            If you have any tutorial suggestion or comments please send me an email by clicking the header above.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}