const slider = ["1", "2", "3", "4", "5"];

import "./style.css";

function getPrevAndNextIndex(index: number, length: number) {
  const prev = index === 0 ? length - 1 : index - 1;
  const next = index === length - 1 ? 0 : index + 1;
  return { prev, next };
}

export default function Home() {
  return (
    <main className="min-h-screen gap-24 p-3 md:p-12 lg:p-24">
      <h1 className="mb-24 text-center text-2xl">
        Minimal tailwind CSS carousels with{" "}
        <span className="font-bold">0 Javascript</span>.
      </h1>

      <div className="mx-auto max-w-5xl space-y-12">
        {/* SNAP TO CENTER CAROUSEL */}
        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">Snap to center</h2>
            <button>copy button</button>
          </div>
          <div className="flex snap-x snap-mandatory snap-center flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="flex h-24 min-w-[150px] grow snap-center rounded border-4 border-blue-700 bg-blue-200 text-3xl md:min-w-[45%]"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* SNAP TO START CAROUSEL */}
        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">Snap to start</h2>
            <button>copy button</button>
          </div>
          <div className="flex snap-x snap-mandatory snap-start flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="flex h-24 min-w-[150px] grow snap-start rounded border-4 border-green-700 bg-green-200 text-3xl md:min-w-[30%]"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* SNAP TO END CAROUSEL */}
        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">Snap to end</h2>
            <button>copy button</button>
          </div>
          <div className="flex snap-x snap-mandatory snap-end flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="flex h-24 min-w-[150px] grow snap-end rounded border-4 border-orange-700 bg-orange-200 text-3xl md:min-w-[30%]"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* WIDE SNAP TO START CAROUSEL */}
        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">Wide snap to start</h2>
            <button>copy button</button>
          </div>
          <div className="flex snap-x snap-mandatory snap-start flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="flex h-24 min-w-[95%] grow snap-start rounded border-4 border-pink-700 bg-pink-200 text-3xl"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* VERTICAL CAROUSEL */}
        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">Vertical</h2>
            <button>copy button</button>
          </div>
          <div className="max-h-24 snap-y snap-mandatory snap-start space-y-3 overflow-y-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className={`flex h-24 grow snap-start rounded border-4 border-yellow-700 bg-yellow-200 text-3xl`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* CAROUSEL WITH ARROW BUTTONS */}
        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">Carousel with control buttons</h2>
            <button>copy button</button>
          </div>

          <div className="relative h-48 w-full overflow-hidden">
            {slider.map((v, i) => {
              const { prev, next } = getPrevAndNextIndex(i, slider.length);

              return (
                <div className="relative" key={v}>
                  <input
                    className="peer hidden"
                    type="radio"
                    id={`carousel-${i + 1}`}
                    name="carousel"
                    aria-hidden="true"
                    defaultChecked={i === 0}
                  />
                  <div
                    className={`carousel-item absolute h-48 w-full border-4 border-gray-500 bg-gray-400 text-3xl text-white opacity-0 transition-all peer-checked:static peer-checked:opacity-100`}
                  >
                    {v}
                  </div>
                  <label
                    htmlFor={`carousel-${prev + 1}`}
                    className="absolute bottom-[50%] left-4 top-[50%] my-auto hidden h-8 w-8 rotate-45 cursor-pointer border-4 border-gray-500 bg-gray-100 peer-checked:block"
                  ></label>
                  <label
                    htmlFor={`carousel-${next + 1}`}
                    className="absolute bottom-[50%] right-4 top-[50%] my-auto hidden h-8 w-8 rotate-45 cursor-pointer border-4 border-gray-500 bg-gray-100 peer-checked:block"
                  ></label>
                  {/* <div
                    key={v}
                    className={`absolute bottom-4 left-0 right-0 h-4 w-4 bg-red-50`}
                  > */}
                  {/* <label
                      htmlFor={`carousel-${i + 1}`}
                      className={`block cursor-pointer text-2xl text-white hover:border-gray-300`}
                    >
                      •
                    </label> */}
                  {/* </div> */}
                </div>
              );
            })}
            {/* <ol className="carousel-indicators absolute bottom-2 flex w-full list-none justify-center">
              {["Carousel", "Without", "Javascript"].map((v, i) => (
                <li key={v} className="mx-1 inline-block">
                  <label
                    htmlFor={`carousel-${i + 1}`}
                    className="carousel-bullet block cursor-pointer text-2xl text-white hover:border-gray-300"
                  >
                    •
                  </label>
                </li>
              ))}
            </ol> */}
          </div>
        </div>
      </div>
    </main>
  );
}
