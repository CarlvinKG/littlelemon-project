import React, { useState } from 'react';
import FormField from '../layout/FormField'
import '../../styles/ReservationForm.css'

const ReservationForm = ({ availableTimes, occasions, seatingAreas, submitData }) => {

    const minNumberGuests = 1;
    const maxNumberGuests = 10;
    const minDate = new Date().toJSON().slice(0, 10);
    const defaultTime = availableTimes[0];
    const defaultSeating = seatingAreas[0];

    const invalidGuestErrorMessage = 'Please enter a number between ' + minNumberGuests + 'and ' + maxNumberGuests + '!';
    const invalidOccasionErrorMessage = 'Please choose a valid occasion!';
    const invalidDateErrorMessage = 'Please choose a valid date!';
    const invalidTimeErrorMessage = 'Please choose a valid time!';
    const invalidSeatingErrorMessage = 'Please choose a valid seating area!';

    const [numberOfGuests, setNumberOfGuests] = useState(minNumberGuests);
    const [occasion, setOccasion] = useState(occasions[0]);
    const [date, setDate] = useState(minDate);
    const [time, setTime] = useState(defaultTime);
    const [seating, setSeating] = useState(defaultSeating);

    const isGuestsValid = () => numberOfGuests !== '';
    const isOccasionValid = () => occasion !== '';
    const isDateValid = () => date !== '';
    const isTimeValid = () => time !== '';
    const isSeatingValid = () => seating !== '';

    const handleFormSubmit = (e) => {
        e.preventDefault();
        submitData({ numberOfGuests, occasion, date, time, seating })
    }
  return (
    <div className='container'>
    <form onSubmit={ handleFormSubmit }>
    <fieldset>
        <FormField
            label='Select number of guests'
            htmlFor='guests'
            hasError={ !isGuestsValid() }
            errorMessage={ invalidGuestErrorMessage }
        >
            <input
                type='number'
                name='guests'
                value={ numberOfGuests }
                min={ minNumberGuests }
                max={ maxNumberGuests }
                required={ true }
                onChange={ (e) => setNumberOfGuests(e.target.value) }
            />
        </FormField>
        <FormField
            label='Select occasion (optional)'
            htmlFor='occasion'
            hasError={ !isOccasionValid() }
            errorMessage={ invalidOccasionErrorMessage }
        >
            <select
                name='occasion'
                value={ occasion }
                onChange={ (e) => setOccasion(e.target.value) }
            >
                { occasions.map((occasion) => (
                    <option key={ occasion }>{ occasion }</option>
                )) };
            </select>
        </FormField>
        <FormField
            label='Select date'
            htmlFor='date'
            hasError={ !isDateValid() }
            errorMessage={ invalidDateErrorMessage }
        >
            <input
                type='date'
                name='date'
                min={ minDate }
                required={ true }
                onChange={ (e) => setDate(e.target.value) }
            />
        </FormField>
        <FormField
            label='Select time'
            htmlFor='time'
            hasError={ !isTimeValid() }
            errorMessage={ invalidTimeErrorMessage }
        >
                <select
                    name='time'
                    value={ time }
                    required={ true }
                    onChange={ (e) => setTime(e.target.value) }
                >
                    { availableTimes.map((time) => (
                    <option key={ time }>{ time }</option>
                )) };
                </select>
        </FormField>
        <FormField
            label='Select seating area'
            htmlFor='seating'
            hasError={ !isSeatingValid() }
            errorMessage={ invalidSeatingErrorMessage }
        >
            <select
                name='seating'
                value={ seating }
                onChange={ (e) => setSeating(e.target.value) }
            >
                { seatingAreas.map((seating) => (
                    <option key={ seating }>{ seating }</option>
                )) };
            </select>
        </FormField>
        <div className='btn-container'>
            <button className="btn" type="submit">
                Reserve now!
            </button>
        </div>
        </fieldset>
    </form>
    </div>
  );
};

export default ReservationForm;