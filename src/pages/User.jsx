import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleUser } from "../redux/features/home";

const User = () => {
  const { user } = useSelector((state) => state.Users);
  return (
    <div className="flex flex-col items-center mt-12">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-xl">
        <img
          src={user[0].image}
          alt={user[0].first_name}
          className="rounded-full w-40 h-40 mx-auto mb-6"
        />
        <div className="text-center">
          <h1 className="font-bold text-4xl mb-4">{`${user[0].firstName} ${user[0].lastName}`}</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Email:
            </label>
            <p className="text-gray-700 text-lg">{user[0].email}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Address:
            </label>
            <p className="text-gray-700 text-lg">{`${user[0].address.address}, ${user[0].address.city}`}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Company Name:
            </label>
            <p className="text-gray-700 text-lg">{user[0].company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
