class Button {
  constructor() {
    this.collection = new Mongo.Collection('like-button');
    this.collection.allow({
      insert(userId) { return userId; },
      update() { return false; },
      remove(userId, doc) {
        return _.isEqual(userId, doc.userId);
      }
    });
  }

  likes(_id) {
    return this.collection.find({
      likedId: _id
    });
  }

  isLike(_id) {
    return this.collection.findOne({
      userId: Meteor.userId(),
      likedId: _id
    });
  }

  like(_id) {
    const data = {
      userId: Meteor.userId(),
      likedId: _id
    };

    if (data.userId) {
      if (_.isUndefined(this.isLike(_id))) {

        // add like.
        return this.collection.insert(data);
      }

      return Meteor.call('like-button-remove', this.isLike(_id)._id);
    }
  }
}

export const LikeButton = new Button();
