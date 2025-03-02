import ProjectCard from "../components/ProjectCard"
const projectsData = [
  {
    id: 1,
    title: "Listerji",
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1740937680/Screenshot_2025-03-02_231711_kpqcwf.png",
    types: ["ReactJS", "Razorpay", "Redis", "ExpressJS"],
    link:"https://www.listerji.com/"
  },
  {
    id: 2,
    title: "Storenv",
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1740937701/Screenshot_2025-03-02_231811_dettf6.png",
    types: ["NextJS", "NextAuth.js", "CryptoJS", "MongoDB"],
    link:"https://storenv.vercel.app/"
  },
  {
    id: 3,
    title: "PRISTINE - UI Library",
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1732798427/eyopllzjgi2pisz4psgl.png",
    types: ["ReactJS", "Framer Motion", "Tailwind CSS", "Docusaurus","mdx"],
    link:"https://www.pristineui.com/"
  },
  {
    id: 4,
    title: "Paybursement",
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1740937728/Screenshot_2025-03-02_231839_wljvf5.png",
    types: ["NextJS", "Razorpay", "Clerk", "MongoDB"],
    link:"https://paybursement.xyz/"
  },
  {
    id: 5,
    title: "PRISTINE MVP",
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1732798544/ryrynggdgbcag3nokkh0.png",
    types: ["ReactJS", "Framer Motion", "GSAP", "Tailwind CSS", "NODEJS"],
    link:"https://pristine-weld.vercel.app/"
  },
  {
    id: 6,
    title: "Calendso",
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1732811067/mh8w8c1ewzotvormhuoy.png",
    types: ["NEXT JS", "React JS", "Clerk", "GCP-Calendar API"],
    link:"https://calendso-ebon.vercel.app/",
    github:"https://github.com/gamandeepsingh/Calendso"
  },
  {
    id: 7,
    title: "INNOGEEKS",
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1721902018/Screenshot_from_2024-07-25_15-36-27_c1z2rf.png",
    types: ["ReactJS", "Framer Motion", "Tailwind CSS"],
    link:"https://innogeeks-site.vercel.app/"
  },
  {
    id: 8,
    title: "SAIMLDS",
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1721902176/Screenshot_from_2024-07-25_15-39-22_vhiera.png",
    types: ["MERN Stack","FIREBASE", "Node JS","ExpressJS"],
    link:"https://saimlds.in/"
  },
  {
    id: 9,
    title: "DINE ME",
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1721902269/Screenshot_from_2024-07-25_15-40-34_ttfxgh.png",
    types: ["MERN Stack"],
    link:"https://dineme.vercel.app/",
    github:"https://github.com/gamandeepsingh/Project01"
  },
  {
    id: 10,
    title: "Assets Roster",
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1732810856/qtasvipme3hgih7psdwq.png",
    types: ["MERN Stack","Frame Motion"],
    link:"https://www.assetsroster.com/"
  },  
  {
    id: 11,
    title: "Portfolio",
    img: "https://res.cloudinary.com/dib0peewu/image/upload/v1732811266/x0yndhuv6cgj4dq7tnpa.png",
    types: ["MERN Stack","Vanta JS", "GSAP"],
    link:"https://gamandeep.vercel.app/",
    github:"https://github.com/gamandeepsingh/Portfolio"
  },  
  
];

const Projects = () => {
  return (
    <div className="project_container flex w-screen overflow-x-hidden justify-center items-center flex-col">
      {/* TERMINAL */}
      <div className="card">
        <div className="wrap">
          <div className="terminal">
            <hgroup className="head">
              <p className="title">
                <svg
                  width="16px"
                  height="16px"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                  ></path>
                </svg>
                Terminal
              </p>

              <button className="copy_toggle" tabIndex="-1" type="button">
                <svg
                  width="16px"
                  height="16px"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                  ></path>
                  <path
                    d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                  ></path>
                </svg>
              </button>
            </hgroup>

            <div className="body">
              <pre className="pre">          <code>-&nbsp;</code>
                <code>npx&nbsp;</code>
                <code className="cmd" data-cmd="show-project@latest"></code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      {/* MAIN SECTION */}
      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-[1280px] justify-center mb-56">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            img={project.img}
            types={project.types}
            link={project.link}
            github={project?.github}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
