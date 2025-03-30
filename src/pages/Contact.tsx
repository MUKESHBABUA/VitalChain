import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
        <p className="text-gray-500 text-center mb-6">
          Have questions? Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        
        <form className="space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out py-3 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
