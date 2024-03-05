"use client"
import React, { FormEvent, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { Slide, toast } from "react-toastify";

interface ClientData {
  clientName: string;
  clientEmail: string;
  message: string;
}

const Contact = () => {
  const initialUserData: ClientData = {
    clientName: "",
    clientEmail: "",
    message: "",
  };

  const [userData, setUserData] = useState<ClientData>({...initialUserData});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post(`/api/contact`, userData);
      console.log(res.data);
      toast.success("Email sent Successfully!", {
        position: "bottom-center",
        autoClose: 2000,
        theme: "dark",
        transition: Slide,
      });
      setUserData({...userData, ...initialUserData}); 
    } catch (error) {
      console.error("Error occurred while sending form data:", error);
      toast.error("Failed to send email!", {
        position: "bottom-center",
        autoClose: 2000,
        theme: "dark",
        transition: Slide,
      });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }));
  };

  return (
    <article
      id="contact"
      className="flex flex-col w-full min-h-[87vh] lg:py-32 py-[100px] dark:text-gray-100 bg-gray-900/10 dark:bg-zinc-950/90  lg:px-40 px-6 md:px-16"
    >
      <figure className="flex flex-col items-center text-center gap-5 lg:mb-24 mb-16">
        <h1 className="font-bold text-4xl lg:tracking-widest tracking-wider">
          CONTACT
        </h1>
        <div className="h-1 w-8 rounded bg-violet-600"></div>
        <p className="md:text-xl lg:px-52 text-slate-600 dark:text-gray-300">
          Feel free to contact me by submitting the form below and I will get
          back to you as soon as possible.
        </p>
      </figure>
      <figure className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start bg-white lg:min-w-[60%] min-w-[80%] sm:p-14 p-8  lg:gap-12 sm:gap-10 gap-6 font-semibold rounded-md shadow-2xl"
        >
          <div className="w-full flex flex-col gap-2">
            <label className="text-slate-500 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="bg-gray-400/20 w-full lg:p-5 p-3 outline-none text-black rounded-md"
              type="text"
              name="clientName"
              value={userData.clientName}
              onChange={handleInputChange}
              required
              placeholder="Enter Your Name"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-slate-500 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="bg-gray-400/20 w-full lg:p-5 p-3 outline-none text-black rounded-md"
              type="text"
              name="clientEmail"
              value={userData.clientEmail}
              onChange={handleInputChange}
              required
              placeholder="Enter Your Email"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-slate-500 font-semibold" htmlFor="msg">
              Message
            </label>
            <textarea
              className="bg-gray-400/20 w-full lg:p-5 p-3 outline-none text-black rounded-md resize-none"
              name="message"
              id="msg"
              value={userData.message}
              onChange={handleInputChange}
              minLength={3}
              maxLength={150}
              cols={30}
              rows={6}
              placeholder="Enter Your Message"
            ></textarea>
          </div>

          <Button type="submit" className="py-5 w-full">
            Submit
          </Button>
        </form>
      </figure>
    </article>
  );
};

export default Contact;
