type ProfileSectionCardProps = {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  className?: string;
};

const ProfileSectionCard = ({
  icon: Icon,
  title,
  children,
  className = '',
}: ProfileSectionCardProps) => {
  return (
    <div
      className={`flex flex-col items-center bg-gray-900 border-2 border-white p-5 w-1/2 mx-auto m-4 ${className}`}
    >
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-8 h-8" />
        <h3 className="text-2xl">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default ProfileSectionCard;
