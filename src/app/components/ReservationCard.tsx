import React from 'react'
import { removeReservation } from '../../features/reservationSlice';
import {useDispatch } from 'react-redux'
import { addCustomer } from '../../features/customermerSlice';
import { v4 as uuid  } from 'uuid';


interface ReservationCardTypes {
  name: string,
  index: number
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {
  
  const dispatch= useDispatch();
  return (
    <div  onClick={()=>{
      dispatch(removeReservation(index))
      dispatch(addCustomer({
        id: uuid(),
        name,
        food:[] 
      })
  ) }} 
    className="reservation-card-container">{name}</div>

  )
}
