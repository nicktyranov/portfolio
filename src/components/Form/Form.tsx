import IFormProps from './Form.props';
import Button from '../Button/Button';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import cn from 'classnames';
import emailjs from '@emailjs/browser';
import styles from './Form.module.css';

export default function Form({
   className,
   productPage,
   callToAction = `Ready to bring your project to life? \n Let's talk!`
}: IFormProps) {
   const [errorName, setErrorName] = useState('');
   const [errorEmail, setErrorEmail] = useState('');
   const [errorText, setErrorText] = useState('');
   const [validForm, setValidForm] = useState(true);
   const [successSubmit, setSuccessSubmit] = useState<boolean>();
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [text, setText] = useState('');
   const form = useRef<HTMLFormElement>(null);

   useEffect(() => {
      if (!(errorName && errorEmail && errorText)) {
         setValidForm(true);
      } else {
         setValidForm(false);
      }
   }, [errorName, errorEmail, errorText]);

   useEffect(() => {
      if (email.length < 1) {
         return;
      }

      if (checkEmail(email)) {
         setErrorEmail('');
      } else {
         setErrorEmail('Invalid email. Try again');
      }
   }, [email]);

   const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length === 0) {
         setErrorName('');
      } else if (e.target.value.length < 4) {
         setErrorName('Name must be at least 4 characters long');
      } else {
         setErrorName('');
      }
      setName(e.target.value);
   };

   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (e.target.value.length === 0) {
         setErrorEmail('');
      }
   };

   function checkEmail(email: string) {
      const regex =
         /^[0-9A-Za-z][-0-9A-Za-z.]*[0-9A-Za-z]@([-A-Za-z]+\.){1,2}[-A-Za-z]{2,}$/;
      return regex.test(email);
   }

   const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
      if (e.target.value.length < 10) {
         setErrorText('Your text is too short. Add more details, please');
      } else {
         setErrorText('');
      }
   };

   const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      let formIsValid = true;

      if (!name) {
         setErrorName('Name is required');
         formIsValid = false;
      } else if (name.length < 4) {
         setErrorName('Name must be at least 4 characters long');
         formIsValid = false;
      } else {
         setErrorName('');
      }

      if (!email) {
         setErrorEmail('Email is required');
         formIsValid = false;
      } else if (!checkEmail(email)) {
         setErrorEmail('Invalid email. Try again');
         formIsValid = false;
      } else {
         setErrorEmail('');
      }

      if (!text) {
         setErrorText('Text is required');
         formIsValid = false;
      } else if (text.length < 10) {
         setErrorText('Your text is too short. Add more details, please');
         formIsValid = false;
      } else {
         setErrorText('');
      }

      setValidForm(formIsValid);

      if (formIsValid && form.current) {
         await emailjs
            .sendForm('service_kp6qjuw', 'contact_form', form.current, {
               publicKey: 'Zt-NLK-o2siA4us3P'
            })
            .then(
               () => {
                  console.log('SUCCESS!');
                  setSuccessSubmit(true);
                  setName('');
                  setEmail('');
                  setText('');
                  setErrorName('');
                  setErrorEmail('');
                  setErrorText('');
               },
               (error) => {
                  console.log('FAILED...', error.text);
                  setSuccessSubmit(false);
               }
            );
      } else {
         setValidForm(false);
      }
   };

   return (
      <div className={cn(styles.wrapper, className)}>
         <div className={styles['call-to-action']}>
            {callToAction.split('\n').map((line, index) => (
               <React.Fragment key={index}>
                  {line}
                  <br />
               </React.Fragment>
            ))}
         </div>
         <form
            ref={form}
            className={cn(styles.form, {
               [styles['form-page']]: productPage
            })}
            onSubmit={handleFormSubmit}
         >
            <label htmlFor="name">
               {errorName && (
                  <div className={cn(styles.error, styles.message)}>
                     {errorName}
                  </div>
               )}
               <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleNameChange}
                  value={name}
               />
            </label>

            <label htmlFor="email">
               {errorEmail && (
                  <div className={cn(styles.error, styles.message)}>
                     {errorEmail}
                  </div>
               )}
               <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                  value={email}
               />
            </label>

            <label htmlFor="text">
               {errorText && (
                  <div className={cn(styles.error, styles.message)}>
                     {errorText}
                  </div>
               )}
               <textarea
                  name="text"
                  id="text"
                  placeholder="Text"
                  onChange={handleTextChange}
                  value={text}
               ></textarea>
            </label>
            {!validForm && (
               <div className={cn(styles.error, styles.message)}>
                  There is a mistake in this form. Check your input information
               </div>
            )}
            <Button icon={true} isForm={true} type="submit">
               send
            </Button>

            {successSubmit && (
               <div className={cn(styles.success, styles.message)}>
                  Your request has been received.
               </div>
            )}
         </form>
      </div>
   );
}
