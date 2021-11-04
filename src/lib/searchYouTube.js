import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

var url = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';



var searchYouTube = (query, callback, rateLimiterCallback) => {
  // TODO

  $.ajaxPrefilter(function (settings, _, jqXHR) {
    jqXHR.setRequestHeader('Authorization', API_KEY);
  });

  // url: url,
  // data: data,
  // success: success,
  // dataType: dataType

  // jquery get
  //$.get( );

  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    beforeSend: rateLimiterCallback,
    data: {q: query, youtube_api_key: YOUTUBE_API_KEY},
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('Youtube: Failed', error);
    }
  });

};

export default searchYouTube;
