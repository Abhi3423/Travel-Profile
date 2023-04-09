import { Fragment, useContext } from "react";
import { DataContext } from "../../../shared/provider";
import many from '../../../assets/many.png'
import some from '../../../assets/some.png'
import standingman from '../../../assets/standing-man.png'
import full from '../../../assets/full.png'

const Crowd = ({ crowdData, value4, value5 }) => {
    const { data } = useContext(DataContext);
    const checksrc = (value) => {
        console.log("checksrc value:", value);
        switch (value) {
            case 1:
                return many;
            case 2:
                return some;
            case 3:
                return standingman;
            case 4:
                return full;
            default:
                console.warn("Invalid value for checksrc:", value);
                return null;
        }
    }
    return (
        <Fragment>
            <td className="px-6 py-4 flex flex-col gap-2">
                <img className="w-10" src={checksrc(data['Data'][0]['mode_1.crowd'])} />
                <span>{crowdData[data['Data'][0]['mode_1.crowd']]}</span>
            </td>

            <td className="px-6 py-4 flex flex-col gap-2">
                <img className="w-10" src={checksrc(data['Data'][0]['mode_2.crowd'])} />
                <span>{crowdData[data['Data'][0]['mode_2.crowd']]}</span>
            </td>

            <td className="px-6 py-4 flex flex-col gap-2">
                <img className="w-10" src={checksrc(data['Data'][0]['mode_4.crowd'])} />
                <span>{crowdData[data['Data'][0]['mode_4.crowd']]}</span>
            </td>

            <td className="px-6 py-4 flex flex-col gap-2">
                <img className="w-10" src={checksrc(data['Data'][0][`${value4}.crowd`])} />
                <span>{crowdData[data['Data'][0][`${value4}.crowd`]]}</span>
            </td>

            <td className="px-6 py-4 flex flex-col gap-2">
                <img className="w-10" src={checksrc(data['Data'][0][`${value5}.crowd`])} />
                <span>{crowdData[data['Data'][0][`${value5}.crowd`]]}</span>
            </td>
        </Fragment>
    );
}

export default Crowd;