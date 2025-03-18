import { Button } from "../../../../components/ui/Button";

export const DashboardSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[31px] px-[50px] py-20">
      <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-[#a855f7] bg-clip-text text-transparent">
      Meet Sella<br></br>
      Your 24/7 AI Inbound Closer
      </h2>

      <div className="flex ">
        <div className="flex items-start gap-8 ">
          <img
            className="w-[346px] h-[400px] object-cover mb-2 mr-16"
            alt="Visual"
            src="public/Visual.png"
          />
        </div>
        <div className="flex flex-col ml-8">
          <p className="text-xl font-semibold bg-gradient-to-b from-white to-[#a855f7] bg-clip-text text-transparent mb-8 mt-16">
          Sella converts your website visitors into <br></br>
          qualified leads with natural conversations and <br></br>
          seamless meeting scheduling.
          </p>
          <Button className="mt-4 h-12 bg-[#8c45ff66] rounded-2xl border border-solid border-[#ffffff26] shadow-[inset_0px_0px_6px_3px_#ffffff40] backdrop-blur-[7px] hover:bg-[#8c45ff80]">
            Click Me
          </Button>
          <div className="flex space-x-4 mt-16 ">
            <button
              className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
              <span></span>
              <span className="bg-zinc-700 rounded-full text-[1rem] p-3 text-white">
              Trusted by 500+ businesses

              </span>
            </button>
            <button
              className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black text-xs font-bold dark:bg-zinc-800">
              <span></span>
              <span className="bg-zinc-700 rounded-full text-[1rem] p-3 text-white">
              24/7 availability
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
