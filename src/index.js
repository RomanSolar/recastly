// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import Search from './components/Search.js';
import VideoList from './components/VideoList.js';
import VideoListEntry from './components/VideoListEntry.js';
import VideoPlayer from './components/VideoPlayer.js';
import exampleVideoData from './data/exampleVideoData.js';
import searchYouTube from './lib/searchYouTube.js';

//initial stuff

// rate limiter for ajax results
// check if current time - 500ms > old time called
// if true return true, else return false
var lastTimeCalled;

var rateLimiter = function() {
  var currentDate = new Date();
  var currentTime = currentDate.getTime();
  if (lastTimeCalled === undefined || currentTime - 500 > lastTimeCalled) {
    lastTimeCalled = currentTime;
    return true;
  }
  return false;
};

// ReactDOM.render(player, document.getElementsByClassName('col-md-7')[0]);
// exampleVideoData.js
// exampleVideoData.length = 8

// function to handle incoming new data and render to page appropriately
// when search results come in, first video goes to player, rest goes to list
// make sure results are not undefined and are an array, error results are a string
// if length > 0, put first video in player
// put rest of results (up to 5) in the video list
var handleNewResults = function(searchResults) {
  if (searchResults !== undefined && Array.isArray(searchResults)) {
    if (searchResults.length > 0) {
      var player = new VideoPlayer(searchResults[0]);
      ReactDOM.render(player.render(), document.getElementsByClassName('col-md-7')[0]);
    }
    if (searchResults.length > 1) {
      var entryList = [];
      for (var i = 1; i < 6 && i < searchResults.length; i++) {
        entryList.push(VideoListEntry(searchResults[i]));
      }
      ReactDOM.render(entryList, document.getElementsByClassName('video-list')[0]);
    }
  }
};

// search function getSearch() called when
var getSearchEvent = function(event) {
  debugger;
  var text = document.getElementsByClassName('form-control')[0].value;
  searchYouTube(text, callbackFunc);
};


var app = new App();
var search = new Search({getSearch: getSearchEvent});
var vidList = new VideoList();

ReactDOM.render(app.render(), document.getElementById('app'));
ReactDOM.render(vidList.render(), document.getElementsByClassName('col-md-5')[0]);
ReactDOM.render(search.render(), document.getElementsByClassName('navbar')[0]);

// var vidList = VideoList(exampleVideoData);

// how to make VideoListEntry
// var entry = VideoListEntry(exampleVideoData[0]);

// var entryList = [];
// entryList.push(VideoListEntry(exampleVideoData[0]));
// entryList.push(VideoListEntry(exampleVideoData[1]));
// entryList.push(VideoListEntry(exampleVideoData[2]));
// entryList.push(VideoListEntry(exampleVideoData[3]));
// entryList.push(VideoListEntry(exampleVideoData[4]));

// template for video player
// var player = VideoPlayer(exampleVideoData[5]);


// ReactDOM.render(entryList, document.getElementsByClassName('video-list')[0]);

var results = [];
var callbackFunc = function(data) {
  debugger;
  handleNewResults(data);
  debugger;
};


//callbackFunc.methodname.call(this)

searchYouTube('stuff', callbackFunc, rateLimiter);


// render app
// render search, className="col-md-6 offset-md-3"
// render video player, className="col-md-7"
// render list, className="col-md-5"
// render/add all list items, className="video-list"

debugger;