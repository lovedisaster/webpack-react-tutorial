import {getNames} from './functions/getNames';
import Test from './functions/Test';
const helloSb = (param) => {
    const names = getNames().toString();

    const testObj = new Test();
    console.log(`Hello ${param} ${names}`);
    console.log('test'.padEnd(5));
    console.log(testObj.print());
}

helloSb("Nathan");