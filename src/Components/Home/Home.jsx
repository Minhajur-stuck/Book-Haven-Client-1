import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Banner from '../pages/Banner';
import LatestBook from '../pages/LatestBook';

const Home = () => {
  // const {name} = use(AuthContext)

  return (
    <div>
      <Banner></Banner>
      <LatestBook></LatestBook>
    </div>
  );
};

export default Home;