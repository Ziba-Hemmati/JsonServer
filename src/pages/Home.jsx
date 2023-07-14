import { useNavigate } from "react-router-dom";
import ContactList from "../components/ContactList";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/new-contact");
  };
  
  return (
    <div>
      <div>
        <h1>Contact List</h1>
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
