import ContactForm from "../components/ContactForm";
import "../styles/new-contact.scss";
const NewContact = () => {
  return (
    <div className="card-container">
      <div className="new-contact-card">
        <div className="new-contact__header">
          <h1>New Contact Page</h1>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default NewContact;
