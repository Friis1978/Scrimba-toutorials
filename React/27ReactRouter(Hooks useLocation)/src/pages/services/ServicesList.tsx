import React from "react";
import servicesData from "./ServicesData";
import { Link, useLocation } from "react-router-dom";

function ServicesList() {
  const location = useLocation()
    console.log(location)

    /*
        use the location, to be able to get the path & the parameters, 
        if the user is searching for specific product fx

        This is how the location object will look
    */
    
// {
//     pathname: "/services", 
//     search: "?something=hello&blah=goodbye", 
//     hash: "", 
//     state: null, 
//     key: "qyfp8w"
// }

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
