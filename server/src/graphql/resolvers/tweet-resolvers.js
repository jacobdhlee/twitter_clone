import Tweet from '../../models/Tweet';

export default {
  getTweet: (_, { _id }) => Tweet.findById(_id),
  getTweets: () => Tweet.find({}).sort({ createdAt: -1 }),
  createTweet: (_, args) => Tweet.create(args),
  updateTweet: (_, { _id, ...rest }) =>
    Tweet.findByIdAndUpdate(_id, rest, { new: true }),
  deleteTweet: async (_, { _id }) => {
    try {
      await Tweet.findByIdAndRemove(_id);
      return {
        message: 'Tweet is deleted',
      };
    } catch (err) {
      throw err;
    }
  },
};
