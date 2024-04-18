import Approach from "./components/Approach";
import Banner from "./components/Banner";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Objectives from "./components/Objectives";
import Volunteer from "./components/Volunteer";

export default function Home() {
  const firstBanner = `Empowerment is not about doing the same thing the same way in the same environment. It's about building the man and
  the woman and doing so with a view to creating better citizens and, by extension, better patriots in this society of ours`;
  const firstAuthor = "Anthony Carmona";
  const secondBanner = `We envision a society where all young people have the required capital and human resources needed to become economically empowered.`;
  const secondAuthor = "Hassan and Hussein Lecky Foundation";
  return (
    <main className="w-full h-auto">
      <Hero />
      <Banner text={firstBanner} author={firstAuthor} />
      <Mission />
      <Banner text={secondBanner} author={secondAuthor} />
      <Objectives />
      <Approach />
      <Volunteer />
      {/* <Events /> */}
    </main>
  );
}
