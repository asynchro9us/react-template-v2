import { FC } from 'react';
import Container from '../Container';

const Footer: FC = () => {
  return (
    <footer className="w-full flex justify-center">
      <Container className="!max-w-[1024px]">
        <div className='px-6 py-2 border-t border-t-gray-200'>
          <p className='text-sm text-gray-500'>Built by <span className='text-base'>X - L A R A T E</span></p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
