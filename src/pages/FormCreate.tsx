import { createCar } from "@/graphql/mutations";
import { API } from "aws-amplify";

const FormCreate: React.FC = () => {
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const { target } = e;
         await API.graphql({
            query: createCar,
            variables: {
               input: {
                  name: target.name.value,
                  description: target.description.value,
                  carType: target.carType.value,
               },
            },
         });
      } catch (error) {
         console.log("Error handling form: ", error);
      }
   };

   return (
      <section>
         <form
            onSubmit={handleSubmit}
            className="w-[600px] flex flex-col gap-4 p-6 m-4 bg-slate-400 text-black"
         >
            <input placeholder="name" name="name" />
            <input placeholder="description" name="description" />
            <select name="carType" defaultValue={"berline"}>
               <option value={"berline"}>berline</option>
               <option value={"break"}>break</option>
               <option value={"suv"}>suv</option>
               <option value={"coupe"}>coupe</option>
            </select>
            <button type="submit">Submit</button>
         </form>
      </section>
   );
};
export default FormCreate;
