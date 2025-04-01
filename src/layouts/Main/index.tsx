import { FC, ReactElement } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Outlet } from 'react-router';

interface IMain {
  children?: ReactElement;
}

const Main: FC<IMain> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        {children ? children : <Outlet />}
      </main>
      <Footer />
    </>
  );
};

export default Main;
