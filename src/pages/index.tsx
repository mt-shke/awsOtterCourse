import { withAuthenticator } from "@aws-amplify/ui-react";
import FormCreate from "./FormCreate";
import SectionRead from "./SectionRead";

const Home = () => {
   return (
      <main className="flex flex-col gap-10 items-center p-4 text-black">
         <SectionRead />
         <FormCreate />
      </main>
   );
};

export default withAuthenticator(Home);
// export default Home
