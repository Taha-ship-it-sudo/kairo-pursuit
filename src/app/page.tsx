import { Hero } from "@/components/Hero";
import { Offers } from "@/components/Offers";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Offers />
      <Work />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}
