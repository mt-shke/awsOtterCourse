import { API } from "aws-amplify";
import { updateCar } from "@/graphql/mutations";

interface IBtnProps {
   carId: string;
   fetchCars: () => void;
}

const ButtonUpdate: React.FC<IBtnProps> = ({ carId, fetchCars }) => {
   const handleUpdate = async () => {
      try {
         const res = await API.graphql({
            query: updateCar,
            variables: {
               input: {
                  id: carId,
                  name: "updated",
               },
            },
         });

         if (!res) {
            throw new Error("Error while updating item");
         }
         fetchCars();
      } catch (error) {
         console.log("Error while updating item: ", error);
      }
   };

   return (
      <>
         <button
            className="px-1 bg-green-400 rounded-lg"
            onClick={handleUpdate}
         >
            Update
         </button>
      </>
   );
};
export default ButtonUpdate;
