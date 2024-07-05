import "../style/components/mainBtn.scss";
import { FaArrowRight } from "react-icons/fa";
function MainBtn(props) {
  return (
    <button className="main-btn">
      {props.children}
      <FaArrowRight />
    </button>
  )
}

export default MainBtn