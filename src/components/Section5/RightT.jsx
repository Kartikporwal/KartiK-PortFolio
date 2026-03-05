import React from 'react'

const RightT = () => {
  return (
    <div className='w-full md:w-1/2 bg-gray-900 rounded-2xl p-6 sm:p-10 text-white'>

      <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left'>
        Send a Message
      </h1>

      <form className='flex flex-col gap-5'>

        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-blue-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-blue-500"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Send Message 🚀
        </button>

      </form>

    </div>
  )
}

export default RightT
