import { useState } from "react";
import Heading from "../Heading";

function CompFour() {
  const [ind, setInd] = useState(0);
  function handles(i, e) {
    console.log(e);
    e.preventDefault();
    setInd(i);
  }
  const arr = [1, 2, 3];
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3, 4, 5];
  const z = arr.filter((curr, i) => ind === i);
  return (
    <main className="mx-5 py-12 my-12 bg-bprimary">
      <div>
        <Heading>Stories from our valued customers</Heading>
      </div>
      <div className="hidden mt-6 bg-bwhite  gap-5 sm:flex sm:flex-row sm:gap-5">
        {arr.map((curr, i) => (
          <div className="rounded-3xl overflow-hidden" key={i}>
            <p className="bg-bgray py-5 px-4">consulted for skin</p>
            <div className="grid grid-cols-2 gap-x-6 my-8">
              <div className="flex gap-6">
                <span className="h-10 w-14 bg-bdarkgray rounded-full"></span>
                <div>
                  <span>sophie morree</span>
                  <span>chennai</span>
                </div>
              </div>
              <div>
                <span>17/02/24</span>
              </div>
            </div>
            <div className="flex">
              {arr2.map((curr, i) => (
                <span key={i}>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.25 8.45H14.6625L12 0.125L9.3375 8.45H0.75L7.6875 13.5875L5.0625 21.875L12 16.7375L18.9375 21.875L16.275 13.55L23.25 8.45Z"
                      fill="#EEDE4D"
                    />
                  </svg>
                </span>
              ))}
            </div>
            <p className="my-5">one of a kind serviuce</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              eum, nulla vero dicta exercitationem officia eos est corrupti
              voluptatem autem commodi tenetur, quae tempore aliquid, sed atque
              sequi labore doloremque.
            </p>
          </div>
        ))}
      </div>

      <div className="my-7 bg-bwhite sm:hidden">
        {z.map((curr, i) => (
          <div className="rounded-3xl overflow-hidden" key={i}>
            <p className="bg-bgray py-5 px-4">consulted for skin</p>
            <div className="grid grid-cols-2 gap-x-6 my-8">
              <div className="flex gap-6">
                <span className="h-10 w-14 bg-bdarkgray rounded-full"></span>
                <div>
                  <span>sophie morree</span>
                  <span>chennai</span>
                </div>
              </div>
              <div>
                <span>17/02/24</span>
              </div>
            </div>
            <div className="flex">
              {arr2.map((curr, i) => (
                <span key={i}>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.25 8.45H14.6625L12 0.125L9.3375 8.45H0.75L7.6875 13.5875L5.0625 21.875L12 16.7375L18.9375 21.875L16.275 13.55L23.25 8.45Z"
                      fill="#EEDE4D"
                    />
                  </svg>
                </span>
              ))}
            </div>
            <p className="my-5">one of a kind serviuce</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              eum, nulla vero dicta exercitationem officia eos est corrupti
              voluptatem autem commodi tenetur, quae tempore aliquid, sed atque
              sequi labore doloremque.
            </p>
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

export default CompFour;
