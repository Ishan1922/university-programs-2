'use client';

import { useReducer, useState } from "react";
import { updateProgram } from "../lib/actions";
import { useRouter } from "next/navigation";

export default function UpdateForm(props) {
  // console.log('find id: ',props);
  const formdata = props.formdata[0];
  // console.log(formdata);
  const [name, setName] = useState(formdata.name);
  const [price, setPrice] = useState(formdata.price);
  const [domain, setDomain] = useState(formdata.domain);
  const [program_type, setProgram_type] = useState(formdata.program_type);
  const [registration_open, setRegistration_open] = useState(formdata.registration_open);
  const [description, setDescription] = useState(formdata.description);
  const [placement_assurance, setPlacement_assurance] = useState(formdata.placement_assurance);
  const [image_url, setImage_url] = useState(formdata.image_url);
  const [university_name, setUniversity_name] = useState(formdata.university_name);
  const [faculty, setFaculty] = useState(formdata.faculty);
  const [hours, setHours] = useState(formdata.hours);
  const [degree, setDegree] = useState(formdata.degree);
  const [criteria, setCriteria] = useState(formdata.criteria);

  const router = useRouter();

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
    e.preventDefault();
    const NewFormdata = {
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
    // console.log('new f: ',NewFormdata);
    updateProgram(formdata.id,NewFormdata);
    router.push('/');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row gap-16">
        {/* first column */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="text-black rounded"
            name="name"
            value={name?name:""}
            required
            onChange={handleChange}
          ></input>

          <label htmlFor="name">Price</label>
          <input
            type="number"
            className="text-black rounded"
            name="price"
            required
            onChange={handleChange}
            value={price}
          ></input>

          <label htmlFor="name">Domain</label>
          <input
            type="text"
            className="text-black rounded"
            name="domain"
            required
            onChange={handleChange}
            value={domain}
          ></input>

          <label htmlFor="name">Program Type</label>
          <div className="flex flex-wrap gap-6">
            <div>
              <input
                type="radio"
                className="text-black rounded"
                name="program_type"
                required
                onChange={handleChange}
                value="FT"
                checked={program_type==="FT"}
              />
              <label>FT</label>
            </div>
            <div>
              <input
                type="radio"
                className="text-black rounded"
                name="program_type"
                required
                onChange={handleChange}
                value="PT"
                checked={program_type==="PT"}
              />
              <label>PT</label>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label>Registration Open</label>
            <div className="flex flex-wrap gap-6">
              <div>
                <input
                  type="radio"
                  name="registration_open"
                  className="mx-1"
                  required
                  onChange={handleChange}
                  value={registration_open}
                  checked={registration_open===true}
                />
                <label>Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="registration_open"
                  className="mx-1"
                  required
                  onChange={handleChange}
                  value={registration_open}
                  checked={registration_open===false}
                />
                <label>No</label>
              </div>
            </div>
          </div>

          <label htmlFor="name">Description</label>
          <input
            type="text"
            className="text-black rounded"
            name="description"
            onChange={handleChange}
            value={description?description:""}
          ></input>

          <div className="flex flex-row gap-2 my-2">
            <input
              type="checkbox"
              className="text-blue-500"
              name="placement_assurance"
              onChange={handleChange}
              value={placement_assurance?placement_assurance:""}
            ></input>
            <label htmlFor="name">Placement Assurance</label>
          </div>
            <button type="submit" className="my-4 bg-blue-700 p-1 hover:bg-black hover:border rounded-lg">
              Submit
            </button>
        </div>

        {/* second column */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Image URL</label>
          <input
            type="text"
            className="text-black rounded"
            name="image_url"
            onChange={handleChange}
            value={image_url?image_url:""}
          ></input>

          <label htmlFor="name">University Name</label>
          <input
            type="text"
            className="text-black"
            name="university_name"
            onChange={handleChange}
            value={university_name?university_name:""}
          ></input>
          <label htmlFor="name">Faculty</label>
          <input
            type="text"
            className="text-black rounded"
            required
            name="faculty"
            onChange={handleChange}
            value={faculty}
          ></input>

          <label htmlFor="name">Hours</label>
          <input
            type="number"
            className="text-black rounded"
            name="hours"
            onChange={handleChange}
            value={hours?hours:""}
          ></input>

          <label htmlFor="name">Degree</label>
          <select
            id="dropdown"
            className="text-black block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-2 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            required
            name="degree"
            onChange={handleChange}
            value={degree}
          >
            <option value="option1">Certificate</option>
            <option value="option2">Diploma</option>
          </select>

          <label htmlFor="name">Criteria</label>
          <input
            type="text"
            className="text-black rounded"
            name="criteria"
            onChange={handleChange}
            value={criteria?criteria:""}
          ></input>
        </div>
      </div>
    </form>
  );
}
