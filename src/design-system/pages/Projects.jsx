import { projects } from '../data/projectsData'
import "../style/pages/projects.scss";
import MainBtn from '../components/MainBtn';
import { useEffect } from 'react';
import MainTitle from '../components/MainTitle';

function Projects() {
  useEffect(() => {
    let elements = document.querySelectorAll(".project")
    elements.forEach((ele, index) => {
      setTimeout(() => {
        ele.classList.add("show")
      }, index * 100)
    })
  }, [])
  return (
    <div className="projects">
      <div className="container">
        <MainTitle title="works" description="These are some of the projects I have worked on using different technologies." />
      </div>
      <div className="container">
        {
          projects.map((project) => (
            <div key={project.id} className="project hide">
              <img src={project.img} alt="" />
              <div className="text">
                <div className="info">
                  <h1 className='title'>{project.title}</h1>
                  <p>{project.description}</p>
                </div>
                <a href={project.url} target='blank'>
                  <MainBtn className="btn">viste site</MainBtn>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects