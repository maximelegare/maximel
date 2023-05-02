import { type NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Hero } from "~/components/pages/index/Hero";
import { Projects } from "~/components/pages/index/Projects";




const Home: NextPage = () => {
  return (
    <>
      <main>
        <Hero />
        <Projects />        
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "layout"])),
    },
  };
}
