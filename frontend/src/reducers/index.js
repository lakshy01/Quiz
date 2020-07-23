
import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import isAnswerReducer from './isAnswerReducer';
import authReducer from './authReducer';

export default combineReducers({
    questions: questionReducer,
    isAnswers: isAnswerReducer,
    auth: authReducer
});