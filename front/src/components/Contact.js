import React from "react";
import '../contact.css';
const Contact = () => {
    return (
        <div className="containercontact">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row" id="Contact">
            <p className="text-center">Contact Us</p>
          </div>
          <div className="row">
            <div >
              <form action="" method="post">
                <div className="form-group">
                  <label htmlFor="name">NAME</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Nom et Prénom" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">EMAIL</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Adresse Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">MESSAGE</label>
                  <textarea className="form-control" id="message" name="message" placeholder="Votre message ici ..."></textarea>
                </div>
                <button type="submit" className="btn">Send the Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
    }
export default Contact;