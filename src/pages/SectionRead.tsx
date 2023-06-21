import { carEnum } from "@/API";
import { listCars } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import ButtonDelete from "./ButtonDelete";

const SectionRead: React.FC = () => {
   const [cars, setCars] = useState<null | ICar[]>(null);

   useEffect(() => {
      fetchCars();
   }, []);

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

   return (
      <section>
         <ul className="flex flex-col gap-2 bg-green-100 p-4 rounded">
            {cars &&
               cars.length >= 1 &&
               cars.map((car) => (
                  <li
                     className="w-full flex justify-between gap-4"
                     key={car.id}
                  >
                     <span>
                        {car.name} - {car.carType} - {car.description}
                     </span>
                     <ButtonDelete carId={car.id} fetchCars={fetchCars} />
                  </li>
               ))}
         </ul>
      </section>
   );
};
export default SectionRead;

export interface ICar {
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
