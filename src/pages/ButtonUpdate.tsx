import { API } from "aws-amplify";
import { updateCar } from "@/graphql/mutations";

interface IBtnProps {
   cardId: string;
}

const ButtonUpdate: React.FC<IBtnProps> = () => {
   const handleUpdate = async () => {
      try {
         const res = await API.graphql({
            query: updateCar,
            variables: {
               input: {
                  name: "updated Name",
               },
            },
         });
         console.log(res);
      } catch (error) {
         console.log("Error while deleting item: ", error);
      }
   };

   return (
      <>
         <button className="px-1 bg-red-500 rounded-lg" onClick={handleUpdate}>
            Update
         </button>
      </>
   );
};
export default ButtonUpdate;
