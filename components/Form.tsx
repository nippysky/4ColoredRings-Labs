import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

function Form() {
  //Use the useState to get input data for form validation.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passengerID, setPassengerID] = useState("");
  const [message, setMessage] = useState("");

  function handleNameChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setName(event.target.value);
  }

  function handleEmailChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setEmail(event.target.value);
  }

  function handlePassengerIDChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setPassengerID(event.target.value);
  }

  function handleMessageChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setMessage(event.target.value);
  }

  // Funtion to handle form when it is submitted
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Notify user with a toast message of pending sending of message
    toast.info("Wait, Sending Your Message....", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    const form = {
      name,
      email,
      passengerID,
      message,
    };

    // Submit Data To API
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      if (response.status === 200) {
        // Notify user with a toast message of successfully sending their message
        toast.success("Message Sent Successfully", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        if (response.status === 501 || 502 || 503 || 504 || 401 || 403) {
          // Notify user with a toast message of error trying to send their message
          toast.error("Error, Check Connection", {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      }
    });

    // Clear Form Fields
    setName("");
    setPassengerID("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Name And Email */}
      <div className="flex flex-col lg:flex-row gap-24 flex-1 w-full">
        {/* Name */}
        <div className="w-full lg:w-1/2">
          <label className="font-semibold relative bottom-5" htmlFor="name">
            Your Name
          </label>
          <input
            onChange={handleNameChange}
            value={name}
            required
            className="w-full h-14 p-5 rounded-lg bg-mainBG dark:bg-darkBG border-none focus:ring-1 focus:ring-black dark:focus:ring-1 dark:focus:ring-white"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
          />
        </div>

        {/* Email */}
        <div className="w-full lg:w-1/2">
          <label className="font-semibold relative bottom-5" htmlFor="email">
            Your Email
          </label>
          <input
            onChange={handleEmailChange}
            value={email}
            required
            className="w-full h-14 p-5 rounded-lg bg-mainBG dark:bg-darkBG border-none focus:ring-1 focus:ring-black dark:focus:ring-1 dark:focus:ring-white"
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email Address"
          />
        </div>
      </div>

      {/* Passenger ID */}
      <div className="w-full mt-20">
        <label className="font-semibold relative bottom-5" htmlFor="reason">
          Passenger ID
        </label>
        <div>
          <input
            onChange={handlePassengerIDChange}
            value={name}
            required
            className="w-full h-14 p-5 rounded-lg bg-mainBG dark:bg-darkBG border-none focus:ring-1 focus:ring-black dark:focus:ring-1 dark:focus:ring-white"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Token ID"
          />
        </div>
      </div>

      {/* Message */}
      <div className="w-full mt-20">
        <label className="font-semibold relative bottom-5" htmlFor="message">
          Your Message
        </label>
        <div>
          <textarea
            onChange={handleMessageChange}
            value={message}
            required
            rows={10}
            placeholder="Tell us your expertise and why you wish to join the lab"
            className="w-full p-5 rounded-lg bg-mainBG dark:bg-darkBG border-none focus:ring-1 focus:ring-black dark:focus:ring-1 dark:focus:ring-white"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full font-semibold bg-black dark:bg-white text-white dark:text-black p-4 text-center rounded-lg mt-10"
      >
        Send
      </button>
    </form>
  );
}

export default Form;
