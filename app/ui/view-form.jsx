'use client';

import { useState } from "react";
import { DeleteIcon } from "./Icons";
import { useRouter } from "next/navigation";

export default function ViewProgram(props) {
  const formdata = props.formdata[0];
  // console.log('view wala',props);
  const [name, setName] = useState(formdata.name);
  const [price, setPrice] = useState(formdata.price);
  const [domain, setDomain] = useState(formdata.domain);
  const [program_type, setProgram_type] = useState(formdata.program_type);
  const [registration_open, setRegistration_open] = useState(
    formdata.registration_open
  );
  const [description, setDescription] = useState(formdata.description);
  const [placement_assurance, setPlacement_assurance] = useState(
    formdata.placement_assurance
  );
  const [image_url, setImage_url] = useState(formdata.image_url);
  const [university_name, setUniversity_name] = useState(
    formdata.university_name
  );
  const [faculty, setFaculty] = useState(formdata.faculty);
  const [hours, setHours] = useState(formdata.hours);
  const [degree, setDegree] = useState(formdata.degree);
  const [criteria, setCriteria] = useState(formdata.criteria);

  const router = useRouter();
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(formdata.id);
    DeleteProgramById(formdata.id);
    router.push('/');
  }

  return (
    <div className="pr-10 h-full focus:outline-none">
      <form  className="w-full">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Viewing Program</h1>
          <p className="text-gray-400 text-xs">
            <span className="text-red-500">*</span>Required to save as program.
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-5">Confirm Program</h2>

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
              readOnly
              value={price}
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
              readOnly
              value={domain}
            ></input>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input
              type="checkbox"
              className="text-blue-500 p-1 px-2 focus:outline-none font-normal"
              name="placement_assurance"
              readOnly
              value={placement_assurance ? placement_assurance : ""}
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
              readOnly
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
                  readOnly
                  value={true}
                  checked={program_type === true}
                />
                <label>FT</label>
              </div>
              <div>
                <input
                  type="radio"
                  className="text-black rounded mx-1 p-1 px-2 focus:outline-none font-normal"
                  name="program_type"
                  required
                  readOnly
                  value={false}
                  checked={program_type === false}
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
                  readOnly
                  value="Yes"
                  checked={registration_open === true}
                />
                <label>Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="registration_open"
                  className="mx-1 p-1 px-2 focus:outline-none font-normal"
                  required
                  readOnly
                  value="No"
                  checked={registration_open === false}
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
              readOnly
              value={university_name}
            ></input>
          </div>
          <div className="flex flex-col gap-0">
            <label htmlFor="name">
              <span className="text-red-500">*</span>Degree
            </label>
            <div className="flex border border-gray-300 items-center rounded">
              <select
                id="dropdown"
                className=" w-full focus:outline-none text-black rounded border-2 border-gray-300 p-1 px-2 focus:outline-none font-normal"
                required
                name="degree"
                readOnly
                value={degree}
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
              readOnly
              value={faculty}
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
              readOnly
              value={hours ? hours : ""}
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
              readOnly
              value={criteria ? criteria : ""}
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
              readOnly
              value={image_url ? image_url : ""}
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
            className="text-black rounded border-2 border-gray-300 p-1 px-2 focus:outline-none font-normal font-normal"
            name="description"
            readOnly
            value={description ? description : ""}
          ></textarea>
        </div>

        {/* Row - 666666666666666666666666666666666666666666 */}
        <div className="flex justify-between ">
          {/* <button
            // disabled={isSubmitting}
            onClick={handleDelete}
            className=" font-semibold flex gap-2 my-4 border border-red-500 p-2 text-red-500 hover:bg-black rounded"
          >
            <DeleteIcon /> Delete
          </button> */}
          {/* <button
            type="submit"
            className="font-semibold my-4 bg-blue-600 p-2 px-3 text-white hover:bg-black hover:border rounded"
          >
            Save Program
          </button> */}
        </div>
      </form>
    </div>
  );
}
