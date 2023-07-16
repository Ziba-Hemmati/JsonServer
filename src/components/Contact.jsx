import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/contact.scss";

const CONTACTS_API = "http://localhost:3000/contacts";

const Contact = ({ id, name, number }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setToggle(false);
    const deleteContact = async (id) => {
      try {
        setIsLoading(true);
        await axios.delete(`${CONTACTS_API}/${id}`);
        setIsLoading(false);
        setIsError(false);
      } catch (e) {
        console.log(e);
        setIsError(true);
      }
    };
    deleteContact(id);
  };

  if (isError) {
    return <h3 className="msg">Error : Deletion Failed!</h3>;
  }
  if (isLoading) {
    return <h3 className="msg">Loading...</h3>;
  }

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
