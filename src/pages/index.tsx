import { type NextPage } from "next";
import Head from "next/head";
import ListExample from "~/components/ListExample";
import { dessertData, personData } from "~/constants/data";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hello Sekai/世界/World/🌎</title>
        <meta name="description" content="Hello Sekai/世界/World/🌎" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col items-center justify-center text-xl">
        <span className="pb-3">Hello Sekai/世界/World/🌎</span>
        <ul>
          {personData.map((name) => (
            <ListExample data={name} key={name.firstName} />
          ))}
        </ul>
        -----------------------------------------------
        <ul>
          {dessertData.map((dessert) => (
            <ListExample data={dessert} key={dessert.name} />
          ))}
        </ul>
        <br />
      </div>
    </>
  );
};

export default Home;
