import ContactForm from "../components/ContactForm";
import useScrollToTop from "../hooks/useScrollToTop";

const Contact = () => {
  useScrollToTop();

  return <ContactForm />;
};

export default Contact;
