// reducers/counter.ts
import { ActionType } from '../actions';

interface ProgramsState {
  programs: [];
}

const initialState: ProgramsState = {
    programs: ["XML","HTML","JSON","CSS","JS"],
};

const programsReducer = (state = initialState, action: ActionType): ProgramsState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, programs: state.programs + 1 };
    case 'DECREMENT':
      return { ...state, programs: state.programs - 1 };
    default:
      return state;
  }
};

export default programsReducer;
