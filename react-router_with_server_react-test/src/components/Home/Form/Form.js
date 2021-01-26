import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Form = props => {
    const inputRef = useRef(null);

    return (
        <div>
            <input data-testid="text-field" ref={inputRef} width="100px" type="text"></input>
            {/* <select data-testid="text-field" ref={inputRef} width="100px">
                <option defaultValue>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
            </select> */}
            <button data-testid="submit" onClick={() => props.submitValue(inputRef.current.value)}>Submit</button>
        </div>
    );
};

Form.propTypes = {
    submitValue : PropTypes.func
};

export default Form;