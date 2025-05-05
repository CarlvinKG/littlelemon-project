import React, { useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import { generateTimeOptions, submitAPI } from '../utils/unrealAPI';
import HeroSection from "../layout/HeroSection";
import HoursOperations from '../layout/HoursOperation';
import ReservationForm from '../layout/ReservationForm';

const occasions = ['No Occasion', 'First Date', 'Birthday', 'Engagement', 'Anniversary'];
const seatingAreas = ['Indoor', 'Outdoor', 'Bar'];

const updateTimes = (availableTimes, date) => {
  const response = generateTimeOptions(new Date(date));
  return (response.length !== 0) ? [...response] : availableTimes;
}

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...generateTimeOptions(new Date()),
];

const Reservations = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate("/confirmation");
  };

  return (
    <>
      <HeroSection hero='1' Text='1'/>
      <HoursOperations />
      <ReservationForm availableTimes={availableTimes} occasions={occasions} seatingAreas={seatingAreas} submitData={submitData} />
    </>
  );
};

export default Reservations;