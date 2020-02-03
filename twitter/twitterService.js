const Twitter = require('twitter');

const clientCredentials = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_API_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_API_SECRET_KEY,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// Get twitter timeline
const getTimeline = async () => {
    return clientCredentials.get('statuses/home_timeline.json', {}).then(res => {
        return res
    }).catch(err => {
        throw err
    });
}

const getUserInfos = async (screenName) => {
    var urlParams = {screen_name: screenName};
    return clientCredentials.get('users/lookup.json', urlParams).then(res => {
        return res
    }).catch(err => {
        throw err
    })
}

// Post new status
const postStatus = async (status) => {
    const twitterStatus = {
        status: status
    }
    return clientCredentials.post('statuses/update', twitterStatus).then(res => {
        return res;
    }).catch(err => {
        throw err;
    });
}

module.exports = {
    getTimeline,
    getUserInfos,
    postStatus
}