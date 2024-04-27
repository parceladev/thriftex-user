import { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isFormValid =
    name.trim() !== '' && email.trim() !== '' && message.trim() !== '';

  return (
    <div className="flex flex-col w-full px-4 mb-10 md:flex-1">
      <h2 className="mb-6 text-xl font-semibold">CONTACT US</h2>
      <form className=" max-w-[700px] flex flex-col space-y-4">
        <div>
          <label
            htmlFor="name"
            className="flex gap-1 mb-2 text-sm font-semibold text-gray-700 item-center"
          >
            Name <span className="text-xs text-red-400">(Required)</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full py-2 pl-3 bg-transparent border-0 border-b-2 border-gray-800 focus:ring-0 focus:border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="flex gap-1 mb-2 text-sm font-semibold text-gray-700 item-center"
          >
            Email <span className="text-xs text-red-400">(Required)</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full py-2 pl-3 bg-transparent border-0 border-b-2 border-gray-800 focus:ring-0 focus:border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="flex gap-1 mb-2 text-sm font-semibold text-gray-700 item-center"
          >
            Phone Number{' '}
            <span className="text-xs text-gray-400">(Optional)</span>
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            className="w-full py-2 pl-3 bg-transparent border-0 border-b-2 border-gray-800 focus:ring-0 focus:border-black"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="flex gap-1 mb-2 text-sm font-semibold text-gray-700 item-center"
          >
            Message <span className="text-xs text-red-400">(Required)</span>
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="w-full py-2 pl-3 bg-transparent border-0 border-b-2 border-gray-800 focus:ring-0 focus:border-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full font-semibold py-2 transition-colors duration-200 transform rounded-md focus:outline-none ${
            isFormValid
              ? 'bg-gray-800 text-white hover:bg-gray-700 focus:bg-gray-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!isFormValid}
        >
          SUBMIT MESSAGE
        </button>
      </form>
      {/* Additional Content Below the Submit Button */}
      <div className="mt-16 text-sm text-gray-700">
        <p className="mb-3 font-semibold">CONTACT US</p>
        <p className="">thriftexcs@gmail.com</p>
        <p className="mt-8 mb-3 font-semibold">
          CUSTOMER SERVICE SUPPORT HOURS
        </p>
        <p className="mb-3">Monday – Friday 8:00 am - 4:00pm EST.</p>
        <p>Excluding the weekend and major holidays.</p>
      </div>
    </div>
  );
};

export default ContactUs;
