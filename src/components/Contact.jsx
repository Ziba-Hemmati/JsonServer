import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/contact.scss";

const CONTACTS_API = "http://localhost:3000/contacts";

const Contact = ({ id, name, number }) => {
  
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(false);
    const deleteContact = async (id) => {
      try {
        await axios.delete(`${CONTACTS_API}/${id}`);
      } catch (e) {
        console.log(e);
        alert("Deletion failed!");
      }
    };
    deleteContact(id);
  };

  const handleNavigate = () => navigate(`/edit-contact/${id}`);

  return (
    <>
      {toggle && (
        <div className="contact-item">
          <Link title="Details" to={`/details/${id}`}>
            <p>Name: {name} </p>
            <p>Phone Number: {number}</p>
          </Link>

          <button
            className="contact-item__btn"
            title="Delete Contact"
            onClick={handleClick}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>

          <button
            className="contact-item__btn"
            title="Edit Contact"
            onClick={handleNavigate}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
