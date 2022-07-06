import * as React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@beitzelgolf-nx/ui';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

const Contact = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [formValues, setFormValues] = React.useState({
    fullName: '',
  });
  const onSubmit = handleSubmit((data) => console.log('ONSUBMIT: ', data));
  const handleChange = (event: React.ChangeEvent) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  const handleClear = (event: React.ChangeEvent) => {
    event.preventDefault();
    const currentTarget = event.currentTarget;
    const currentName = event.currentTarget.name;
    console.log({ currentName, currentTarget });
    setFormValues({ ...formValues, [event.currentTarget.name]: '' });
  };

  return (
    <Wrapper data-testid="contact-us">
      <h1>Contact Us</h1>
      <Form onSubmit={onSubmit}>
        <Input
          name="fullName"
          placeholder="Arnold Palmer"
          label="Full Name"
          value={formValues.fullName}
          isClearable
          onChange={handleChange}
          handleClear={handleClear}
        />
        <Button type="submit">submit all the things</Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px;
  button {
    margin-top: 24px;
  }
  label {
    margin-top: 18px;
  }
`;

const Form = styled.form``;

export default Contact;
