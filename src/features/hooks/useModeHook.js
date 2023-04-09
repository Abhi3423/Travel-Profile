import { useState } from "react";


const useModeHook = () => {

    const [contentArray, setContentArray] = useState([]);
    // let ok = []

    // const set_json = {
    //     "<5km": `${process.env.PUBLIC_URL}/store/sample_db_0km.json`,
    //     "5-10km": `${process.env.PUBLIC_URL}/store/sample_db_5km.json`,
    //     "10-15km": `${process.env.PUBLIC_URL}/store/sample_db_10km.json`,
    //     "15-20km": `${process.env.PUBLIC_URL}/store/sample_db_15km.json`,
    //     "20-25km": `${process.env.PUBLIC_URL}/store/sample_db_20km.json`,
    //     ">25km": `${process.env.PUBLIC_URL}/store/sample_db_25km.json`,
    // };


    const checkjson = (values) => {
        const storedPerson = localStorage.getItem("person");
        const person = JSON.parse(storedPerson);
        // const url = set_json[person.distance];
        // console.log(url)

        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         setContentArray(data)
        //     })
        //     .catch(error => console.error(error));
        console.log(contentArray)
    };

    const values = {
        checkjson,
        contentArray,
    };
    return values;
};

export default useModeHook;
