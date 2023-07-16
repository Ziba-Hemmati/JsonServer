import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/contact.scss"

const CONTACTS_API = "http://localhost:3000/contacts";

const Contact = ({ id, name, number }) => {

  const navigate = useNavigate();
  const params = useParams();
  const [toggle, setToggle] = useState(true);
  
  const handleClick = () => {
    setToggle(false);
    const deleteContact = async (id) => {
      await axios.delete(`${CONTACTS_API}/${id}`);
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
