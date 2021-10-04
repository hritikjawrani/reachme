import React from "react";
import Card from './card'
import Sdata from './Sdata'

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row gy-4">
          
        {
            Sdata.map((curElm,index)=>{
            return <Card
            key={index}
              imgsrc={curElm.imgsrc}
              title={curElm.title}  
            />
            })
        }
        </div>
      </div>
    </>
  );
};

export default Services;
