"use client"
import { useState } from "react";

import NextImage from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  Heart,
  Repeat1,
  SkipBack,
  PauseCircle,
  SkipForward,
  Shuffle,
  ArrowDownRightFromCircle,
  Mail,
  Lock,
} from "lucide-react";
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
  Progress,
  Checkbox,
  Input,
} from "@nextui-org/react";
import DropDownProp from "@/components/dropdown";
import ModalProp from "@/components/modal";

const Miuzzic = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="font-miuzzic-primary text-black-400 container mx-auto grid grid-cols-12 flex-col lg:flex-row gap-y-8 md:gap-8 p-16 bg-zinc-400 lg:min-h-screen text-3xl  rounded-lg">
      <div className="flex col-span-12 lg:col-span-4  md:col-span-7 justify-center ">
        <div className="grid grid-rows-6 gap-y-8 place-content-center md:gap-8  ">
          <Card
            radius="lg"
            shadow="sm"
            className="row-span-3 text-black-400  h-[400px] bg-gradient-to-r from-rose-100 to-teal-100 w-[360px] items center justify-center"
          >
            <CardBody className="flex flex-col items-center overflow-hidden ">
              <Image
                as={NextImage}
                width={250}
                height={400}
                src="/miuzzic-img05.png"
                alt="miuzzic"
                className=" rounded-none  z-0"
              />
              <div className="absolute bottom-0 z-10 flex flex-col items-center justify-center py-10 px-20 space-y-10 ">
                <h1 className="text-center	">New Music Genres</h1>
                <p className="text-sm font-normal text-center	">
                  You can how create music in an even wider variety of musical
                  styles.
                </p>
                <DropDownProp
                  items={["Pop Music", "Hip hop", "Country", "Lofi"]}
                  onAction={(key) => alert(key)}
                  trigger={
                    <div className="bg-black-100 rounded-full flex flex-row py-2 px-3 space-x-1 cursor-pointer">
                      <ArrowDownRightFromCircle color="#ffffff" />

                      <h1 className="text-white text-lg">More Genres</h1>
                    </div>
                  }
                />
              </div>
            </CardBody>
          </Card>

          <Card
            radius="lg"
            shadow="sm"
            className="row-span-3  h-[400px] w-[360px]"
          >
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
                <ModalProp
                  modalTitle="Login"
                  modalTrigger={(handleOpen) => (
                    <h1
                      onClick={handleOpen}
                      className="text-white font-extrabold text-4xl cursor-pointer"
                    >
                      ACCESS
                    </h1>
                  )}
                  modalSize="lg"
                  modalPlacement="auto"
                  modalActions={(onClose) => (
                    <>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button className="bg-zinc-600 text-white" onPress={() => {}}>
                        Continue
                      </Button>
                    </>
                  )}
                >
                  <Input
                    
                    endContent={
                      <Mail className="text-2xl text-zinc-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                  <Input
                    
                    endContent={
                      <Lock className="text-2xl text-zinc-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                  />
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox>
                    <Link color="primary" href="#" size="sm">
                      Forgot password?
                    </Link>
                  </div>
                </ModalProp>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="flex col-span-12 lg:col-span-4  md:col-span-7 justify-center ">
        <div className="grid grid-rows-4 gap-y-8 place-content-center md:gap-8 ">
          <Card
            radius="lg"
            isPressable
            shadow="sm"
            className="row-span-2 text-black-400  
            h-[400px] bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-blue-50 via-indigo-100 to-zinc-100 w-[360px]"
          >
            <CardHeader className="absolute z-10 top-1  flex-col  justify-center pt-4">
              <p className="text-center">
                Get ready for something entirely new!
              </p>
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
              <p className="text-lg font-normal text-center">
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
                className=" h-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-100 via-teal-100 to-zinc-300 w-[360px]"
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
                  <h1 className="text-5xl text-black-400">miuzz.ic</h1>
                </CardBody>
              </Card>
            </div>
            <div className="h-1/2">
              <Card
                radius="lg"
                shadow="sm"
                className="h-full  pt-4 bg-gradient-to-tl from-pink-300 via-slate-100 to-blue-50 text-black-400 w-[360px]"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start text-lg font-normal">
                  <p>Intuitive interface</p>
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
            className="row-span-3 h-[400px] w-[360px] bg-[conic-gradient(var(--tw-gradient-stops))] from-rose-200 via-sky-100 to-rose-200"
          >
            <CardHeader className="absolute z-10 top-1  flex-row  justify-between">
              <div className="flex flex-col text-base text-black-400 items-start">
                <p>Mystery sounds of</p>
                <p>spring right in your ears</p>
                <p>Even in winter</p>
              </div>

              <Image
                as={NextImage}
                width={70}
                height={70}
                src="/miuzzic-logo.png"
                alt="miuzzic-logo"
                className=" rounded-none"
              />
            </CardHeader>

            <CardFooter className="absolute  bottom-0 z-10 flex flex-col items-center justify-center py-10">
              <Image
                as={NextImage}
                width={500}
                height={500}
                src="/miuzzic-img04.png"
                alt="miuzzic"
                className=" rounded-none"
              />
            </CardFooter>
          </Card>

          <Card
            radius="lg"
            shadow="sm"
            className="row-span-3 h-[400px] bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-100 via-teal-100 to-zinc-300 text-black-400 w-[360px]"
          >
            <CardBody className="bg-gradient-to-r from-rose-100 to-teal-100 absolute top-1 border-2 border-white rounded-lg shadow-md p-2">
              <div className="grid grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-4">
                  <Image
                    as={NextImage}
                    alt="Album cover"
                    className="object-cover"
                    height={200}
                    width={100}
                    shadow="md"
                    src="/miuzzic-img03.png"
                  />
                </div>

                <div className="flex flex-col col-span-8">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0 ">
                      <h3 className="font-semibold ">Lofi Mix</h3>
                      <p className="text-small text-zinc-600">New Playlist</p>
                      <h1 className="text-large font-medium mt-2 text-zinc-600">
                        Odelia Cools
                      </h1>
                    </div>
                    <Button
                      isIconOnly
                      className="text-pink-500/70 data-[hover]:bg-black-100/40 -translate-y-2 translate-x-2"
                      radius="full"
                      variant="light"
                      onPress={() => setLiked((v) => !v)}
                    >
                      <Heart
                        color="#3F3F46"
                        className={liked ? "[&>path]:stroke-transparent" : ""}
                        fill={liked ? "currentColor" : "none"}
                      />
                    </Button>
                  </div>

                  <div className="flex flex-col mt-3 gap-1">
                    <Progress
                      aria-label="Music progress"
                      classNames={{
                        indicator: "bg-zinc-800",
                        track: "bg-zinc-500/30",
                      }}
                      color="default"
                      size="sm"
                      value={33}
                    />
                    <div className="flex justify-between text-zinc-600">
                      <p className="text-small">3:52</p>
                      <p className="text-small">4:32</p>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center">
                    <Button
                      isIconOnly
                      className="data-[hover]:bg-black-100/40"
                      radius="full"
                      variant="light"
                    >
                      <Repeat1 color="#3F3F46" />
                    </Button>
                    <Button
                      isIconOnly
                      className="data-[hover]:bg-black-100/40"
                      radius="full"
                      variant="light"
                    >
                      <SkipBack color="#3F3F46" />
                    </Button>
                    <Button
                      isIconOnly
                      className="w-auto h-auto data-[hover]:bg-pink-200"
                      radius="full"
                      variant="light"
                    >
                      <PauseCircle size={50} color="#3F3F46" />
                    </Button>
                    <Button
                      isIconOnly
                      className="data-[hover]:bg-black-100/40"
                      radius="full"
                      variant="light"
                    >
                      <SkipForward color="#3F3F46" />
                    </Button>
                    <Button
                      isIconOnly
                      className="data-[hover]:bg-black-100/40"
                      radius="full"
                      variant="light"
                    >
                      <Shuffle color="#3F3F46" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="absolute  bottom-0  flex flex-col items-center justify-center py-4">
              <Image
                as={NextImage}
                width={30}
                height={30}
                src="/miuzzic-logo.png"
                alt="miuzzic-logo"
                className=" rounded-none"
              />
              <p className="text-center">
                Sound of future AI Powered music generator
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Miuzzic;
