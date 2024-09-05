import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import axios from 'axios';
import { withAlert, withUser } from './withProvider';
import { BiArrowBack } from 'react-icons/bi';

function LogIn({ setAlert, setUser }) {
  const navigate = useNavigate();

  const callLoginApi = (values) => {
    axios.post('https://myeasykart.codeyogi.io/login', {
      email: values.email,
      password: values.password
    })
    .then(response => {
      const { user, token } = response.data;
      localStorage.setItem('token', token);
      setUser(user);
      navigate('/');
    })
    .catch(() => {
      setAlert({ type: 'error', message: 'Invalid Credentials' });
    });
  };

  // Yup for validation
  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Required')
  });

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div className="w-full bg-gradient-to-r from-primary-light via-primary-default to-primary-light h-screen flex flex-col justify-center items-center p-4">
      <Formik 
        initialValues={initialValues}
        onSubmit={callLoginApi}
        validationSchema={schema}
        validateOnMount={true}
      >
        {({ isValid }) => (
          <Form className="flex flex-col md:flex-row shadow-lg bg-white w-full md:w-2/3 lg:w-1/2 h-auto md:h-120 justify-center items-center gap-4 p-4 rounded-md">
            <div 
              className="w-full md:w-2/3 h-64 md:h-full bg-center bg-cover" 
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?w=996&t=st=1722414584~exp=1722415184~hmac=c4d3734802e87a7ceae75cd6450a838754e53a5d09892ebd440bf94425c99568')" }}
            >
              <Link to="/" className="flex items-center hover:text-primary-default mt-4 ml-4">
                <BiArrowBack className="text-2xl" /> 
                <span className="ml-2">Back to home page</span>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-2 md:gap-4 w-full md:w-1/2 p-4">
              <img 
                className="h-20 rounded-full" 
                src="https://images.tokopedia.net/img/cache/215-square/shops-1/2021/2/5/10746594/10746594_bbd4b59b-e751-4ec6-9b32-df6c47be5642.jpg" 
                alt="Logo" 
              />
              <h1 className="text-3xl md:text-4xl font-bold ml-4">Welcome Back</h1>
              
              <Input
                label="Enter your email address"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                required
              />
              <Input
                label="Enter your password"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                required
              />

              <button 
                type="submit" 
                className={`bg-primary-default text-white rounded-md px-8 py-2 w-full md:w-auto 
                            ${!isValid ? 'disabled:bg-primary-light' : 'hover:bg-primary-dark'}`}
                disabled={!isValid}
              >
                Login
              </button>

              <div className="flex flex-col items-center mt-4">
                <h6 className="hover:text-primary-default cursor-pointer">
                  <Link to="/Forgot-Password">Forgot Password?</Link>
                </h6>
                <h6>
                  <Link to="/signUp">
                    Create an account. 
                    <span className="hover:text-primary-default cursor-pointer">Sign up</span>
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

export default withAlert(withUser(LogIn));