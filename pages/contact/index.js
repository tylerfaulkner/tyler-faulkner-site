import  React from 'react';
import emailjs from '@emailjs/browser';
import github from "../images/github.png"
import linkedin from "../images/linkedIn.png"
import Image from "next/image"
import Link from "next/link"

export default function Contact() {

    const form = React.useRef();
    const sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 100vw"

    const validateEmail = (text) => {
        if (text.indexOf('@') > -1 && text.indexOf('.') > -1){
            return true;
        } else {
            return false;
        }
    }

    const sendEmail = (e) => {
        e.preventDefault()
        let email = form.current.email.value;
        console.log('Checking image');
        if (validateEmail(email)){
            if(form.current.email.className.indexOf(" error") > -1){
                console.log("Removing error class");
                form.current.email.className -= " error";
            }
            let contents = {
                name: form.current.name.value,
                email: form.current.email.value,
                message: form.current.message.value,
            }
            emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, contents, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                alert('Email Sent Succesfully!')
                form.current.email.value = ""
                form.current.name.value = ""
                form.current.message.value = ""
                console.log(result.text);
            }, (error) => {
                alert('Error occured please try again.')
                console.log(error.text);
            });
        } else {
            if(form.current.email.className.indexOf("error") == -1){
                console.log("Removing error class");
                form.current.email.className += " error";
            }
            alert("Error: Invalid Email");
        }
    };

    
    return (
        <div className="">
            <title>Tyler's Contact Info</title>
            <div className='contact'>
                <div className='small-side'>
                    <div className='section-header'>Github</div>
                    <div className='text'>
                        The source code for nearly all of my projects is available on my Github profile.
                        You are welcome to use all of my code it should all be under the MIT license.
                        Also, feel free to fix any bugs you might find.
                    </div>
                </div>
                <div className="large-side">
                    <div className='flex'>
                        <Link href='https://github.com/tylerfaulkner'>
                            <div className='img-contact img-about'>
                                <Image src={github} fill alt="Github Logo" sizes={sizes}/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='contact'>
                <div className='small-side'>
                    <div className='section-header'>LinkedIn</div>
                    <div className='text'>
                        Reach out to me on LinkedIn for any professional inquiries.
                        Feel free to connect with me also.
                    </div>
                </div>
                <div className="large-side">
                    <div className='flex'>
                        <Link href='https://www.linkedin.com/in/tyler-faulkner/'>
                            <div className='img-contact img-about'>
                                <Image src={linkedin} layout="fill" alt="LinkedIn Logo" sizes={sizes}/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='contact'>
                    <div className='small-side'>
                        <div className='section-header'>Email Me</div>
                        <div className='text'>
                            I would love to hear directly from you! Please use the form to the
                            right to send an email to me. Feel free to ask me anything or to just send a comment.
                            I'll respond to you as soon as I can.
                        </div>
                    </div>
                    <div className='large-side'>
                        <form ref={form} onSubmit={sendEmail} className="email-form">
                            <div className='form-info col-basic'>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name"/>
                            </div>
                            <div className='form-info col-basic'>
                                <label htmlFor="email">Email:</label>
                                <input type="text" id="email" name="email"/><br/>
                            </div> <br/>
                            <label htmlFor="message">Message:</label><br/>
                            <textarea id="message" name="message" rows="10" cols="20"/><br/>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
        </div>
    )
}