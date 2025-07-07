import React, { useState } from 'react'
import {initialTravelPlan} from '../Data/data.js';
import PlaceTree from './PlaceTree.jsx';
export default function TravelPlace() {
  const [plan,setPlan] =useState(initialTravelPlan);

  const planet = plan.childPlaces;
  return (
    <div>
      <ol>
{planet.map((place)=><PlaceTree key={place.id} place={place} />)}
      </ol>
    </div>
  )
}
