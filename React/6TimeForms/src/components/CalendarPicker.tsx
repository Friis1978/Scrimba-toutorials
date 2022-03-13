import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import Timepicker from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

type SailingSchedule = {
  port: string;
  vessel: string;
  from: Date;
  to: Date;
};

enum PortList {
  CPH = "Copenhagen",
  AAL = "Ålborg",
  AAR = "Århus",
  ESB = "Esbjerg",
  GED = "Gedser",
}

enum VesselList {
  MAR = "Margrethe",
  ING = "Ingrid",
  CHR = "Christian",
  FRE = "Frederik",
  JOA = "Joakim",
}

const CalendarPicker = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm<{
    from: Date;
    to: Date;
    vessel: string;
    port: string;
  }>({
    defaultValues: {},
  });

  const now = new Date();
  let nextDate = new Date();
  nextDate.setDate(now.getDate() + 7);

  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {}, [console.log("errors", errors)]);

  const customStyles = {
    input: (provided:any, state:any) => ({
      ...provided,
      color: state.isSelected ? 'red' : 'blue',
      padding: 4.5,
      outlineColor: 'red'
    }),
  }

  const selectStyle = {
    control: (base:any, state:any) => ({
      ...base,
      border: "0 !important",
      boxShadow: "0 !important",
      "&:hover": {
        border: "0 !important",
      },
      paddingTop:2.5,
      paddingBottom:2.5,
    }),
    menu: (base:any, state:any) => ({
      ...base,
      //backgroundColor: "#42a5f5"
    }),
    menuList: (base:any, state:any) => ({
      ...base,
      backgroundColor: ""
    }),
    option: (base:any, state:any) => ({
      ...base,
      backgroundColor: state.isSelected ? "#42a5f5" : null,
      "&:hover": {
        backgroundColor: "#1F374A",
        color: "white"
      },
    })

  };
  

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex justify-around bg-gray-300 py-8">
      <form
        className="grid grid-cols-5 gap-x-6 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          render={({ field }) => {
            return (
              <div {...register("from", { required: true })}>
                <Timepicker
                  className={`inputfield shadow-small focus:outline-none ${
                    errors.from && "border-2 border-red-500"
                  }`}
                  options={{ minDate: now, dateFormat: "d/m-Y" }}
                  onChange={(val) => {
                    field.onChange(val[0]);
                  }}
                />
              </div>
            );
          }}
          name="from"
          control={control}
        />
        <Controller
          render={({ field }) => {
            return (
              <div {...register("to", { required: true, validate: {
                shorterThanFirstName: value => value > getValues().from,
              } })}>
                <Timepicker
                  className={`inputfield shadow-small focus:outline-none ${
                    errors.to && "border-2 border-red-500"
                  }`}
                  options={{ minDate: now, dateFormat: "d/m-Y" }}
                  onChange={(val) => {
                    field.onChange(val[0]);
                  }}
                />
                {errors.to && field.value < getValues().from && (<p className="absolute">datoen skal være større end fra datoen</p>)}
              </div>
              
            );
          }}
          name="to"
          control={control}
        />
        <Controller
          render={({ field }) => {
            return (
              <Select         
                {...register("port", { required: true })}
                options={Object.values(PortList).map((val, i) => {
                  return { value: val, label: val };
                })}
                onChange={(val) => {
                  field.onChange(val?.value);
                }}
                value={{ value: field.value, label: field.value }}
                className={`rounded-md focus:outline-red-500 shadow-small ${
                  errors.port && "border border-red-500"
                }`}
                styles={selectStyle}
              />
            );
          }}
          name="port"
          control={control}
        />

        <Controller
          render={({ field }) => {
            return (
              <Select
                {...register("vessel", { required: true })}
                options={Object.values(VesselList).map((val, i) => {
                  return { value: val, label: val };
                })}
                onChange={(val) => {
                  field.onChange(val?.value);
                }}
                value={{ value: field.value, label: field.value }}
                className={`focus:outline-red-500 shadow-small ${
                  errors.vessel && "border border-red-500 rounded-md"
                }`}
                styles={selectStyle}
              />
            );
          }}
          name="vessel"
          control={control}
        />
        <div className="flex flex-col">
          <button
            type="submit"
            disabled={loading}
            className={`block bg-dark font-medium px-5 py-2 rounded-md hover:bg-gray-600 text-white shadow-small hover:text-white"
            }`}
          >
            Add Schedule
          </button>
        </div>
      </form>
    </div>
  );
};
export default CalendarPicker;
