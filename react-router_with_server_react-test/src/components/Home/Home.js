import React, { useState, PureComponent, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import Form from "./Form/Form";
import { GetListItems } from "../../api/api";

const Home = (props) => {
  let [currentValue, setCurrentValue] = useState("");
  let [todoList, setTodoList] = useState(null);
  
  useEffect(() => {
    GetListItems()
      .then((todoList) => {
        setTodoList(todoList);
      })
      .catch((e) => console.log(e));
  }, []);
  
  return (
    <div>
      <h1 data-testid="currentValue">Current value: {currentValue}</h1>
      <Form submitValue={setCurrentValue} />
      {todoList && (
        <ul data-testid="list">
          {todoList.data.map((item) => (
            <li data-testid={item.id} key={item.TaskName} role="list-item">
              Name: {item.TaskName} Time: {item.Time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Home.propTypes = {};

export default React.memo(Home);
