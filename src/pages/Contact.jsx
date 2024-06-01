import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_htpcuxs", 
      "template_2g34rpg",
      formData,
      "FbwINVHqM10th-DC9" 
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully!");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      },
      (error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
      }
    );
  };


  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact us</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>
        <div className="max-w-lg mx-auto mt-12 sm:mt-16">
          <div className="mx-auto">
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-8">
                <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>
                <form onSubmit={handleSubmit} className="mt-8">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-gray-900">Your name</label>
                    <div className="mt-2 relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="email" className="block text-base font-medium text-gray-900">Your email address</label>
                    <div className="mt-2 relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="message" className="block text-base font-medium text-gray-900">Your message</label>
                    <div className="mt-2 relative">
                      <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                        rows="4"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;
