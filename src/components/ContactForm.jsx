import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/contact-form.module.scss"
const CONTACTS_API = "http://localhost:3000/contacts";

const ContactForm = () => {
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || number.trim() === "") {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.post(CONTACTS_API, contact);
      setContact({ name: "", number: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("There's an error!");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-item">
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <input
            placeholder="phone number"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <button type="submit">
            <i className="fa-solid fa-plus"></i>
            <span>Add Contact</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
