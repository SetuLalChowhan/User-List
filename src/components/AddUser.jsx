import React from "react";
import { CgProfile } from "react-icons/cg";

import { useFormik } from "formik";
import { addUserSchema } from "../schema";

const AddUser = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    company_name: "",
  };
  const { values, handleChange, handleBlur, errors, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema:addUserSchema,
      onSubmit: (values) => {},
    });
  return (
    <div className="flex flex-col gap-4   mt-10 ">
      <div className="flex flex-col  shadow-md bg-gray-50 ">
        <div className="flex justify-center">
          <CgProfile color="blue" size={100} />
        </div>
        <div>
          <form className="flex flex-col gap-7 p-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <label htmlFor="name " className="text-2xl font-semibold">
                Avatar
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                placeholder="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="first_name " className="text-2xl font-semibold">
                First Name
              </label>
              <input
                className={
                  errors.first_name && touched.first_name
                    ? "bg-gray-50 border border-red-600 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    : "bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                }
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.first_name && touched.first_name ? (
                <p className=" text-red-700 font-semibold">
                  {errors.first_name}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="last_name " className="text-2xl font-semibold">
                Last Name
              </label>
              <input
                className={
                  errors.last_name && touched.last_name
                    ? "bg-gray-50 border border-red-600 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    : "bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                }
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.last_name && touched.last_name ? (
                <p className=" text-red-700 font-semibold">
                  {errors.last_name}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-2xl font-semibold">
                Email
              </label>
              <input
                className={
                  errors.email && touched.email
                    ? "bg-gray-50 border border-red-600 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    : "bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                }
                type="email"
                name="email"
                id="email"
                placeholder="xyz@gmail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className=" text-red-700 font-semibold">{errors.email}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="address" className="text-2xl font-semibold">
                Address
              </label>
              <input
                className={
                  errors.address && touched.address
                    ? "bg-gray-50 border border-red-600 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    : "bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                }
                type="text"
                name="address"
                id="address"
                placeholder="Address,suite,city"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.address && touched.address ? (
                <p className=" text-red-700 font-semibold">{errors.address}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="company_name" className="text-2xl font-semibold">
                Company Name
              </label>
              <input
                className={
                  errors.confirm_password && touched.confirm_password
                    ? "bg-gray-50 border border-red-600 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    : "bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                }
                type="text"
                name="company_name"
                id="company_name"
                placeholder="Company Name"
                value={values.company_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.company_name && touched.company_name ? (
                <p className=" text-red-700 font-semibold">
                  {errors.company_name}
                </p>
              ) : null}
            </div>

            <div className="flex justify-center bg-blue-700 text-white h-9 hover:opacity-90 ">
              <button className="" type="submit">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
