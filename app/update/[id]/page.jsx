

import { getProgramById } from "../../lib/actions";
import UpdateForm from '../../ui/update-form';

// import { useState } from "react";

export default async function EditProgram(params) {
      const params_id = params.params.id; 
      const curr = await getProgramById(params_id);
      // console.log('this is curr: ',curr);
      return(
            <div className="m-10 min-h-screen">
                  <UpdateForm formdata={curr}/>
            </div>
      )
}

