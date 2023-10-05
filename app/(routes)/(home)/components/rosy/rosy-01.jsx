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
  return (
    <div className="font-rosy-a container mx-auto grid grid-cols-12 flex-col lg:flex-row gap-y-8 md:gap-8 p-8 bg-blue-100 lg:min-h-screen text-6xl  rounded-lg">
      <div className="flex col-span-12 lg:col-span-4 w-full md:col-span-5 ">
        <div className="grid grid-rows-6 gap-y-8 md:gap-8 w-full ">
          <div className="row-span-3 w-full flex items-center justify-center ">
            <div className="bg-purple-400 w-3/5 rounded-t-full h-full flex flex-col justify-between">
              <div className="flex justify-center w-full">
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

              <div className="flex flex-col items-center static">
                <h1 className="text-4xl font-rosy-b">ROSY</h1>
                <p className="font-normal text-sm">Secret Garden</p>
              </div>

              <div className="bg-purple-900 h-1/2 w-full flex flex-col justify-between">
                <div className="relative w-full z-40">
                  <div className="absolute w-full py-4 flex flex-col items-center">
                    <h1 className=" font-extrabold text-pink-400">$29.9</h1>
                    <Image
                      as={NextImage}
                      width={200}
                      height={100}
                      src="/barcode.gif"
                      alt="barcode"
                      className="  rounded-none top-3 "
                    />
                  </div>
                  <Image
                    as={NextImage}
                    width={30}
                    height={30}
                    src="/burst-white.svg"
                    alt="burst"
                    className=" rounded-none left-44 top-[-13px]"
                  />
                </div>
                <Image
                  as={NextImage}
                  width={70}
                  height={70}
                  src="/lasso-purple.svg"
                  alt="lasso"
                  className=" rounded-none top-5 z-0 "
                />
              </div>
            </div>
          </div>
          <div className="row-span-2 w-full flex items-center justify-center">
            <Image
              as={NextImage}
              width={200}
              height={100}
              src="/woman.png"
              alt="woman"
              className="rounded-full bg-pink-400 w-[180px] h-[180px]"
            />
          </div>
          <div className="row-span-1 w-full ">
            <h1 className="font-rosy-a font-extrabold text-purple-700">
              B blooms
            </h1>
          </div>
        </div>
      </div>
      <div className="flex col-span-12 lg:col-span-4 w-full md:col-span-7 ">
        <div className="grid grid-rows-6 gap-y-8 md:gap-8 w-full">
          <div className="row-span-3 w-full bg-blue-600 rounded-lg"> 2a</div>

          <Card className="row-span-3 w-full pt-14 rounded-lg bg-purple-500">
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
            <div className="flex justify-end h-16">
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
      <div className=" col-span-12 lg:col-span-4 bg-blue-800 w-full rounded-lg">
        3
      </div>
    </div>
  );
};

export default Rosy;
