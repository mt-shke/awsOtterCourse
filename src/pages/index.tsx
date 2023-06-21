import { carEnum } from "@/API";
import { createCar } from "@/graphql/mutations";
import { listCars } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";

const Home = () => {
   const [cars, setCars] = useState<null | ICar[]>(null);

   useEffect(() => {
      const fetchCars = async () => {
         const res = await API.graphql({
            query: listCars,
         });
         if (!isGraphQLResultForListCars(res)) {
            throw new Error("Error fetching listCars");
         }
         if (!res.data) {
            throw new Error("No data received while fetching listCars");
         }

         setCars(res.data.listCars.items);
      };

      fetchCars();
   }, []);

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
      <main className="flex flex-col gap-10 items-center text-black">
         <section>
            <ul>
               {cars &&
                  cars.length >= 1 &&
                  cars.map((car) => (
                     <li key={car.id}>
                        {car.name} - {car.carType} - {car.description}
                     </li>
                  ))}
            </ul>
         </section>

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
      </main>
   );
};

export default withAuthenticator(Home);
// export default Home

interface ICar {
   id: string;
   name: string;
   description: string;
   carType: carEnum;
}

const isGraphQLResultForListCars = (
   response: any
): response is GraphQLResult<{
   listCars: { items: ICar[] };
}> => {
   return (
      response.data && response.data.listCars && response.data.listCars.items
   );
};
