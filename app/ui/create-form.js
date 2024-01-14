'use client';

import {addProgram} from '../lib/actions';

export default function AddForm() {
  
  return (
    <form onSubmit={addProgram}>
      <div className="flex flex-row gap-16">
        {/* first column */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input type="text" className="text-black rounded" name='name' required></input>

          <label htmlFor="name">Price</label>
          <input type="number" className="text-black rounded" name='price' required></input>

          <label htmlFor="name">Domain</label>
          <input type="text" className="text-black rounded" name='domain' required></input>

          <label htmlFor="name">Program Type</label>
          <input type="text" className="text-black rounded" name='program_type' required></input>

          <div className="flex flex-col gap-1">
            <label>Registration Open</label>
            <div className="flex flex-wrap gap-6">
              <div>
                <input
                  type="radio"
                  name="registration_open"
                  className="mx-1"
                  required
                />
                <label>Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="registration_open"
                  className="mx-1"
                  required
                />
                <label>No</label>
              </div>
            </div>
          </div>

          <label htmlFor="name">Description</label>
          <input type="text" className="text-black rounded" name='description'></input>

          <div className="flex flex-row gap-2 my-2">
            <input type="checkbox" className="text-blue-500" name='placement_assurance'></input>
            <label htmlFor="name">Placement Assurance</label>
          </div>
          <button type="submit" className="my-4 bg-blue-700 py-1 rounded-lg">
            Submit
          </button>
        </div>

        {/* second column */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Image URL</label>
          <input type="text" className="text-black rounded" name='image_url'></input>

          <label htmlFor="name">University Name</label>
          <input type="text" className="text-black" name='university_name'></input>
          <label htmlFor="name">Faculty</label>
          <input type="text" className="text-black rounded" required name='faculty'></input>

          <label htmlFor="name">Hours</label>
          <input type="number" className="text-black rounded" name='hours'></input>

          <label htmlFor="name">Degree</label>
          <select
            id="dropdown"
            className="text-black block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-2 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            required name='degree'
          >
            <option value="option1">Certificate</option>
            <option value="option2">Diploma</option>
          </select>

          <label htmlFor="name">Criteria</label>
          <input type="text" className="text-black rounded" name='criteria'></input>
        </div>
      </div>
    </form>
  );
}
