import MobImage from "../assets/images/image-hero-mobile.png";
import databiz from "../assets/images/client-databiz.svg";
import audio from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
function Hero() {
  return (
    <div className="hero">
      <div className="text__content">
        <div className="texts">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar. Learn
            more
          </p>
          <button>Learn more</button>
        </div>
        <div className="images">
          <img src={databiz} alt="/" />
          <img src={audio} alt="/" />
          <img src={meet} alt="/" />
          <img src={maker} alt="/" />
        </div>
      </div>
      <div className="image__content"></div>
    </div>
  );
}

export default Hero;
