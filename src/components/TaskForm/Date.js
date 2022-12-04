import React from "react";

const Date = (props) => {
  const changeDeadlineHandler = (event) => {
    props.onSetDate(event.target.value);
  };

  return (
    <div>
      <label>Deadline</label>
      <input
        value={props.addDeadline}
        onChange={changeDeadlineHandler}
        type="date"
      />
    </div>
  );
};
export default Date;
