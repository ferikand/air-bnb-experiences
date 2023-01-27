import second from "../images/image 23.png";
import third from "../images/image 24.png";
import fourth from "../images/image 25.png";
import fifth from "../images/image 26.png";
import sixth from "../images/image 27.png";
import seventh from "../images/image 28.png";
import eighth from "../images/image 29.png";
import nineth from "../images/image 30.png";
import first from "../images/image 22.png";

export default function ImagesInHeroSection() {
  return (
    <div className="images">
      <div className="img-section">
        <img className="image pan" src={seventh} alt="thumb" />
      </div>
      <div className="img-section">
        <img className="image woman" src={nineth} alt="thumb" />
        <img className="image ballet" src={fifth} alt="thumb" />
      </div>
      <div className="img-section">
        <img className="image dish" src={sixth} alt="thumb" />
        <img className="image guitar" src={eighth} alt="thumb" />
      </div>
      <div className="img-section">
        <img className="image microphone" src={first} alt="thumb" />
        <img className="image swimmer" src={second} alt="thumb" />
      </div>
      <div className="img-section">
        <img className="image yoga" src={fourth} alt="thumb" />
        <img className="image singer" src={third} alt="thumb" />
      </div>
    </div>
  );
}
