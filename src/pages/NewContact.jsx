import ContactForm from "../components/ContactForm";

const NewContact = () => {
  return (
    <div className="card-container">
      <div>
        <div className="card__header">
          <h1>New Contact Page</h1>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default NewContact;
