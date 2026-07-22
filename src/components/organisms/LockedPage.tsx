type LockedPageProps = {
  message: string;
};

const LockedPage = ({ message }: LockedPageProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center">{message}</h1>
    </div>
  );
};

export default LockedPage;
