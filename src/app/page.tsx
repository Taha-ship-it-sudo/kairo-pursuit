import { Hero } from "@/components/Hero";
import { Offers } from "@/components/Offers";
import { PlanSets } from "@/components/PlanSets";
import { Work } from "@/components/Work";
import { Story } from "@/components/Story";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Offers />
      <PlanSets />
      <Work />
      <Story />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}
