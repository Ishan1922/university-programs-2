// import {sql} from '@vercel/postgres';

// export async function fetchAllPrograms() {
//       try{
//             const data = await sql`SELECT * FROM programs`;
//             // console.log('all Data fetched 1');
//             // console.log("table is : ",data);
//             return data.rows;
//       } catch(err) {
//             console.error('Data not fetched 1 : ',err);
//             throw new Error('Failed to fetch all programs');
//       }
// };