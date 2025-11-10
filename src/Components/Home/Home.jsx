import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Banner from '../pages/Banner';

const Home = () => {
  // const {name} = use(AuthContext)

  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;