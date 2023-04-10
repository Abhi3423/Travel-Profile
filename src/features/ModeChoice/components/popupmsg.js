import { Fragment, useContext } from "react";
import { DataContext } from "../../../shared/provider";

const Popupmsg = ({ mode, crowdData, serviceTypeData }) => {
    const { data } = useContext(DataContext);
    console.log(mode)
    return (
        <Fragment>
            <div className="bg-white rounded-md fixed z-50 p-8 flex-col text-base justify-center items-center">
                <div className="flex flex-col gap-2 font-medium">                
                    <h1 className="text-green-500 text-4xl text-center py-2">THANK YOU!!</h1>
                    <span>Your selected mode is {data['Data'][0][mode]}</span>
                    <span>Your Total travel time spent while inside the vehicle(s) will be : {data['Data'][0][`${mode}.ivtt`]} min</span>
                    <span>Your Total travel time spent while outside vehicle(s) will be : {data['Data'][0][`${mode}.walktime`] + data['Data'][0][`${mode}.waittime`]} min</span>
                    <span>The Possible delay due to traffic congestion or other uncertainties will be : {data['Data'][0][`${mode}.tvariab`]} min</span>
                    <span>Total one-way cost of travel :  Rs. {data['Data'][0][`${mode}.tcost`]}</span>
                    <span>Extent of crowding in the vehicle will be: {crowdData[data['Data'][0][`${mode}.crowd`]]}</span>
                    <span>Service type : {serviceTypeData[data['Data'][0][`${mode}.serv`]]}</span>
                </div>
            </div>

        </Fragment>
    );
}

export default Popupmsg;