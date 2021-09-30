import "./contact.css";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact()
{
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_m2h0lrz', 'template_qo4lha2', form.current, 'user_aTOPHFcgl63hk1dF6Oo3y')
          .then((result) => {
            alert("Message Sent, We will get back to you shortly", result.text);
             // console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        
        <div className="newUser">
       <img className = "imges" src = "images/contactusimg.jpg" alt= "Chiller Plant" width="450" height="350" style={{backgroundSize:"cover"}}></img>
        
        <form ref={form}  onSubmit={sendEmail}>
            
        <div className="newUserItem">
      <label>Name</label>
      <input type="text" name="user_name" placeholder="abc" required />
      <div className="newUserItem">
      <label>Email</label>
      <input type="email" name="user_email" placeholder="abc@gmail.com" required/>
      <div className="newUserItem">
      <label>Message</label>
      <textarea name="message" placeholder="XYZ" required/>
      <div className="newUserItem">
          <div classname = "newUserButton">
<button type="submit" style={{backgroundColor:"#E0FFFF", cursor:"pointer", padding: "10px 25px", marginLeft: "320px"}}>SEND</button>
      </div>
      </div>
      </div>
      </div>
      </div>

    </form>
    </div>
    
    
    
    );
}
/*


          <label>Machine Name</label>
          <input type="text" placeholder="Motor" />

          <div className="newUserItem">
          <label>Temperature(in degrees)</label>
          <input type="text" placeholder="90" />*/