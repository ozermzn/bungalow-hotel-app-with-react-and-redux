import { Route, Routes, NavLink, Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./home/HomePage";
import Reservations from "./Reservations";
import standartUserProfilePhoto from "../images/user.jpg";
import "../css/navbar.css";
function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-5 border-b">
        <Link to="/" id="logo" className="text-4xl">
          Bungo
          <span className=" text-orange-500">life</span>
        </Link>
        <ul
          className="flex justify-between items-center p-2 text-xl gap-10 font-semibold"
          id="nav-ul"
        >
          <li>
            <NavLink to="/">Anasayfa</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
        </ul>
        <div className="user-login">
          <div className="cursor-pointer" id="user-photo">
            <img
              className="rounded-full w-10 h-10"
              src={standartUserProfilePhoto}
              alt="user"
            />
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
export default Navbar;
