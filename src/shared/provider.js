import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [data, setData] = useState([]);
  
  const set_json = {
    "<5km": `${process.env.PUBLIC_URL}/store/sample_db_0km.json`,
    "5-10km": `${process.env.PUBLIC_URL}/store/sample_db_5km.json`,
    "10-15km": `${process.env.PUBLIC_URL}/store/sample_db_10km.json`,
    "15-20km": `${process.env.PUBLIC_URL}/store/sample_db_15km.json`,
    "20-25km": `${process.env.PUBLIC_URL}/store/sample_db_20km.json`,
    ">25km": `${process.env.PUBLIC_URL}/store/sample_db_25km.json`,
  };
  
  const fetchData = async (distance) => {
    const url = set_json[distance];
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data)

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};
