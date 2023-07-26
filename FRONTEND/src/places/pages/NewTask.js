import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import "./TaskForm.css";

  const NewTask = () => {
    const [formState, inputHandler] = useForm(
        {
            creator: {
              value: '',
              isValid: false
            },
            taskDesc: {
              value: '',
              isValid: false
            }
        }, false
     );

    const taskSubmitHandler = async event => {
        event.preventDefault();
        try {
          let myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
              creator: formState.inputs.creator.value,
              taskDesc: formState.inputs.taskDesc.value
            }),
            redirect: 'follow'
          };

          await fetch("http://localhost:5000/tasks/", requestOptions) 
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        } catch (err) {}    
    };
  
    return (
     <React.Fragment>
      <form className="task-form" onSubmit={taskSubmitHandler}>
        <Input
          id="creator"
          element="input"
          type="text"
          label="Creator"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please Enter a Valid Creator Name."
          onInput={inputHandler}
        />
        <Input
          id="taskDesc"
          element="textarea"
          label="Task"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please Enter a Valid Task (At Least 5 Characters)"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          CREATE TASK
        </Button>
      </form>
     </React.Fragment>  
    );
  };

export default NewTask;