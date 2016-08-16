Template.body.onCreated(function bodyOnCreated() {
  //this.state = new ReactiveDict();
  Meteor.subscribe('links');
  Meteor.subscribe('globals');
  Meteor.subscribe('dirlist');
  Meteor.subscribe('rtvalues');
});