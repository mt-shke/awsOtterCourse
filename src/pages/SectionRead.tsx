import ButtonDelete from "./ButtonDelete";
import { ICar } from ".";
import ButtonUpdate from "./ButtonUpdate";

interface ISectionRead {
   cars: ICar[] | null;
   fetchCars: () => void;
}

const SectionRead: React.FC<ISectionRead> = ({ cars, fetchCars }) => {
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
                     <div className="flex gap-2">
                        <ButtonUpdate carId={car.id} fetchCars={fetchCars} />
                        <ButtonDelete carId={car.id} fetchCars={fetchCars} />
                     </div>
                  </li>
               ))}
         </ul>
      </section>
   );
};
export default SectionRead;
