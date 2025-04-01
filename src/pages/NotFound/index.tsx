import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <p className="text-2xl">Not Found</p>
      <p className="text-9xl font-extrabold">404</p>
    </div>
  );
};

export default NotFound;
