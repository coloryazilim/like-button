import { LikeButton } from '../like-button';

Meteor.methods({
  'like-button-remove'(likedId) {
    return LikeButton.collection.remove({
      _id: likedId,
      userId: this.userId
    });
  }
});
