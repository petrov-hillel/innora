import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IAction} from "../helpers/types";
import { v4 as uuid } from 'uuid'

interface ActionsState {
  allActions: IAction[];
}

const initialState: ActionsState = {
  allActions: [
    {
      id: uuid(),
      name: 'Plant a garden',
      completed: true,
      createdAt: new Date().toISOString()

    },
    {
      id: uuid(),
      name: 'Learn a new language',
      description: 'Pick a language you\'ve always wanted to learn and start practicing using online resources, language apps, or classes.',
      completed: false,
      createdAt: new Date().toISOString()

    },
    {
      id: uuid(),
      name: 'Organize a picnic',
      completed: true,
      createdAt: new Date().toISOString()

    },
    {
      id: uuid(),
      name: 'Start a journal',
      description: 'Get a notebook or use a digital journaling app to record your thoughts, experiences, and ideas each day.',
      completed: false,
      createdAt: new Date().toISOString()

    },
    {
      id: uuid(),
      name: 'Read a classic novel',
      completed: true,
      createdAt: new Date().toISOString()

    }
  ],
};

const actionsSlice = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    setNewAction(state, action: PayloadAction<IAction>) {
      state.allActions.unshift(action.payload);
    },
    setCompletedAction(state, action: PayloadAction<string>) {
      const index = state.allActions.findIndex(act => act.id === action.payload);
      if (index !== -1) {
        state.allActions[index].completed = true;
      }
    },
    returnCompletedAction(state, action: PayloadAction<string>) {
      const index = state.allActions.findIndex(act => act.id === action.payload);
      if (index !== -1) {
        state.allActions[index].completed = false;
      }
    },
    removeAction(state, action: PayloadAction<string>) {
      state.allActions = state.allActions.filter(act => act.id !== action.payload);
    },
    setNewTime(state, action: PayloadAction<string>) {
      const index = state.allActions.findIndex(act => act.id === action.payload);
      if (index !== -1) {
        state.allActions[index].createdAt = new Date().toISOString();
      }
    },
  },
});

export const {
  setNewAction,
  setCompletedAction,
  returnCompletedAction,
  removeAction,
  setNewTime,
} = actionsSlice.actions;

export default actionsSlice.reducer;
