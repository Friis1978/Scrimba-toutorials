import React from "react";
import servicesData from "./ServicesData";
import { Link } from "react-router-dom";

function ServicesList() {
  const services = servicesData.map((service) => (
    <h3 key={service._id}>
      <Link className="link" to={`/services/${service._id}`}>{service.name}</Link> - $
      {service.price}
    </h3>
  ));

  return (
    <div className="page">
      <h1>Services List Page</h1>
      {services}
    </div>
  );
}

export default ServicesList;
