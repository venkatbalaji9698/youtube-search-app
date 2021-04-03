import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

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
  const [searchVal, setSearchVal] = useState('');
  const [totalCount, setTotalCount] = useState(0);

  const callGetYoutubeAPI = (val) => {
    dispatch(getYoutubeVideos({
      val,
      maxResults: 10,
      pageToken: youtubeVideosResponse && youtubeVideosResponse.response ? youtubeVideosResponse.response.nextPageToken : ''
    }));
  }

  useEffect(() => {
    if (!localStorage.getItem(LocalSessionKey.IS_LOGGED_IN)) {
      history.replace(PathConstants.LOGIN);
    }
    setLoading(true);
    callGetYoutubeAPI('');
  }, []);

  useEffect(() => {
    if (youtubeVideosResponse && youtubeVideosResponse.response) {
      if (youtubeVideosResponse.response.pageInfo) {
        // setTotalCount(youtubeVideosResponse.response.pageInfo.totalResults);
        setTotalCount(50);
      }
      if (youtubeVideosResponse.response.items && youtubeVideosResponse.response.items.length) {
        const newList = videosList.concat(youtubeVideosResponse.response.items);
        setVideosList(newList);
        setDisplayVideo(newList[0]);
      }
      setLoading(false);
    }
  }, [youtubeVideosResponse]);

  const onSearch = (val) => {
    setVideosList([]);
    setSearchVal(val);
    setLoading(true);
    callGetYoutubeAPI(val);
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
            <InfiniteScroll
              dataLength={videosList.length}
              next={() => callGetYoutubeAPI(searchVal)}
              hasMore={videosList.length < totalCount}
              loader={<h4>Loading...</h4>}
              scrollThreshold="15px"
              style={{ overflow: 'unset' }}
            >
              <VideoList videosList={videosList} handleVideoSelect={(item) => setDisplayVideo(item)} />
            </InfiniteScroll>
          </div>
          <div className="home__content_video-wrapper">
            <div className="home__content_video-wrapper-a">
              {displayVideo &&
                <VideoPlayer displayVideo={displayVideo} />
              }
            </div>
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
