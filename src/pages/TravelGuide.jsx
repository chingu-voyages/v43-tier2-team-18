import React from 'react'
import DestinationCard from '../components/DestinationCard'
import { Navbar } from '../components'
import {v4 as uuidv4} from "uuid"
import {travelData} from ".././data.js"
import { Link } from 'react-router-dom'


export default function TravelGuide() {
    const destinationCards = travelData.map((destination) => (
        <Link key={uuidv4()} to={{ pathname: '/destinationInfo',state: { countryData: destination }}}>
            <DestinationCard {...destination} />
        </Link>
    ));
  return (
   
    <div className='p-4'>
     <Navbar />
    {/* Popular Destinations(JIRA TASK NAME) */}


    {/* Destination destinations(JIRA TASK NAME) */}    
    <section>
        <h2 className='font-bold text-3xl pt-8 pb-8'>Popular locations</h2>
        <div className='flex flex-wrap gap-6'>
            {destinationCards}
        </div>
        
    </section>
       
    </div>
  )
}
