import question from '../api/question';

export const fetchQuestions = () => async dispatch => {
    const response = await question.get('/questions');
    dispatch({ type: 'FETCH_QUESTIONS', payload: response.data });
}

export const selectedAnswer = (isAnswer) => {
    return {
        type: 'SELECTED_ANSWER',
        payload: isAnswer
    };
};

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};