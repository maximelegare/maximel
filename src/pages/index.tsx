import { type NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ProjectDetailsCard } from "~/components/pages/index/ProjectDetailsCard"; 
import { Hero } from "~/components/pages/index/Hero";
import { Projects } from "~/components/pages/index/Projects";
import { ProjectsCategories } from "~/components/pages/index/ProjectsCategories";
import { useRecoilValue } from "recoil";
import { projectVisibilityAtom } from "atoms/projectAtom";


const Home: NextPage = () => {
  const projectVisibility = useRecoilValue(projectVisibilityAtom);

  return (
    <>
      <main>
        <Hero />
        <Projects />
        <ProjectsCategories />

      
        {projectVisibility && <ProjectDetailsCard />}
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
