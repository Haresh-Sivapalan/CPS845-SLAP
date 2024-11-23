"use client";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Card,   } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";


const allassignments = () => {
    const [isChangePasswordOpen, setChangePasswordOpen] = useState(false);
  const [isLogoutOpen, setLogoutOpen] = useState(false);

  const closeModals = () => {
    setChangePasswordOpen(false);
    setLogoutOpen(false);
  };
  return (
    <section className="bg-[#E8F5E9] w-screen h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#070B27] flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/GouldLogo-02.png"
            alt="Gould University Logo"
            width={60}
            height={60}
          />
          <h1 className="text-white text-2xl font-bold">GOULD UNIVERSITY</h1>
        </div>
        <div className="relative">
          <button className="bg-[#F48FB1] text-white font-bold px-4 py-2 rounded-full">
            JS
          </button>
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded w-40">
            <ul className="flex flex-col">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setChangePasswordOpen(true)}
              >
                Change Password
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setLogoutOpen(true)}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-white w-1/4 p-6 shadow-md">
          <input
            type="text"
            placeholder="Search Course"
            className="w-full border border-gray-300 p-2 rounded mb-6"
          />
          <ul className="flex flex-col gap-2">
            <li className="bg-yellow-400 text-white font-bold px-4 py-2 rounded">
              CPS 985 Cryptography
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
              ASP 565 Astrophysics IV
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
              GRE 201 Tree Planting
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
              GME 133 Global Management
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
              ENT 575 Entrepreneurship
            </li>
            <li className="px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
              FRE 602 Advanced French
            </li>
          </ul>
        </aside>

        {/* Assignments Section */}
        <main className="bg-white flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Assignments</h2>
          <h3 className="text-lg text-gray-500 mb-8">CPS 985 - Cryptography</h3>
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Caesar Cipher Implementation",
                description:
                  "Write a program that implements the Caesar cipher. The program should be able to encrypt and decrypt ...",
                dueDate: "Oct 28, 2024 6:00PM",
              },
              {
                title: "Elliptic Curve Cryptography (ECC)",
                description:
                  "This assignment will introduce you to the mathematical principles behind Elliptic Curve Cryptography (ECC), a ....",
                dueDate: "Nov 10, 2024 6:00PM",
              },
              {
                title: "TLS Handshake Simulation",
                description:
                  "Simulate the basic TLS handshake protocol. Demonstrate how the client and server exchange ...",
                dueDate: "Oct 28, 2024 6:00PM",
              },
              {
                title: "Blockchain and Cryptography",
                description:
                  "Write a short report explaining how cryptographic hash functions and public-key cryptography are used ...",
                dueDate: "Oct 28, 2024 6:00PM",
              },
            ].map((assignment, index) => (
              <div
                key={index}
                className="border-t border-gray-300 pt-4 flex justify-between items-start"
              >
                <div>
                  <h4 className="text-blue-600 font-bold">{assignment.title}</h4>
                  <p className="text-gray-600 text-sm">{assignment.description}</p>
                </div>
                <p className="text-gray-400 text-sm text-right">
                  <span className="block font-bold">Submission Due</span>
                  {assignment.dueDate}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#F9FBE7] text-gray-500 text-center py-4">
        <Image
          src="/assets/SlapLogo-01.png"
          alt="logo"
          width={100}
          height={100}
        />
      </footer>

      {/* Change Password Modal */}
      {isChangePasswordOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold text-[#070B27] mb-4">
              Change Password
            </h2>
            <form className="space-y-4">
              <input
                type="password"
                placeholder="Old Password"
                className="w-full border p-2 rounded"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full border p-2 rounded"
              />
            </form>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={closeModals}
              >
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {isLogoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold text-[#070B27] mb-4">
              Logout Confirmation
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={closeModals}
              >
                Cancel
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>

  );
};

export default allassignments;
