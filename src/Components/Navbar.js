import React, { useState } from 'react';
import pic1 from '../Images/swaraj.jpg';
import contact from './contact.avif'; // Ensure this image path is correct
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Blog" },
  ];

  const handleModalToggle = () => setModalOpen(!modalOpen);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formValues.name) formErrors.name = "Name is required";
    if (!formValues.email) formErrors.email = "Email is required";
    if (!formValues.password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // No errors, close the modal and handle form submission
      setModalOpen(false);
      // You can add form submission logic here
    } else {
      // Set errors to show validation messages
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={pic1} className="h-12 w-12 rounded-full" alt="Profile" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Vaibhav<span className="text-green-500 text-2xl"></span>
              <p className="text-sm">Full Stack Developer</p>
            </h1>
          </div>
          {/* Desktop Navbar */}
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer inline"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className='bg-pink-600 text-white py-2 px-4 rounded-lg hidden md:block'
              onClick={handleModalToggle}
            >
              Contact Me
            </button>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} className="text-white" /> : <AiOutlineMenu size={24} className="text-white" />}
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-sky-600 text-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <li
                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                onClick={handleModalToggle}
              >
                <button className='bg-pink-600 text-white py-2 px-4 rounded-lg'>Contact Me</button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-60">
          <div className="bg-white rounded-lg p-8 max-w-3xl mx-4 relative flex">
            <img src={contact} alt="Contact" className="w-1/2 h-full object-cover rounded-l-lg" />
            <div className="w-1/2 p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">Enter Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">Enter Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="password">Enter Your Password</label>
                  <input
                    type="password"
                    id="password"
                    value={formValues.password}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded"
                    required
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-3 px-6 rounded"
                >
                  Submit
                </button>
              </form>
              <button
                onClick={handleModalToggle}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <IoCloseSharp size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
