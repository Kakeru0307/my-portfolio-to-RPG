import { FaCogs } from 'react-icons/fa';
import { skills } from '@/constants/LifeData';

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
            <skill.icon />
            <span className="ml-1">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
