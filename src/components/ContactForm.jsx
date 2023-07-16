import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/contact-form.scss";

const CONTACTS_API = "http://localhost:3000/contacts";

const ContactForm = () => {
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      await axios.post(CONTACTS_API, contact);
      setContact({ name: "", number: "" });
      navigate("/");
      setIsError(false);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsError(true);
    }
  };
  if (isError) {
    return <h3>There's an error!</h3>;
  }
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-item">
          <input
            placeholder="phone number"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button title="Add Contact" type="submit" className="card__btn">
            <i className="fa-solid fa-plus"></i>
            <span>Add Contact</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
