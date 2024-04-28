import React, {useState} from 'react';
import ActionsItems from "../Actions"
import CreateAction from "../CreateAction";
import './styles.scss'

const ActionsList: React.FC = () => {
  const [showAllActions, setShowAllActions] = useState<boolean>(true)

  return (
    <div className='wrapper'>
      <div className='list'>
        <h1 className='list__title'>ToDo List</h1>
        <CreateAction setShowAllActions={setShowAllActions}/>
        <div className={`list__tabs ${showAllActions ? 'list__tabs-all' : 'list__tabs-completed'}`}>
          <button
            className='list__tab'
            onClick={() => setShowAllActions(true)}
          >All</button>
          <button
            className='list__tab'
            onClick={() => setShowAllActions(false)}
          >Completed</button>
        </div>
        <ActionsItems showAllActions={showAllActions}/>
      </div>
    </div>
  );
};

export default ActionsList;