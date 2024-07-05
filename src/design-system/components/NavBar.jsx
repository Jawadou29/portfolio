import "../style/components/navbar.scss";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";



import MainBtn from "./MainBtn";
function NavBar() {
  let [mode, setMode] = useState();
  let location = useLocation();
  useEffect(() => {
    setMode(localStorage.getItem("mode") ? localStorage.getItem("mode") : "light");
    document.body.classList.add(mode);
  }, [mode])
  let ulRef = useRef();
  let overlayRef = useRef();
  let showUl = () => {
    ulRef.current.classList.add("show");
    overlayRef.current.classList.add("show");
  }
  let hideUl = () => {
    ulRef.current.classList.remove("show");
    overlayRef.current.classList.remove("show");
  }
  return (
    <div className="navbar">
      <div className="overlay" ref={overlayRef} onClick={() => hideUl()}></div>
      <div className="container">
        <div className="logo">J</div>
        <ul ref={ulRef}>
          <li><Link to="/" className={location.pathname === "/" ? "active" : null}>home</Link></li>
          <li><Link to="/skills" className={location.pathname === "/skills" ? "active" : null}>skills</Link></li>
          <li><Link to="/works" className={location.pathname === "/works" ? "active" : null}>works</Link></li>
          <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : null}>contact</Link></li>
          <IoClose className="close" onClick={() => hideUl()}/>
        </ul>
        <div>
          <Link to="/contact">
            <MainBtn>let's talk</MainBtn>
          </Link>
          {
            mode === "light" ?
            <FaRegSun className="mode" onClick={() => {
              document.body.classList.toggle("dark");
              setMode("dark")
              localStorage.setItem("mode", "dark");
            }}/>
            :<FaRegMoon className="mode" onClick={() => {
              document.body.classList.toggle("dark");
              setMode("light")
              localStorage.setItem("mode", "light");
            }} />
            
          }
        </div>
        <FaBars className="bars" onClick={() => showUl()}/>
      </div>
    </div>
  )
}

export default NavBar