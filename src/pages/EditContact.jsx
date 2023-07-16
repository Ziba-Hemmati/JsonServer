import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CONTACTS_API = "http://localhost:3000/contacts";

const EditContact = () => {
  
  const params = useParams();
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  const navigate = useNavigate();

  // **********************************************************

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

  const handleCancel = () => navigate(-1);

  // **********************************************************

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || number.trim() === "") {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.put(`${CONTACTS_API}/${params.id}`, contact);
      setContact({ name: "", number: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("There's an error!");
    }
  };

  return (
    <div className="card-container">
      <div>
        <div className="card__header">
          <h1>Edit Contact</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <input
              placeholder="name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <input
              placeholder="phone number"
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
            />
          </div>

          <div className="edit__buttons">
            <button title="Edit Contact" type="submit" className="card__btn">
              Edit Contact
            </button>

            <button title="Cancel" className="card__btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
