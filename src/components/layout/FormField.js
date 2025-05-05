import React from 'react';

const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
  return (
    <div className='field'>
        <label htmlFor={ htmlFor }>{ label }</label>
        { children }
        { hasError && errorMessage ? (
            <p data-testid='error-message'>{ errorMessage }</p>
        ) : null }
    </div>
  );
};

export default FormField;