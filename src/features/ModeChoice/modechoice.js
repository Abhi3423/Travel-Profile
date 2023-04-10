import { Fragment, useEffect, useContext, useState } from "react";
import Tabledata from "./components/tabledata";
import Loading from "../../UI/loading";
import SuccessModal from "../../UI/SuccessModal";
import { DataContext } from "../../shared/provider";
import useCommonHook from "../hooks/useCommonHook";

const ModeChoice = () => {
    const { fetchData } = useContext(DataContext);
    const [crowdData, setCrowdData] = useState({});
    const [serviceTypeData, setServiceTypeData] = useState({});
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const storedPerson = localStorage.getItem("person");
    const person = JSON.parse(storedPerson);
    const {randomField4, randomField5} = useCommonHook()

    useEffect(() => {
        fetchData(person.distance)

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

        setLoading(true)

        setTimeout(() => {
            setOpen(true)
            setLoading(false)
        }, 1000);

    }, []);


    return (
        <Fragment>
            {loading && (
                <SuccessModal successState={loading}>
                    <Loading />
                </SuccessModal>
            )}
            <div className="p-10 flex flex-col gap-4">
                <div className="p-4 text-center border-4 rounded-md bg-blue-300 border-white">
                    <div className="flex flex-col text-5xl font-bold">
                        <p>MODE CHOICE</p>
                    </div>
                </div>
                {open && <Tabledata crowdData={crowdData} serviceTypeData={serviceTypeData} randomField4={randomField4} randomField5={randomField5}/>}

            </div>
        </Fragment>
    );
}

export default ModeChoice;