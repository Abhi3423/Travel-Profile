import { Fragment } from "react";
import QuestionForm from "./questionfom";

const Home = () => {
    return (
        <Fragment>
            <div className="p-10 flex flex-col gap-4">
                <div className="p-4 text-center border-4 border-green-500 rounded-md bg-green-300">
                    <div className="flex flex-col text-5xl font-medium">
                        <p>RESPONDENT</p>
                        <p>TRAVEL PROFILE</p>
                    </div>
                </div>
                <QuestionForm/>
            </div>
        </Fragment>
    );
}

export default Home;