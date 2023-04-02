import Head from 'next/head';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Banner from '@/components/banner/Banner';
import Smallcards from '@/components/cards/Smallcards';

const inter = Inter({ subsets: ['latin'] });

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />

      <main className="max-w-7xl mx-auto">
        <section>
          <h2 className="text-4xl font-semibold mt-2 mb-3">Explore nearby</h2>
          {props.smallCardsData.map((place) => (
            <Smallcards data={place} />
          ))}
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const smallCardsData = await fetch('https://www.jsonkeeper.com/b/4G1G').then((response) =>
    response.json()
  );

  return {
    props: {
      smallCardsData,
    },
  };
};
