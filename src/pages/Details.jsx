import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/details.scss";

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
    <div className="card-container">
      <div>
        <div className="card__header">
          <i className="fa-solid fa-user"></i>
          <span> Contact information </span>
        </div>
        <p className="details__p">ID : {params.id}</p>
        <p className="details__p">Contact Name : {name}</p>
        <p className="details__p">Contact Number : {number}</p>
        <button className="card__btn" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Details;
