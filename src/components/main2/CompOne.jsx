import Heading from "../Heading";
import Box from "./Box";
import nari from "../../image/narisondariya.jpg";
import beachgirl from "../../image/girlonbeach.jpg";
import sahed from "../../image/sahed.png";

function CompOne() {
  return (
    <div className="py-20 space-y-12 bg-bprimary mx-4">
      <Heading>What sets ayurvedic consultants apart ?</Heading>
      <main className="sm:space-y-12 sm:w-[80%] sm:mx-auto sm:py-8 sm:overflow-hidden">
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-[auto_auto_auto] sm:gap-x-4 sm:grid-rows-[15rem]">
          <Box data={'स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"'}>
            Meaning: The Goal of Ayurveda is to maintain the health of a healthy
            person and to cure the disease of a diseased person.
          </Box>
          <img
            src={nari}
            alt="img"
            className="rounded-xl h-[13rem] sm:w-[10rem] sm:h-auto "
          />
          <Box data={"precise diagnosis"}>
            Ayurveda's core principles revolve around Vata, Pitta, and Kapha
            doshas, guiding you with precise diagnosis and treatment.
          </Box>
        </div>
        <div className=" flex flex-col gap-8 sm:grid sm:grid-cols-4 sm:grid-rows-[15rem] sm:gap-x-5 ">
          <Box data={"Zero side-effects"}>
            Ayurvedic treatments are devoid of chemicals, and are based
            completely on natural herbs 
          </Box>
          <img src={sahed} alt="" className="rounded-xl" />
          <Box data={"Individual Treatment"}>
            all Treatments are personalized based on a person's unique
            constitution and health concerns.
          </Box>
          <img src={beachgirl} alt="" className="h-[15rem]  rounded-xl" />
        </div>
      </main>
    </div>
  );
}

export default CompOne;
