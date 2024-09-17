import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { apiRegister } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is mandatory')
    .min(2, 'Too Short!')
    .max(100, 'Must be 100 characters or less' ),
  password: Yup.string()
    .required('This field is mandatory')
    .min(8, 'Must be minimum 8 characters')
    .max(100, 'Must be 100 characters or less'),

  email: Yup.string()
    .email('Invalid email address')
    .required('The email is mandatory'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  
  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(apiRegister(values));
  };


  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>User Name:</span>
            <Field className={css.field} type="text" name="name" placeholder="Василь Василько" />
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>E-mail:</span>
            <Field className={css.field}
              type="text"
              name="email"
              placeholder="allahanol@gmail.com"
            />
            <ErrorMessage
              className={css.errorText}
              name="email"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Passwort:</span>
            <Field className={css.field}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={css.errorText}
              name="password"
              component="span"
            />
          </label>

          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            To register
          </button>
          {error && (
            <p className={css.errorText}>Oops, some error occured... {error}</p>
          )}
        </Form>
      )}
    </Formik>
  )
};

export default RegisterForm;

