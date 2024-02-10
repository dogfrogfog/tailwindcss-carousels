import { TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { CardComponent } from "@/components/Card";
import { GHStarButton } from "@/components/GHStarButton";
import { getPrevAndNextIndex } from "@/utils";

const slider = ["1", "2", "3", "4", "5"];

export default function Home() {
  return (
    <div className="relative mx-auto min-h-screen gap-24 p-3">
      <div className="fixed left-0 top-0 z-20 w-full rounded border-b p-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl justify-between gap-3 md:px-12 lg:px-24">
          <div className="flex flex-col gap-3 text-2xl">
            <h1 className="font-bold">TailwindCSS Carousels ⚡️💨</h1>
            <p>Bare minimum code for fast and lightweight carousel</p>
          </div>
          <div className="flex items-center gap-3">
            <GHStarButton />
            <Link
              aria-label="twitter"
              className="h-6 pt-0.5"
              href="https://twitter.com/dogfrogfog"
            >
              <TwitterLogoIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-48 max-w-5xl space-y-12 sm:mt-36 md:mt-24 md:p-12 lg:p-24">
        <CardComponent title="Snap to center">
          <div className="flex snap-x snap-mandatory snap-center flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="h-24 min-w-[150px] grow snap-center border-4 border-blue-700 bg-blue-200 text-3xl md:min-w-[45%]"
              >
                {s}
              </div>
            ))}
          </div>
        </CardComponent>

        <CardComponent title="Snap to start">
          <div className="flex h-24 snap-x snap-mandatory snap-start flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="h-full min-w-[150px] grow snap-start border-4 border-green-700 bg-green-200 text-3xl md:min-w-[45%]"
              >
                {s}
              </div>
            ))}
          </div>
        </CardComponent>

        <CardComponent title="Snap to end">
          <div className="flex h-24 snap-x snap-mandatory snap-end flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="h-full min-w-[150px] grow snap-end border-4 border-orange-700 bg-orange-200 text-3xl md:min-w-[45%]"
              >
                {s}
              </div>
            ))}
          </div>
        </CardComponent>

        <CardComponent title="Wide snap to start">
          <div className="flex h-24 snap-x snap-mandatory snap-start flex-nowrap gap-3 overflow-x-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className="h-full min-w-[95%] grow snap-start border-4 border-pink-700 bg-pink-200 text-3xl"
              >
                {s}
              </div>
            ))}
          </div>
        </CardComponent>

        <CardComponent title="Vertical">
          <div className="h-24 snap-y snap-mandatory snap-start space-y-3 overflow-y-scroll">
            {slider.map((s) => (
              <div
                key={s}
                className={`h-full grow snap-start border-4 border-yellow-700 bg-yellow-200 text-3xl`}
              >
                {s}
              </div>
            ))}
          </div>
        </CardComponent>

        <CardComponent title="Carousel with control buttons">
          <div className="relative w-full overflow-hidden">
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
                  <div className="absolute h-24 w-full border-4 border-gray-500 bg-gray-400 text-3xl text-white opacity-0 transition-all duration-500 peer-checked:static peer-checked:opacity-100">
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
                </div>
              );
            })}
          </div>
        </CardComponent>
      </div>
    </div>
  );
}
