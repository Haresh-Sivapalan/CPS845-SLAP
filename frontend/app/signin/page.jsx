import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";

const signin = () => {
  return (
    <section className="bg-[#070B27] flex justify-center items-center w-screen h-screen">
      <div className=" flex flex-col gap-4 h-full w-full xl:w-1/2 justify-center items-center">
        <Image
          src="/assets/GouldLogo-02.png"
          alt="logo"
          width={450}
          height={400}
        />
        <div className="bg-white gap-4 h-fit p-10 w-1/2 flex flex-col justify-center items-center">
          <div className="flex justify-start w-full">
            <Button radius="none" className="bg-[#070b27] text-white">
              STUDENT
            </Button>
            <Button radius="none" variant="bordered">
              INSTRUCTOR
            </Button>
          </div>
          <div className="bg-[#e3e3e3] w-full gap-2 p-6 h-fit flex flex-col items-center justify-center">
            <Input
              type="email"
              label="Gould Email"
              variant="bordered"
              className="bg-white border-[#aaaaaa] "
              radius="none"
              isRequired
            />
            <Input
              type="text"
              label="Gould Password"
              variant="bordered"
              className="bg-white "
              radius="none"
              isRequired
            />
          </div>
          <div className="w-full justify-start flex">
            <Button className="bg-[#ffe315] font-semibold px-8">Sign in</Button>
          </div>
          <Button className="text-blue-400 bg-white font-semibold">
            Cancel Sign In
          </Button>
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

export default signin;
