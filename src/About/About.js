import { useEffect, useState } from "react";
import "./About.css";

import ProfilePicture from "./profile.jpg";
import ResumePDF from "./Anshul_resume_2yoe.pdf"
const About = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "Hi, I’m Anshul Nayyar.";
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed (milliseconds per character)
  }, []);

  const openResumePDF = () => {
    window.open(ResumePDF, "_blank");
  };
  
  return (
    <div className="about">
      <div className="columns">
        <div className="heading">
          <h1>{typedText}</h1>
          
        </div>
        <div className="info">
          <p>
          I am a software developer with a deep passion for technology and innovation. My commitment to excellence drives me to deliver creative solutions and results in every project I undertake.
          </p>
          <p>
          Beyond coding, I have a diverse set of hobbies that include cooking, photography, and various forms of art. These interests not only provide a balance to my technical work but also enhance my creativity and problem-solving skills. With a strong foundation in technology and a dedication to delivering exceptional results, I approach each project with a blend of expertise and a results-driven mindset. I believe in the power of innovation and enjoy collaborating with like-minded individuals to turn ideas into reality. Whether you're seeking software solutions or simply want to explore the intersection of technology and creativity, I'm here to help you build something exceptional.</p>
        </div>
        <button className={"resumebtn"}  onClick={openResumePDF}>View Resume</button>
        <div className="profile">
          <img
            className="profilePicture"
            src={ProfilePicture}
            alt="Anshul Nayyar"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
