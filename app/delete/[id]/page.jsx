import {DeleteProgramById} from '../../lib/actions';

export default function DeleteProgram(params) {
      const params_id = params.params.id;
      DeleteProgramById(params_id);
      return (
            <div>
                  hello
            </div>
      )
};