import React from 'react';


// THE DATA TO USE
// const destinations = [
//     {
//       image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
//       country: 'France',
//       rating: 4,
//     },
//   ];

const DestinationCard = (props) => {
  console.log(props)
    return (
      
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white cursor-pointer">
        <img className="w-full h-48 object-cover object-center" src={props.destination.image} alt={props.destination.name} />
        <div className=" flex justify-between items-center px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.destination.name}</div>
          <div className="text-yellow-500 text-lg pb-2">
            {Array.from({ length: props.destination.rating }, (_, i) => (
              <span key={i} role="img" aria-label="star">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
     
    );
  };
export default DestinationCard;
