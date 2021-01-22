import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Form = props => {
    const inputRef = useRef(null);

    return (
        <div>
            <input data-testid="text-field" ref={inputRef} width="100px" type="text"></input>
            <button data-testid="submit" onClick={() => props.submitValue(inputRef.current.value)}>Submit</button>
        </div>
    );
};

Form.propTypes = {
    submitValue : PropTypes.func
};

export default Form;