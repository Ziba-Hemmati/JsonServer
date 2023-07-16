import { useState, useEffect } from "react";
import axios from "axios";
import Contact from "./Contact";

const CONTACTS_API = "http://localhost:3000/contacts";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(CONTACTS_API);
        setContacts(data);
        setIsLoading(false);
        setIsError(false);
      } catch (e) {
        console.log(e);
        setIsError(true);
      }
    };
    getContacts();
  }, []);

  if (isError) {
    return <h3>There's an error!</h3>;
  }
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </div>
  );
};

export default ContactList;
