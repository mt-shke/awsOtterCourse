import { createCar } from "@/graphql/mutations";
import { API } from "aws-amplify";
import { useState } from "react";

interface IFormCreate {
   fetchCars: () => void;
}

const FormCreate: React.FC<IFormCreate> = ({ fetchCars }) => {
   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (isSubmitting === true) {
         return;
      }
      setIsSubmitting(true);
      try {
         const { target } = e;
         const res = await API.graphql({
            query: createCar,
            variables: {
               input: {
                  name: target.name.value,
                  description: target.description.value,
                  carType: target.carType.value,
               },
            },
         });

         if (!res) {
            throw new Error("Error submitting form");
         }
         fetchCars();
      } catch (error) {
         console.log("Error handling form: ", error);
      } finally {
         setIsSubmitting(false);
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
            <button
               className={`${isSubmitting ? "bg-red-200" : ""} `}
               disabled={isSubmitting}
               type="submit"
            >
               Submit
            </button>
         </form>
      </section>
   );
};
export default FormCreate;
