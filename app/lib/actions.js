"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from 'next/cache';

export async function addProgram(formdata) {
  noStore();
  const {
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
  } = formdata;
  try {
    console.log("Reached addProgram");
    await sql`INSERT INTO programs (Name,Price,Domain,Program_type,Registration_open,Description,Placement_assurance,Image_url,University_name,Faculty,Hours,Degree,Criteria)
      VALUES (${name},${price},${domain},${program_type},${registration_open},${description},${placement_assurance},${image_url},${university_name},${faculty},${hours},${degree},${criteria})
      `;

    console.log("New Program added");
    redirect("/");
  } catch (err) {
    return {
      message: "Database error: failed to add program",
    };
  }
}

export async function updateProgram(id, formdata) {
  noStore();
  const {
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
  } = formdata;
  console.log(price);
  try {
    await sql`
      UPDATE programs
      SET Name = ${name},Price = ${price},Domain = ${domain},Program_type = ${program_type},Registration_open = ${registration_open},Description = ${description},Placement_assurance = ${placement_assurance},Image_url = ${image_url},University_name = ${university_name},Faculty=${faculty},Hours = ${hours},Degree = ${degree},Criteria = ${criteria}
      WHERE Id = ${id}
  `;
    console.log('Program updated successfully');
  } catch (err) {
    return {
      message: "Database failed: failed to update program",
    };
  }
}

export async function getProgramById(id) {
  noStore();
  try{
    // console.log('this is program id: ',id);
    const data = await sql`SELECT * FROM programs WHERE id = ${id}`;
    console.log('Program found');
    return data.rows;
  } catch{
    return {
      message: 'Program with given id not found',
    }
  }
}

export async function DeleteProgramById(id) {
  noStore();
  try{
    await sql `DELETE FROM programs WHERE Id = ${id}`;
    alert('Program Deleted');
  } catch(err) {
    return {
      message: 'Program with given id not found',
    }
  }
}
