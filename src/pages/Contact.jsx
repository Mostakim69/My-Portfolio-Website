import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.request.trim() === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Information',
        text: 'Please fill out all required fields.',
        confirmButtonColor: '#22c55e'
      });
    } else if (!validateEmail(formData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
        confirmButtonColor: '#22c55e'
      });
    } else {
      console.log('Form submitted:', formData);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'Thank you! I will get back to you soon.',
        confirmButtonColor: '#22c55e'
      });

      setFormData({
        name: '',
        email: '',
        request: ''
      });
    }
  };

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
          <p className=" text-lg">Have a question or want to work together? Let’s talk.</p>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl p-10 grid lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border border-gray-300 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-gray-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 text-gray-800"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="request" className="text-sm font-medium text-gray-700 mb-1 block">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="request"
                id="request"
                value={formData.request}
                onChange={handleChange}
                placeholder="Let me know how I can help you..."
                className="w-full border border-gray-300 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 h-40 resize-none placeholder-gray-400 text-gray-800"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="inline-block button-UI transition-all text-white text-sm font-medium py-3 px-5 rounded-xl focus:outline-none focus:ring-4"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="bg-green-50 rounded-2xl p-6 lg:p-8 space-y-6 flex flex-col justify-center shadow-inner">
            <h3 className="text-2xl font-semibold text-gray-800">Let’s Connect</h3>
            <p className="text-gray-600">
              You can also reach me directly through the following details.
            </p>
            <div className="text-gray-700 space-y-3">
              <p><span className="font-semibold">Phone:</span> +880-1821-023369</p>
              <p><span className="font-semibold">Email:</span> mdmostakimhosen35@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
