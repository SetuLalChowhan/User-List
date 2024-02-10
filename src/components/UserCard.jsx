import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleUser } from "../redux/features/home";

const UserCard = ({ user }) => {
    const dispatch = useDispatch()
  return (
    <div className=" w-96 text-center border border-gray-300  rounded-md  ">
      <img className=" w-80 h-80 mx-auto  bg-gray-300 rounded-md " src={user.image} alt={user.name} />
      <Link  onClick={()=>{dispatch(singleUser(user.id))}} to={`${user.id}`}><h1 className="text-2xl mt-4 mb-4 font-semibold  duration-100 hover:opacity-45">{user.firstName+" "+ user.lastName}</h1></Link>
      
        <div className="flex justify-center ">
          <MdEmail className="mt-1" />
          <p>{user.email}</p>
        </div>
        <div className="flex justify-center ">
          <FaLocationDot className="mt-1" />
          <div className="">
          <p>{user.address.address}, <span className="text-lg font-semibold">{user.address.city}</span></p>
          </div>
        </div>
      
      <p className="text-2xl mt-3 mb-3">{user.company.name}</p>
    </div>
  );
};

export default UserCard;
