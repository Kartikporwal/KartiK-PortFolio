import React, { useState } from 'react'

const RightT = () => {

  const [formData,setFormData] = useState( {
       name:"",
       email:"",
       message:""
  })

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name]: e.target.value
      
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

     emailjs.send(
      "service_id",
      "template_id",
      formData,
      "public_key"
    )
    .then(() => {
      alert("Message Sent Successfully 🚀")
    })
    .catch(() => {
      alert("Message Failed ❌")
    })
  }
  return (
    <div className='w-full md:w-1/2 bg-gray-900 rounded-2xl p-6 sm:p-10 text-white'>

      <h1 className='text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left'>
        Send a Message
      </h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

        <input
          type="text"
          placeholder="Your Name"
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-blue-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-blue-500"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          onChange={handleChange}
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
