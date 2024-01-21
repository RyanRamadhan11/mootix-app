import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import AddFilm from '../component/Film/AddFIlm';

function PageAddFilm() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Navbar />
      <AddFilm />
      <Footer style={{ position: 'absolute', bottom: 0, width: '100%' }} />
    </div>
  );
}

export default PageAddFilm;
