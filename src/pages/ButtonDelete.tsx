import { API } from "aws-amplify";
import { deleteCar } from "@/graphql/mutations";

interface IBtnProps {
   carId: string;
   fetchCars: () => void;
}

const ButtonDelete: React.FC<IBtnProps> = ({ carId, fetchCars }) => {
   const handleDelete = async () => {
      try {
         const res = await API.graphql({
            query: deleteCar,
            variables: {
               input: {
                  id: carId,
               },
            },
         });

         fetchCars();
      } catch (error) {
         console.log("Error while deleting item: ", error);
      }
   };

   return (
      <button className="px-1 bg-red-500 rounded-lg" onClick={handleDelete}>
         Delete
      </button>
   );
};
export default ButtonDelete;
