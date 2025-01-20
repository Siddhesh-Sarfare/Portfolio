import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import React from "react";
import company2 from "../../assets/bpifrance.png";
import company3 from "../../assets/business.png";
import company4 from "../../assets/connect.png";
import company1 from "../../assets/experimental.png";
import hero from "../../assets/hero_background.webp";
import heropic from "../../assets/ProfImgbg.png";
import cyberwork from "../../assets/work_1.png";
import templework from "../../assets/work_2.png";
import { DynamicText, GridLayout, LatestWork } from "./components";
import "./HeroHeading.css";

const hero_heading = () => {
  const handlePageChange = () => {
    window.location.href = "#";
  };
  return (
    <>
      <header className="section-footer">
        <div className="pl-10 pr-10 overflow-hidden padding-global">
          <div className="container m-auto master-container">
            <div className="flex flex-col justify-center pb-40 hero_padding-section pt-28">
              <div className="relative flex justify-center h-auto overflow-visible align-middle hero_background-image-wrapper contain-inline-size">
                <div className="absolute ml-4 text-white comming-soon start-0">
                  <DynamicText
                    text="still in development..."
                    effect="fadeOut"
                    effectDirection="left"
                    speed={15}
                  />
                </div>
                <img
                  loading="lazy"
                  className="relative bottom-0 inline-block object-cover w-full h-80 herobg"
                  src={hero}
                  alt="profile"
                />
                <img
                  loading="lazy"
                  className="absolute inline-block object-cover pl-8 pr-8 ml-auto mr-auto h-96 max-h-96 heropic"
                  src={heropic}
                  alt="profile"
                />
                <h1 className="container absolute w-full font-extrabold text-center text-white uppercase mt-52 heroName">
                  Siddhesh Sarfare
                </h1>
              </div>
              <div className="relative h-20 herocolor bg-cyan-200 mix-blend-darken"></div>
              <div className="relative flex flex-col">
                <div className="grid justify-between text-xl text-white align-middle grid-cols-0 lg:grid-cols-2 role">
                  <div className="self-center">
                    <h2 className="content-center p-1 font-bold tracking-wide text-gray-300">
                      Frontend Web Developer 123
                    </h2>
                  </div>
                  <div className="self-center justify-items-end">
                    <div
                      className="flex self-end justify-center p-2 font-semibold transition duration-200 ease-in-out border-2 rounded-full cursor-pointer w-36 hover:bg-gray-800 hover:text-white"
                      onClick={handlePageChange}
                    >
                      <InfoTwoToneIcon
                        fontSize="large"
                        className="mr-2 text-gray-300 bg-transparent"
                      />
                      <h2 className="content-center font-semibold tracking-wide text-gray-300 bg-transparent">
                        Contact
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <GridLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-cols-fr gap-x-16 gap-y-4 place-items-start bg-[#1c1c1c]">
          <div className="self-center">
            <p className="bg-[#1c1c1c] leading-normal font-normal tracking-tighter text-white opacity-100 text-wrap grid-div-1">
              Hi, I'm Siddhesh, a front-end web developer.
            </p>
          </div>
          <div className="self-center">
            <p className="bg-[#1c1c1c] leading-relaxed text-xl font-thin text-white opacity-100 text-wrap">
              With over a decade of experience in multiple disciplines, I worked
              on projects to create intuitive and engaging experiences.
            </p>
          </div>
        </div>
      </GridLayout>
      <GridLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-cols-fr gap-x-16 gap-y-4 place-items-start bg-[#1c1c1c]">
          <div className="self-center">
            <p className="bg-[#1c1c1c] leading-normal font-normal text-white opacity-100 tracking-tighter text-wrap grid-div-1">
              I often work with:
            </p>
          </div>
          <div className="relative grid w-full gap-5 bg-[#1c1c1c]">
            <div className="self-center">
              <p className="flex items-center gap-6 px-10 py-5 text-2xl font-thin leading-relaxed text-white transition duration-200 ease-in-out rounded-md text-wrap hover:-translate-x-1 hover:scale-110">
                <ArrowOutwardOutlinedIcon
                  fontSize="large"
                  className="p-1 border-2 border-white rounded-md"
                />
                Startups
              </p>
            </div>
            <div className="self-center">
              <p className="flex items-center gap-6 px-10 py-5 text-2xl font-thin leading-relaxed text-white transition duration-200 ease-in-out rounded-md text-wrap hover:-translate-x-1 hover:scale-110">
                <ArrowOutwardOutlinedIcon
                  fontSize="large"
                  className="p-1 border-2 border-white rounded-md"
                />
                Trusts
              </p>
            </div>
            <div className="self-center">
              <p className="flex items-center gap-6 px-10 py-5 text-2xl font-thin leading-relaxed text-white transition duration-200 ease-in-out rounded-md text-wrap hover:-translate-x-1 hover:scale-110">
                <ArrowOutwardOutlinedIcon
                  fontSize="large"
                  className="p-1 border-2 border-white rounded-md"
                />
                Marketing teams
              </p>
            </div>
            <div className="self-center">
              <p className="flex items-center gap-6 px-10 py-5 text-2xl font-thin leading-relaxed text-white transition duration-200 ease-in-out rounded-md text-wrap hover:-translate-x-1 hover:scale-110">
                <ArrowOutwardOutlinedIcon
                  fontSize="large"
                  className="p-1 border-2 border-white rounded-md"
                />
                Agencies
              </p>
            </div>
          </div>
        </div>
      </GridLayout>
      <GridLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-cols-fr gap-x-16 gap-y-4 place-items-start bg-[#1c1c1c]">
          <div className="self-center">
            <p className="bg-[#1c1c1c] leading-normal tracking-tighter text-5xl font-normal text-white opacity-100 text-wrap grid-div-1">
              I've worked with the likes of:
            </p>
          </div>
          <div className="self-center ml-4">
            <div className="relative grid w-full gap-5 bg-[#1c1c1c] likes-of justify-start place-items-center box-border">
              <img
                loading="lazy"
                className="max-h-44 altra"
                src={company1}
                alt="altra"
              />
              <img
                loading="lazy"
                className="max-h-32 bpifrance"
                src={company2}
                alt="bpifrance"
              />
              <img
                loading="lazy"
                className="max-h-32 business"
                src={company3}
                alt="business"
              />
              <img
                loading="lazy"
                className="max-h-32 connect"
                src={company4}
                alt="connect"
              />
            </div>
          </div>
        </div>
      </GridLayout>
      <GridLayout>
        <div className="relative max-w-[80%] flex flex-col items-center justify-start w-full mx-auto justify-items-start bg-[#1c1c1c] latest-grid">
          <div className="sticky top-28"></div>
          <h2 className="sticky font-black tracking-tighter text-center text-white uppercase text-8xl top-14 bg-[#1c1c1c] latest-work">
            latest work
          </h2>
          <div className="relative flex flex-col w-full bg-transparent latest-case-component">
            <LatestWork title="Cyber Protection" link="/">
              <img
                className="object-cover bpifrance h-96"
                src={cyberwork}
                alt="CyberProtection"
                loading="lazy"
              />
            </LatestWork>
            <LatestWork title="Devotional Website" link="/">
              <img
                className="object-cover bpifrance h-96"
                src={templework}
                alt="Temple"
                loading="lazy"
              />
            </LatestWork>
            <LatestWork title="Devotional Website" link="/">
              <img
                className="object-cover bpifrance h-96"
                src={templework}
                alt="Temple"
                loading="lazy"
              />
            </LatestWork>
          </div>
        </div>
      </GridLayout>
      {/* <GridLayout>
        <a
          className="relative flex items-center justify-center overflow-visible h-72"
          href="/"
        >
          <img
            loading="lazy"
            className="relative bottom-0 inline-block object-cover w-full h-80 herobg"
            src={hero}
            alt="profile"
          />
          <h1 className="container absolute w-full font-extrabold text-center text-white uppercase mt-52 heroName">
            get in touch
          </h1>
        </a>
      </GridLayout> */}
      <header className="section-footer">
        <div className="pl-10 pr-10 overflow-hidden padding-global">
          <div className="container m-auto master-container">
            <div className="flex flex-col justify-center px-4 pb-40 hero_padding-section pt-28">
              <div className="relative flex justify-center h-auto overflow-visible align-middle transition-transform hero_background-image-wrapper contain-inline-size transform-style-preserve-3d hover:scale-105">
                <a
                  className="relative flex items-center justify-center w-full h-72"
                  href="mailto:siddhesh.sarfare2001@gmail.com"
                >
                  <img
                    loading="lazy"
                    className="relative get-in-touch bottom-0 inline-block object-cover w-full h-80 opacity-5 rounded-t-3xl scale-y-[-1]"
                    src={hero}
                    alt="profile"
                  />
                  <h1 className="container absolute w-full font-extrabold text-center text-white uppercase mt-80 heroName">
                    get in touch
                  </h1>
                </a>
              </div>
              <div className="relative h-20 mt-4 herocolor bg-cyan-200 mix-blend-darken"></div>
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-6/12">
                  <a
                    className="relative z-10 p-2 text-white transition-transform border-2 rounded-full border-white-500 transform-style-preserve-3d hover:scale-105"
                    href="mailto:siddhesh.sarfare2001@gmail.com"
                  >
                    siddhesh.sarfare2001@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default hero_heading;
