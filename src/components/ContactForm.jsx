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
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  justify-content: space-around;
  gap: 10px;
`;

const TextInput = styled.input`
  width: 300px;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 10px 20px 0px 3px;
  font-size: 1.5rem;
  border: none;
  border-bottom: 1px solid gray;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--text-color);
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

const Label = styled.label`
  margin-top: 15px;
  margin-bottom: -15px;
  opacity: 1;
  font-size: 1rem;
  z-index: 2;
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
      (res) => {
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
      <AppText fs="4rem" fw="100" lh={0}>
        Contact
      </AppText>
      <Form ref={form} onSubmit={sendEmail}>
        <Label htmlFor="user_name">Full Name</Label>
        <TextInput
          autoCapitalize="words"
          id="user_name"
          placeholder="John Smith"
          name="user_name"
          required
        />
        <Label htmlFor="email">Email</Label>
        <TextInput
          id="email"
          placeholder="your@mail.com"
          type="email"
          name="email"
          required
        />
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="message here..."
          name="message"
          rows={3}
          cols={23}
          required
        />
        <AppText color="red">{errMessage}</AppText>
        <div style={{ alignSelf: "center" }}>
          <Button type="submit" title="Send" bgColor="var(--purplish)" />
        </div>
      </Form>
    </Main>
  );
};

export default ContactForm;
