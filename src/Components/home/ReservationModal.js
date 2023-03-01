import "../../css/modal.css";
import Input from "../Input";
import Button from "../Button";
import Modal from "../Modal";
import { Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAddReservationMutation } from "../../store";
function ReservationModal({
  bungalowName,
  bungalowDescription,
  bungalowPrice,
  bungalowId,
  bungalowImage,
}) {
  const modalOutside = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!modalOutside.current) {
        return;
      }
      if (modalOutside.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler, true);
    };
  });

  const [addReservation, results] = useAddReservationMutation();
  const [showModal, setShowModal] = useState(false);

  let currentDate = new Date().toJSON().slice(0, 10);
  const [dateTimeEnd, setDateTimeEnd] = useState(currentDate);
  const [dateTimeStart, setDateTimeStart] = useState(currentDate);

  const onDateTimeStartChange = (e) => setDateTimeStart(e.target.value);
  const onDateEndChange = (e) => setDateTimeEnd(e.target.value);

  const handleModalClick = () => {
    setShowModal(true);
  };
  

  const dateTimeStartNumber = +dateTimeStart.slice(-2);
  const dateTimeEndNumber = +dateTimeEnd.slice(-2);
  let totalPrice;
  let err;
  const rentDays = dateTimeEndNumber - dateTimeStartNumber;
  if (dateTimeEndNumber > dateTimeStartNumber) {
    totalPrice = rentDays * bungalowPrice;
  } else if (dateTimeStartNumber > dateTimeEndNumber) {
    err = (
      <div className="bg-red-500 text-white p-2 rounded-lg">
        The start date cannot be greater than the end date.
      </div>
    );
  }
  const handleAddReservationSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.username.value === "" ||
      e.target.surname.value === "" ||
      e.target.email.value === ""
    ) {
      return;
    } else {
      const reservation = {
        name: e.target.username.value,
        surname: e.target.surname.value,
        email: e.target.email.value,
        checkIn: dateTimeStart,
        checkOut: dateTimeEnd,
        bungalowId: bungalowId,
        totalPrice: totalPrice,
        bungalowImage: bungalowImage,
      };
      addReservation(reservation, bungalowId);
      setShowModal(false);
    }
  };

  const modal = (
    <Modal className="bg-slate-100 h-3/4" modalOutside={modalOutside}>
      <div
        id="modal-reservation-create"
        className="flex items-center gap-5 relative w-full h-full"
      >
        <div id="reservation-card" className="shadow-xl card m-5">
          <img
            id="reservation-card-image"
            className="card-image"
            src={bungalowImage}
            alt="bungalow"
          />
          <article className="description mx-1 my-2 p-3">
            <h3 className="font-bold text-xl border-b my-3 text-slate-800 p-2 rounded-lg border-orange-500 tracking-wide">
              {bungalowName}
            </h3>
            <p className="font-semibold text-slate-700 p-1 tracking-wide">
              {bungalowDescription}
            </p>
          </article>

          <div
            id="price-button"
            className="flex items-center justify-between p-3"
          >
            <h4 className="font-semibold text-xl">
              {bungalowPrice}₺ <span className="text-slate-400">/Night</span>
            </h4>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl tracking-wider  mx-5 flex items-center gap-2">
            Create reservation for{" "}
            <span className="text-orange-600 border-orange-900  border-b-2">
              {bungalowName}
            </span>
          </h1>
          <form onSubmit={handleAddReservationSubmit}>
            <div
              id="user-information"
              className="flex flex-start items-center items-center justify-around gap-4"
            >
              <div className="my-4 p2">
                <label className="font-bold text-orange-500 text-xl mx-3">
                  Name
                </label>
                <Input
                  id="username"
                  placeholder="Your name"
                  name="username"
                  type={"text"}
                />
              </div>
              <div className="my-4 p2">
                <label className="font-bold text-orange-500 text-xl mx-3">
                  Surname
                </label>
                <Input
                  id="surname"
                  placeholder="Your surname"
                  name="surname"
                  type={"text"}
                />
              </div>
            </div>
            <div className="my-4 p2">
              <label className="font-bold text-orange-500 text-xl mx-3">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type={"email"}
                placeholder="user@hotmail.com"
              />
            </div>
            <div
              id="set-check"
              className="flex flex-start items-center items-center justify-around gap-4"
            >
              <div className="my-4 p2">
                <label className="font-bold text-orange-500 text-xl mx-3">
                  Check in
                </label>
                <Input
                  id="dateIn"
                  name="dateIn"
                  type={"date"}
                  onChange={onDateTimeStartChange}
                  value={dateTimeStart}
                />
              </div>
              <div className="my-4 p2">
                <label className="font-bold text-orange-500 text-xl mx-3">
                  Check out
                </label>
                <Input
                  id="dateOut"
                  name="dateOut"
                  type={"date"}
                  onChange={onDateEndChange}
                  value={dateTimeEnd}
                />
              </div>
            </div>
            <div className="font-semibold text-2xl text-center border-b-4 mb-3">
              <span className="text-slate-500 text-lg">{rentDays} / Night</span>{" "}
              {totalPrice}₺
            </div>
            <div className="flex flex-col justify-center items-center gap-5 mx-5">
              {!err && (
                <div>
                  <Button loading={results.isLoading} className="px-5" success>
                    Submit
                  </Button>
                </div>
              )}

              <div>{err}</div>
            </div>
            {results.isSuccess && (
              <Navigate to="/reservations" replace={true} />
            )}
          </form>
        </div>
      </div>
    </Modal>
  );

  return (
    <div onClick={handleModalClick}>{showModal && modal} +Reservation</div>
  );
}

export default ReservationModal;
