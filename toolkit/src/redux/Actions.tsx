// actions/index.ts
export type ActionType = IncrementAction | DecrementAction;

interface IncrementAction {
  type: 'INCREMENT';
}

interface DecrementAction {
  type: 'DECREMENT';
}

export const increment = (): IncrementAction => ({
  type: 'INCREMENT',
});

export const decrement = (): DecrementAction => ({
  type: 'DECREMENT',
});
