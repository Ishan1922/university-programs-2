"use client";

import { useState } from "react";
import { addProgram } from "../lib/actions";
import { useRouter } from "next/navigation";
import { DeleteIcon, DownArrowIcon } from "./Icons";

export default function AddForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [domain, setDomain] = useState("");
  const [program_type, setProgram_type] = useState("");
  const [registration_open, setRegistration_open] = useState(false);
  const [description, setDescription] = useState();
  const [placement_assurance, setPlacement_assurance] = useState(false);
  const [image_url, setImage_url] = useState("");
  const [university_name, setUniversity_name] = useState("");
  const [faculty, setFaculty] = useState("");
  const [hours, setHours] = useState("");
  const [degree, setDegree] = useState("");
  const [criteria, setCriteria] = useState("");

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    } else if (e.target.name === "domain") {
      setDomain(e.target.value);
    } else if (e.target.name === "program_type") {
      setProgram_type(e.target.value);
    } else if (e.target.name === "registration_open") {
      setRegistration_open(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    } else if (e.target.name === "placement_assurance") {
      setPlacement_assurance(e.target.value);
    } else if (e.target.name === "image_url") {
      setImage_url(e.target.value);
    } else if (e.target.name === "university_name") {
      setUniversity_name(e.target.value);
    } else if (e.target.name === "faculty") {
      setFaculty(e.target.value);
    } else if (e.target.name === "hours") {
      setHours(e.target.value);
    } else if (e.target.name === "degree") {
      setDegree(e.target.value);
    } else if (e.target.name === "criteria") {
      setCriteria(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    const formdata = {
      name,
      price,
      domain,
      program_type,
      registration_open,
      description,
      placement_assurance,
      image_url,
      university_name,
      faculty,
      hours,
      degree,
      criteria,
    };
    console.log(formdata);
    addProgram(formdata);
    router.push("/");
  };
  return (
    <div className="pr-10 h-full">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Add Program</h1>
          <p className="text-gray-400 text-xs">
            <span className="text-red-500">*</span>Required to save as program.
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-5">Confirm Program</h2>

        {/* Row - 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}

        <div className="grid grid-cols-3 items-top justify-start gap-6 font-semibold">
          <div className="grid grid-row-2 gap-0 items-start">
            <label htmlFor="name">
              <span className="text-red-500">*</span>Price
            </label>
            <input
              type="number"
              className="text-black rounded border-2 border-gray-300 p-1 px-2 focus:outline-none font-normal"
              name="price"
              required
              onChange={handleChange}
            ></input>
            <p className="text-gray-400 text-xs mt-1">
              You are licensed to sell at this price
            </p>
          </div>
          <div className="flex flex-col gap-0">
            <label htmlFor="name">
              <span className="text-red-500">*</span>Domain
            </label>
            <input
              type="text"
              className="text-black rounded border-2 border-gray-300 p-1 px-2 focus:outline-none font-normal"
              name="domain"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input
              type="checkbox"
              className="text-blue-500 p-1 px-2 focus:outline-none font-normal"
              name="placement_assurance"
              onChange={handleChange}
            ></input>
            <label htmlFor="name">Placement Assurance</label>
          </div>
        </div>

        {/* Row-22222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}

        <h2 className="text-2xl font-bold my-5">Information</h2>
        <div className="grid grid-cols-3 gap-6 font-semibold">
          <div className="flex flex-col gap-0">
            <label htmlFor="name">
              <span className="text-red-500">*</span>Name
            </label>
            <input
              id="name"
              type="text"
              className="text-black rounded border-2 border-gray-300 p-1 px-2 focus:outline-none font-normal"
              name="name"
              value={name}
              required
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="name">
              <span className="text-red-500">*</span>Program Type
            </label>
            <div className="flex flex-wrap gap-6 font-normal">
              <div>
                <input
                  type="radio"
                  className="text-black rounded mx-1 p-1 px-2 focus:outline-none font-normal"
                  name="program_type"
                  required
                  onChange={handleChange}
                  value={true}

                />
                <label>FT</label>
              </div>
              <div>
                <input
                  type="radio"
                  className="text-black rounded mx-1 p-1 px-2 focus:outline-none font-normal"
                  name="program_type"
                  required
                  onChange={handleChange}
                  value={false}
                />
                <label>PT</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-0">
            <label>
              <span className="text-red-500">*</span>Registration Open
            </label>
            <div className="flex flex-wrap gap-6 font-normal">
              <div>
                <input
                  type="radio"
                  name="registration_open"
                  className="mx-1 p-1 px-2 focus:outline-none font-normal"
                  required
                  onChange={handleChange}
                  value="Yes"
                />
                <label>Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="registration_open"
                  className="mx-1 p-1 px-2 focus:outline-none font-normal"
                  required
                  onChange={handleChange}
                  value="No"
                />
                <label>No</label>
              </div>
            </div>
          </div>
        </div>

        {/* Row- 33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}

        <div className="grid grid-cols-3 gap-6 mt-3 font-semibold">
          <div className="flex flex-col gap-0">
            <label htmlFor="name">
              <span className="text-red-500">*</span>University Name
            </label>
            <input
              type="text"
              className="text-black rounded border-2 border-gray-300 p-1 px-2 focus:outline-none font-normal"
              name="university_name"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col gap-0">
            <label htmlFor="name">
              <span className="text-red-500">*</span>Degree
            </label>
            <div className="flex border border-gray-300 items-center rounded  focus:outline-none font-normal">
              <select
                id="dropdown"
                className="text-black w-full rounded focus:outline-none border-2 border-gray-300 px-2 p-1"
                required
                name="degree"
                onChange={handleChange}
              >
                <option value="option1">Certificate</option>
                <option value="option2">Diploma</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-0">
            <label htmlFor="name">
              <span className="text-red-500">*</span>Faculty
            </label>
            <input
              type="text"
              className="text-black rounded border-2 border-gray-300 p-1 px-2 focus:outline-none font-normal"
              required
              name="faculty"
              onChange={handleChange}
            ></input>
          </div>
        </div>

        {/* Row - 4444444444444444444444444444444444444444444444444444444444444444444444444444 */}

        <div className="grid grid-cols-3 gap-6 mt-3 font-semibold">
          <div className="flex flex-col gap-0">
            <label htmlFor="name">
              <span className="text-red-500">*</span>Hours
            </label>
            <input
              type="number"
              className="text-black rounded border-2 border-gray-300 p-1 px-2 focus:outline-none font-normal"
              name="hours"
              onChange={handleChange}
            ></input>
          </div>

          <div className="flex flex-col gap-0">
            <label htmlFor="name">
              <span className="text-red-500">*</span>Criteria
            </label>
            <input
              type="text"
              className="text-black rounded border-2 border-gray-300 p-1 px-2 focus:outline-none font-normal"
              name="criteria"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col gap-0">
            <label htmlFor="name">
              <span className="text-red-500">*</span>Image URL
            </label>
            <input
              type="text"
              className="text-black rounded border-2 border-gray-300 p-1 px-2 focus:outline-none font-normal"
              name="image_url"
              onChange={handleChange}
            ></input>
          </div>
        </div>

        {/* Row- 555555555555555555555555555555555555555555555555 */}

        <div className="grid grid-cols-1 gap-0 mt-3 font-semibold">
          <label htmlFor="name">
            <span className="text-red-500">*</span>Description
          </label>
          <textarea
            type="text"
            rows={5}
            className="text-black rounded border-2 border-gray-300 p-1 px-2 focus:outline-none font-normal"
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Row - 666666666666666666666666666666666666666666 */}
        <div className="flex justify-end ">
          {/* <button
            // disabled={isSubmitting}
            className=" font-semibold flex gap-2 my-4 border border-red-500 p-2 text-red-500 hover:bg-black rounded"
          >
            <DeleteIcon /> Delete
          </button> */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="font-semibold my-4 bg-blue-900 p-2 px-3 text-white hover:bg-black hover:border rounded"
          >
            Save Program
          </button>
        </div>
      </form>
    </div>
  );
}
