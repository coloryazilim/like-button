import { LikeButton } from '../like-button';

Meteor.publish('like-button', (_id) => {
  return LikeButton.collection.find({
    likedId: _id
  });
});
