import { getProgramById } from "../../lib/actions";
import ViewProgram from '../../ui/view-form';

export default async function Page(props) {
      const id = props.params.id;
      const d = await getProgramById(id);
      // console.log(d);

      return(
            <div className="pl-10 pt-10">
                  <ViewProgram formdata={d}/>
            </div>
      )
}