import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import UpdateFilm from '../component/Film/UpdateFIlm';

function PageUpdateFilm() {
  return (
    <div style={{ position: 'relative', Height: '100vh' }}>
      <Navbar />
      <UpdateFilm />
      <Footer style={{ position: 'absolute', bottom: 0, width: '100%' }} />
    </div>
  );
}

export default PageUpdateFilm;
