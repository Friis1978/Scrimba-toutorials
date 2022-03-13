import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "./ServicesData";

// Typescript dont know the content of params
type RouterParams = {
  serviceId: string;
};

function ServiceDetail() {
  const { serviceId } = useParams<RouterParams>();

  // find the content using the id recieved from the router
  const thisService = servicesData.find((service) => service._id === serviceId);

  return (
    <div>
      <h1>Service Detail Page</h1>
      {thisService && (
        <>
          <h3>
            {thisService.name} - ${thisService.price}
          </h3>
          <p>{thisService.description}</p>
        </>
      )}
    </div>
  );
}

export default ServiceDetail;
