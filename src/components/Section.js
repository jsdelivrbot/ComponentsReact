import React from 'react';


const Section = ({dato}) => (
    <div>
      <p className="Center">{dato.bio}</p>
      <img src={dato.img}/>
    </div>
)

export default Section