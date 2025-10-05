import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Trần Tiến Phát</span>👋
      <br />A Web Developer
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "Eager to grow as a software engineer, with internship experience and a passion for learning new technologies."
      }
      link="/about"
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Worked on multiple projects during my internship and personal learning journey. Want to see what I’ve built?"
      }
      link="/projects"
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Got an idea or need a dev? Let’s make it happen — I’m just one message away"
      }
      link="/contact"
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};
export default HomeInfo;
