
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import * as dataAccess from '../../utils/ajax';
import * as Actions from '../actions/actionTypes';
import { setYoutubeVideosResponse } from '../actions/youtubeActions';
import { GET_YOUTUBE_VIDEOS } from '../../constants/api-constants';

const get = async (url) => await dataAccess.get(url);

export function* getYoutubeVideos(data) {
    let url = GET_YOUTUBE_VIDEOS + '?part=snippet&type=video&key=' + process.env.REACT_APP_YOUTUBE_KEY + '&q=' + data.data;
    try {
        const response = yield call(get, url);
        yield put(setYoutubeVideosResponse(response));
    } catch (error) {
        yield put(setYoutubeVideosResponse(error))
    }
}

export function* youtubeSaga() {
    yield takeLatest(Actions.GET_YOUTUBE_VIDEOS, getYoutubeVideos);
}
