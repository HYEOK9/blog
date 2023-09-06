import Image from "next/image";
import Link from "next/link";
// image
import CashDocIcon from "/public/logo/cashdoc.png";
import HospitalEventIcon from "/public/logo/hospitalEvent.png";
import CashdocCommunity from "/public/logo/cashdocCommunity.png";
// constants
import {
  CASHDOC_COMMUNITY_URL,
  HOSPITAL_EVENT_URL,
  PROJECT_NOTION_URL,
} from "@constant/Link";
import { EMAIL } from "@constant/info";
// components
import IntroduceWithTitle from "./IntroduceWithTitle";
import Stack from "./Stack";

export default function Developer() {
  return (
    <div className="w-full h-full p-10 pt-5 text-white overflow-scroll">
      <h1 className="text-5xl mb-20">👋 Hi,&nbsp; I{`'`}m Jaehyeok</h1>

      <div className="flex flex-col items-center animate-bounce-twice">
        <IntroduceWithTitle title="PROFILE">
          <div className="flex flex-col">
            <h1 className="text-center">이재혁</h1>
            <h1 className="text-center py-1">1999 / 04 / 09</h1>
            <h1 className="text-center">Frontend Developer</h1>
          </div>
        </IntroduceWithTitle>

        <IntroduceWithTitle title="EXPERIENCE">
          <div className="flex flex-col">
            <span className="mb-2">
              2018.03 ~&nbsp;&nbsp;&nbsp;&nbsp;now&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              :&nbsp;&nbsp;&nbsp;🏫 &nbsp;Kyung Hee University
            </span>
            <span className="inline-flex items-center">
              2022.12 ~ 2023.06&nbsp;&nbsp;:&nbsp;&nbsp;
              <Image
                className="w-5 h-5 mr-0.5"
                src={CashDocIcon}
                alt="cashdoc"
              />
              &nbsp;Chunneung IT (cashdoc)
            </span>
          </div>
        </IntroduceWithTitle>

        <IntroduceWithTitle title="WHAT I MADE">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <Link className="mx-8" href={HOSPITAL_EVENT_URL} target="_blank">
                <Image
                  className="w-20 ml-10 cursor-pointer transition-all hover:scale-110"
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
                  className="w-40 cursor-pointer rounded-xl transition-all hover:scale-110"
                  src={CashdocCommunity}
                  alt="cashdoc_community"
                />
              </Link>
            </div>
            <Link
              className="mt-10 text-xs cursor-pointer transition-all hover:scale-95"
              href={PROJECT_NOTION_URL}
              target="_blank"
            >
              MORE DETAIL
            </Link>
          </div>
        </IntroduceWithTitle>

        <IntroduceWithTitle title="STACK">
          <Stack />
        </IntroduceWithTitle>

        <IntroduceWithTitle title="CONTACT">
          <div className="flex flex-col items-center">
            {/* <Link className="cursor-pointer" href={`tel:${PHONE_NO}`}>
              📞&nbsp;&nbsp;{PHONE_NO}
            </Link>
            <br /> */}
            <Link
              className="cursor-pointer transition-all hover:scale-105"
              href={`mailto:${EMAIL}`}
            >
              📨&nbsp;&nbsp;{EMAIL}
            </Link>
          </div>
        </IntroduceWithTitle>
      </div>
    </div>
  );
}