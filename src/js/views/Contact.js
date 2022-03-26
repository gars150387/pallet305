import React from "react";
import { ContactForm } from "../component/ContactForm";

import '../../styles/contact.css'

export const Contact = () => {
    return (
        <div className="form">
            {/* <h3 className="text-center mt-4">Contact</h3> */}
            <h3 id="contact-text" className="">For quotation and questions, please contact us.</h3>
            <ContactForm />
        </div>
    )
}