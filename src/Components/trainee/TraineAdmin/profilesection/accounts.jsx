import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGlobe,
  FaGithub,
} from "react-icons/fa";
import { RiPencilFill, RiCheckLine } from "react-icons/ri";

const Accounts = () => {
  const [accounts, setAccounts] = useState({
    instagram: "https://www.instagram.com/chamalaratnapriya16?",
    website: "https://website_url",
    Github: "https://github.com/ratnapriya2002",
    twitter: "https://twitter.com/twitter_handle",
  });

  const [editMode, setEditMode] = useState({
    instagram: false,
    website: false,
    facebook: false,
    twitter: false,
  });

  const handleEdit = (account) => {
    setEditMode((prevMode) => ({
      ...prevMode,
      [account]: !prevMode[account],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccounts((prevAccounts) => ({
      ...prevAccounts,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-md shadow-lg mt-4 sm:mt-8 md:mt-0 w-full md:w-[400px] lg:w-[450px] xl:w-[500px] mx-auto">
      <div className="flex flex-col space-y-4">
        {Object.keys(accounts).map((account) => (
          <div key={account} className="flex items-center space-x-4">
            {account === "instagram" && (
              <FaInstagram className="text-pink-600 text-3xl" />
            )}
            {account === "website" && (
              <FaGlobe className="text-green-600 text-3xl" />
            )}
            {account === "Github" && (
              <FaGithub className="text-green-600 text-3xl" />
            )}
            {account === "facebook" && (
              <FaFacebook className="text-blue-600 text-3xl" />
            )}
            {account === "twitter" && (
              <FaTwitter className="text-blue-400 text-3xl" />
            )}

            {editMode[account] ? (
              <input
                className="text-gray-800 font-medium border-b border-gray-300 outline-none focus:border-blue-500 px-2 py-1 rounded"
                type="text"
                name={account}
                value={accounts[account]}
                onChange={handleChange}
              />
            ) : (
              <a
                href={accounts[account]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 font-semibold"
              >
                {accounts[account]}
              </a>
            )}
            <button
              type="button"
              onClick={() => handleEdit(account)}
              className="ml-3 focus:outline-none text-gray-600 hover:text-green-500 transition"
            >
              {editMode[account] ? (
                <RiCheckLine className="text-xl" />
              ) : (
                <RiPencilFill className="text-xl" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounts;
