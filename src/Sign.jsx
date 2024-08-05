import React from 'react';
import { Formik , Form} from 'formik';
import Input from './Input';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
export default function Sign() {
  function callApi(values) {
    console.log("data sending to api " + values.email + " and " + values.password);
  }

  const schema = Yup.object().shape({
    firstName:Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid first name').max(40).required(),
    lastName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid last name').max(40).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required(),
  });

  
  const  initialValues= {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confrim:"",
    }

  return (
    <div className="bg-gradient-to-r from-primary-light via-primary-default to-primary-light h-screen flex flex-col justify-center items-center p-4">
      <Formik initialValues={initialValues}
        onSubmit={callApi}
        validationSchema={schema}
        validateOnMount={true}
      >
       {({ isValid }) => (
      <Form  className="flex flex-col md:flex-row shadow-lg bg-white w-full md:w-5/6 lg:w-1/2 h-auto md:h-140 justify-center items-center gap-4 p-4">
        <div className="w-full md:w-2/3 h-64 md:h-full bg-center bg-cover" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?w=996&t=st=1722414584~exp=1722415184~hmac=c4d3734802e87a7ceae75cd6450a838754e53a5d09892ebd440bf94425c99568')" }}><Link to="/" className="flex hover:text-primary-default "><BiArrowBack class="text-2xl"/> back to home page</Link></div>
        <div className="flex flex-col items-center gap-2  w-full md:w-1/2 p-4">
          <img className="h-20 rounded-full" src="https://images.tokopedia.net/img/cache/215-square/shops-1/2021/2/5/10746594/10746594_bbd4b59b-e751-4ec6-9b32-df6c47be5642.jpg" alt="Logo" />
          <h1 className="text-xl lg:text-2xl font-bold ml-4">Create an Account</h1>
          <Input
            label="enter your firstname"
            id="first"
            name="firstName"
            type="text"
            autoComplete="username"
            Placeholder="first name"
            required
            />
          <Input
            label="enter your Lastname"
            id="last"
            name="lastName"
            type="text"
            autoComplete="username"
            Placeholder="last name"
            required
            />
                   <Input
                      label="enter your email-address"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      Placeholder="email address"
                      required
                      />
                     <Input 
                       label="enter your paasword"
                        id="pswd"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        Placeholder="password"
                        required
                       />
                    <Input 
                       label="enter your confirm paasword"
                        id="cpswd"
                        name="confirm"
                        type="password"
                        autoComplete="new-password"
                        Placeholder="confirm password"
                        required
                       />
          <button type="submit" className="bg-primary-default text-white rounded-md px-8 py-2 w-full md:w-auto disabled:bg-primary-light" disabled={!isValid} >sign up</button>
          
          <div className="flex flex-col items-center ">
            <h6 className="hover:text-primary-default  cursor-pointer"><Link to="/forgot">forgot password</Link></h6>
            <h6 ><Link to="/login">Already have an account. <span className="hover:text-primary-default cursor-pointer">login</span></Link></h6>
          </div>
        </div>
      </Form>
      )}
      </Formik>
    </div>
  );
}
