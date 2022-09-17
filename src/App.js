import React from 'react';
import { About, Contact, LandingLayout, MainMenu, Navbar, Portfolio } from "./components";

function App() {
  return (
    <LandingLayout>
      <Navbar/>
      <MainMenu/>
      <About/>
      <Portfolio/>
      <Contact/>
    </LandingLayout>
  );
}

export default App;

