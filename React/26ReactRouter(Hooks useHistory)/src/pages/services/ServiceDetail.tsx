import React from "react";
import { useParams, useHistory } from "react-router-dom";
import servicesData from "./ServicesData";

// Typescript dont know the content of params
type RouterParams = {
  serviceId: string;
};

function ServiceDetail() {
  const { serviceId } = useParams<RouterParams>();

  // find the content using the id recieved from the router
  const thisService = servicesData.find((service) => service._id === serviceId);

  // the router history will be saved in an array with all the pushed routes
  const history = useHistory();
  console.log(history);

  // {
  //     length: 13,
  //     action: "PUSH",
  //     location: {
  //         pathname: "/services/2",
  //         search: "",
  //         hash: "",
  //         state: null,
  //         key: "nulft8"
  //     },
  //     createHref: createHref(location),
  //     push: push(path, state),
  //     replace: replace(path, state),
  //     go: go(n),
  //     goBack: goBack(),
  //     goForward: goForward(),
  //     block: block(prompt),
  //     listen: listen(listener)
  // }

  function handleClick() {
    // mimic a call to a api, before going back to the other page
    console.log("Submitting...");
    setTimeout(() => {
      // Push to the history array
      history.push("/services");

      // Goes back 1 point in history
      // history.goBack()

      // Go numbers of steps back
      // history.go(-2)

      // Replaces the array in history, history will be deleted
      // history.replace("/services")
    }, 2000);
  }

  return (
    <div className="page">
      <h1>Service Detail Page</h1>
      {thisService && (
        <>
          <h3>
            {thisService.name} - ${thisService.price}
          </h3>
          <p>{thisService.description}</p>
          <button className="mt-10" onClick={handleClick}>
            Go back to all services
          </button>
        </>
      )}
    </div>
  );
}

export default ServiceDetail;
