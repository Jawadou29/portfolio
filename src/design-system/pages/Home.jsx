import img2 from "../imgs/Devices-cuate.svg";
import "../style/pages/home.scss";
import MainBtn from "../components/MainBtn";
import { Link } from "react-router-dom";
import { useEffect} from "react";
function Home() {
  useEffect(() => {
    let elements = document.querySelectorAll(".hide");
    elements.forEach((ele, index) => {
      setTimeout(() => {
        ele.classList.add("show");
      }, 500 + index * 300);
    });
  }, []);
  // const handleButtonClick = () => {
  //   window.location.href = 'https://drive.google.com/file/d/1EO1exOsdceZKDLGXAfTgihIW8JQR0at2/view?usp=drive_link';
  //   console.log("jawad")
  // };
  return (
    <div className="homepage">
      <div className="container">
        <div className="description">
          <div className="img hide">
            {/* <img src={img1} alt="" /> */}
          </div>
          <h1 className="hide">
            hi i am <span>jawad</span>
          </h1>
          <p className="hide">
            Hello, I am Jawad Ouhdou from Morocco, a self-taught front-end
            developer passionate about creating engaging and user-friendly web
            experiences. With a strong foundation in HTML, CSS, and JavaScript,
            I enjoy turning ideas into reality through code. My goal is to
            continuously learn and grow in the ever-evolving world of web
            development.
          </p>
          <div className="btns hide">
            <Link to="/contact">
              <MainBtn>let s talk</MainBtn>
            </Link>
            {/* <a href="https://drive.google.com/file/d/1EO1exOsdceZKDLGXAfTgihIW8JQR0at2/view?usp=drive_link" target="blank">
            <MainBtn2 >downloaaaad CV</MainBtn2>
            </a> */}
          </div>
        </div>
        <div className="svg-img">
          <div className="img2">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
