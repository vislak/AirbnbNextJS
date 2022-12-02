import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

const Home: NextPage = ({ exploreData ,cardData }) => {
  return (
    <div className="">
      <Header />
      {/* Header */}
      <Banner />
      {/* Banner */}

      <main className=" max-w-7xl mx-auto sm:px-16">

        <section className="pt-6">
          <h2 className=" text-4xl font-bold pb-5">Explore Nearby</h2>
          {/* Pull some data  from server and display card  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, index) => {
              return (
                <SmallCard
                  key={index}
                  img={item.img}
                  location={item.location}
                  distance={item.distance}
                />
              );
            })}
          </div>
        </section>


        <section>

            <h2 className="text-4xl font-bold py-8">Live Anywhere</h2>

            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {cardData.map((item)=>{

              return <MediumCard img= {item.img} title={item.title} />
            })}
            </div>
            <LargeCard img="http://links.papareact.com/4cj" title="Are you Ready" buttontext={"Get Inspired"}/>

        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return { props: { exploreData ,cardData } };
}

export default Home;
