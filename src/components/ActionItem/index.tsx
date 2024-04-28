import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IAction } from '../../helpers/types';
import {setCompletedAction, returnCompletedAction, removeAction, setNewTime} from '../../store/actions';
import { Success, Return, Trash } from '../../helpers/icons';
import './styles.scss';

interface ActionItemProps {
  data: IAction;
}

const ActionItem: React.FC<ActionItemProps> = ({ data }) => {
  const { id, name, completed, createdAt } = data;
  const dispatch = useDispatch();
  const createdAtDate = createdAt ? new Date(createdAt) : new Date();

  const formattedDate = `${createdAtDate.toLocaleTimeString()}`;

  const handleCompleteAction = () => {
    if (!completed) {
      dispatch(setCompletedAction(id));
    } else {
      dispatch(returnCompletedAction(id));
    }

    dispatch(setNewTime(id))
  };

  const handleRemoveAction = () => {
    dispatch(removeAction(id));
  };

  return (
    <div className={`item ${completed ? 'completed' : ''}`}>
      <Link to={`/action/${id}`} className="item__name">{name}</Link>

      <div className="flex">
        <div className='item__time'>Updated: {formattedDate}</div>
        {!completed ? (
          <Success onClick={handleCompleteAction} />
        ) : (
          <Return onClick={handleCompleteAction} />
        )}
        <Trash onClick={handleRemoveAction} />
      </div>
    </div>
  );
};

export default ActionItem;
