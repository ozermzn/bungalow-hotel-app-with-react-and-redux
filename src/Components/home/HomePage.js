import "../../css/home.css";
import bungalowView from "../../images/homePAge/hotel-bg-1.jpg";
import BungalowCards from "./BungalowCards";
import { GoLocation } from "react-icons/go";
import { BsFillCalendarFill } from "react-icons/bs";
import { TbArrowBottomCircle } from "react-icons/tb";

function HomePage() {
  return (
    <main className="my-5 py-5 container mx-auto" id="main-home-page">
      <div
        id="first-meet-part"
        className="flex items-center justify-between  media-screen-flex  gap-5"
      >
        <div id="description" className="p-5 tracking-wider">
          <article className="">
            <h1 className="text-7xl  font-bold my-5 ">
              Fresh, <span className="text-orange-500">quiet</span> and
              peaceful.
            </h1>

            <p className="text-2xl  text-slate-500 my-5 py-5 ">
              Feel the sensetaion of staying in a bungalow! Besides being
              comfortable, this bungalow prioritizes technology and security.
            </p>
          </article>

          <div
            id="information"
            className="flex items-center md:gap-3  flex-wrap border-b-2 border-orange-500 justify-around shadow-lg p-5 rounded bg-white"
          >
            <span className="s:mb-3">
              <span>
                <BsFillCalendarFill className="text-orange-500" />
                Check in - <p className="text-slate-400">19 February</p>
              </span>
            </span>
            <span className="s:mb-3">
              <span>
                <BsFillCalendarFill className="text-orange-500" />
                Check out - <p className="text-slate-400">20 December</p>
              </span>
            </span>
            <span className="">
              <span className="">
                <GoLocation className="text-orange-500" />
                Location -<p className="text-slate-400">Turkey</p>
              </span>
            </span>
          </div>
          {/* Modal Button */}
          <div className="text-orange-500 mt-5 p-5 font-bold text-2xl flex flex-col items-center gap-3">
            <a href="#bungalows">
              <p className="text-slate-400 text-lg">Scroll down</p>
            </a>
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
            className="font-bold text-5xl p-5 border-b border-orange-500 "
            id="recommend"
          >
            Recommendation our bungalow for you
          </h2>
        </div>
        <BungalowCards id="bungalows" />
      </div>
    </main>
  );
}

export default HomePage;
