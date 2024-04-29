import { useState } from "react";
import Heading from "../Heading";
import styles from "./CompThree.module.css";

function CompThree() {
  const [ind, setInd] = useState(0);
  function handles(i, e) {
    console.log(e);
    e.preventDefault();
    setInd(i);
  }

  const arr1 = [1, 2, 3, 4];
  const arr = [
    {
      num: "1",
      bold: "Make Appointment",
      text: "You must make an appointment in advance, to choose the service and date.",
    },
    {
      num: "2",
      bold: "Consultations",
      text: "The next stage involves a thorough consultation with an Ayurveda practitioner..",
    },
    {
      num: "3",
      bold: "Treatment Planning",
      text: "The Ayurvedic practitioner creates a personalized treatment plan for you.",
    },
    {
      num: "4",
      bold: "Maintenance",
      text: " These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];
  const z = arr.filter((curr, i) => ind === i);

  return (
    <main className="mx-5 my-20 space-y-16">
      <div>
        <Heading>Our Ayurvedic Approach</Heading>
        <p>
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>
      <div className="hidden mt-6  gap-5 sm:flex sm:flex-row sm:gap-5">
        {arr.map((curr, i) => (
          <div
            key={i}
            className={`${styles.box}  bg-bprimary rounded-lg px-6 py-12 text-center `}
          >
            <p className="rounded-full bg-bbutton w-12 h-12 flex justify-center items-center text-bwhite mx-auto">
              {curr.num}
            </p>
            <p className="text-xl font-bold py-3">{curr.bold}</p>
            <span>{curr.text}</span>
          </div>
        ))}
      </div>

      <div className="my-7 sm:hidden">
        {z.map((curr, i) => (
          <div
            key={i}
            className={`${styles.box}  bg-bprimary rounded-lg px-6 py-12 text-center `}
          >
            <p className="rounded-full bg-bbutton w-12 h-12 flex justify-center items-center text-bwhite mx-auto">
              {curr.num}
            </p>
            <p className="text-xl font-bold py-3">{curr.bold}</p>
            <span>{curr.text}</span>
          </div>
        ))}
        <section className="flex justify-center gap-6 my-6">
          {arr1.map((curr, i) => (
            <div
              className={`${
                ind === i ? "opacity-1" : "opacity-[.3]"
              } h-5 w-5 bg-bbutton rounded-full`}
              key={i}
              onClick={(e) => handles(i, e)}
            ></div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default CompThree;
