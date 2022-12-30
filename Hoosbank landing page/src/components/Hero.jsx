import styles from "../style";
import { discount, roboEarth, arrowUp } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-black-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="">20%</span> Discount For{" "}
            <span className="">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px]  ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-[#4953EB]">Generation</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px]  ss:leading-[100.8px] leading-[75px] w-full">
        Robot Machinery
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
          Sigma is a leading provider of innovative robotic solutions for industry.
          We specialize in the design and manufacture of Various Robots.
        </p>
        <button className="bg-[#4953EB] p-4 mt-2 rounded-md">
          <p className="font-poppins font-medium text-[18px] leaading-[23px] flex flex-row">
            <span className="text-white">Get</span>
            <img
              src={arrowUp}
              className={`w-[23px] h-[23px] object-contain ml-2`}
            />
            <span className="text-white">Started</span>
          </p>
        </button>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={roboEarth}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] mt-[-90px]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
