import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [status, setStatus] = useState("");
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus("");
  setLoading(true);

  try {
    const response = await fetch(
      "http://localhost:5000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong.");
    }

    setStatus(result.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    setStatus(error.message || "Unable to send message.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section
      id="contact"
      className="text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}

          <div className="bg-[#16161d] rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              Let's Connect 🚀
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-5">
                <Mail className="text-red-700" size={28} />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a
                    href="mailto:porwalkartik14@gmail.com"
                    className="hover:text-blue-400"
                  >
                    porwalkartik14@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Phone className="text-green-500" size={28} />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p>+91 9926351293</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <MapPin className="text-blue-500" size={28} />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p>Indore, Madhya Pradesh, India</p>
                </div>
              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-5 mt-12">

              <a
                href="https://github.com/Kartikporwal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-full hover:bg-white hover:text-black transition"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/in/kartik-porwal-688302304"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-full hover:bg-blue-600 transition"
              >
                <Linkedin />
              </a>

              <a
                href="https://www.instagram.com/_kartik_porwal_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-4 rounded-full hover:bg-pink-600 transition"
              >
                <Instagram />
              </a>

            </div>

          </div>

          {/* Right Card */}

          <div className="bg-[#16161d] rounded-3xl p-10">

            <h3 className="text-3xl font-bold mb-8">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
              className="w-full bg-[#222228] border border-gray-700 rounded-xl px-5 py-4 outline-none" 
            />

             <input
              type="email"
              name="email"  
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
               required
             maxLength={254}
           className="w-full bg-[#222228] border border-gray-700 rounded-xl px-5 py-4 outline-none"
            />

           <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
           required
           maxLength={5000}
          className="w-full bg-[#222228] border border-gray-700 rounded-xl px-5 py-4 outline-none"
         />

              <button
              type="submit"
              disabled={loading}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
>
       {loading ? "Sending..." : "Send Message 🚀"}
</button>

{status && (
  <p role="status" aria-live="polite" className="text-sm text-center">
    {status}
  </p>
)}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;