import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CONTACTS_API = "http://localhost:3000/contacts";

const Details = () => {
  const params = useParams();
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await axios.get(`${CONTACTS_API}/${params.id}`);
        setContact(data);
      } catch (e) {
        console.log(e);
        alert("There's an error!");
      }
    };
    getContacts();
  }, []);

  return <div></div>;
};

export default Details;
