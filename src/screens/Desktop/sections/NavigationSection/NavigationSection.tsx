import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../../../components/ui/Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/Navigation-menu";

export const NavigationSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Features", hasDropdown: false },
    { label: "Developers", hasDropdown: false },
    { label: "Company", hasDropdown: 0},
    { label: "Blog", hasDropdown: false},
    { label: "Changelog", hasDropdown: false },
  ];

  return (
    <header className="flex items-center justify-center gap-[74px] py-[13px] border-b border-[#ffffff26] w-full">
      {/* Logo */}
      <div className="relative w-[38px] h-[38px] bg-[url(public/logo.png)] bg-cover bg-[50%_50%]" />

      {/* Navigation Menu */}
      <NavigationMenu className="px-10 py-2 rounded-[60px] border border-solid border-[#ffffff26]">
        <NavigationMenuList className="flex items-center gap-[30px]">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.hasDropdown ? (
                <NavigationMenuTrigger className="flex items-center gap-[3px] bg-transparent hover:bg-transparent focus:bg-transparent">
                  <span className="font-body-XS text-[#ffffff99] text-[length:var(--body-XS-font-size)] tracking-[var(--body-XS-letter-spacing)] leading-[var(--body-XS-line-height)]">
                    {item.label}
                  </span>
                  <ChevronDownIcon className="w-3.5 h-3.5 text-[#ffffff99]" />
                </NavigationMenuTrigger>
              ) : (
                <span className="font-body-XS text-[#ffffff99] hover:text-white text-[length:var(--body-XS-font-size)] tracking-[var(--body-XS-letter-spacing)] leading-[var(--body-XS-line-height)] whitespace-nowrap cursor-pointer">
                  {item.label}
                </span>
              )}

              {item.hasDropdown && (
                <NavigationMenuContent>
                  {/* Dropdown content would go here */}
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Join Waitlist Button */}
      <div className="flex items-center justify-center p-1.5 rounded-xl border border-solid border-[#ffffff26]">
        <Button className="w-[109px] h-[30px] px-[15px] py-0.5 bg-[#8c45ff66] rounded-lg border border-solid border-[#ffffff26] shadow-[inset_0px_0px_6px_3px_#ffffff40] backdrop-blur-[7px] hover:bg-[#8c45ff80]">
          <span className="font-body-s text-white text-[length:var(--body-s-font-size)] text-center tracking-[var(--body-s-letter-spacing)] leading-[var(--body-s-line-height)] whitespace-nowrap">
            Join waitlist
          </span>
        </Button>
      </div>
    </header>
  );
};
