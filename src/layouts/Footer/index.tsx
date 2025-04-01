import { FC } from 'react';
import Container from '../Container';

const Footer: FC = () => {
  return (
    <footer className="w-full flex justify-center bg-gray-50">
      <Container className="!max-w-[1024px]">
        <div className='px-6 py-2'>
          Footer
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
