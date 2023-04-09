import { Fragment, useContext } from "react";
import { DataContext } from "../../../shared/provider";
import ordinary from '../../../assets/ordinary.png'
import nonac from '../../../assets/non-ac.png'
import ac from '../../../assets/ac.png'

const ServiceType = ({ serviceTypeData, value4, value5 }) => {
    const { data } = useContext(DataContext);
    const checksrc = (value) => {
        console.log("checksrc value:", value);
        switch (value) {
            case 1:
                return ordinary;
            case 2:
                return ac;
            case 3:
                return nonac;
            default:
                console.warn("Invalid value for checksrc:", value);
                return null;
        }
    }
    return (
        <Fragment>
            <td className="px-6 py-4 flex flex-col gap-2">
                <img className="w-8" src={checksrc(data['Data'][0]['mode_1.serv'])} />
                {serviceTypeData[data['Data'][0]['mode_1.serv']]}
            </td>
            <td className="px-6 py-4 flex flex-col gap-2">
                <img className="w-8" src={checksrc(data['Data'][0]['mode_2.serv'])} />
                {serviceTypeData[data['Data'][0]['mode_2.serv']]}
            </td>
            <td className="px-6 py-4 flex flex-col gap-2">
                <img className="w-8" src={checksrc(data['Data'][0]['mode_4.serv'])} />
                {serviceTypeData[data['Data'][0]['mode_4.serv']]}
            </td>
            <td className="px-6 py-4 flex flex-col gap-2">
                {serviceTypeData[data['Data'][0][`${value4}.serv`]]}
            </td>
            <td className="px-6 py-4 flex flex-col gap-2">
                <img className="w-8" src={checksrc(data['Data'][0][`${value5}.serv`])} />
                {serviceTypeData[data['Data'][0][`${value5}.serv`]]}
            </td>
        </Fragment>
    );
}

export default ServiceType;