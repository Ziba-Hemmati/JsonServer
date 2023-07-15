import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/details.module.scss";

const CONTACTS_API = "http://localhost:3000/contacts";

const Details = () => {
  const navigate = useNavigate();
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
  const handleBack = () => navigate(-1);
  return (
    <div className="details-container">
      <div className="details-card">
        <i className="fa-solid fa-user"></i>
        <p> Contact information : </p>
        <p>Contact Name : {name}</p>
        <p>Contact Number : {number}</p>
        <p>ID : {params.id}</p>
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default Details;
