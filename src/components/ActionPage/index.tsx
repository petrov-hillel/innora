import React from 'react';
import {useNavigate,useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

import './styles.scss'

const ActionPage = () => {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate()
  const data = useSelector((state: RootState) => state.allActions.find(act => act.id === id));

  if (!data) {
    return <div>Not found action with this ID</div>;
  }

  const {name, description, completed, createdAt} = data
  const createdAtDate = createdAt ? new Date(createdAt) : new Date();

  const formattedDate = `${createdAtDate.toLocaleTimeString()}`;

  return (
    <div className='page'>
      <div className="page__wrapper">
        <h1 className='page__title'>{name}</h1>
        <div>Updated: {formattedDate}</div>
        <div>Completed: {completed ? 'Yes' : 'No'}</div>
        <p className='page__description'>{description ? description : 'Description is missing'}</p>
        <button className='page__btn' onClick={() => nav(-1)}>Back</button>
      </div>
    </div>
  );
};

export default ActionPage;