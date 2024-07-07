/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { EssentialIconsSend } from "../../icons/EssentialIconsSend";
import { SocialIcons3 } from "../../icons/SocialIcons3";
import { SocialIcons6 } from "../../icons/SocialIcons6";
import { StyleColorSocialDribbble } from "../../icons/StyleColorSocialDribbble";
import { StyleGraySocialInstagram } from "../../icons/StyleGraySocialInstagram";
import { Logo } from "../Logo";

export const FooterBig = ({
  className,
  logoNexcent = "/img/nexcent-1.svg",
  text = "Copyright © 2020 Landify UI Kit.",
}) => {
  return (
    <div className={`inline-flex items-start gap-[125px] px-[165px] py-16 relative bg-neutralblack ${className}`}>
      <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto] overflow-hidden">
        <Logo
          className="!gap-[9.89px] !flex-[0_0_auto]"
          icon11Color="white"
          icon11StyleOverrideClassName="!relative !w-[43.27px] !h-[29.67px]"
          nexcent={logoNexcent}
          nexcentClassName="!h-[25.54px] !w-[137.84px]"
        />
        <div className="inline-flex flex-col items-center gap-2 relative flex-[0_0_auto]">
          <p className="relative w-[350px] mt-[-1.00px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
            {text}
          </p>
          <div className="relative w-[350px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
            All rights reserved
          </div>
        </div>
        <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
          <StyleGraySocialInstagram className="!relative !w-8 !h-8" color="white" fill="white" />
          <StyleColorSocialDribbble className="!relative !w-8 !h-8" color="white" fill="white" opacity="0.1" />
          <SocialIcons6 className="!relative !w-8 !h-8" color="white" fill="white" opacity="0.1" />
          <SocialIcons3 className="!relative !w-8 !h-8" color="white" fill="white" opacity="0.1" />
        </div>
      </div>
      <div className="inline-flex items-start gap-[30px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <div className="relative w-40 mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-neutralwhite text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
            Company
          </div>
          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <div className="relative w-40 mt-[-1.00px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              About us
            </div>
            <div className="relative w-40 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Blog
            </div>
            <div className="relative w-40 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Contact us
            </div>
            <div className="relative w-40 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Pricing
            </div>
            <div className="relative w-40 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Testimonials
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <div className="relative w-40 mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-neutralwhite text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
            Support
          </div>
          <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
            <div className="relative w-40 mt-[-1.00px] font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Help center
            </div>
            <div className="relative w-40 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Terms of service
            </div>
            <div className="relative w-40 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Legal
            </div>
            <div className="relative w-40 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Privacy policy
            </div>
            <div className="relative w-40 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-neutralsilver text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] [font-style:var(--body-regular-body-3-font-style)]">
              Status
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto] overflow-hidden">
          <div className="relative w-40 mt-[-1.00px] font-heading-headline-4 font-[number:var(--heading-headline-4-font-weight)] text-neutralwhite text-[length:var(--heading-headline-4-font-size)] tracking-[var(--heading-headline-4-letter-spacing)] leading-[var(--heading-headline-4-line-height)] [font-style:var(--heading-headline-4-font-style)]">
            Stay up to date
          </div>
          <div className="relative w-[257px] h-10 mr-[-2.00px]">
            <div className="relative w-[255px] h-10 rounded-lg">
              <div className="absolute w-[255px] h-10 top-0 left-0 bg-default-white rounded-lg opacity-20" />
              <EssentialIconsSend className="!absolute !w-[18px] !h-[18px] !top-[11px] !left-[225px]" />
              <div className="absolute top-[9px] left-3 font-body-regular-body-3 font-[number:var(--body-regular-body-3-font-weight)] text-text-gray-300 text-[length:var(--body-regular-body-3-font-size)] tracking-[var(--body-regular-body-3-letter-spacing)] leading-[var(--body-regular-body-3-line-height)] whitespace-nowrap [font-style:var(--body-regular-body-3-font-style)]">
                Your email address
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterBig.propTypes = {
  logoNexcent: PropTypes.string,
  text: PropTypes.string,
};
