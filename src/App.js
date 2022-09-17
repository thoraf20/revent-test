import React from 'react';
import { About, Contact, LandingLayout, MainMenu, Navbar, Portfolio, Resume } from "./components";

function App() {
  return (
    <LandingLayout>
      <Navbar/>
      <MainMenu/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </LandingLayout>
  );
}

export default App;

