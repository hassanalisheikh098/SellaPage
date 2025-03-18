import { InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import React from "react";

export const FooterSection = (): JSX.Element => {
  // Footer navigation data
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Integration", "Updates", "FAQ", "Pricing"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Manifesto", "Press", "Contract"],
    },
    {
      title: "Resources",
      links: ["Examples", "Community", "Guides", "Docs", "Press"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security"],
    },
  ];

  return (
    <footer className="flex flex-wrap justify-between items-start gap-8 px-[170px] py-[41px] relative flex-[0_0_auto] bg-transparent border border-solid border-[#ffffff26]">
      {/* Logo */}
      <img
        className="relative h-[38px] w-auto"
        alt="Logokit"
        src="../../public/logo.png"
      />

      {/* Navigation Links */}
      <div className="flex flex-wrap items-start justify-center gap-[60px] relative">
        {footerLinks.map((category, index) => (
          <div key={index} className="flex flex-col items-start gap-5 relative">
            <h6 className="relative w-fit mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-white text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
              {category.title}
            </h6>

            {category.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                className="relative w-fit font-body-XS font-[number:var(--body-XS-font-weight)] text-[#ffffff80] text-[length:var(--body-XS-font-size)] tracking-[var(--body-XS-letter-spacing)] leading-[var(--body-XS-line-height)] whitespace-nowrap [font-style:var(--body-XS-font-style)] hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-[30px] relative">
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <TwitterIcon className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <InstagramIcon className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <YoutubeIcon className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};
