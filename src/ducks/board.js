import { Record } from 'immutable'
 
 
// Constants
export const moduleName = 'board';
export const FILL_SQUARE = `${ moduleName }/FILL_SQUARE`;

 
// Reducer
const ReducerRecord = Record({
 
});
 
export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload } = action;
 
    switch (type) {
        case FILL_SQUARE:
            return 'newState';
 
        default:
            return state;
    }
}
 
// Actions Creators
export function fillSquare(index) {
    return {
        type: FILL_SQUARE,
        payload: { index }
    }
}
 