import React from 'react';


const ListHobbies = () => (
    //    const  listItems = hobbi.map(hobbi => (
    //       <li key={hobbi}>
    //       </li>
    //     ));

        <ul >
           {hobbi.map(hobbi =>
                <li key={hobbi}></li>
           )};
        </ul>

)

export default ListHobbies