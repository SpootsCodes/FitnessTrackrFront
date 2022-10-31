import React from "react";
import { postActivities } from "../api";
import './CSS/activities.css';

const AddActivity = ({ allActivities, setAllActivities }) => {
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const description = event.target[1].value;

    const result = await postActivities(name, description);
    if (result) {
      setAllActivities([result, ...allActivities]);
    }

    if (result.error) {
      alert(result.error);
    }
  };
  return (
    <div id="actAdd">
      <form onSubmit={handleSubmit}>
        <h3 id="createTitle"> Create an Activity</h3>
        <input
          type='text'
          id='nameAct'
          required
          placeholder='Activity Name'
        ></input>
        <input
          type='text'
          id='goalAct'
          required
          placeholder='Description'
        ></input>
        <button id='activity-btn' type='submit'>
          Add➕
        </button>
      </form>
    </div>
  );
};

export default AddActivity;
