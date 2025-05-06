import React, { useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from '../utils/unitTestAPI';
import HeroSection from "../layout/HeroSection";
import HoursOperations from '../layout/HoursOperation';
import BookingForm from '../layout/BookingForm';

const occasions = ['No Occasion', 'First Date', 'Birthday', 'Engagement', 'Anniversary'];
const seatingAreas = ['Indoor', 'Outdoor', 'Bar'];

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? [...response] : availableTimes;
}

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

const Reservations = () => {
  const [availableTimes] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate("/confirmed-booking");
  };

  return (
    <>
      <HeroSection hero='1' Text='1'/>
      <HoursOperations />
      <BookingForm availableTimes={availableTimes} occasions={occasions} seatingAreas={seatingAreas} submitForm={submitForm} />
    </>
  );
};

export default Reservations;