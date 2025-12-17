import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import axios from "axios";

export default function Contact() {
  // -------------------------------
  // State for form data
  // -------------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // -------------------------------
  // State for status messages (sending, success, failure)
  // -------------------------------
  const [status, setStatus] = useState("");

  // -------------------------------
  // State for form validation errors
  // -------------------------------
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // -------------------------------
  // Handle input changes for both <input> and <textarea>
  // Updates formData state and clears individual errors when typing
  // -------------------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for this field immediately when typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // -------------------------------
  // Validate form data before submission
  // Returns true if all fields are valid
  // -------------------------------
  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // -------------------------------
  // Handle form submission
  // -------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("Sending... ⏳");

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setStatus(response.data.message);

      // Clear form
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Hide success message after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message ❌");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section className="contact-page">
      {/* Hero / Title */}
      <h1>Get in Touch</h1>
      <p>
        I’d love to hear from you. Whether it’s a project, collaboration, or just saying hi, send me a message!
      </p>

      <div className="contact-layout">
        {/* Contact Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="error-text">{errors.subject}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error-text">{errors.message}</p>}

          <button type="submit">Send Message</button>

          {status && <p className="status-text">{status}</p>}
        </form>

        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>Contact Info</h2>
          <p><FaEnvelope /> <a href="mailto:venapp22@gmail.com">venapp22@gmail.com</a></p>
          <p><FaPhone /> <a href="tel:+251912345678">+251 925979626</a></p>

          <h2>Social Links</h2>
          <div className="social-links">
            <a href="https://github.com/VenomX-Meku"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mekuanint-yehualaw"><FaLinkedin /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
          </div>

          <h2>Location</h2>
          <p>Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </section>
  );
}
