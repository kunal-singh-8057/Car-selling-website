import React, { useEffect, useState } from "react";
import CarsCard from "./CarsCard";
import  Axios  from "axios";

const OurCars = () => {
  
  const[users,setusers] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:4500/api/v1/viewcars")
    .then((response)=>{
      setusers(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  

  return (
    <div className=" container pt-24">
      <div>
        <h1 className=" font-bold text-4xl text-center">
          Our <span className=" text-primary">Cars</span>
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {users.map((user) => {
          return (
            <div>
              <CarsCard
                key={user.id}
                img={user.img}
                name={user.name}
                price={user.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurCars;
