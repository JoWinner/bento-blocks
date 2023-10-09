import { useEffect, useState } from "react";

import NextImage from "next/image";
import  Link  from "next/link";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/providers/Reveal";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Avatar,
  AvatarGroup,
} from "@nextui-org/react";

const MotionImage = motion(Image);
const Miuzzic = () => {
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

  const changeSliderBar = (index) => {
    setActiveSlide(index);
    console.log("Image number", index);
  };

  return (
    <div className="font-miuzzic-primary text-black-600 container mx-auto grid grid-cols-12 flex-col lg:flex-row gap-y-8 md:gap-8 p-16 bg-zinc-400 lg:min-h-screen text-3xl  rounded-lg">
      <div className="flex col-span-12 lg:col-span-4  md:col-span-7 justify-center b w-full">
        <div className="grid grid-rows-6 gap-y-8 place-content-center md:gap-8  ">
          <Card
            radius="lg"
            isPressable
            shadow="sm"
            className="row-span-3   h-[400px] bg-gradient-to-r from-rose-100 to-teal-100 w-[360px]"
          >
            <CardHeader className="absolute z-10 top-1  flex-row  justify-between"></CardHeader>

            <CardFooter className="absolute  bottom-0 z-10 flex flex-col items-center justify-center py-10">
              <div className="flex flex-row items-center">
                <h1 className=" font-extrabold text-5xl ">Blooms</h1>
              </div>

              <p className="text-base  pl-7">the freshest flowers for you</p>
            </CardFooter>
          </Card>

          <Card radius="lg" shadow="sm" className="row-span-3  h-[400px] ">
            <Image
              removeWrapper
              alt="rose flower"
              className="z-0 w-full h-full object-cover"
              src="/miuzzic-img01.jpg"
            />
            <CardFooter className="absolute  bottom-0 z-10 flex flex-col items-center justify-center pb-10">
              <div className="flex flex-row items-center bg-zinc-700/30 rounded-full border-t-1 border-zinc-100/70 pr-2">
                <Image
                  as={NextImage}
                  width={50}
                  height={50}
                  src="/miuzzic-logo.png"
                  alt="miuzzic-logo"
                  className=" rounded-full  p-0 bg-white"
                />
                <h1 className=" font-extrabold text-4xl ">ACCESS</h1>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="flex col-span-12 lg:col-span-4  md:col-span-7 justify-center w-full">
        <div className="grid grid-rows-4 gap-y-8 place-content-center md:gap-8 w-full">
          <Card
            radius="lg"
            isPressable
            shadow="sm"
            className="row-span-2 text-black-600 w-[360px] 
            h-[400px] bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-50 via-indigo-100 to-zinc-100"
          >
            <CardHeader className="absolute z-10 top-1  flex-col  justify-center pt-4">
              <p>Get ready for </p>
              <p>something entirely</p>
              <p>new!</p>
            </CardHeader>

            <CardFooter className="absolute bottom-0 z-10 flex flex-col items-center justify-center space-y-6 px-4">
              <AvatarGroup
                isBordered
                max={3}
                total={9000}
                renderCount={(count) => (
                  <p className="text-small font-medium ml-2">+{count} others</p>
                )}
              >
                <Avatar
                  size="lg"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <Avatar
                  size="lg"
                  src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                />
                <Avatar
                  size="lg"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </AvatarGroup>
              <p className="text-lg font-normal">
                Over 1,000 musicians have already used our AI generator to
                create their tracks.
              </p>
            </CardFooter>
          </Card>

          <div className="row-span-2 space-y-8 h-[400px] flex flex-col justify-between">
            <div className=" h-1/2">
              <Card
                radius="lg"
                shadow="sm"
                className=" h-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-100 via-teal-100 to-zinc-300"
              >
                <CardBody className="flex-row items-center justify-center">
                  <Image
                    as={NextImage}
                    width={70}
                    height={70}
                    src="/miuzzic-logo.png"
                    alt="miuzzic-logo"
                    className=" rounded-none"
                  />
                  <h1 className="text-5xl text-black-600">miuzz.ic</h1>
                </CardBody>
              </Card>
            </div>
            <div className="h-1/2">
              <Card
                radius="lg"
                shadow="sm"
                className="h-full  pt-4 bg-gradient-to-tl from-pink-300 via-slate-100 to-blue-50 text-black-600"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start text-lg font-normal">
                  <p >
                   Intuitive interface 
                  </p>
                  <p>& improved quality</p>
                  
                </CardHeader>
                <CardBody className="absolute items-end top-1">
                <Image
                    as={NextImage}
                    width={150}
                    height={150}
                    src="/miuzzic-img02.png"
                    alt="miuzzic"
                    className=" rounded-none z-50"
                  />
</CardBody>

                <CardFooter className="absolute bottom-0 z-10 justify-start">
                  <div>
                    <Link href="#">
                    <p className="text-black text-tiny">miuzz.ic</p>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="flex col-span-12 lg:col-span-4  md:col-span-7 justify-center ">
        <div className="grid grid-rows-6 gap-y-8 place-content-center md:gap-8 ">
          <Card
            radius="lg"
            isPressable
            shadow="sm"
            className="row-span-3   h-[400px] "
          >
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
              alt="rose flower"
              className="z-0 w-full h-full object-cover"
              src="/rosy-img03.jpeg"
            />
            <CardFooter className="absolute  bottom-0 z-10 flex flex-col items-center justify-center py-10">
              <div className="flex flex-row items-center">
                <Image
                  as={NextImage}
                  width={70}
                  height={70}
                  src="/miuzzic-logo.png"
                  alt="miuzzic-logo"
                  className=" rounded-none"
                />
                <h1 className=" font-extrabold text-5xl ">Blooms</h1>
              </div>

              <p className="text-base  pl-7">the freshest flowers for you</p>
            </CardFooter>
          </Card>

          <Card
            radius="lg"
            shadow="sm"
            className="row-span-3   h-[400px]  pt-4 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-100 via-teal-100 to-zinc-300"
          >
            <div className="flex flex-col">
              <div className="relative ">
                <Image
                  as={NextImage}
                  width={60}
                  height={60}
                  src="/burst-pink.svg"
                  alt="burst"
                  className="absolute top-[-20px] left-8 "
                />
              </div>
              <div className="flex flex-col items-center ">
                <div className="flex flex-col justify-start space-y-2">
                  <Reveal>
                    <h2 className="">A flower</h2>
                  </Reveal>

                  <h1 className=" font-bold">blossoms</h1>
                  <Reveal>
                    <div className="flex flex-row space-x-2 items-center justify-start">
                      <h2 className="">for its</h2>
                      <Avatar src="/rosy-woman07.jpg" className="w-14 h-14" />
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
                  </Reveal>
                </div>
              </div>
            </div>
            <CardFooter className="absolute bottom-0 z-10 justify-end">
              <Image
                as={NextImage}
                width={70}
                height={70}
                src="/lasso-white.svg"
                alt="lasso"
                className="rounded-none"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Miuzzic;
