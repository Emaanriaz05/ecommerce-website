// import React from "react";
// import { Link } from "react-router-dom";
// import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

// const Payment = () => {
//   return (
//     <div className="max-w-container mx-auto px-4">
//       <Breadcrumbs title="Payment gateway" />
//       <div className="pb-10">
      
//         <Link to="/">
//           <button className="w-52 h-10 bg-[#209CEE] text-white text-lg mt-4 hover:bg-black duration-300">
//             Explore More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Payment;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string().required('Postal code is required'),
    country: Yup.string().required('Country is required'),
    cardNumber: Yup.string().matches(/^[0-9]{16}$/, 'Card number must be 16 digits').required('Card number is required'),
    expiryDate: Yup.string().matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Invalid expiry date format').required('Expiry date is required'),
    cvv: Yup.string().matches(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits').required('CVV is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    // Handle form submission
    setSubmitted(true);
    resetForm();
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <Field
                  name="firstName"
                  type="text"
                  className="mt-1 block w-1/2 border border-[#08F] rounded-md shadow-sm"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  className="mt-1 block w-1/2 border border-[#08F] rounded-md shadow-sm"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="mt-1 block w-1/2 border border-[#08F] rounded-md shadow-sm"
                />
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <Field
                  name="address"
                  type="text"
                  className="mt-1 block w-1/2 border border-[#08F] rounded-md shadow-sm"
                />
                <ErrorMessage name="address" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <Field
                  name="city"
                  type="text"
                  className="mt-1 block w-1/2 border border-[#08F] rounded-md shadow-sm"
                />
                <ErrorMessage name="city" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
                <Field
                  name="postalCode"
                  type="text"
                  className="mt-1 block w-1/2 border border-[#08F] rounded-md shadow-sm"
                />
                <ErrorMessage name="postalCode" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <Field
                  name="country"
                  type="text"
                  className="mt-1 block w-1/2 border border-[#08F] rounded-md shadow-sm"
                />
                <ErrorMessage name="country" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                <Field
                  name="cardNumber"
                  type="text"
                  className="mt-1 block w-1/2 border border-[#08F] rounded-md shadow-sm"
                />
                <ErrorMessage name="cardNumber" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <Field
                  name="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  className="mt-1 block w-1/2 border border-[#08F] rounded-md shadow-sm"
                />
                <ErrorMessage name="expiryDate" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                <Field
                  name="cvv"
                  type="text"
                  className="mt-1 block w-1/2 border border-[#08F] rounded-md shadow-sm"
                />
                <ErrorMessage name="cvv" component="div" className="text-red-600 text-sm mt-1" />
              </div>

              <button type="submit" className="w-1/2 bg-blue-500 text-white py-2 rounded-md" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>

        {submitted && (
          <div className="mt-4 text-green-600 text-lg">
            Submitted successfully!
          </div>
        )}

        <Link to="/">
          <button className="w-52 h-10 bg-[#209CEE] text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;


