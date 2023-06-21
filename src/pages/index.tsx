import Image from "next/image";
import { Inter } from "next/font/google";
import { withAuthenticator } from "@aws-amplify/ui-react";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
   return (
      <main>
         <h1>Aws Otter Course</h1>
      </main>
   );
};

export default withAuthenticator(Home);
// export default Home
