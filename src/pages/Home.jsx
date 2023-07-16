import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";
import "../styles/home.scss";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/new-contact");
  };

  return (
    <div className="card-container">
      <div>
        <div className="card__header">
          <h1>Contact List</h1>
          <button
            title="Add New Contact"
            className="card__btn"
            onClick={handleClick}
          >
            <i className="fa-solid fa-plus"></i>
            <span>Add New Contact</span>
          </button>
        </div>
        <div>
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Home;
