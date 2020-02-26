import {getNames} from './functions/getNames';

const helloSb = (param) => {
    const names = getNames().toString();
    console.log(`Hello ${param} ${names}`)
}

helloSb("Nathan");