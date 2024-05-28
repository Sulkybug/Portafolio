import React from "react";
import "./ContactMe.css";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";

function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // Wait for a small amount of time to let the state update (if necessary)
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Create a form element
      const form = document.createElement("form");
      form.action = "https://formsubmit.co/feang_c0@hotmail.com";
      form.method = "post";
      form.style.display = "none";

      // Append form data to the form element
      Object.keys(data).forEach((key) => {
        const input = document.createElement("input");
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      // Keep the loading state until the redirect happens
    } catch (error) {
      console.error("Error:", error);
      setLoading(false); // Reset loading state if there's an error
    }
  };

  return (
    <section id="ContactMe">
      <div>
        <h2 className="titleContactMe"> Hey there!</h2>
      </div>
      <div className="contactMeBox">
        <div className="boxImgContact">
          <img
            className="ContactImg"
            src="/Portafolio/img/developer.png"
            alt="SulkyBug"
            height="512"
            width="512"
            loading="lazy"
          />
        </div>

        <div className="formBox">
          <p className="p-ContactMe">Let's work together... </p>
          <hr className="hrContact" />
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            {errors.name && (
              <div className="text-red">{errors.name.message}</div>
            )}
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must have at least 3 characters",
                },
              })}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            {errors.email && (
              <div className="text-red">{errors.email.message}</div>
            )}
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
            />
            {errors.Subject && (
              <div className="text-red">{errors.Subject.message}</div>
            )}
            <input
              {...register("Subject", { required: "A subject is required" })}
              type="text"
              name="Subject"
              id="Subject"
              placeholder="Subject"
            />
            {errors.message && (
              <div className="text-red">{errors.message.message}</div>
            )}
            <textarea
              {...register("message", {
                required: "Write a message please",
                minLength: {
                  value: 8,
                  message: "Message is too short to be sent",
                },
              })}
              name="message"
              id="message"
              cols="80"
              rows="6"
              placeholder="Type your message here"
            ></textarea>
            <button
              type="submit"
              className="sendMessage"
              disabled={loading || isSubmitting}
            >
              {loading || isSubmitting ? "Loading..." : "Send Message"}
              &thinsp;
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
