import React from "react";
import Image from "next/image";
import Link from "next/link";
// image
import HospitalEventIcon from "/public/logo/hospitalEvent.png";
import CashdocCommunity from "/public/logo/cashdocCommunity.png";
import GitHub from "/public/logo/github.png";
// constants
import {
  CASHDOC_COMMUNITY_URL,
  GITHUB_URL,
  HOSPITAL_EVENT_URL,
} from "@constant/link";
import { EMAIL, PHONE_NO, EXPERIENCE } from "@constant/info";
// components
import IntroduceWithTitle from "./IntroduceWithTitle";
import Stack from "./Stack";
import ArrowRightDouble from "/public/icon/ArrowRightDouble.svg";
import ArrowLeftDouble from "/public/icon/ArrowLeftDouble.svg";

function Developer() {
  const handleDownload = async () => {
    const res = await fetch(`${process.env.AWS_CLOUDFRONT_URL}/projects.pdf`);

    const blob = await res.blob();
    const downloadURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadURL;
    link.download = "이재혁_projects.pdf";
    link.click();
    URL.revokeObjectURL(downloadURL);
  };

  return (
    <div className="w-full h-full p-10 pt-5 text-gray-900 dark:text-white overflow-scroll">
      <h1 className="text-5xl mb-20">👋 Hi,&nbsp; there !</h1>

      <div className="flex flex-col items-center animate-bounce-twice">
        <button
          className="flex items-center mb-10 text-3xl cursor-pointer text-gray-600 dark:text-gray-400"
          onClick={handleDownload}
          type="button"
        >
          <ArrowRightDouble className="w-4 h-4 transition-all animate-right-left" />
          Download Detail
          <ArrowLeftDouble className="w-4 h-4 transition-all animate-left-right" />
        </button>

        <IntroduceWithTitle title="PROFILE">
          <div className="flex flex-col">
            <h1 className="text-center">이재혁</h1>
            <h1 className="text-center py-1">1999 . 04 . 09</h1>
            <h1 className="text-center">Developer</h1>
          </div>
        </IntroduceWithTitle>

        <IntroduceWithTitle title="EXPERIENCE">
          <div className="flex flex-col">
            {EXPERIENCE.map(({ icon, name, period }, index) => (
              <span
                key={index}
                className={`${index < EXPERIENCE.length - 1 ? "mb-2" : ""} ${
                  icon ? "inline-flex items-center" : ""
                }`}
              >
                {period}&nbsp;&nbsp;{" "}
                {index === 2 && <>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</>}
                :&nbsp;&nbsp;
                {icon && (
                  <Image
                    className="mr-0.5"
                    src={icon}
                    alt={name.toLowerCase().replace(/\s+/g, "_")}
                    priority
                    width={20}
                    height={20}
                  />
                )}
                {name}
              </span>
            ))}
          </div>
        </IntroduceWithTitle>

        <IntroduceWithTitle title="WHAT I MADE">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Link className="mx-8" href={HOSPITAL_EVENT_URL} target="_blank">
                <Image
                  className="w-20 ml-10 cursor-pointer transition-all hover:scale-105 active:translate-y-1"
                  src={HospitalEventIcon}
                  alt="hospital_event"
                />
              </Link>
              <Link
                className="mx-8"
                href={CASHDOC_COMMUNITY_URL}
                target="_blank"
              >
                <Image
                  className="w-40 cursor-pointer rounded-xl transition-all hover:scale-105 active:translate-y-1"
                  src={CashdocCommunity}
                  alt="cashdoc_community"
                  priority
                />
              </Link>
            </div>
          </div>
        </IntroduceWithTitle>

        <IntroduceWithTitle title="STACK">
          <Stack />
        </IntroduceWithTitle>

        <IntroduceWithTitle title="CONTACT">
          <div className="flex flex-col items-center">
            <Link className="cursor-pointer mb-5" href={`tel:${PHONE_NO}`}>
              📞&nbsp;&nbsp;{PHONE_NO}
            </Link>
            <Link
              className="cursor-pointer transition-all active:translate-y-1 mb-5"
              href={`mailto:${EMAIL}`}
            >
              📨&nbsp;&nbsp;{EMAIL}
            </Link>

            <Link
              className="flex cursor-pointer transition-all active:translate-y-1"
              href={GITHUB_URL}
            >
              <Image
                className="cursor-pointer rounded"
                src={GitHub}
                width={80}
                height={40}
                alt="github"
              />
            </Link>
          </div>
        </IntroduceWithTitle>
      </div>
    </div>
  );
}

export default React.memo(Developer);
