import { LikeButton } from '../like-button';

Template.likeButton.helpers({
  likes() {
    return LikeButton.likes(this._id);
  },

  isLike() {
    return LikeButton.isLike(this._id);
  }
});
