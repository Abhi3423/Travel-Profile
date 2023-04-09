import { Fragment } from "react";
import QuestionForm from "./questionfom";
import road from "../../assets/road.svg"

const Home = () => {
    return (
        <Fragment>
            <div className="flex gap-4 h-screen">
                <div className="p-10 flex flex-col gap-5">
                    <div className="w-full flex justify-center">
                        <div className="p-4 w-fit border-4 rounded-md bg-blue-300">
                            <div className="flex flex-col text-3xl font-medium">
                                <p>RESPONDENT</p>
                                <p>TRAVEL PROFILE</p>
                            </div>
                            <span className="font-normal text-lg mt-2">Connecting You with Your Ideal Travel Experience</span>
                        </div>
                    </div>

                    <div className="w-full flex justify-center">
                        <div className="p-4 w-fit border-4 rounded-md bg-blue-300 flex justify-center">
                            <p className="text-3xl font-medium">DETAILS</p>
                        </div>
                    </div>

                    <QuestionForm />
                </div>
                <div className="hidden lg:flex ">
                    <img className="h-screen" src={road} />
                </div>
            </div>
        </Fragment>
    );
}

export default Home;