import { FaCogs } from 'react-icons/fa';

import ProfileSectionCard from '@/components/molecules/ProfileSectionCard';
import type { SkillItem } from '@/types/life';

type SkillsProps = {
  skills: SkillItem[];
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <ProfileSectionCard icon={FaCogs} title="Skills">
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <div className="m-2 flex items-center" key={skill.name}>
            <skill.icon />
            <span className="ml-1">{skill.name}</span>
          </div>
        ))}
      </div>
    </ProfileSectionCard>
  );
};

export default Skills;
