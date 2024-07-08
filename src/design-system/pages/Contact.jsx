import contactimg from "../imgs/contactsvg.svg"
import fb from "../imgs/facebook-color-svgrepo-com.svg"
import insta from "../imgs/instagram-1-svgrepo-com.svg"
import linkedin from "../imgs/linkedin-icon-svgrepo-com.svg"
import github from "../imgs/github-svgrepo-com.svg"
import "../style/pages/contact.scss"
import MainTitle from "../components/MainTitle"


function Contact() {
  return (
    <div className="contact">
      <div className="container">
          <div className="contact-me">
            <MainTitle title="contact" description="You can contact me through any of these methods, and I will respond as soon as possible." />
            <div className="text">
              <div className="email">
                <h3>email</h3>
                <p>jawadouhdou70@gmail.com</p>
              </div>
              <div className="number">
                <h3>number</h3>
                <p>+212611861600</p>
              </div>
              <div className="social-media">
                <h3>others</h3>
                <div className="content">
                  {/* <a href="">
                    <img src={fb} alt="" />
                  </a>
                  <a href="">
                    <img src={insta} alt="" />
                  </a> */}
                  <a href="https://www.linkedin.com/in/jawad-ouhdou-023737316/" target="_blank">
                    <img src={linkedin} alt="linkedin"/>
                  </a>
                  <a href="https://github.com/Jawadou29" target="_blank">
                    <img src={github} alt="github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="img">
            <img src={contactimg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Contact