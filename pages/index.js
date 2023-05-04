import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Hero from "../components/Hero";

export default function Home({}) {
  return (
    <ContainerBlock
      title="Luca Van Genechten - Developer, Leader, Student"
      description="Just a student who loves to code!"
    >
      <Hero />
      <FavouriteProjects />
    </ContainerBlock>
  );
}
