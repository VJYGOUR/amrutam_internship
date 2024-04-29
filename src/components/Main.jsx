import Heading from "./Heading";
import heartbeat from "../image/heartbeat-icon.png";
import ribbon from "../image/ribbon-icon.png";
import lotusposition from "../image/lotusposition-icon.png";
import protection from "../image/protection-icon.png";
import ayurveda from "../image/ayurveda-icon.png";
import save from "../image/save-icon.png";
import chakra from "../image/chakra.png";
import meditationGirl from "../image/meditationGirl.png";

let arr1 = [
  {
    img: heartbeat,
    bold: "Personalized wellness",
    text: "get treatments just made for you based on your individual doshas",
  },
  {
    img: ribbon,
    bold: "Focus Prevention",
    text: "stop problems before even they start",
  },
  {
    img: lotusposition,
    bold: "Personalized wellness",
    text: "get treatments just made for you based on your individual doshas",
  },
];
let arr2 = [
  {
    img: protection,
    bold: "Holistic Healing",
    text: "Fix the root problem for long-lasting health.",
  },
  {
    img: ayurveda,
    bold: "Natural Remedies",
    text: "Using herbs and natural therapies for healing",
  },
  {
    img: save,
    bold: "Boosting immunity",
    text: "Stay strong and healthy for life, not just for today",
  },
];
function Main() {
  return (
    <div className="my-12 grid grid-rows-[auto_auto]">
      <section>
        <Heading>Discover ayurveda's magic with us</Heading>
        <p className="text-center sm:w-[50%] sm:mx-auto">
          Ayurvedic treatment aims to balance your body and mind,bringing
          harmony and vitality. its like a journey to better health using
          ancient wisdom,a totally effective approach for better life
        </p>
        <div className="flex justify-center items-center sm:hidden">
          <img src={chakra} alt="" className="absolute -z-10 " />
          <img src={meditationGirl} alt="" />
        </div>
      </section>
      <section className="flex gap-5  px-5 sm:px-12">
        <div className="grid grid-rows-3 gap-y-5 sm:w-[35%] ">
          {arr1.map((curr, i) => (
            <div
              key={i}
              className=" border rounded flex flex-col items-center justify-center text-center sm:flex sm:border-none sm:flex-row  sm:text-left sm:gap-5"
            >
              <div className="flex flex-col order-1 sm:order-[-1]">
                <span className="font-bold">{curr.bold}</span>
                <span className="">{curr.text}</span>
              </div>
              <img src={curr.img} alt="img" className="h-20 " />
            </div>
          ))}
        </div>
        {/* image k liye h */}
        <div className="hidden sm:flex sm:items-center sm:justify-center  ">
          <img src={chakra} alt="" className="absolute -z-10 " />
          <img src={meditationGirl} alt="" />
        </div>
        {/* image k liye h */}
        <div className="grid grid-rows-3 gap-y-5 w-[120%] sm:w-auto">
          {arr2.map((curr, i) => (
            <div
              key={i}
              className="border  rounded flex flex-col items-center justify-center text-center sm:flex sm:flex-row sm:border-none  sm:text-left sm:gap-5"
            >
              <img src={curr.img} alt="img" className="h-20" />
              <div className="flex flex-col">
                <span className="font-bold">{curr.bold}</span>
                <span>{curr.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Main;
