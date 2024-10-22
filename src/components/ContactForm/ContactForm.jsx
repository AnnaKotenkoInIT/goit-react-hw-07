import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';
import c from './ContactForm.module.css';

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();
  const phoneRegExp = /(^\d{3}-\d{2}-\d{2}$)|(^\+\d{2}-\d{3}-\d{3}-\d{4}$)/;

  const phonebookSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Name is required'),
    number: Yup.string()
      .matches(phoneRegExp, 'Must be in format 000-00-00 or +00-000-000-0000')
      .required('Phone number is required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={phonebookSchema}
    >
      <Form className={c.form}>
        <div className={c.fieldWrapper}>
          <label htmlFor="name" className={c.label}>
            Name
          </label>
          <Field className={c.textField} type="text" name="name"></Field>
          <ErrorMessage name="name" component="p" className={c.error} />
        </div>
        <div className={c.fieldWrapper}>
          <label htmlFor="number" className={c.label}>
            Number
          </label>
          <Field className={c.textField} type="text" name="number"></Field>
          <ErrorMessage name="number" component="p" className={c.error} />
        </div>
        <button type="submit" className={c.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
