import { Fragment, useContext} from "react";
import { DataContext } from "../../../shared/provider";
import TimeInside from "./timeInside";
import Crowd from "./crowd";
import ServiceType from "./servicetype";

const Tabledata = ({ crowdData, serviceTypeData, randomField4, randomField5 }) => {
    const { data } = useContext(DataContext);
    const storedPerson = localStorage.getItem("person");
    const person = JSON.parse(storedPerson);
    const value4 = person.mode === "Own Car" ? 'mode_8' : person.mode === "Own Two-wheeler" ? 'mode_9' : randomField4
    const value5 = person.mode === "Auto" ? 'mode_7' : person.mode === "Ride-hailing Car" ? 'mode_5' : randomField5

    return (
        <Fragment>
            <table className="w-full text-left border-4 border-gray-500 rounded-md">
                <tbody className="font-semibold">
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <td className="px-6 py-4 border-r-2">{data['Data'][0].mode_1}</td>
                        <td className="px-6 py-4 border-r-2">{data['Data'][0].mode_2}</td>
                        <td className="px-6 py-4 border-r-2">{data['Data'][0].mode_4}</td>
                        <td className="px-6 py-4 border-r-2">{data['Data'][0][value4]}</td>
                        <td className="px-6 py-4">{data['Data'][0][value5]}</td>
                    </tr>

                    {/* Time Inside Vehicle */}
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <td className="py-1 col-span-5 text-center font-semibold text-base bg-blue-500">Total travel time spent while inside the vehicle(s)</td>
                    </tr>
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <TimeInside value4={value4} value5={value5}/>
                    </tr>

                    {/* Time Outside Vehicle */}
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <td className="py-1 col-span-5 text-center font-semibold text-base bg-blue-500">Total travel time spent while outside vehicle(s)</td>
                    </tr>
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <td className="px-6 py-4 border-r-2">{data['Data'][0]['mode_1.walktime'] + data['Data'][0]['mode_1.waittime']} min</td>
                        <td className="px-6 py-4 border-r-2">{data['Data'][0]['mode_2.walktime'] + data['Data'][0]['mode_2.waittime']} min</td>
                        <td className="px-6 py-4 border-r-2">{data['Data'][0]['mode_4.walktime'] + data['Data'][0]['mode_4.waittime']} min</td>
                        <td className="px-6 py-4 border-r-2">{data['Data'][0][`${value4}.walktime`] + data['Data'][0][`${value4}.waittime`]} min</td>
                        <td className="px-6 py-4">{data['Data'][0][`${value5}.walktime`] + data['Data'][0][`${value5}.waittime`]} min</td>
                    </tr>


                    {/* Delay */}
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <td className="py-1 col-span-5 text-center font-semibold text-base bg-blue-500">Possible delay due to traffic congestion or other uncertainties</td>
                    </tr>
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <td className="px-6 py-4 border-r-2">... up to {data['Data'][0]['mode_1.tvariab']} min more</td>
                        <td className="px-6 py-4 border-r-2">... up to {data['Data'][0]['mode_2.tvariab']} min more</td>
                        <td className="px-6 py-4 border-r-2">... up to {data['Data'][0]['mode_4.tvariab']} min more</td>
                        <td className="px-6 py-4 border-r-2">... up to {data['Data'][0][`${value4}.tvariab`]} min more</td>
                        <td className="px-6 py-4">... up to {data['Data'][0][`${value5}.tvariab`]} min more</td>
                    </tr>


                    {/* One Way Cost */}
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <td className="py-1 col-span-5 text-center font-semibold text-base bg-blue-500">Total one-way cost of travel</td>
                    </tr>
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <td className="px-6 py-4 border-r-2"> Rs. {data['Data'][0]['mode_1.tcost']}</td>
                        <td className="px-6 py-4 border-r-2"> Rs. {data['Data'][0]['mode_2.tcost']}</td>
                        <td className="px-6 py-4 border-r-2"> Rs. {data['Data'][0]['mode_4.tcost']}</td>
                        <td className="px-6 py-4 border-r-2"> Rs. {data['Data'][0][`${value4}.tcost`]}</td>
                        <td className="px-6 py-4"> Rs. {data['Data'][0][`${value5}.tcost`]}</td>
                    </tr>


                    {/* Crowding */}
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <td className="py-1 col-span-5 text-center font-semibold text-base bg-blue-500">Extent of crowding in the vehicle</td>
                    </tr>
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <Crowd crowdData={crowdData} value4={value4} value5={value5}/>
                    </tr>


                    {/* Service Type */}
                    <tr className="w-full grid grid-cols-5 bg-white border-b-4 border-gray-500">
                        <td className="py-1 col-span-5 text-center font-semibold text-base bg-blue-500">Service type</td>
                    </tr>
                    <tr className="w-full grid grid-cols-5 bg-white">
                       <ServiceType serviceTypeData={serviceTypeData} value4={value4} value5={value5}/>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
}

export default Tabledata;