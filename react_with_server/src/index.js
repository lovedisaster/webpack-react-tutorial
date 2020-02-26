import {render} from 'react-dom';
import Home from './components/Home/Home';
import React from 'react';

const wrapper = document.getElementById("root");
wrapper ? render(<Home />, wrapper) : false;