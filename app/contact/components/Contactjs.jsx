"use client";
import React, { useState } from "react";
import axios from "axios";

const Contactjs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Web Wizard",
        message: message,
      },
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="w-10/12 max-w-7xl mx-auto my-10">
      <form
        onSubmit={handleSubmit}
        className="w-full h-auto flex flex-col justify-center items-center gap-4 text-primary"
      >
        <label
          className="w-full font-semibold flex flex-col gap-2"
          name="Full Name"
        >
          Full Name:
          <input
            className="p-3 border-2 border-primary rounded-lg font-normal"
            type="text"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label
          className="w-full font-semibold flex flex-col gap-2"
          name="Email:"
        >
          Email
          <input
            className="p-3 border-2 border-primary rounded-lg font-normal"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label
          className="w-full font-semibold flex flex-col gap-2"
          name="Message"
        >
          How may we help you:
          <textarea
            className="p-3 border-2 border-primary rounded-lg font-normal"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <button
          className="w-full p-3 bg-bkg rounded-lg font-normal hover:bg-primary hover:text-bkg transition-all duration-500 ease-in-out"
          type="submit"
        >
          {loading ? "Loading" : "Send Email"}
        </button>
      </form>
    </div>
  );
};

export default Contactjs;
