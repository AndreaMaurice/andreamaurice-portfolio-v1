import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TbH4 } from "react-icons/tb";
import { IconContext } from "react-icons";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tb8c55p",
        "template_2ahqswa",
        form.current,
        "TYoYmIDca7-R6SyNv"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("You have successfully sent your message!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div
      className="h-full sm:mx-48 grid grid-cols-1 text-center place-content-center text-slate-900"
      id="contact-me"
    >
      <h4 className="sm:text-5xl text-2xl text-slate-900 mb-10 font-bold">
        Let's get in touch!
      </h4>
      <form
        ref={form}
        onSubmit={(e) => {
          sendEmail(e.target.value);
        }}
        className="grid grid-cols-1 sm:mx-auto sm:w-96"
      >
        {/* <label>What's your name?</label> */}
        <input
          type="text"
          name="user_name"
          className="h-10 px-4 bg-slate-100 mb-3 mt-1 placeholder:text-slate-600"
          placeholder="Name"
        />
        {/* <label>What's your email address?</label> */}
        <input
          type="email"
          name="user_email"
          className="h-10 px-4 bg-slate-100 mb-3 mt-1 placeholder:text-slate-600"
          placeholder="Email"
        />
        {/* <label>Email Subject</label> */}
        <input
          type="text"
          name="subject"
          className="h-10 px-4 bg-slate-100 mb-3 mt-1 placeholder:text-slate-600"
          placeholder="Subject"
        />
        {/* <label>Message</label> */}
        <textarea
          name="message"
          className="h-24 px-4 py-2 bg-slate-100 mb-5 mt-1 placeholder:text-slate-600"
          placeholder="Message"
        />
        <input
          type="submit"
          value="Send"
          className="border-2 border-slate-900 text-slate-900 w-32 mx-auto h-10 hover:bg-orange-400 hover:border-orange-400 hover:text-slate-50 text-semibold"
        />
      </form>
    </div>
  );
};

export default Contact;
