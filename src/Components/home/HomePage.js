import "../../css/home.css";
import bungalowView from "../../images/homePAge/hotel-bg-1.jpg";
import { GoLocation } from "react-icons/go";
import { BsFillCalendarFill } from "react-icons/bs";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { TbArrowBottomCircle } from "react-icons/tb";
import Button from "../Button";
import BungalowCards from "./BungalowCards";
function HomePage() {
  return (
    <main className=" my-5 py-5 container mx-auto ">
      <div
        id="first-meet-part "
        className="flex items-center justify-between  gap-5"
      >
        <div id="description" className="p-5 tracking-wider">
          <article className="">
            <h1 className="text-7xl  font-bold my-5 ">
              Fresh, quiet and peaceful.
            </h1>

            <p className="text-2xl  text-slate-500 my-5 py-5">
              Feel the sensetaion of staying in a bungalow! Besides being
              comfortable, this bungalow prioritizes technology and security.
            </p>
          </article>

          <div
            id="information"
            className="flex items-center justify-around shadow-lg p-5 rounded bg-white"
          >
            <span>
              <GoLocation className="text-orange-500" /> 
              <span className="">
                Location -<p className="text-slate-400">Turkey</p>
              </span>
            </span>
            <span>
              <BsFillCalendarFill className="text-orange-500" />
              Check in - <p className="text-slate-400">19 February</p>
            </span>
            <span>
              <BsFillCalendarFill className="text-orange-500" />
              Check out - <p className="text-slate-400">20 December</p>
            </span>
          </div>
          <div className="">
            <Button primary className="text-lg font-bold p-5 m-auto mt-5">
              Create Reservation
            </Button>
          </div>
          <div className="text-orange-500 mt-5 p-5 font-bold text-2xl flex flex-col items-center gap-3">
            <p className="text-slate-400 text-lg">Scroll down</p>
            <div>
              <TbArrowBottomCircle />
            </div>
          </div>
        </div>
        <div id="photo">
          <img
            id="image-bungalowView"
            src={bungalowView}
            alt="Bungalow home view."
            className="rounded-lg"
          />
        </div>
      </div>
      <div id="secondary-part" className="m-5 p-5 ">
        <div className="flex items-center justify-between">
          <h2
            className="font-bold text-5xl p-5 border-b border-orange-500"
            id="recommend"
          >
            Recommendation our bungalow for you
          </h2>
          <div
            id="secondary-part-buttons"
            className="flex items-center gap-5 text-xl"
          >
            <Button className="p-5">
              <MdNavigateBefore />
            </Button>
            <Button>
              <MdNavigateNext />
            </Button>
          </div>
        </div>
        <BungalowCards />
      </div>
    </main>
  );
}

export default HomePage;
