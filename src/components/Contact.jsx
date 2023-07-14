import { useEffect, useState } from "react";
import "./Contact.css";
import axios from "axios";
const CONTACTS_API = "http://localhost:3000/contacts";

const Contact = ({ id, name, number }) => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(false);
  };

  useEffect(() => {
    async (id) => await axios.delete(CONTACTS_API, id);
  }, [toggle]);

  return (
    <>
      {toggle && (
        <div className="card" id={id}>
          <p>Name: {name} </p>
          <p>Phone Number: {number}</p>
          <button onClick={handleClick}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button onClick={handleClick}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
