import React from 'react';
import Header from './Header';
import ListHobbies from './ListHobbies';
import Section from './Section';


const App = () => (
  
  <div>
    <Header />,
    <Section />,
    <ListHobbies hobbi={['cantar','bailar','leer']},
  </div>
)

export default App
