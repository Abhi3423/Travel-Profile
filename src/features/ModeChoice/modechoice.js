import { Fragment, useEffect, useContext, useState } from "react";
import Tabledata from "./tabledata";
import { DataContext } from "../../shared/provider";

const ModeChoice = () => {
    const { fetchData } = useContext(DataContext);
    const [crowdData, setCrowdData] = useState({});
    const [serviceTypeData, setServiceTypeData] = useState({});
    const [open, setOpen] = useState(false)
    const storedPerson = localStorage.getItem("person");
    const person = JSON.parse(storedPerson);

    useEffect(() => {
        fetchData(person.distance)
        console.log(person)
        Promise.all([
            fetch(`${process.env.PUBLIC_URL}/store/crowd.json`),
            fetch(`${process.env.PUBLIC_URL}/store/service_type.json`)
        ])
            .then(([crowdResponse, serviceTypeResponse]) =>
                Promise.all([crowdResponse.json(), serviceTypeResponse.json()])
            )
            .then(([crowdData, serviceTypeData]) => {
                setCrowdData(crowdData);
                setServiceTypeData(serviceTypeData);
            });

        setTimeout(() => {
            setOpen(true)
        }, 1000);

    }, []);


    return (
        <Fragment>
            <div className="p-10 flex flex-col gap-4">
                <div className="p-4 text-center border-4 border-green-500 rounded-md bg-green-300">
                    <div className="flex flex-col text-5xl font-medium">
                        <p>MODE CHOICE</p>
                    </div>
                </div>
                {open && <Tabledata crowdData={crowdData} serviceTypeData={serviceTypeData}/>}

            </div>
        </Fragment>
    );
}

export default ModeChoice;