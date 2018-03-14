import React from 'react';
import Header from './Header';
import ListHobbies from './ListHobbies';
import Section from './Section';

const hobbi=['cantar','bailar','leer']

const App = () => (
  
  <div>
    <Header />,
    <Section />,
    <ListHobbies hobbi={hobbi} />
  </div>
)

export default App
