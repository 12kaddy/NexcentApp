import React from "react";
import { Button } from "../../components/Button";
import { FooterBig } from "../../components/FooterBig";
import { Logo } from "../../components/Logo";
import { TwentyFourArrowsDirectionsRight16 } from "../../icons/TwentyFourArrowsDirectionsRight16";

export const LandingPage = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[4376px] relative">
        <div className="absolute w-[1440px] h-[1285px] top-[84px] left-0">
          <div className="inline-flex flex-col items-start gap-10 absolute top-0 left-0">
            <div className="flex items-center gap-[104px] px-36 py-24 relative self-stretch w-full flex-[0_0_auto] bg-neutralsilver">
              <div className="flex flex-col items-start gap-8 relative flex-1 grow">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative self-stretch mt-[-1.00px] font-heading-headline-1 font-[number:var(--heading-headline-1-font-weight)] text-transparent text-[length:var(--heading-headline-1-font-size)] tracking-[var(--heading-headline-1-letter-spacing)] leading-[var(--heading-headline-1-line-height)] [font-style:var(--heading-headline-1-font-style)]">
                    <span className="text-[#4d4d4d] font-heading-headline-1 [font-style:var(--heading-headline-1-font-style)] font-[number:var(--heading-headline-1-font-weight)] tracking-[var(--heading-headline-1-letter-spacing)] leading-[var(--heading-headline-1-line-height)] text-[length:var(--heading-headline-1-font-size)]">
                      Lessons and insights{" "}
                    </span>
                    <span className="text-[#4caf4f] font-heading-headline-1 [font-style:var(--heading-headline-1-font-style)] font-[number:var(--heading-headline-1-font-weight)] tracking-[var(--heading-headline-1-letter-spacing)] leading-[var(--heading-headline-1-line-height)] text-[length:var(--heading-headline-1-font-size)]">
                      from 8 years
                    </span>
                  </p>
                  <p className="relative self-stretch font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-neutralgrey text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                    Where to grow your business as a photographer: site or social media?
                  </p>
                </div>
                <Button
                  className="!flex-[0_0_auto]"
                  divClassName="!tracking-[var(--body-medium-body-2-letter-spacing)] !text-[length:var(--body-medium-body-2-font-size)] ![font-style:var(--body-medium-body-2-font-style)] !font-[number:var(--body-medium-body-2-font-weight)] !font-body-medium-body-2 !leading-[var(--body-medium-body-2-line-height)]"
                  icon="no"
                  size="medium"
                  state="default"
                  text="Register"
                  type="primary"
                />
              </div>
              <img className="relative w-[391px] h-[407px]" alt="Illustration" src="/img/illustration.svg" />
            </div>
            <div className="flex flex-col w-[1440px] items-center gap-4 px-36 py-0 relative flex-[0_0_auto]">
              <div className="flex flex-col w-[1110px] items-center gap-2 relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] font-heading-headline-2 font-[number:var(--heading-headline-2-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-2-font-size)] text-center tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] [font-style:var(--heading-headline-2-font-style)]">
                  Our Clients
                </div>
                <p className="relative self-stretch font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-neutralgrey text-[length:var(--body-regular-body-2-font-size)] text-center tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                  We have been working with some Fortune 500+ clients
                </p>
              </div>
              <img
                className="relative self-stretch w-full h-[98px] mr-[-4.00px]"
                alt="Clients logos"
                src="/img/clients-logos.svg"
              />
            </div>
            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="flex w-[1440px] gap-2 flex-col items-center relative flex-[0_0_auto]">
                <p className="w-[542px] text-neutraldgrey text-center relative mt-[-1.00px] font-heading-headline-2 font-[number:var(--heading-headline-2-font-weight)] text-[length:var(--heading-headline-2-font-size)] tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] [font-style:var(--heading-headline-2-font-style)]">
                  Manage your entire community in a single system
                </p>
                <p className="relative self-stretch font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-neutralgrey text-[length:var(--body-regular-body-2-font-size)] text-center tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                  Who is Nextcent suitable for?
                </p>
              </div>
              <div className="flex w-[1440px] items-center justify-between px-36 py-0 relative flex-[0_0_auto]">
                <div className="flex flex-col w-[299px] items-center gap-2 px-8 py-6 relative bg-neutralwhite rounded-lg shadow-[0px_2px_4px_#abbed133]">
                  <div className="flex flex-col w-[267px] items-center gap-4 relative flex-[0_0_auto] ml-[-16.00px] mr-[-16.00px]">
                    <div className="relative w-[65px] h-14">
                      <div className="relative w-[65px] h-14">
                        <div className="absolute w-[50px] h-[49px] top-[7px] left-[15px] bg-tintt-5 rounded-[18px_5px_10px_5px] rotate-[-180.00deg]" />
                        <img className="absolute w-12 h-12 top-0 left-0" alt="Icon" src="/img/icon-3.svg" />
                      </div>
                    </div>
                    <div className="relative self-stretch font-heading-headline-3 font-[number:var(--heading-headline-3-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-3-font-size)] text-center tracking-[var(--heading-headline-3-letter-spacing)] leading-[var(--heading-headline-3-line-height)] [font-style:var(--heading-headline-3-font-style)]">
                      Membership Organisations
                    </div>
                  </div>
                  <div className="inline-flex items-start gap-2 relative flex-[0_0_auto] ml-[-8.00px] mr-[-8.00px]">
                    <p className="relative w-[251px] mt-[-1.00px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralgrey text-[length:var(--body-regular-body-3-font-size)] text-center tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
                      Our membership management software provides full automation of membership renewals and payments
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-[299px] items-center gap-2 px-8 py-6 relative bg-neutralwhite rounded-lg shadow-[0px_2px_4px_#abbed133]">
                  <div className="flex flex-col w-[267px] items-center gap-4 relative flex-[0_0_auto] ml-[-16.00px] mr-[-16.00px]">
                    <div className="relative w-[65px] h-14">
                      <div className="relative w-[65px] h-14">
                        <div className="absolute w-[50px] h-[49px] top-[7px] left-[15px] bg-tintt-5 rounded-[18px_5px_10px_5px] rotate-[-180.00deg]" />
                        <img className="absolute w-12 h-12 top-0 left-0" alt="Icon" src="/img/icon-4.svg" />
                      </div>
                    </div>
                    <div className="relative self-stretch font-heading-headline-3 font-[number:var(--heading-headline-3-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-3-font-size)] text-center tracking-[var(--heading-headline-3-letter-spacing)] leading-[var(--heading-headline-3-line-height)] [font-style:var(--heading-headline-3-font-style)]">
                      National Associations
                    </div>
                  </div>
                  <div className="inline-flex items-start gap-2 relative flex-[0_0_auto] ml-[-2.50px] mr-[-2.50px]">
                    <p className="relative w-60 mt-[-1.00px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralgrey text-[length:var(--body-regular-body-3-font-size)] text-center tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
                      Our membership management software provides full automation of membership renewals and payments
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-[299px] items-center gap-2 px-8 py-6 relative bg-neutralwhite rounded-lg shadow-[0px_2px_4px_#abbed133]">
                  <div className="flex flex-col w-[267px] items-center gap-4 relative flex-[0_0_auto] ml-[-16.00px] mr-[-16.00px]">
                    <div className="relative w-[65px] h-14">
                      <div className="relative w-[65px] h-14">
                        <div className="absolute w-[50px] h-[49px] top-[7px] left-[15px] bg-tintt-5 rounded-[18px_5px_10px_5px] rotate-[-180.00deg]" />
                        <img className="absolute w-12 h-12 top-0 left-0" alt="Icon" src="/img/icon-5.svg" />
                      </div>
                    </div>
                    <div className="relative w-[231px] font-heading-headline-3 font-[number:var(--heading-headline-3-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-3-font-size)] text-center tracking-[var(--heading-headline-3-letter-spacing)] leading-[var(--heading-headline-3-line-height)] [font-style:var(--heading-headline-3-font-style)]">
                      Clubs And Groups
                    </div>
                  </div>
                  <div className="inline-flex items-start gap-2 relative flex-[0_0_auto] ml-[-8.00px] mr-[-8.00px]">
                    <p className="relative w-[251px] mt-[-1.00px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralgrey text-[length:var(--body-regular-body-3-font-size)] text-center tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
                      Our membership management software provides full automation of membership renewals and payments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-start gap-2 absolute top-[573px] left-[697px]">
            <div className="relative w-2.5 h-2.5 bg-brandprimary rounded-[5px]" />
            <div className="relative w-2.5 h-2.5 bg-brandprimary rounded-[5px] opacity-30" />
            <div className="relative w-2.5 h-2.5 bg-brandprimary rounded-[5px] opacity-30" />
          </div>
        </div>
        <div className="inline-flex flex-col items-start justify-center gap-12 absolute top-[1411px] left-px">
          <div className="inline-flex items-start relative flex-[0_0_auto] overflow-x-scroll">
            <div className="flex w-[1440px] items-center justify-between px-36 py-0 relative">
              <img className="relative w-[442px] h-[433px]" alt="Frame" src="/img/frame-35.svg" />
              <div className="flex flex-col w-[661px] items-start gap-8 relative">
                <div className="flex flex-col w-[601px] items-start gap-4 relative flex-[0_0_auto]">
                  <p className="relative self-stretch mt-[-1.00px] font-heading-headline-2 font-[number:var(--heading-headline-2-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-2-font-size)] tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] [font-style:var(--heading-headline-2-font-style)]">
                    The unseen of spending three years at Pixelgrade
                  </p>
                  <p className="relative self-stretch font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralgrey text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam
                    vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                    tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam
                    quam vitae, tempus sem. Donec elementum pulvinar odio.
                  </p>
                </div>
                <Button
                  className="!flex-[0_0_auto]"
                  divClassName="!tracking-[var(--body-medium-body-2-letter-spacing)] !text-[length:var(--body-medium-body-2-font-size)] ![font-style:var(--body-medium-body-2-font-style)] !font-[number:var(--body-medium-body-2-font-weight)] !font-body-medium-body-2 !leading-[var(--body-medium-body-2-line-height)]"
                  icon="no"
                  size="medium"
                  state="default"
                  text="Learn More"
                  type="primary"
                />
              </div>
            </div>
          </div>
          <div className="flex w-[1440px] items-center justify-between px-36 py-16 relative flex-[0_0_auto] bg-neutralsilver">
            <div className="flex flex-col w-[540px] items-start gap-2 relative">
              <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
                <p className="w-[408px] text-transparent relative mt-[-1.00px] font-heading-headline-2 font-[number:var(--heading-headline-2-font-weight)] text-[length:var(--heading-headline-2-font-size)] tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] [font-style:var(--heading-headline-2-font-style)]">
                  <span className="text-[#4d4d4d] font-heading-headline-2 [font-style:var(--heading-headline-2-font-style)] font-[number:var(--heading-headline-2-font-weight)] tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] text-[length:var(--heading-headline-2-font-size)]">
                    Helping a local{" "}
                  </span>
                  <span className="text-[#4caf4f] font-heading-headline-2 [font-style:var(--heading-headline-2-font-style)] font-[number:var(--heading-headline-2-font-weight)] tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] text-[length:var(--heading-headline-2-font-size)]">
                    business reinvent itself
                  </span>
                </p>
              </div>
              <p className="self-stretch text-text-gray-900 relative font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="inline-flex flex-col items-center gap-10 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[30px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                  <img className="relative w-12 h-12" alt="Icon" src="/img/icon-6.svg" />
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="relative w-[191px] mt-[-1.00px] font-heading-headline-3 font-[number:var(--heading-headline-3-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-3-font-size)] tracking-[var(--heading-headline-3-letter-spacing)] leading-[var(--heading-headline-3-line-height)] [font-style:var(--heading-headline-3-font-style)]">
                      2,245,341
                    </div>
                    <div className="w-[191px] font-[number:var(--body-regular-body-2-font-weight)] text-neutralgrey relative font-body-regular-body-2 text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                      Members
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                  <img className="relative w-12 h-12" alt="Icon" src="/img/icon-7.svg" />
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="relative w-[191px] mt-[-1.00px] font-heading-headline-3 font-[number:var(--heading-headline-3-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-3-font-size)] tracking-[var(--heading-headline-3-letter-spacing)] leading-[var(--heading-headline-3-line-height)] [font-style:var(--heading-headline-3-font-style)]">
                      46,328
                    </div>
                    <div className="w-[191px] font-[number:var(--body-regular-body-2-font-weight)] text-neutralgrey relative font-body-regular-body-2 text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                      Clubs
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-[30px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                  <img className="relative w-12 h-12" alt="Icon" src="/img/icon-8.svg" />
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="relative w-[191px] mt-[-1.00px] font-heading-headline-3 font-[number:var(--heading-headline-3-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-3-font-size)] tracking-[var(--heading-headline-3-letter-spacing)] leading-[var(--heading-headline-3-line-height)] [font-style:var(--heading-headline-3-font-style)]">
                      828,867
                    </div>
                    <div className="w-[191px] font-[number:var(--body-regular-body-2-font-weight)] text-neutralgrey relative font-body-regular-body-2 text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                      Event Bookings
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
                  <img className="relative w-12 h-12" alt="Icon" src="/img/icon-9.svg" />
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div className="relative w-[191px] mt-[-1.00px] font-heading-headline-3 font-[number:var(--heading-headline-3-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-3-font-size)] tracking-[var(--heading-headline-3-letter-spacing)] leading-[var(--heading-headline-3-line-height)] [font-style:var(--heading-headline-3-font-style)]">
                      1,926,436
                    </div>
                    <div className="w-[191px] font-[number:var(--body-regular-body-2-font-weight)] text-neutralgrey relative font-body-regular-body-2 text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                      Payments
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-start relative flex-[0_0_auto] overflow-x-scroll">
            <div className="flex w-[1440px] items-center justify-between px-36 py-0 relative">
              <div className="relative w-[441.53px] h-[433.4px]">
                <div className="relative w-[442px] h-[434px]">
                  <img
                    className="absolute w-[442px] h-[381px] top-0 left-0"
                    alt="Background complete"
                    src="/img/background-complete.png"
                  />
                  <img
                    className="absolute w-80 h-[298px] top-[88px] left-12"
                    alt="Background simple"
                    src="/img/background-simple.png"
                  />
                  <img className="absolute w-[321px] h-px top-[433px] left-14" alt="Floor" src="/img/floor.png" />
                  <img
                    className="absolute w-[86px] h-[148px] top-[196px] left-[287px]"
                    alt="Plant"
                    src="/img/plant.png"
                  />
                  <img
                    className="absolute w-[86px] h-[103px] top-[5px] left-[282px]"
                    alt="Padlock"
                    src="/img/padlock.png"
                  />
                  <div className="absolute w-[158px] h-[345px] top-[51px] left-[163px]">
                    <div className="relative w-[156px] h-[345px]">
                      <img className="absolute w-[149px] h-[304px] top-0 left-0" alt="Vector" src="/img/vector.svg" />
                      <img
                        className="absolute w-[136px] h-[284px] top-[9px] left-[7px]"
                        alt="Vector"
                        src="/img/vector-1.svg"
                      />
                      <img className="absolute w-20 h-6 top-[236px] left-[35px]" alt="Vector" src="/img/vector-2.svg" />
                      <div className="absolute w-[99px] top-[242px] left-[57px] [font-family:'Montserrat',Helvetica] font-normal text-[#e8e8e3] text-[8.1px] tracking-[0] leading-[normal]">
                        SING UP
                      </div>
                      <img
                        className="absolute w-[27px] h-[5px] top-[84px] left-[25px]"
                        alt="Vector"
                        src="/img/vector-3.svg"
                      />
                      <img
                        className="absolute w-[27px] h-[5px] top-[84px] left-[25px]"
                        alt="Vector"
                        src="/img/vector-4.svg"
                      />
                      <img
                        className="absolute w-[107px] h-[18px] top-[95px] left-[25px]"
                        alt="Vector"
                        src="/img/vector-5.svg"
                      />
                      <img
                        className="absolute w-[49px] h-[5px] top-[101px] left-[33px]"
                        alt="Vector"
                        src="/img/vector-6.svg"
                      />
                      <img
                        className="absolute w-[49px] h-[5px] top-[101px] left-[33px]"
                        alt="Vector"
                        src="/img/vector-7.svg"
                      />
                      <img
                        className="absolute w-[27px] h-[5px] top-32 left-[25px]"
                        alt="Vector"
                        src="/img/vector-8.svg"
                      />
                      <img
                        className="absolute w-[27px] h-[5px] top-32 left-[25px]"
                        alt="Vector"
                        src="/img/vector-9.svg"
                      />
                      <img
                        className="absolute w-[107px] h-[18px] top-[140px] left-6"
                        alt="Vector"
                        src="/img/vector-10.svg"
                      />
                      <img
                        className="absolute w-[27px] h-[5px] top-[174px] left-[25px]"
                        alt="Vector"
                        src="/img/vector-11.svg"
                      />
                      <img
                        className="absolute w-[27px] h-[5px] top-[174px] left-[25px]"
                        alt="Vector"
                        src="/img/vector-12.svg"
                      />
                      <img
                        className="absolute w-[107px] h-[18px] top-[186px] left-6"
                        alt="Vector"
                        src="/img/vector-13.svg"
                      />
                      <img
                        className="absolute w-[49px] h-[5px] top-[147px] left-8"
                        alt="Vector"
                        src="/img/vector-14.svg"
                      />
                      <img
                        className="absolute w-[49px] h-[5px] top-[147px] left-8"
                        alt="Vector"
                        src="/img/vector-15.svg"
                      />
                      <img className="absolute w-1 h-1 top-[194px] left-8" alt="Vector" src="/img/vector-16.svg" />
                      <img
                        className="absolute w-1 h-[5px] top-[194px] left-[39px]"
                        alt="Vector"
                        src="/img/vector-17.svg"
                      />
                      <img className="absolute w-1 h-1 top-[194px] left-[45px]" alt="Vector" src="/img/vector-18.svg" />
                      <img className="absolute w-1 h-1 top-[194px] left-[52px]" alt="Vector" src="/img/vector-19.svg" />
                      <img className="absolute w-1 h-1 top-[194px] left-[58px]" alt="Vector" src="/img/vector-20.svg" />
                      <img className="absolute w-1 h-1 top-[194px] left-[65px]" alt="Vector" src="/img/vector-21.svg" />
                      <img
                        className="absolute w-1 h-[5px] top-[194px] left-[72px]"
                        alt="Vector"
                        src="/img/vector-22.svg"
                      />
                      <img className="absolute w-1 h-1 top-[194px] left-[78px]" alt="Vector" src="/img/vector-23.svg" />
                      <img className="absolute w-1 h-1 top-[194px] left-[85px]" alt="Vector" src="/img/vector-24.svg" />
                      <img className="absolute w-[57px] h-[5px] top-[194px] left-8" alt="Group" src="/img/group.png" />
                      <img
                        className="absolute w-3.5 h-[15px] top-[39px] left-[71px]"
                        alt="Vector"
                        src="/img/vector-25.svg"
                      />
                      <img
                        className="absolute w-3.5 h-[15px] top-[39px] left-[71px]"
                        alt="Vector"
                        src="/img/vector-26.svg"
                      />
                      <img
                        className="absolute w-[49px] h-1.5 top-[58px] left-[53px]"
                        alt="Vector"
                        src="/img/vector-27.svg"
                      />
                      <img
                        className="absolute w-[49px] h-1.5 top-[58px] left-[53px]"
                        alt="Vector"
                        src="/img/vector-28.svg"
                      />
                    </div>
                  </div>
                  <img
                    className="absolute w-[53px] h-[61px] top-[139px] left-[59px]"
                    alt="Speech bubble"
                    src="/img/speech-bubble.png"
                  />
                  <img
                    className="absolute w-[148px] h-72 top-[145px] left-[86px]"
                    alt="Character"
                    src="/img/character.png"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[661px] items-start gap-8 relative">
                <div className="flex flex-col w-[601px] items-start gap-4 relative flex-[0_0_auto]">
                  <p className="relative self-stretch mt-[-1.00px] font-heading-headline-2 font-[number:var(--heading-headline-2-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-2-font-size)] tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] [font-style:var(--heading-headline-2-font-style)]">
                    How to design your site footer like we did
                  </p>
                  <p className="relative self-stretch font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralgrey text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                    massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                    In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In
                    euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo
                    faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                    Donec consectetur faucibus ipsum id gravida.
                  </p>
                </div>
                <Button
                  className="!flex-[0_0_auto]"
                  divClassName="!tracking-[var(--body-medium-body-2-letter-spacing)] !text-[length:var(--body-medium-body-2-font-size)] ![font-style:var(--body-medium-body-2-font-style)] !font-[number:var(--body-medium-body-2-font-weight)] !font-body-medium-body-2 !leading-[var(--body-medium-body-2-line-height)]"
                  icon="no"
                  size="medium"
                  state="default"
                  text="Learn More"
                  type="primary"
                />
              </div>
            </div>
          </div>
          <div className="flex w-[1440px] items-center gap-[78px] px-36 py-8 relative flex-[0_0_auto] bg-neutralsilver">
            <img
              className="relative w-[358px] h-[358px] mt-[-8.00px] mb-[-24.00px] ml-[-16.00px] object-cover"
              alt="Image"
              src="/img/image-9.png"
            />
            <div className="flex flex-col items-start gap-8 relative flex-1 grow">
              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] font-body-medium-body-2 font-[number:var(--body-medium-body-2-font-weight)] text-neutralgrey text-[length:var(--body-medium-body-2-font-size)] tracking-[var(--body-medium-body-2-letter-spacing)] leading-[var(--body-medium-body-2-line-height)] [font-style:var(--body-medium-body-2-font-style)]">
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                  tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                  enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
                  mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                  eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae
                  placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
                  Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-brandprimary text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
                    Tim Smith
                  </div>
                  <p className="relative self-stretch font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-neutrallgrey text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                    British Dragon Boat Racing Association
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                <img className="relative flex-[0_0_auto]" alt="Frame" src="/img/frame-10.svg" />
                <div className="flex items-center gap-2 p-2 relative flex-1 grow">
                  <div className="relative w-[188px] mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-brandprimary text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
                    Meet all customers
                  </div>
                  <TwentyFourArrowsDirectionsRight16 className="!relative !w-6 !h-6 !mr-[-13.00px]" color="#4CAF4F" />
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex gap-4 flex-col items-center relative flex-[0_0_auto]">
            <div className="flex w-[1110px] gap-2 flex-col items-center relative flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-heading-headline-2 font-[number:var(--heading-headline-2-font-weight)] text-neutraldgrey text-[length:var(--heading-headline-2-font-size)] text-center tracking-[var(--heading-headline-2-letter-spacing)] leading-[var(--heading-headline-2-line-height)] [font-style:var(--heading-headline-2-font-style)]">
                Caring is the new marketing
              </p>
              <p className="w-[628px] text-neutralgrey text-center relative font-body-regular-body-2 font-[number:var(--body-regular-body-2-font-weight)] text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                The Nexcent blog is the best place to read about the latest membership insights, trends and more. See
                who&#39;s joining the community, read about how our community are increasing their membership income and
                lot&#39;s more.​
              </p>
            </div>
            <div className="flex w-[1440px] items-center justify-between px-36 py-0 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <img className="relative w-[368px] h-[286px] object-cover" alt="Image" src="/img/image-18.png" />
                <div className="inline-flex flex-col items-center gap-4 p-4 relative flex-[0_0_auto] -mt-24 bg-neutralsilver rounded-lg shadow-shadow-8px">
                  <p className="relative w-[285px] mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-neutralgrey text-[length:var(--heading-headline-4-font-size)] text-center tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
                    Creating Streamlined Safeguarding Processes with OneRen
                  </p>
                  <div className="flex items-center justify-center gap-2 p-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-brandprimary text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] whitespace-nowrap [font-style:var(--heading-headline-4-font-style)]">
                      Readmore
                    </div>
                    <TwentyFourArrowsDirectionsRight16 className="!relative !w-6 !h-6" color="#4CAF4F" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <img className="relative w-[368px] h-[286px]" alt="Image" src="/img/image-19.png" />
                <div className="inline-flex flex-col items-center gap-4 p-4 relative flex-[0_0_auto] -mt-24 bg-neutralsilver rounded-lg shadow-shadow-8px">
                  <p className="relative w-[285px] mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-neutralgrey text-[length:var(--heading-headline-4-font-size)] text-center tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
                    What are your safeguarding responsibilities and how can you manage them?
                  </p>
                  <div className="flex items-center justify-center gap-2 p-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-brandprimary text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] whitespace-nowrap [font-style:var(--heading-headline-4-font-style)]">
                      Readmore
                    </div>
                    <TwentyFourArrowsDirectionsRight16 className="!relative !w-6 !h-6" color="#4CAF4F" />
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                <img className="relative w-[368px] h-[286px] object-cover" alt="Image" src="/img/image-20.png" />
                <div className="inline-flex flex-col items-center gap-4 p-4 relative flex-[0_0_auto] -mt-24 bg-neutralsilver rounded-lg shadow-shadow-8px">
                  <p className="relative w-[285px] mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-neutralgrey text-[length:var(--heading-headline-4-font-size)] text-center tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
                    Revamping the Membership Model with Triathlon Australia
                  </p>
                  <div className="flex items-center justify-center gap-2 p-2 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-brandprimary text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] whitespace-nowrap [font-style:var(--heading-headline-4-font-style)]">
                      Readmore
                    </div>
                    <TwentyFourArrowsDirectionsRight16 className="!relative !w-6 !h-6" color="#4CAF4F" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="inline-flex flex-col items-start absolute top-[3748px] left-0 bg-transparent">
          <div className="flex flex-col w-[1440px] items-center gap-8 px-0 py-8 relative flex-[0_0_auto] bg-neutralsilver">
            <p className="relative w-[887px] mt-[-1.00px] font-heading-headline-1 font-[number:var(--heading-headline-1-font-weight)] text-neutralblack text-[length:var(--heading-headline-1-font-size)] text-center tracking-[var(--heading-headline-1-letter-spacing)] leading-[var(--heading-headline-1-line-height)] [font-style:var(--heading-headline-1-font-style)]">
              Pellentesque suscipit fringilla libero eu.
            </p>
            <Button
              className="!flex-[0_0_auto]"
              divClassNameOverride="!tracking-[var(--body-medium-body-2-letter-spacing)] !text-[length:var(--body-medium-body-2-font-size)] ![font-style:var(--body-medium-body-2-font-style)] !font-[number:var(--body-medium-body-2-font-weight)] !font-body-medium-body-2 !leading-[var(--body-medium-body-2-line-height)]"
              icon="right"
              size="medium"
              state="default"
              text="Get a Demo"
              type="primary"
            />
          </div>
          <FooterBig
            className="!flex-[0_0_auto]"
            logoNexcent="/img/nexcent-2.svg"
            text="Copyright © 2020 Nexcent ltd."
          />
        </footer>
        <div className="absolute w-[1440px] h-[84px] top-0 left-0 bg-neutralsilver">
          <div className="absolute w-[588px] h-6 top-[30px] left-[426px]">
            <div className="inline-flex items-center justify-center gap-[50px] relative">
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-[number:var(--body-medium-body-2-font-weight)] text-text-gray-900 whitespace-nowrap relative font-body-medium-body-2 text-[length:var(--body-medium-body-2-font-size)] tracking-[var(--body-medium-body-2-letter-spacing)] leading-[var(--body-medium-body-2-line-height)] [font-style:var(--body-medium-body-2-font-style)]">
                  Home
                </div>
              </div>
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-[number:var(--body-regular-body-2-font-weight)] text-text-gray-900 whitespace-nowrap relative font-body-regular-body-2 text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                  Service
                </div>
              </div>
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-[number:var(--body-regular-body-2-font-weight)] text-text-gray-900 whitespace-nowrap relative font-body-regular-body-2 text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                  Feature
                </div>
              </div>
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-[number:var(--body-regular-body-2-font-weight)] text-text-gray-900 whitespace-nowrap relative font-body-regular-body-2 text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                  Product
                </div>
              </div>
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-[number:var(--body-regular-body-2-font-weight)] text-text-gray-900 whitespace-nowrap relative font-body-regular-body-2 text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                  Testimonial
                </div>
              </div>
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-[number:var(--body-regular-body-2-font-weight)] text-text-gray-900 whitespace-nowrap relative font-body-regular-body-2 text-[length:var(--body-regular-body-2-font-size)] tracking-[var(--body-regular-body-2-letter-spacing)] leading-[var(--body-regular-body-2-line-height)] [font-style:var(--body-regular-body-2-font-style)]">
                  FAQ
                </div>
              </div>
            </div>
          </div>
          <Logo
            className="!absolute !left-[105px] !top-[30px]"
            icon11Color="#263238"
            icon11StyleOverrideClassName="!relative !w-[35px] !h-6"
            nexcent="/img/nexcent-3.svg"
          />
          <div className="inline-flex items-start gap-3.5 absolute top-[22px] left-[1138px]">
            <button className="all-[unset] box-border gap-2.5 px-5 py-2.5 bg-neutralsilver rounded-md inline-flex items-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-label-medium-label font-[number:var(--label-medium-label-font-weight)] text-brandprimary text-[length:var(--label-medium-label-font-size)] text-center tracking-[var(--label-medium-label-letter-spacing)] leading-[var(--label-medium-label-line-height)] whitespace-nowrap [font-style:var(--label-medium-label-font-style)]">
                Login
              </div>
            </button>
            <button className="all-[unset] box-border gap-2.5 px-5 py-2.5 bg-brandprimary rounded-md inline-flex items-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-label-medium-label font-[number:var(--label-medium-label-font-weight)] text-default-white text-[length:var(--label-medium-label-font-size)] text-center tracking-[var(--label-medium-label-letter-spacing)] leading-[var(--label-medium-label-line-height)] whitespace-nowrap [font-style:var(--label-medium-label-font-style)]">
                Sign up
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
