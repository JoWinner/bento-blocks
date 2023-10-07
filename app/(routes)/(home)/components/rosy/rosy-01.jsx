import { useEffect, useState, useRef } from "react";

import NextImage from "next/image";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Avatar,
} from "@nextui-org/react";

const Rosy = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    "/rosy-woman02.jpeg",
    "/rosy-woman03.jpeg",
    "/rosy-woman04.jpeg",
    "/rosy-woman05.jpeg",
    "/rosy-woman06.jpeg",
  ];

  useEffect(() => {
    const slideShow = () => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const slideShowInterval = setInterval(slideShow, 3000);

    return () => {
      clearInterval(slideShowInterval);
    };
  });

  const sliderBarWidth = `${100 / images.length}%`;

  const changeSliderBar = (index) => {
    setActiveSlide(index);
    console.log("Image number", index);
  };

  return (
    <div className="font-rosy-a container mx-auto grid grid-cols-12 flex-col lg:flex-row gap-y-8 md:gap-8 p-8 bg-blue-100 lg:min-h-screen text-6xl  rounded-lg">
      <div className="flex col-span-12 lg:col-span-4  md:col-span-5 justify-center">
        <div className="grid grid-rows-6 gap-y-8 md:gap-8 ">
          <div className="row-span-3 flex justify-center ">
            <div className="bg-purple-400 rounded-t-full flex flex-col justify-between ">
              <div className="flex justify-center ">
                <Image
                  as={NextImage}
                  width={90}
                  height={90}
                  src="/lasso-pink.svg"
                  alt="lasso-pink"
                  className=" rounded-none rotate-180"
                />
              </div>
              <div className=" relative flex justify-center">
                <h1 className="text-blue-100 font-bold text-9xl absolute bottom-5">
                  .
                </h1>
              </div>

              <div className="flex flex-col items-center static py-4">
                <h1 className="text-4xl font-rosy-b">ROSY</h1>
                <p className="font-normal text-sm">Secret Garden</p>
              </div>

              <div className="bg-purple-900 flex flex-col px-4  ">
                <div className=" flex flex-col items-center justify-center gap-y-1">
                  <Image
                    as={NextImage}
                    width={30}
                    height={30}
                    src="/burst-white.svg"
                    alt="burst"
                    className=" rounded-none left-20 top-[-15px] md:left-20 "
                  />
                  <h1 className=" font-extrabold text-pink-400">$29.9</h1>
                  <Image
                    as={NextImage}
                    width={200}
                    height={100}
                    src="/barcode.gif"
                    alt="barcode"
                    className="  rounded-none "
                  />
                </div>

                <Image
                  as={NextImage}
                  width={70}
                  height={70}
                  src="/lasso-purple.svg"
                  alt="lasso"
                  className=" rounded-none top-7 right-5 z-0 "
                />
              </div>
            </div>
          </div>
          <div className="row-span-2 flex items-center justify-center">
            <Image
              as={NextImage}
              width={200}
              height={100}
              src="/rosy-woman01.png"
              alt="woman"
              className="rounded-full bg-pink-400 w-[180px] h-[180px]"
            />
          </div>
          <div className="row-span-1 flex flex-row items-center ">
            <Image
              as={NextImage}
              width={100}
              height={100}
              src="/rosy-logo.png"
              alt="rosy-logo"
              className=" rounded-none"
            />
            <h1 className="font-rosy-a font-extrabold tracking-tight text-purple-700">
              Blooms
            </h1>
          </div>
        </div>
      </div>
      <div className="flex col-span-12 lg:col-span-4  md:col-span-7 justify-center">
        <div className="grid grid-rows-6 gap-y-8 md:gap-8 w-full">
          <Card className="row-span-3 rounded-lg ">
            <CardHeader className="absolute z-10 top-1  flex-row  justify-between">
              <Image
                as={NextImage}
                width={100}
                height={100}
                src="/lasso-white.svg"
                alt="lasso"
                className=" rounded-none bottom-6 rotate-45"
              />
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-purple-900/70 to-slate-900 rounded-full relative">
                <Image
                  as={NextImage}
                  width={100}
                  height={100}
                  src="/curved-text.png"
                  alt="curved-text"
                  className=" rounded-none"
                />
                <Image
                  as={NextImage}
                  width={40}
                  height={40}
                  src="/sparkle-pink.svg"
                  alt="sparkle"
                  className=" rounded-none absolute bottom-7 left-7"
                />
              </div>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full object-cover"
              src="/rosy-img03.jpeg"
            />
            <CardFooter className="absolute bg-gradient-to-b from-slate-800/5 via-purple-900 to-slate-800/90 bottom-0 z-10 flex flex-col items-center justify-center py-10">
              <div className="flex flex-row items-center">
                <Image
                  as={NextImage}
                  width={70}
                  height={70}
                  src="/rosy-logo.png"
                  alt="rosy-logo"
                  className=" rounded-none"
                />
                <h1 className="font-rosy-a font-extrabold tracking-tight text-5xl text-purple-100">
                  Blooms
                </h1>
              </div>

              <p className="text-base  pl-7">the freshest flowers for you</p>
            </CardFooter>
          </Card>

          <Card className="row-span-3  pt-14 rounded-lg bg-purple-500">
            <div className="flex flex-col">
              <div className="relative ">
                <Image
                  as={NextImage}
                  width={60}
                  height={60}
                  src="/burst.svg"
                  alt="burst"
                  className="absolute top-[-20px] left-8 "
                />
              </div>
              <div className="flex flex-col items-center ">
                <div className="flex flex-col justify-start space-y-2">
                  <h2 className="">A flower</h2>
                  <h1 className="font-rosy-b font-bold leading-8">blossoms</h1>
                  <div className="flex flex-row space-x-2 items-center justify-start">
                    <h2 className="">for its</h2>
                    <Avatar
                      src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                      className="w-14 h-14"
                    />
                  </div>
                  <div className="flex flex-row justify-start">
                    <Image
                      as={NextImage}
                      width={70}
                      height={70}
                      src="/rosy-img01.png"
                      alt="rose flower"
                    />
                    <h2>own joy</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Image
                as={NextImage}
                width={70}
                height={70}
                src="/lasso-white.svg"
                alt="thread"
                className="rounded-none"
              />
            </div>
          </Card>
        </div>
      </div>
      <Card className=" col-span-12 lg:col-span-4  rounded-lg">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <div className="h-1 w-4/5 relative mb-8">
            <div className="absolute top-0 left-0 z-30 h-full w-full flex space-x-3">
              {images.map((_, index) => (
                <div
                  key={index}
                  style={{ width: sliderBarWidth }}
                  className={`${
                    activeSlide === index ? "bg-blue-500" : "bg-white/40"
                  }`}
                  onClick={() => changeSliderBar(index)}
                />
              ))}
            </div>
          </div>
        </CardHeader>

        {images.map((image, index) => (
          <Image
            removeWrapper
            key={index}
            src={image}
            className={`z-0 h-full w-full object-cover ${
              activeSlide === index ? "" : "hidden"
            }`}
            alt="Card example background"
          />
        ))}
      </Card>
    </div>
  );
};

export default Rosy;
