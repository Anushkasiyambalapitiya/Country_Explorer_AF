import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/userContext';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [isRememberChecked, setIsRememberChecked] = useState(false);
  const { SignIn, loading } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleCheckboxChange = (e) => {
    setIsRememberChecked(e.target.checked);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await SignIn(formData);
      Swal.fire({
        icon: 'success',
        title: 'Logged in successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: 'Please check your credentials and try again.',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Sign In Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-10 bg-white dark:bg-gray-900">
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-5">
            <h4 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sign In
            </h4>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5
                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5
                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder='*************************'
              required
            />
          </div>
          <div className="flex items-center mb-5">
            <input
              id="remember"
              type="checkbox"
              checked={isRememberChecked}
              onChange={handleCheckboxChange}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50
                focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            disabled={!isRememberChecked || loading}
            className={`flex justify-center items-center gap-2 text-white font-medium rounded-lg text-sm w-full px-5 py-2.5
              ${isRememberChecked && !loading
                ? "bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-900 dark:hover:bg-blue-950 dark:focus:ring-gray-800"
                : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            {loading && (
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            )}
            {loading ? 'Signing In...' : 'Submit'}
          </button>
          <span className='my-5'>Don't have an account <Link className='text-blue-800' to="/signup"> sign up</Link></span>
        </form>
      </div>

      {/* Right Side: Hero Section */}
      <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 relative overflow-hidden">
        <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] h-80 md:h-full flex items-center justify-center p-6">
          <div className="text-center z-10 relative">
            <h1 className="mb-4 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Explore The World
            </h1>
            <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-200">
            Discover countries across the globe with real-time information on
              population, geography, languages, currencies, and more. Our API
              lets you explore every nation's unique identity — empowering you
              to build apps that bring global insights to your fingertips
            </p>
          </div>
          <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-900 w-full h-full absolute top-0 left-0 z-0"></div>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
