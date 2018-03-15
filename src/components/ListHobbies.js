import React from 'react';

const ListHobbies = ({hobbies}) => (
  <ul>
    {hobbies.map(hobbie => {
      return <li key={hobbie}>{hobbie}</li>
      })
    }
  </ul>
)

export default ListHobbies