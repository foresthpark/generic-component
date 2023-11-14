import Head from "next/head";
import BulletPoint from "~/components/BulletPoint";
import { dessertData, personData } from "~/constants/data";

export default function ListPage() {
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
            <BulletPoint
              data={name}
              key={name.firstName}
              render={(name) => (
                <span>
                  {name.firstName} {name.lastName} - {name.age}yo /{" "}
                  {name.visits} visits
                </span>
              )}
            />
          ))}
        </ul>
        -----------------------------------------------
        <ul>
          {dessertData.map((dessert) => (
            <BulletPoint
              data={dessert}
              key={dessert.name}
              render={(dessert) => (
                <span>
                  {dessert.name} - {dessert.calories} calories /{" "}
                  {dessert.popularity} points
                </span>
              )}
            />
          ))}
        </ul>
        <br />
      </div>
    </>
  );
}
