import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import VideoList from '../../containers/video-list'
import Spinner from '../../components/spinner';
import Header from '../../containers/header';
import VideoPlayer from '../../components/video-player';

import { LocalSessionKey } from '../../constants/app-constants';
import { PathConstants } from '../../constants/path-constants';

import { getYoutubeVideos } from '../../redux/actions/youtubeActions';

import './index.scss'

const HomePage = ({ history }) => {
  const dispatch = useDispatch();
  const { youtubeVideosResponse } = useSelector((state) => ({
    youtubeVideosResponse: state.youtubeReducers.youtubeVideosResponse,
  }));

  const [videosList, setVideosList] = useState([]);
  const [displayVideo, setDisplayVideo] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem(LocalSessionKey.IS_LOGGED_IN)) {
      history.replace(PathConstants.LOGIN);
    }
    onSearch('');
  }, []);

  useEffect(() => {
    if (youtubeVideosResponse && youtubeVideosResponse.response) {
      if (youtubeVideosResponse.response.items && youtubeVideosResponse.response.items.length) {
        setVideosList(youtubeVideosResponse.response.items);
        setDisplayVideo(youtubeVideosResponse.response.items[0]);
      }
      setLoading(false);
    }
  }, [youtubeVideosResponse]);

  const onSearch = (val) => {
    setLoading(true);
    dispatch(getYoutubeVideos(val));
  }

  const getMainContent = () => {
    if (isLoading) {
      return (
        <div className="home__content">
          <div className="home__content_loading">
            <Spinner />
          </div>
        </div>
      )
    }
    if (videosList && videosList.length) {
      return (
        <div className="home__content">
          <div className="home__content_list-wrapper">
            <VideoList videosList={videosList} handleVideoSelect={(item) => setDisplayVideo(item)} />
          </div>
          <div className="home__content_video-wrapper">
            {displayVideo &&
              <VideoPlayer displayVideo={displayVideo} />
            }
          </div>
        </div>
      )
    }
    return (
      <div className="home__content">
        <div className="home__content_no-content">
          No Data found.
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <Header onSearch={onSearch} history={history} />
      {getMainContent()}
    </div>
  );
}

export default HomePage;
