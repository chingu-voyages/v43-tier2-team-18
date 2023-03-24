import React from "react";
import Main from '../pages/Main'
import { Navbar, Footer, DestinationCard } from ".";


// const destinations = [
//       {
//         image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
//         country: 'France',
//         rating: 4,
//       },
//     ];

const Root = () => {
  return (
    <>
      <Navbar />
      <Main />

    {/* <div className="p-4">
      {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
    </div> */}
   
     
      <Footer />
    </>
  );
};

export default Root;
