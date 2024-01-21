import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import Hero from '../component/Hero/Hero';
import Loading from '../components/Loading';

function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  })
  
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
      <div>
        <Navbar />
        <Hero />
        <Footer />
      </div>
      )};
    </>
  );
}

export default Home;
