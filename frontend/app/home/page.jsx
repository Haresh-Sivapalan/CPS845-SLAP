import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";

const Landing = () => {
  return (
    <section className="bg-[#F3F3F3] min-h-screen">
      {/* Navbar */}
      <nav className="bg-[#191F48] w-full p-4">
        <div className="container flex items-center">
          <Image
            src="/assets/GouldLogo-02.png" 
            alt="Logo"
            width={450}
            height={50}
            className="object-contain"
          />
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex justify-center place-items-top"> 
      <div className="w-[900px] p-4 rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Course Hompage</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full bg-white p-4 rounded-md">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="py-4 flex flex-col items-center justify-center">
                <CardBody className=" py-2 flex justify-center overflow-visible">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl h-48 w-96 "
                    src="https://onetreeplanted.org/cdn/shop/articles/Healthy_Forest_30c85fe5-6bca-45d3-ad0b-054f94dbef76_3000x.jpg?v=1689261462"
                 
                  />
                </CardBody>
                <CardFooter className="pb-0 pt-2 px-4 flex flex-col items-center justify-center text-center">
                  <p className="text-tiny uppercase font-bold">CPS 985</p>
                  <h4 className="font-bold text-large">Cryptography</h4>
                </CardFooter>
              </Card>
            ))}
          </div>
          <h1 className="text-center">View Courses</h1>
        </div>
        {/* Right Column with Reminder Cards */}
        <div className="pt-20 ">
            <div>
          <div className="pb-4">
          <Button className="bg-[#FFE315] w-full p">Create new Message</Button>
          </div>
        <div className="bg-white w-[300px]  flex flex-col justify-between p-8 rounded-md"> 
          
          <Card className="bg-[#F9F9F9] mb-4 flex-1 p-2"> 
            <h1 className="font-bold text-md">Dr. Bill Nye</h1>
            Reminder: The midterm exam will be held this Friday at 10 AM in Room 302. Please review ...
          </Card>
          <Card className="bg-[#F9F9F9] mb-4 flex-1 p-2"> 
            <h1 className="font-bold text-md">Dr. Marie Curie</h1>
            Reminder: Your lab report is due next Wednesday. Please ensure all sections are completed.
          </Card>
          <Card className="bg-[#F9F9F9] flex-1 p-2 mb-4"> 
            <h1 className="font-bold text-md">Dr. Albert Einstein</h1>
            Reminder: Final project proposals are due at the end of the month. Start planning your topic.
          </Card>

          <h1  className="text-center">View All Messages</h1>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
