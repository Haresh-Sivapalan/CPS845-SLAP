import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Card,   } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";

const allmessages = () => {
  return (
    <section className="bg-[#070B27] flex justify-center items-center w-screen h-screen">
      <div className=" flex flex-col gap-4 h-full w-full xl:w-1/2 justify-center items-center">
        <Image
          src="/assets/GouldLogo-02.png"
          alt="logo"
          width={450}
          height={400}
        />
        <div className="flex justify-center"> 
            <div className="bg-white gap-4 h-fit p-10 w-[1200px] flex flex-row relative">
                    
                    <h1 className="absolute top-4 right-10 font-bold text-lg">
                        Message Board
                    </h1>
                {/* Right Column with Reminder Cards */}
                    <div className=" ">
                        <div className="">
                    
                            <div className="bg-white w-[300px] outline outline-1 flex flex-col justify-between p-8 rounded-md"> 
                            <div class="flex justify-between items-center space-x-4 pb-6"> 
                                <label for="cars">All courses</label>
                                <select name="cars" id="cars">
                                    <option value="volvo">All courses</option>
                                    <option value="saab">CPS 714</option>
                                    <option value="opel">CPS 209</option>
                                    <option value="audi">CPS 305</option>
                                </select></div>
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

                            
                            </div>
                        </div>
                    </div>

                    {/* message div */}
                    <div className="p-20 outline outline-1 rounded-md relative">
                        <div className="">
                            <div className="pb-4">
                                <h1 className="font-bold">From: Trudy Smith</h1>
                                <h1 className="font-bold">Subject: Diapositives</h1>
                            </div>
                            
                            <div className="outline outline-1">
                                <div className="p-4">
                                    <p>
                                        Salut tout le monde, est-ce que quelqu’un sait si le professeur a déjà posté les diapositives du cours de cette semaine? Je ne les trouve pas sur la page du cours, et j’ai vraiment besoin de les revoir avant la séance de révision de demain. Si quelqu’un a réussi à les télécharger, ça serait super sympa de me les envoyer. Aussi, est-ce que quelqu’un sait si on aura une session de questions-réponses avant l’examen final? J’ai entendu dire que ça pourrait être le cas, mais je n’ai rien vu d’officiel sur le portail. Merci d’avance pour vos réponses !
                                    </p>
                                </div>
                            </div>

                            {/* Reply Button */}
                            <button className="rounded-md absolute bottom-4 right-4 bg-[#FFE315] text-black font-bold py-2 px-10 rounded hover:bg-yellow-600">
                                Reply
                            </button>
                        </div>
                    </div>


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

export default allmessages;
