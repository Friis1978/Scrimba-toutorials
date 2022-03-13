import { useState, useEffect } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLTextAreaElement>
      | React.FormEvent<HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("form submit", formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="form--input"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          className="form--input"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <textarea
          className="form--textarea"
          value={formData.comments}
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
        />
        <div className="form--checkbox--wrapper">
          <input
            type="checkbox"
            className="form--checkbox"
            id="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"
          />
          <div className="form--checkbox--button fill-current">
            <svg
              version="1.1"
              viewBox="0 0 17 12"
            >
              <g fill-rule="evenodd">
                <g
                  transform="translate(-9 -11)"
                >
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label className="pl-2" htmlFor="isFriendly">
            Are you friendly?
          </label>
        </div>
        <fieldset className="form--radio--wrapper">
          <legend>Current employment status</legend>

          <div>
            <input
              type="radio"
              className="form--radio"
              id="unemployed"
              name="employment"
              value="unemployed"
              checked={formData.employment === "unemployed"}
              onChange={handleChange}
            />
            <label htmlFor="unemployed">Unemployed</label>
          </div>
          <div>
            <input
              type="radio"
              className="form--radio"
              id="part-time"
              name="employment"
              value="part-time"
              checked={formData.employment === "part-time"}
              onChange={handleChange}
            />
            <label htmlFor="part-time">Part-time</label>
          </div>
          <div>
            <input
              type="radio"
              className="form--radio"
              id="full-time"
              name="employment"
              value="full-time"
              checked={formData.employment === "full-time"}
              onChange={handleChange}
            />
            <label htmlFor="full-time">Full-time</label>
          </div>
        </fieldset>
        <div className="form--select--wrapper flex-col">
          <label htmlFor="favColor">What is your favorite color?</label>
          <select
            id="favColor"
            className="form--select"
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"
          >
            <option value="">-- Choose --</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
        </div>
        <div className="form--submit--wrapper">
          <button className="form--submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
