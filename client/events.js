import { LikeButton } from '../like-button';

Template.likeButton.events({
  'click .like-button-container'(event, instance) {
    return LikeButton.like(this._id);
  }
});
