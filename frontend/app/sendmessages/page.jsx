import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Card,   } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";

const sendmessages = () => {
  return (
    <section className="bg-[#070B27] flex justify-center items-center w-screen h-screen">
  <div className="flex flex-col gap-4 h-full w-full xl:w-1/2 justify-center items-center">
    <Image
      src="/assets/GouldLogo-02.png"
      alt="logo"
      width={450}
      height={400}
    />
    <div className="flex justify-center">
      <div className="bg-white gap-4 h-fit p-10 w-[1200px] flex flex-col relative">
        <h1 className="absolute top-4 right-10 font-bold text-lg">
          Compose New Message
        </h1>

        {/* Inputs */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="To"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Cc"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Bcc"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <textarea
            placeholder="Body"
            className="border border-gray-300 p-2 rounded w-full h-32 resize-none"
          ></textarea>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600"
            >
              Send
            </button>
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    <Image
      src="/assets/SlapLogo-01.png"
      alt="logo"
      width={100}
      height={100}
    />
  </div>
</section>
  );
};

export default sendmessages;
