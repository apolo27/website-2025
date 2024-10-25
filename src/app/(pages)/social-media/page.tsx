"use client";
import { useState } from "react";
import { PlayCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Marketplace() {
  const [platform, setPlatform] = useState("Youtube");
  type Episode = {
    img: string;
    title: string;
    description: string;
    duration: string;
    date: Date;
  };

  type Video = {
    img: string;
    title: string;
    platform: string;
    color: string;
  };

  const episodes = [
    {
      img: "/images/caribestem.png",
      title: "Episode 1",
      description:
        "This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast This is the first episode of the Caribe STEM podcast",
      duration: "30:00",
      date: new Date(),
    },
    {
      img: "/images/caribestem.png",
      title: "Episode 2",
      description:
        "This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast This is the second episode of the Caribe STEM podcast",
      duration: "30:00",
      date: new Date(),
    },
  ] as Episode[];

  const videos = [
    {
      img: "/images/caribestem.png",
      title: "Video 1",
      platform: "Youtube",
      color: "red-500",
    },
    {
      img: "/images/caribestem.png",
      title: "Video 2",
      platform: "Youtube",
      color: "red-500",
    },
    {
      img: "/images/caribestem.png",
      title: "Video 3",
      platform: "Youtube",
      color: "red-500",
    },
    {
      img: "/images/caribestem.png",
      title: "Video 1",
      platform: "Instagram",
      color: "pink-400",
    },
    {
      img: "/images/caribestem.png",
      title: "Video 2",
      platform: "Instagram",
      color: "pink-400",
    },
    {
      img: "/images/caribestem.png",
      title: "Video 3",
      platform: "Instagram",
      color: "pink-400",
    },
    {
      img: "/images/caribestem.png",
      title: "Video 1",
      platform: "TikTok",
      color: "black",
    },
    {
      img: "/images/caribestem.png",
      title: "Video 2",
      platform: "TikTok",
      color: "black",
    },
    {
      img: "/images/caribestem.png",
      title: "Video 3",
      platform: "TikTok",
      color: "black",
    },
  ] as Video[];

  return (
    <div className="bg-apolo-empty-background lg:px-[200px] pt-16">
      <div className="mb-20 rounded-full p-4 text-center bg-gradient-to-t from-[#379AE1] to-[#69BF77]">
        <i className="text-5xl font-bold text-white">Social Media</i>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-5 ">
        <Image
          src="/images/caribestem.png"
          alt="Instagram"
          width={300}
          height={300}
        />
        <div className="text-center md:text-left flex flex-col justify-between">
          <p className="text-[#67E1A8] text-4xl font-semibold">Podcast</p>
          <div className="text-6xl md:text-9xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77]">
              Caribe STEM
            </span>
          </div>
          <p className="text-white font-bold">
            Caribe STEM is a podcast created in order to share and disseminate
            STEM (science, technology, engineering and mathematics) in the
            Dominican Republic and throughout Latin America. Created by Apolo
            27, the university team representing INTEC in the NASA HERC
            competition.
          </p>
        </div>
      </div>

      <hr className="my-16"></hr>

      <div className="flex flex-col lg:flex-row  justify-between gap-10">
        <div className="text-center md:text-left">
          <p className="text-[#DFC86A] text-2xl mb-3">Latest Episodes</p>
          <div className="flex flex-col gap-4 items-center">
            {episodes.map((episode, i) => (
              <div
                key={i}
                className="flex flex-col lg:flex-row items-center w-80 lg:w-full gap-5 bg-gradient-to-r from-[#2A2A2A] to-[#161A2C] p-4 rounded-3xl"
              >
                <Image
                  src={episode.img}
                  alt="Episode"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-4 justify-around md:w-[600px]">
                  <div className="bg-gradient-to-t from-[#379AE1] to-[#69BF77] bg-clip-text">
                    <p className="text-4xl text-transparent">{episode.title}</p>
                  </div>
                  <p className="text-white font-medium">
                    {episode.description}
                  </p>
                  <div className="flex text-white gap-5 items-center">
                    <div className="rounded-full  bg-[#69BF77]">
                      <PlayCircleIcon className="h-10 w-10" />
                    </div>
                    <p>
                      <strong>Published:</strong> {episode.date.toDateString()}
                    </p>
                    <p>
                      <strong>Length:</strong> {episode.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col px-10">
          <p className="text-[#DFC86A] text-2xl mb-3">About our hosts</p>
          <Image
            src="/images/blankProfile.jpeg"
            alt="host"
            width={300}
            height={300}
          />
          <div className="bg-gradient-to-l from-[#2A2A2A] to-[#161A2C] p-4 rounded-b-3xl text-white flex flex-col gap-2 font-semibold">
            <p>Nombre</p>
            <p>Descripcion</p>
          </div>
        </div>
      </div>

      <div className="mt-20 pb-10">
        <div className="flex justify-center gap-10 mb-5">
          <button
            className="rounded-full w-42 md:w-1/5 p-4 text-white text-sm md:text-xl font-bold bg-black"
            onClick={() => setPlatform("TikTok")}
          >
            TikTok
          </button>
          <button
            className="rounded-full w-42 md:w-1/5 p-4 text-white text-sm md:text-xl font-bold bg-pink-500"
            onClick={() => setPlatform("Instagram")}
          >
            Instagram
          </button>
          <button
            className="rounded-full w-42 md:w-1/5 p-4 text-white text-sm md:text-xl font-bold bg-red-600"
            onClick={() => setPlatform("Youtube")}
          >
            Youtube
          </button>
        </div>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-between">
          {videos
            .filter((x) => x.platform === platform)
            .map((video, i) => (
              <div key={i} className="flex relative flex-col gap-2 ">
                <div
                  className="w-[300px] h-[500px] rounded-xl overflow-hidden"
                  style={{
                    backgroundImage: `url(/images/thumbnailExample.jpg)`,
                    backgroundSize: "100%",
                  }}
                >
                  <div
                    className={`w-full h-full bg-gradient-to-t from-${video.color} to-transparent`}
                  ></div>
                </div>
                {/* <Image src={"/images/thumbnailExample.jpg"} alt="Video" width={300} height={500} className={``}/> */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-xl">
                  <p className="text-white font-semibold">{video.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-10 pb-20 flex flex-col text-center items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-black border-2 border-white rounded-lg p-3 w-fit">
            <Image
              src={"/images/icons/spotify.svg"}
              alt="listen on spotify"
              width={300}
              height={100}
            />
          </div>
          <span className=" text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-[#379AE1] to-[#69BF77]">
            Connect with us!
          </span>
          <p className="font-semibold text-white text-xl w-3/4">
            FOLLOW US ON ALL OUR SOCIAL MEDIA
          </p>
        </div>

        <div className="bg-black border-white border-2 p-4 flex justify-evenly text-white w-3/4 lg:w-1/3">
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faTiktok}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faInstagram}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faFacebook}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faYoutube}
            size="2xl"
          />
          <FontAwesomeIcon
            className="hover:cursor-pointer hover:scale-110"
            icon={faXTwitter}
            size="2xl"
          />
        </div>
      </div>
    </div>
  );
}
