import { useRef, useState } from "react";
import styled from "styled-components";
import email from "@emailjs/browser";
import AppText from "../components/AppText";
import Button from "../components/Button";
import Modal from "./Modal";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 0;
  min-height: 700px;
  gap: 30px;
  margin: 10px 0 0;
  box-shadow: 0px 0px 20px var(--accent-color);
  border-radius: 5px;

  @media (max-width: 800px) {
    width: 95%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  justify-content: space-around;
  gap: 10px;

  fieldset {
    border-width: 0;
    transition: border-width 0.5s ease;
    legend {
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    input {
      width: 300px;
      background-color: var(--bg-color);
      color: var(--text-color);
      font-size: 1.5rem;
      border-width: 0;
      border-bottom-width: 1px;
      outline: none;
    }

    &:focus-within {
      border-width: 1px;
      legend {
        opacity: 1;
      }
      input {
        border-bottom-width: 2px;
      }
    }
  }
`;

const Textarea = styled.textarea`
  background-color: var(--bg-color);
  color: var(--text-color);
  padding-top: 10px;
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid gray;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--text-color);
  }
`;

const ContactForm = () => {
  const [errMessage, setErrMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publickKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    email.sendForm(serviceId, templateId, form.current, publickKey).then(
      () => {
        setShowModal(true);
        form.current.reset();
      },
      (err) => setErrMessage(err)
    );
  };

  return (
    <Main>
      <Modal
        visible={showModal}
        title="Thank you"
        message="Message sent successfully. We'll contact you back shortly."
        onClose={() => setShowModal(false)}
        onOkClick={() => setShowModal(false)}
      />
      <AppText fs="4rem">Contact</AppText>

      <Form ref={form} onSubmit={sendEmail}>
        <fieldset>
          <legend>Name</legend>
          <input
            autoCapitalize="words"
            id="user_name"
            placeholder="John Smith"
            name="user_name"
            required
          />
        </fieldset>
        <fieldset>
          <legend htmlFor="email">Email</legend>
          <input
            id="email"
            placeholder="your@mail.com"
            type="email"
            name="email"
            required
          />
        </fieldset>
        <fieldset>
          <legend>Message</legend>
          <Textarea
            id="message"
            placeholder="message here..."
            name="message"
            rows={3}
            cols={23}
            required
          />
        </fieldset>

        <AppText color="red">{errMessage}</AppText>
        <div style={{ alignSelf: "center" }}>
          <Button type="submit" title="Send" bgColor="var(--purplish)" />
        </div>
      </Form>
    </Main>
  );
};

export default ContactForm;
