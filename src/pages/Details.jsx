import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/details.scss";

const CONTACTS_API = "http://localhost:3000/contacts";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contact, setContact] = useState({ name: "", number: "" });
  const { name, number } = contact;

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

  if (isError) {
    return (
      <div className="card-container">
        <div>
          <h3 className="card__header">There's an error!</h3>
          <button
            title="Back To Home"
            className="card__btn"
            onClick={() => navigate("/")}
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return <h3 className="card__header details-msg">Loading...</h3>;
  }

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
