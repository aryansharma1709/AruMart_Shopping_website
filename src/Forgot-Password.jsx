import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import { BiArrowBack } from 'react-icons/bi';

function ForgotPassword() {
  function resetPassword(values) {
    console.log("sending password reset request to", values.email);
  }

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const initialValues = {
    email: '',
  };

  return (
    <div className="w-full bg-gradient-to-r from-primary-light via-primary-default to-primary-light h-screen flex flex-col justify-center items-center p-4">
      <Formik
        initialValues={initialValues}
        onSubmit={resetPassword}
        validationSchema={schema}
        validateOnMount={true}
      >
        {({ isValid }) => (
          <Form className="flex flex-col md:flex-row shadow-lg bg-white w-full md:w-2/3 lg:w-1/2 h-auto md:h-120 justify-center items-center gap-4 p-4 rounded-md">
            {/* Left side with background image */}
            <div
              className="w-full md:w-2/3 h-64 md:h-full bg-center bg-cover"
              style={{ backgroundImage: "url('https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?w=996&t=st=1722414584~exp=1722415184~hmac=c4d3734802e87a7ceae75cd6450a838754e53a5d09892ebd440bf94425c99568')" }}
            >
              <Link to="/" className="flex items-center hover:text-primary-default mt-4 ml-4">
                <BiArrowBack className="text-2xl" />
                <span className="ml-2">Back to home page</span>
              </Link>
            </div>

            {/* Right side with form */}
            <div className="flex flex-col items-center gap-2 md:gap-4 w-full md:w-1/2 p-4">
              <img
                className="h-20 rounded-full"
                src="https://images.tokopedia.net/img/cache/215-square/shops-1/2021/2/5/10746594/10746594_bbd4b59b-e751-4ec6-9b32-df6c47be5642.jpg"
                alt="Logo"
              />
              <h1 className="text-xl font-bold ml-4">Recover your Password</h1>

              <Input
                label="Enter your email address"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                required
              />

              <button
                type="submit"
                className={`bg-primary-default text-white rounded-md px-8 py-2 w-full md:w-auto 
                            ${!isValid ? 'disabled:bg-primary-light' : 'hover:bg-primary-dark'}`}
                disabled={!isValid}
              >
                Send OTP
              </button>

              <div className="flex flex-col items-center mt-4">
                <h6 className="hover:text-primary-default cursor-pointer">
                  <Link to="/login">Already have an account? <span className="hover:text-primary-default">Log in</span></Link>
                </h6>
                <h6 className="hover:text-primary-default cursor-pointer">
                  <Link to="/signUp">Create an account. <span className="hover:text-primary-default">Sign up</span></Link>
                </h6>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ForgotPassword;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
// import Input from './Input';

// function ForgotPassword() {
//   function resetPassword(values) {
//     console.log("sending password reset request to", values.email);
//   }

//   const schema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Required'),
//   });

//   const initialValues = {
//     email: '',
//   };

//   return (
//     <div className='flex items-center justify-center w-full bg-gray-200 p-4'>
//       <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white p-6 sm:p-8 md:p-10 rounded-md shadow-lg border border-red-200">
//         <Formik initialValues={initialValues} onSubmit={resetPassword} validationSchema={schema}>
//           <Form className="flex flex-col gap-y-4">
//             <div className="flex flex-col gap-y-2">
//               <Input
//                 type='email'
//                 name='email'
//                 id='email'
//                 label='Email'
//                 placeholder='Enter email'
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-red-500 text-white rounded-md p-3 hover:bg-red-600 transition-colors"
//             >
//               Reset
//             </button>
//           </Form>
//         </Formik>
//         <div className="mt-4 text-center text-sm">
//           Remember your password? <Link to={`/LogIn`} className="text-red-500 hover:underline">Log In.</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;