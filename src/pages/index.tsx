import { type NextPage } from "next";

import { useEffect } from "react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Dialog } from "~/components/core/Dialog";
import { Hero } from "~/components/pages/index/Hero";
import { Projects } from "~/components/pages/index/Projects";
import { ProjectsCategories } from "~/components/pages/index/ProjectsCategories";
import { useRecoilValue } from "recoil";

import { dialogVisibilityAtom } from "atoms/dialogAtom";

const Home: NextPage = () => {
  const dialogs = useRecoilValue(dialogVisibilityAtom);

  useEffect(() => {
    console.log("dialogs", dialogs);
  }, [dialogs]);

  return (
    <>
      <main>
        <Hero />
        <Projects />
        <ProjectsCategories />
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
