import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import axios from 'axios';
import { UserContext } from './Contexts';
import { saveCart } from './api';
import { BiArrowBack } from 'react-icons/bi';
function SignUp() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function handleSignUp() {
    const localData = JSON.parse(localStorage.getItem('cart'));
    const cartObject = localData.reduce((acc, curr) => {
      return { ...acc, [curr.product.id]: curr.quantity };
    }, {});
    saveCart(cartObject);
  }

  function callSignUpApi(values) {
    axios.post("https://myeasykart.codeyogi.io/signup", {
      email: values.email,
      password: values.password,
      fullName: values.name,
    })
      .then((response) => {
        const { user, token } = response.data;
        setUser(user);
        localStorage.setItem('token', token);
        handleSignUp();
        navigate('/');
      })
      .catch((error) => {
        console.error('Error during sign up:', error);
      });
  }

  // Yup schema for validation
  const schema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Required'),
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const initialValues = {
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-r from-primary-light via-primary-default to-primary-light">
      <Formik
        initialValues={initialValues}
        onSubmit={callSignUpApi}
        validationSchema={schema}
        validateOnMount={true}
      >
        {({ isValid }) => (
          <Form className="flex flex-col sm:flex-row shadow-lg bg-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2  justify-center items-center gap-4 p-4">
            <div
              className="w-full sm:w-2/3 h-64 sm:h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?w=996&t=st=1722414584~exp=1722415184~hmac=c4d3734802e87a7ceae75cd6450a838754e53a5d09892ebd440bf94425c99568')",
              }}
            >
              <Link to="/" className="flex items-center hover:text-primary-default mt-4 ml-4">
                <BiArrowBack className="text-2xl" />
                <span className="ml-2">Back to home page</span>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2 w-full sm:w-1/2 p-4">
              <img
                className="h-16 sm:h-20 rounded-full"
                src="https://images.tokopedia.net/img/cache/215-square/shops-1/2021/2/5/10746594/10746594_bbd4b59b-e751-4ec6-9b32-df6c47be5642.jpg"
                alt="Logo"
              />
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Create an Account</h1>

              <Input
                type="text"
                name="username"
                id="username"
                label="Username"
                placeholder="Enter Username"
                required
              />
              <Input
                label="Full Name"
                id="name"
                name="name"
                type="text"
                autoComplete="username"
                placeholder="Full Name"
                required
              />
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email Address"
                required
              />
              <Input
                label="Password"
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Password"
                required
              />
              <Input
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm Password"
                required
              />
              <button
                type="submit"
                className="bg-primary-default text-white rounded-md px-4 sm:px-8 py-2 w-full sm:w-auto disabled:bg-primary-light"
                disabled={!isValid}
              >
                Sign Up
              </button>

              <div className="flex flex-col items-center">
                <h6 className="hover:text-primary-default cursor-pointer">
                  <Link to="/Forgot-Password">Forgot password?</Link>
                </h6>
                <h6>
                  <Link to="/login">
                    Already have an account?{' '}
                    <span className="hover:text-primary-default cursor-pointer">
                      Log In
                    </span>
                  </Link>
                </h6>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;