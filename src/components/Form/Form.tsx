import IFormProps from './Form.props';
import styles from './Form.module.css';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import React from 'react';

export default function Form({
   callToAction = `Ready to bring your project to life? \n Let's talk!`
}: IFormProps) {
   const [errorName, setErrorName] = useState('');
   const [errorEmail, setErrorEmail] = useState('');
   const [errorText, setErrorText] = useState('');
   const [validForm, setValidForm] = useState(true);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [text, setText] = useState('');

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
      if (e.target.value.length < 4) {
         setErrorName('Name must be at least 4 characters long');
      } else {
         setErrorName('');
      }
      setName(e.target.value);
   };

   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
   };

   function checkEmail(email: string) {
      const regex =
         /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
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

   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (name && email && text && !errorName && !errorEmail && !errorText) {
         setName('');
         setEmail('');
         setText('');
         setErrorName('');
         setErrorEmail('');
         setErrorText('');
      } else {
         setValidForm(false);
      }
   };

   return (
      <div className={styles.wrapper}>
         <div className={styles['call-to-action']}>
            {callToAction.split('\n').map((line, index) => (
               <React.Fragment key={index}>
                  {line}
                  <br />
               </React.Fragment>
            ))}
         </div>
         <form className={styles.form} onSubmit={handleFormSubmit}>
            <label htmlFor="name">
               {errorName && <div className={styles.error}>{errorName}</div>}
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
               {errorEmail && <div className={styles.error}>{errorEmail}</div>}
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
               {errorText && <div className={styles.error}>{errorText}</div>}
               <textarea
                  name="text"
                  id="text"
                  placeholder="Text"
                  onChange={handleTextChange}
                  value={text}
               ></textarea>
            </label>
            {!validForm && (
               <div className={styles.error}>
                  There is a mistake in this form. Check your input information
               </div>
            )}
            <Button icon={true} isForm={true} type="submit">
               send
            </Button>
         </form>
      </div>
   );
}
