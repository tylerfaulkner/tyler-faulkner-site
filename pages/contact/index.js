import  React from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {

    const form = React.useRef();

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
            console.log(form.current.name.value)
            console.log("sending email")
            console.log(process.env.NEXT_PUBLIC_SERVICE_ID)
            emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, contents, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => console.log(result));
        } else {
            if(form.current.email.className.indexOf("error") == -1){
                console.log("Removing error class");
                form.current.email.className += " error";
            }
            alert("Error: Invalid Email");
        }
    };

    
    return (
        <div className="contact">
            <div className='content'>
                <div>
                    
                </div>
                <form ref={form} onSubmit={sendEmail} className="email-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email"/><br/>
                    </div>
                    <label htmlFor="message">Message:</label><br/>
                    <textarea id="message" name="message" rows="20" cols="20"/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}