import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { allUsers, searchBar, sortUsers } from "../redux/features/home";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import AddUser from "../components/AddUser";
import image from '../assets/images.jfif'
import '../pages/style.css'

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.Users);;
  const handleSearch = (e) => {
    dispatch(searchBar(e.target.value));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(sortUsers(value));
  };

  useEffect(() => {
    dispatch(allUsers());
  }, []);
  return (
    <div className=" mt-6">
      <h1 className="text-center  font-bold text-4xl">User List</h1>
      <div className="flex md:ml-[450px]  mt-4 lg:-mt-12 justify-end lg:mr-5  gap-4 rounded-md lg:p-6 outline-none ">
        <h1>Sort the Users</h1>
        <select id="order" onChange={handleChange}>
          <option value="Default">Default</option>
          <option value="Sort by name">Sort by name</option>
          <option value="Sort by email">Sort by email</option>
          <option value="Sort by Company name">Sort by Company name</option>
        </select>
      </div>
      <div className=" flex justify-center lg:mt-0 mt-5 ">
        <input
          type="text"
          name="search"
          placeholder="Search User by Name"
          className=" border border-blue-400 bg-gray-50  rounded-md w-72 lg:w-[500px] md:w-[300px] h-11  placeholder-black font-semi-bold  outline-none "
          onChange={handleSearch}
        />
        <button type="submit" className="">
          <CiSearch
            size={44}
            className="border border-blue-400 bg-gray-50   rounded-md"
          />
        </button>
      </div>
      <div className=" container grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5 mx-auto">
        {users?.map((user, index) => {
          return (
            <div key={index}>
              <UserCard user={user} />
            </div>
          );
        })}
      </div>
      <div id="userAdd" className="lg:flex lg:flex-row md:flex-row lg:justify-around flex-col">
        <AddUser/>
        <div className="text-[100px] mt-40">
            <img className="w-[500px]" src={image} alt="image1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
