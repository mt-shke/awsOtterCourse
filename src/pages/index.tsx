import { withAuthenticator } from "@aws-amplify/ui-react";
import FormCreate from "./FormCreate";
import SectionRead from "./SectionRead";
import { carEnum } from "@/API";
import { listCars } from "@/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";

const Home = () => {
   const [cars, setCars] = useState<null | ICar[]>(null);

   useEffect(() => {
      fetchCars();
   }, []);

   const fetchCars = async () => {
      try {
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
      } catch (error) {
         console.log("Error fetching listCars: ", error);
      }
   };

   return (
      <main className="flex flex-col gap-10 items-center p-4 text-black">
         <SectionRead cars={cars} fetchCars={fetchCars} />
         <FormCreate fetchCars={fetchCars} />
      </main>
   );
};

export default withAuthenticator(Home);
// export default Home

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
