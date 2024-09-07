import { frontEndSkills } from "../data/skillsData";
import { othersSlills } from "../data/skillsData";
import { backendSkills } from "../data/skillsData";
import { useEffect } from "react";
import MainTitle from "../components/MainTitle";
import "../style/pages/skills.scss";
function Skills() {
  useEffect(() => {
    let icons = document.querySelectorAll(".hide");
    icons.forEach((ele, index) => {
      setTimeout(() => {
        ele.classList.add("show");
      }, index * 200);
    })
  }, [])
  return (
    <div className="skills">
      <div className="container">
        <MainTitle title="skills" description="These are the main skills I know: technologies, programming languages, libraries, frameworks." />
        <div className="front-end">
          <h1 attitle="front-end">front-end</h1>
          <div className="content">
            {frontEndSkills.map((skill) => (
              <div className="skill hide" key={skill.id}>
                <div className="img">
                  <img src={skill.img} alt="" />
                </div>
                <div className="details">
                  <h3 className="title">{skill.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="back-end">
          <h1 attitle="backend">back-end</h1>
          <div className="content">
            {backendSkills.map((skill) => (
              <div className="skill hide" key={skill.id}>
                <div className="img">
                  <img src={skill.img} alt="" />
                </div>
                <div className="details">
                  <h3 className="title">{skill.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="others">
          <h1 attitle="others">others</h1>
          <div className="content">
            {othersSlills.map((skill) => (
              <div className="skill hide" key={skill.id}>
                <div className="img">
                  <img src={skill.img} alt="" />
                </div>
                <div className="details">
                  <h3 className="title">{skill.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
