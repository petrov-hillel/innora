import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {IAction} from "../../helpers/types";
import ActionItem from "../ActionItem";
import './styles.scss'

const ActionsItems: React.FC<{ showAllActions: boolean }> = ({ showAllActions }) => {
  const allActions = useSelector((state: RootState) => state.allActions)
  const completedActions = allActions.filter((act: IAction) => act.completed)
  const actions = [...allActions].sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

  const isAllActions = showAllActions ? actions : completedActions

  return (
    <div className='items'>
      {isAllActions.map((act: IAction) => <ActionItem key={act.id} data={act}/>)}
    </div>
  )
};

export default ActionsItems;