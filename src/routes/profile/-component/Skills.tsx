import { FaHtml5, FaCss3Alt, FaCogs, FaGithub } from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiVitess,
  SiJest,
  SiPnpm,
} from 'react-icons/si';

const skills = [
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Vue.js', icon: <SiVuedotjs /> },
  { name: 'Vite', icon: <SiVitess /> },
  { name: 'Jest', icon: <SiJest /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'TailWindCSS', icon: <SiTailwindcss /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'pnpm', icon: <SiPnpm /> },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center space-x-2 bg-gray-900 border-2 border-white p-5 w-1/2 mx-auto">
      <div className="flex items-center justify-center mb-4">
        <FaCogs className="w-8 h-8" />
        <h2 className="text-xl font-bold ml-2">Skills</h2>
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <div className="m-2 flex items-center" key={index}>
            {skill.icon}
            <span className="ml-1">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;