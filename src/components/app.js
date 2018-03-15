import React from 'react';
import Header from './Header';
import ListHobbies from './ListHobbies';
import Section from './Section';

const hobbies=['cantar','bailar','leer','fotografia']
const dato=[{name:'Marina Rodriguez',
            bio:'Hola me llamo Marina soy estudiante fronEnd y futura desarrolladora Backend',
            img:'http://i.ngenespanol.com/dam/traveler/agenda/17/03/14/imagen.jpg.imgw.1280.1280.jpeg'
              }];
const App = () => (
  <div>
    <Header dato={dato[0]}/>,
    <ListHobbies hobbies={hobbies}/>,
    <Section dato={dato[0]}/>
  </div>
)

export default App
