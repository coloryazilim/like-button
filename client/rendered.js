Template.likeButton.onCreated(function() {
  this.subscribe('like-button', this.data._id);
});
