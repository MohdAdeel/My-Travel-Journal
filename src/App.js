import React from 'react';
import Nav from './Components/Nav';
import Cards from './Components/Cards';
import cardData from './cardData';


function App() {
  const cardFinal = cardData.map(item => {
      return <Cards 

              img = {item.img}
              countryName= {item.countryName}
              googleMap= {item.googleMap}
              placeName= {item.placeName}
              dates= {item.dates}
              description= {item.description}
            />
  })

  return (
    <div className="App">
      <Nav/>
        <section>
          {cardFinal}
        </section>
    </div>
  );
}

export default App;
