import React from 'react'

export default function PlaceTree({place}) {

  const childPlaces = place.childPlaces;

  return (
    <li>
      {place.title}
      {childPlaces.length > 0  &&  (
        <ol>
          {childPlaces.map(place => <PlaceTree  key={place.id} place={place}/>)}
        </ol>
      )}
    </li>
  )
}
