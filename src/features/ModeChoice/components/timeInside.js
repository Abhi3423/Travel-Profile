import { Fragment, useContext } from "react";
import bus from '../../../assets/bus.png'
import subway from '../../../assets/subway.png'
import car from '../../../assets/car.png'
import bike from '../../../assets/bike.png'
import taxi from '../../../assets/taxi.png'
import auto from '../../../assets/auto.png'
import { DataContext } from "../../../shared/provider";

const TimeInside = ({ value4, value5 }) => {
    const { data } = useContext(DataContext);
    return (
        <Fragment>
            <td className="px-6 py-4 flex flex-col gap-2 border-r-2">
                <span className="h-5">
                    {
                        data['Data'][0]['mode_1.trans'] === 0
                            ? ""
                            : `${data['Data'][0]['mode_1.trans']} transfer`
                    }
                </span>
                <div className="flex items-center">
                    <img className="w-8" src={bus} alt="bus" />
                    <span className={
                        data['Data'][0]['mode_1.trans'] === 0
                            ? "hidden"
                            : `flex items-center`
                    }
                    >
                        &gt;
                        <img className="w-12 px-2" src={bus} alt="bus" />
                    </span>
                </div>
                <span>{data['Data'][0]['mode_1.ivtt']} min</span>
            </td>
            <td className="px-6 py-4 flex flex-col gap-2 border-r-2">
                <span className="h-5">
                    {
                        data['Data'][0]['mode_2.trans'] === 0
                            ? ""
                            : `${data['Data'][0]['mode_2.trans']} transfer`
                    }
                </span>
                <div className="flex items-center">
                    <img className="w-8" src={bus} alt="bus" />
                    <span className={
                        data['Data'][0]['mode_2.trans'] === 0
                            ? "hidden"
                            : `flex items-center`
                    }
                    >
                        &gt;
                        <img className="w-12 px-2" src={bus} alt="bus" />
                    </span>
                </div>
                <span>{data['Data'][0]['mode_2.ivtt']} min</span>
            </td>
            <td className="px-6 py-4 flex flex-col gap-2 border-r-2">
                <span className="h-5">
                    {
                        data['Data'][0]['mode_4.trans'] === 0
                            ? ""
                            : `${data['Data'][0]['mode_4.trans']} transfer`
                    }
                </span>
                <div className="flex items-center">
                    <img className="w-8" src={subway} alt="metro/train" />
                    <span className={
                        data['Data'][0]['mode_4.trans'] === 0
                            ? "hidden"
                            : `flex items-center`
                    }
                    >
                        &gt;
                        <img className="w-12 px-2" src={subway} alt="metro/train" />
                    </span>
                </div>
                <span>{data['Data'][0]['mode_4.ivtt']} min</span>
            </td>
            <td className="px-6 py-4 flex flex-col gap-2 border-r-2">
                <span className="h-5"></span>
                <img className="w-8" src={value4 === "mode_8" ? car : bike} />
                <span>{data['Data'][0][`${value4}.ivtt`]} min</span>
            </td>
            <td className="px-6 py-4 flex flex-col gap-2">
                <span className="h-5"></span>
                <img className="w-8" src={value5 === "mode_7" ? auto : taxi} />
                <span>{data['Data'][0][`${value5}.ivtt`]} min</span>
            </td>
        </Fragment>
    );
}

export default TimeInside;