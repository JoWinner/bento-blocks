"use client";
import NextImage from "next/image";
import { useState } from "react";

import { ArrowUpRightFromCircle } from "lucide-react";

import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import MiuziccTable from "./components/miuzzic-table";
import ToastNotification from "@/components/toast-notification";

const MiuzzicExplore = () => {
  const [notifications, setNotifications] = useState([]);

  const removeNotif = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <>
      <ToastNotification
        notifications={notifications}
        removeNotif={removeNotif}
      />

      <div className=" font-miuzzic-primary text-black-400 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-100 via-blue-100 to-zinc-200 ">
        <div className="flex flex-col space-y-20 ">
          <div className="text-3xl md:text-6xl flex flex-col items-center pt-20 justify-center ">
            <div className=" flex flex-row justify-end items-end pt-10">
              <h1> Sound of</h1>
              <span className="w-40 mx-3 md:mx-6 bg-blue-300 relative items-center justify-center">
                <span className=" text-blue-300">.</span>
                <Image
                  as={NextImage}
                  alt="Album cover"
                  height={100}
                  width={100}
                  src="/miuzzic-img03.png"
                  className="rounded-none absolute left-7 bottom-1  "
                />
              </span>
              <h1>future</h1>
            </div>
            <div className="flex flex-row items-end ">
              <span className="">
                <Image
                  as={NextImage}
                  width={50}
                  height={50}
                  src="/miuzzic-logo.png"
                  alt="miuzzic-logo"
                  className="h-10 w-10 md:h-14 md:w-28"
                />
              </span>
              <h1>AI-Powered</h1>
            </div>
            <div className=" flex flex-row items-center justify-center">
              <h1>music</h1>
              <span>
                <Image
                  as={NextImage}
                  width={80}
                  height={80}
                  src="/miuzzic-img02.png"
                  alt="miuzzic"
                  className="h-14 w-14 md:h-24 md:w-24"
                />
              </span>
              <h1>generator</h1>
            </div>
          </div>
          <div className="grid grid-cols-12 p-4 ">
            <div className="col-span-12 flex flex-col md:col-span-7 bg-white">
              <div className="flex flex-row items-center justify-between p-8 ">
                <Button radius="full">#FAVORITE</Button>
                <h1 className="text-3xl w-72">Special picks of the week</h1>
              </div>

              <div className="w-full ">
                <MiuziccTable setNotifications={setNotifications} />
              </div>
            </div>

            <Card
              radius="none"
              className="col-span-12 h-[400px] md:h-full  md:col-span-5  bg-[conic-gradient(var(--tw-gradient-stops))] from-rose-200 via-sky-100 to-rose-200"
            >
              <CardHeader className="absolute z-10 top-1  flex-row  justify-between p-8">
                <div className="flex flex-col text-base text-black-400 items-start">
                  <p>Mystery sounds of</p>
                  <p>spring right in your ears</p>
                  <p>Even in winter</p>
                </div>
                <button>
                  <ArrowUpRightFromCircle
                    size={44}
                    className="hover:text-blue-300 transition duration-700 ease-in-out"
                  />
                </button>
              </CardHeader>

              <CardFooter className="absolute  bottom-0 z-10 flex flex-col items-end justify-center p-8">
                <Image
                  as={NextImage}
                  width={200}
                  height={100}
                  src="/miuzzic-img04.png"
                  alt="miuzzic"
                  className=" rounded-none"
                />
              </CardFooter>
            </Card>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiuzzicExplore;
