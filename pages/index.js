import Resume from "components/Resume";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Hero from "../components/Hero";

export default function Home({}) {
  return (
    <ContainerBlock
      title="Luca Van Genechten"
      description="Just a student who loves to code!"
    >
      <Hero />
      <Resume />
      <FavouriteProjects />
    </ContainerBlock>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locale/${locale}.json`),
    },
  };
}
