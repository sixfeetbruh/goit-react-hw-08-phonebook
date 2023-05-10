import { Link } from 'react-router-dom';
import phonebook from '../assets/phonebook.png';
import styled from '@emotion/styled';

export const HomeTitle = styled.h2`
  text-align: center;
  font-size: 44px;
  color: #127149;
`;
const HomeImage = styled.img`
  margin: 60px auto;
  width: 200px;
  height: 200px;
`;

const Home = () => {
  return (
    <div className="HomeWrapper">
      <HomeTitle>Home Page</HomeTitle>
      <Link to="/contacts">
        <HomeImage src={phonebook} alt="phonebook" />
      </Link>
    </div>
  );
};

export default Home;
