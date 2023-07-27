import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import "./TaskForm.css";

const UpdateTask = props => {
  const taskId = useParams().taskId;
  const creator = useParams().creator;
  const taskDesc = useParams().taskDesc;
  
  const [formState, inputHandler, setFormData] = useForm({
    creator: {
        value: creator,
        isValid: false
    },
    taskDesc: {
        value: taskDesc,
        isValid: false
    }
  }, false);
   
  const taskUpdateSubmitHandler = event => { 
    event.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: JSON.stringify({
        creator: formState.inputs.creator.value,
        taskDesc: formState.inputs.taskDesc.value
      }),
      redirect: 'follow'
    };

    fetch(`http://localhost:5000/tasks/${taskId}/${creator}/${taskDesc}`, requestOptions) 
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', error));
  };

  return (
      <form className="task-form" onSubmit={taskUpdateSubmitHandler}>
        <Input 
          id="creator" 
          element="input" 
          type="text" 
          label="Creator" 
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please Enter a Valid Creator Name"
          onInput= {inputHandler}
          initialValue={formState.inputs.creator.value}
          initialValid={formState.inputs.creator.isValid}
        />
         <Input 
          id="taskDesc" 
          element="textarea"  
          label="Task" 
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please Enter a Valid Task (At Least 5 Characters)"
          onInput= {inputHandler}
          initialValue={formState.inputs.taskDesc.value}
          initialValid={formState.inputs.taskDesc.isValid}
        />
        <Button type="submit">UPDATE TASK</Button>
    </form>
  );
};

export default UpdateTask;