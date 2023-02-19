import cardTwo from "../../images/homePAge/card-2.jpg";
import cardThree from "../../images/homePAge/card-3.jpg";
import cardFour from "../../images/homePAge/card-4.jpg";
import cardFife from "../../images/homePAge/card-5.jpg";
import Button from "../Button";
import { fetchBungalow } from "../../apis/api";
import { useEffect } from "react";

function BungalowCards() {
  useEffect(() => {
    fetchBungalow();
  });

  return (
    <div id="hotel-cards" className="grid gap-4 grid-cols-4 grid-rows-4 p-5">
      <div className="card shadow-lg">
        <img
          className="card-image rounded-xl"
          src={cardTwo}
          alt="Bungalow hotel"
        />
        <article className="p-3">
          <h1 className="font-semibold text-2xl">Alone in the Forest</h1>
          <p className="font-semibold text-slate-400 my-2">
            Stay in silence, watch the forest.
          </p>
        </article>
        <div className="advantages p-3 text-center">
          <ul className="grid gap-4 grid-cols-3 grid-rows-3 text-slate-500 font-bold">
            <li>Bed</li>
            <li>Wifi</li>
            <li>Pool</li>
            <li>Heater</li>
            <li>Bathroom</li>
            <li>Cook</li>
          </ul>
        </div>
        <div className="prices-buttons flex items-center justify-between px-5 py-2">
          <div className="font-bold text-2xl">
            220₺ <span className="text-xl text-slate-400">/Night</span>
          </div>
          <Button primary>View</Button>
        </div>
      </div>
      <div className="card shadow-lg">
        <img
          className="card-image rounded-xl"
          src={cardThree}
          alt="Bungalow hotel"
        />
        <article className="p-3">
          <h1 className="font-semibold text-2xl">Alone in the Forest</h1>
          <p className="font-semibold text-slate-400 my-2">
            Stay in silence, watch the forest.
          </p>
        </article>
        <div className="advantages p-3 text-center">
          <ul className="grid gap-4 grid-cols-3 grid-rows-3 text-slate-500 font-bold">
            <li>Bed</li>
            <li>Wifi</li>
            <li>Pool</li>
            <li>Heater</li>
            <li>Bathroom</li>
            <li>Cook</li>
          </ul>
        </div>
        <div className="prices-buttons flex items-center justify-between px-5 py-2">
          <div className="font-bold text-2xl">
            230₺ <span className="text-xl text-slate-400">/Night</span>
          </div>
          <Button primary>View</Button>
        </div>
      </div>
      <div className="card shadow-lg">
        <img
          className="card-image rounded-xl"
          src={cardFour}
          alt="Bungalow hotel"
        />
        <article className="p-3">
          <h1 className="font-semibold text-2xl">Alone in the Forest</h1>
          <p className="font-semibold text-slate-400 my-2">
            Stay in silence, watch the forest.
          </p>
        </article>
        <div className="advantages p-3 text-center">
          <ul className="grid gap-4 grid-cols-3 grid-rows-3 text-slate-500 font-bold">
            <li>Bed</li>
            <li>Wifi</li>
            <li>Pool</li>
            <li>Heater</li>
            <li>Bathroom</li>
            <li>Cook</li>
          </ul>
        </div>
        <div className="prices-buttons flex items-center justify-between px-5 py-2">
          <div className="font-bold text-2xl">
            220₺ <span className="text-xl text-slate-400">/Night</span>
          </div>
          <Button primary>View</Button>
        </div>
      </div>
      <div className="card shadow-lg">
        <img
          className="card-image rounded-xl"
          src={cardFife}
          alt="Bungalow hotel"
        />
        <article className="p-3">
          <h1 className="font-semibold text-2xl">Alone in the Forest</h1>
          <p className="font-semibold text-slate-400 my-2">
            Stay in silence, watch the forest.
          </p>
        </article>
        <div className="advantages p-3 text-center">
          <ul className="grid gap-4 grid-cols-3 grid-rows-3 text-slate-500 font-bold">
            <li>Bed</li>
            <li>Wifi</li>
            <li>Pool</li>
            <li>Heater</li>
            <li>Bathroom</li>
            <li>Cook</li>
          </ul>
        </div>
        <div className="prices-buttons flex items-center justify-between px-5 py-2">
          <div className="font-bold text-2xl">
            220₺ <span className="text-xl text-slate-400">/Night</span>
          </div>
          <Button className="" primary>
            View
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BungalowCards;
