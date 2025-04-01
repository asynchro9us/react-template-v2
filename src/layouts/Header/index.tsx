import Container from '../Container';
import { FC } from 'react';
import { ROUTE_HOME } from '../../constants';
import { Link } from 'react-router';
import { SampleIcon } from '../../assets/icons';

const Header: FC = () => {
  return (
    <nav className="sticky top-0 w-full flex justify-center border-b border-gray-200">
      <Container className="max-w-[1024px] px-6">
        <ul className="flex items-center justify-center gap-6 py-1.5">
          <li>
            <Link to={ROUTE_HOME}>
              <SampleIcon width={40} height={40}/>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Header;
