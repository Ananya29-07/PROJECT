import React from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";
import './CreatorTaskItem.css';

const CreatorTaskItem = props => {
    return (
        <li className="task-item">
            <Card className="task-item__content">
                <Link to = {`/tasks/t1`}>
                  <h2>Welcome to TO-DO LIST</h2>  
                  <div className="task-item__info">
                    <h2>{props.creator}</h2>
                  </div>
                </Link>
            </Card>
        </li>
    )
};

export default CreatorTaskItem;