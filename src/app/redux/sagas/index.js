import { all } from 'redux-saga/effects';
import { youtubeSaga } from './youtubeSaga';

export default function* rootSaga() {
    yield all([
        youtubeSaga()
    ])
}