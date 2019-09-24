import React from 'react';
import Hero from './components/Hero';
import Reliable from './components/Reliable';
import WhatWeDo from './components/WhatWeDo';
import WhatWeProvide from './components/WhatWeProvide';
import Numbers from './components/Numbers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Reliable/>
      <WhatWeDo/>
      <WhatWeProvide/>
      <Numbers/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
