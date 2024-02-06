const slider = ["1", "2", "3", "4", "5", "6", "7"];

import "./style.css";

export default function Home() {
  return (
    <main className="min-h-screen gap-24 p-3 md:p-12 lg:p-24">
      <h1 className="mb-24 text-center text-2xl">
        Minimal tailwind CSS carousels with{" "}
        <span className="font-bold">0 Javascript</span>.
      </h1>

      <div className="mx-auto max-w-5xl space-y-12">
        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">Snap to center</h2>
            <button>copy button</button>
          </div>
          <div className="flex snap-x snap-mandatory snap-center flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="flex h-24 min-w-[150px] grow snap-center rounded border-4 border-blue-700 bg-blue-200 md:min-w-[45%]"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">Snap to start</h2>
            <button>copy button</button>
          </div>
          <div className="flex snap-x snap-mandatory snap-start flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="flex h-24 min-w-[150px] grow snap-start rounded border-4 border-green-700 bg-green-200 md:min-w-[30%]"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">Snap to end</h2>
            <button>copy button</button>
          </div>
          <div className="flex snap-x snap-mandatory snap-end flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="flex h-24 min-w-[150px] grow snap-end rounded border-4 border-orange-700 bg-orange-200 md:min-w-[30%]"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">
              Carousel with full width items
            </h2>
            <button>copy button</button>
          </div>
          <div className="flex snap-x snap-mandatory snap-end flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="flex h-24 min-w-full grow snap-end rounded border-4 border-pink-700 bg-pink-200"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">Vertical carousel</h2>
            <button>copy button</button>
          </div>
          <div className="max-h-52 snap-y snap-mandatory snap-start overflow-y-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className={`flex h-52 grow snap-start rounded border-4 border-yellow-700 bg-yellow-200`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex justify-between">
            <h2 className="text-xl font-bold">Carousel with control buttons</h2>
            <button>copy button</button>
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="bg-pink-400">{[1, 2, 3].map((v) => null)}</div>
            <input
              className="carousel-open hidden"
              type="radio"
              id="carousel-1"
              name="carousel"
              aria-hidden="true"
              defaultChecked="checked"
            />
            <div className="carousel-item bg-">
              <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without" />
            </div>
            <label
              htmlFor="carousel-3"
              className="carousel-control prev control-1"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-2"
              className="carousel-control next control-1"
            >
              ›2
            </label>
            <input
              className="carousel-open hidden"
              type="radio"
              id="carousel-2"
              name="carousel"
              aria-hidden="true"
            />
            <div className="carousel-item">
              <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript" />
            </div>
            <input
              className="carousel-open hidden"
              type="radio"
              id="carousel-3"
              name="carousel"
              aria-hidden="true"
            />
            <div className="carousel-item">
              <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel" />
            </div>

            <label
              htmlFor="carousel-1"
              className="carousel-control prev control-2"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-3"
              className="carousel-control next control-2"
            >
              ›
            </label>
            <label
              htmlFor="carousel-2"
              className="carousel-control prev control-3"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-1"
              className="carousel-control next control-3"
            >
              ›
            </label>
            <ol className="carousel-indicators">
              <li>
                <label htmlFor="carousel-1" className="carousel-bullet">
                  •
                </label>
              </li>
              <li>
                <label htmlFor="carousel-2" className="carousel-bullet">
                  •
                </label>
              </li>
              <li>
                <label htmlFor="carousel-3" className="carousel-bullet">
                  •
                </label>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
