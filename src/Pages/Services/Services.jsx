import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  return (
    <div>
      <div className="w-1/2 mx-auto">
        <h3 className="text-orange-700 text-center"> Services</h3>
        <h1 className="text-5xl text-center"> Our Service Area</h1>
        <p className="text-center">Du text</p>
      </div>
      <div className="grid grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
