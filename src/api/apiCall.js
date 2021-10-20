import { put } from 'redux-saga/effects';
import { typeCreator } from 'utils/redux';
import { errorHandler } from './errorHandler';
import { apiActionTypes } from './apiUtils';

export function* apiCall(action) {
  const { successTag, errorTag } = apiActionTypes;
  const { type } = action;

  try {
    const response = null;

    yield put({
      type: typeCreator(type, successTag),
      payload: response,
    });
  } catch (error) {
    const errorType = typeCreator(type, errorTag);
    const errorObject = errorHandler(errorType, error);
    console.error(errorObject);
  }
}
