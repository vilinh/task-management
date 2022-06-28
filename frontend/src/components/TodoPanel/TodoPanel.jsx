import "./todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
export const TodoPanel = () => {
  return (
    <div className="todo-panel">
      <FontAwesomeIcon className="checkmark" icon={faCircleCheck} />
      todo
    </div>
  );
};
