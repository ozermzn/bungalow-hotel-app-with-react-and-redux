import "../css/home.css";
import { useFetchReservationQuery } from "../store";
import { MdBungalow, MdArrowRight, MdOutlineWarning } from "react-icons/md";

function Reservations() {
  const { data, error, isLoading } = useFetchReservationQuery();
  let content;
  if (isLoading) {
    content = (
      <div className=" w-full h-full flex items-center justify-start p-5 m-5 text-2xl font-bold text-orange-500 gap-5">
        <div className="animate-spin">Yükleniyor</div>
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
      Object.values(data).map((reservation) => {
        return (
          <div
            id="reservation-info-cards"
            key={reservation.id}
            className="flex items-center gap-2 p-5"
          >
            <img
              className="card-reservation mb-5 shadow-lg "
              src={reservation.bungalowImage}
              alt="reserved bungalow"
            />
            <div className="mb-auto p-5 shadow-lg rounded-xl flex flex-col gap-5">
              <h3 className="text-xl font-semibold border-orange-500 border-b-2 p-1 flex items-center gap-2">
                <MdBungalow className="text-orange-500 shadow-lg rounded-xl" />{" "}
                {reservation.name} {reservation.surname}
              </h3>
              <div className="text-lg font-semibold text-slate-500 p-1">
                <span> Email: </span>
                {reservation.email}
              </div>
              <div className="text-lg font-semibold text-slate-500 flex items-center gap-2 p-1">
                <span>Date Time:</span> {reservation.checkIn}{" "}
                <span className="text-3xl font-bold">
                  <MdArrowRight />
                </span>
                {reservation.checkOut}
              </div>
              <div className="text-lg font-semibold text-slate-500 p-1">
                <span>Totel Price:</span> {reservation.totalPrice} ₺
              </div>
            </div>
          </div>
        );
      });
    return (
      <div className="p-5 m-5 ">
        <main id="reservation-information" className="grid grid-cols-2">
          {content}
        </main>
      </div>
    );
  }
}
export default Reservations;
