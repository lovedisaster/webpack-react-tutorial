import React, { useState, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from './Form/Form';

const Home = props => {
    let [currentValue,setCurrentValue] = useState("");
    return (
        <div>
            <h1 data-testid="currentValue">Current value: {currentValue}</h1>
            <Form submitValue={setCurrentValue}/>
        </div>
    );
};

Home.propTypes = {
    
};

export default React.memo(Home);
