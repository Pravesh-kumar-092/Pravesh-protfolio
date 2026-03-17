import React, { useState } from 'react';
import ContactInfoCard from '../Components/ContactInfoCard';
import { IoMdMail } from 'react-icons/io';
import { ABOUT_ME } from '../Utils/data';
import { MdOutlineWeb } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_936mkjf';
    const templateId = 'template_20igmyt';
    const publicKey = 'ZzT_l5lTRFYrOj6Li';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Pravesh Kumar',
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error("Error sending email", error);
      });
  };

  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>
          <p className="text-sm text-center mt-4 leading-6">
            A versatile developer with hands-on expertise in modern technologies, tools, and frameworks, dedicated to building efficient, scalable, and user-centric solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />
          </div>

          <h5 className="md:hidden section-title text-lg font-medium mt-4 pb-5">Contact Form</h5>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-box"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-box"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="input-box"
              autoComplete="off"
              required
            />
            <button type="submit" className="action-btn btn-scale-anim">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
