import { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";
import "../styles/contact-list.scss"

const CONTACTS_API = "http://localhost:3000/contacts";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await axios.get(CONTACTS_API);
        setContacts(data);
      } catch (e) {
        console.log(e);
        alert("There's an error!");
      }
    };
    getContacts();
  }, []);

  return (
    <div className="contact-list">
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ContactList;
