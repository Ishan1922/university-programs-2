'use server';

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function addProgram(formdata) {
  try{
      await sql `
      INSERT INTO programs (name,price,domain,program_type,registration_open,description,placement_assurance,image_url,university_name,faculty,hours,degree,criteria)
      VALUES (${formdata.name},${formdata.price},${formdata.domain},${formdata.formdataram_type},${formdata.registration_open},${formdata.description},${formdata.placement_assurance},${formdata.image_url},${formdata.university_name},${formdata.faculty},${formdata.hours},${formdata.degree},${formdata.criteria});
      `;

      console.log('New Program added');
      redirect('/');
  } catch(err) {
      return {
            message: 'Database error: failed to add program',
      };
  }
  
}
