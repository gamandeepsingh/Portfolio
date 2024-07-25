import React from 'react'

const ProjectCard = ({ title, img, types, link }) => {
  return (
    <a href={link} target='_blank'>
      <article className="article-wrapper group">
        <div className="rounded-lg container-project overflow-hidden object-cover hover:-translate-y-6 transition-all duration-200 shadow-xl">
          <img src={img} alt={title} className="object-cover w-full h-full " loading='lazy'/>
        </div>
        <div className="project-info">
          <div className="flex-pr">
            <div className="project-title text-nowrap">{title}</div>
            <div className="project-hover group-hover:rotate-[-45deg] transition-all duration-200">
              <svg style={{ color: "black" }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor">
                <line y2="12" x2="19" y1="12" x1="5"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
          <div className="types">
            {types.map((type, index) => (
              <span key={index} className="project-type">
                • {type}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
};

export default ProjectCard