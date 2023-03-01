import Button from "../Button";
import bungalow1 from "../../images/homePAge/card-2.jpg";
import bungalow2 from "../../images/homePAge/card1.jpg";
import bungalow3 from "../../images/homePAge/card-3.jpg";
import bungalow4 from "../../images/homePAge/card-4.jpg";
import bungalow5 from "../../images/homePAge/card-5.jpg";
import bungalow6 from "../../images/homePAge/card-6.jpg";
import {
  GiHeatHaze,
  GiWifiRouter,
  GiBathtub,
  GiBreadSlice,
} from "react-icons/gi";
import { FaSwimmingPool, FaCarSide } from "react-icons/fa";
import { useFetchBungalowsQuery } from "../../store";
import { ImSpinner9 } from "react-icons/im";
import { MdOutlineWarning } from "react-icons/md";
import "animate.css";
import ReservationModal from "./ReservationModal";

function BungalowCards() {
  const { data, error, isLoading } = useFetchBungalowsQuery();
  const imageList = [
    bungalow1,
    bungalow2,
    bungalow3,
    bungalow4,
    bungalow5,
    bungalow6,
  ];

  let content;
  if (isLoading) {
    content = (
      <div className=" w-full h-full flex items-center justify-start p-5 m-5 text-2xl font-bold text-orange-500 gap-5">
        <div className="animate-spin">
          <ImSpinner9 />
        </div>
        <div>Loading...</div>
      </div>
    );
  } else if (error) {
    content = (
      <div className="bg-red-500 text-white p-5 flex items-center rounded-lg text-2xl shadow justify-center gap-5">
        Something is gone wrong
        <span>
          {" "}
          <MdOutlineWarning />
        </span>
      </div>
    );
  } else {
    content =
      data &&
      Object.values(data).map((bungalow, index) => {
        return (
          <div
            key={bungalow.id}
            className="card shadow-lg flex flex-col justify-between mt-5"
          >
            <img className="card-image" src={imageList[index]} alt="bungalow" />
            <div className=" ">
              <article className="description mx-1 my-2 p-3">
                <h3 className="font-bold text-xl border-b my-3 text-slate-800 p-2 rounded-lg border-orange-500 tracking-wide">
                  {bungalow.name}
                </h3>
                <p className="font-semibold text-slate-700 p-1 tracking-wide">
                  {bungalow.description}
                </p>
              </article>
            </div>
            <div id="advantages" className="p-3">
              <ul className="grid grid-cols-3 p-1 gap-5 text-md font-semibold text-slate-400 place-items-center ">
                <li className="flex gap-1 items-center">
                  <GiHeatHaze /> Heater
                </li>
                <li className="flex gap-1 items-center">
                  <GiWifiRouter />
                  Wifi
                </li>
                <li className="flex gap-1 items-center">
                  <GiBathtub />
                  Bath
                </li>
                <li className="flex gap-1 items-center">
                  <FaSwimmingPool />
                  Pool
                </li>
                <li className="flex gap-1 items-center">
                  <GiBreadSlice />
                  Dinner
                </li>
                <li className="flex gap-1 items-center">
                  <FaCarSide />
                  Trans
                </li>
              </ul>
            </div>

            <div
              id="price-button-reservation"
              className="flex items-center justify-between p-3"
            >
              <h4 className="font-semibold text-xl">
                {bungalow.price}₺ <span className="text-slate-400">/Night</span>
              </h4>
              <Button primary>
                <ReservationModal
                  bungalowName={bungalow.name}
                  bungalowPrice={bungalow.price}
                  bungalowDescription={bungalow.description}
                  bungalowId={bungalow.id}
                  bungalowImage={imageList[index]}
                />
              </Button>
            </div>
          </div>
        );
      });
  }

  return (
    <div id="hotel-cards" className="grid gap-4 grid-cols-3 p-5">
      {content}
    </div>
  );
}

export default BungalowCards;
