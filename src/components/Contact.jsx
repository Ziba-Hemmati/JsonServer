import { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = ({ id, name, number }) => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(false);
    const deleteContact = async (id) => {
      await axios.delete(`http://localhost:3000/contacts/${id}`);
    };
    deleteContact(id);
  };

  return (
    <>
      {toggle && (
        <div className="card">
          <p>Name: {name} </p>
          <p>Phone Number: {number}</p>
          <button onClick={handleClick}>
            <i className="fa-solid fa-trash-can"></i>
          </button>

          <button>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
