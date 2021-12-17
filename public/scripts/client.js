/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const createTweetElement = function(tweet) {
  let date = new Date(tweet.created_at).toLocaleDateString();
  let $tweet =
  `<article class="tweet-header wrapper">
        <header>
              <img class="left" id="pic" src="${tweet.user.avatar}">
              <h1 class="left">${tweet.user.name}</h1>
            <h5 class="right">${tweet.user.handle}</h5>
          </header>
          <p class="message">${tweet.user.content}</p>
          <footer class="tweet-footer">
            <div>
              <p class="left" ${date}</p>
            </div>
            <div>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-flag"></i>
            </div>
          </footer>
        </article> `;
  return $tweet;
};


const renderTweets = function(tweets) {
    $("#tweets").empty();
    for (let tweet of tweets) {
      $('#tweets').prepend(createTweetElement(tweet));
    }
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}

renderTweets(data);
