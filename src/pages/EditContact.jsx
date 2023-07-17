import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CONTACTS_API = "http://localhost:3000/contacts";

const EditContact = () => {
  const params = useParams();
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // **********************************************************

  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${CONTACTS_API}/${params.id}`);
        setContact(data);
        setIsLoading(false);
        setIsError(false);
      } catch (e) {
        console.log(e);
        setIsError(true);
      }
    };
    getContacts();
  }, []);

  const handleBack = () => navigate("/");
  if (isError) {
    return (
      <div className="card-container">
        <div>
          <h3 className="card__header">There's an error!</h3>
          <button
            title="Back To Home"
            className="card__btn"
            onClick={handleBack}
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return <h3 className="card__header">Loading...</h3>;
  }

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
      setIsLoading(true);
      await axios.put(`${CONTACTS_API}/${params.id}`, contact);
      setContact({ name: "", number: "" });
      navigate("/");
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  if (isError) {
    return <h3 className="msg">There's an error!</h3>;
  }
  if (isLoading) {
    return <h3 className="msg">Loading...</h3>;
  }
  const handleCancel = () => navigate("/");

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
              required
            />
          </div>
          <div className="form-item">
            <input
              placeholder="phone number"
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              required
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
