import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    /*let todos = [
      {
        title: "Learn Ember",
        complete: false,
      },
      {
        title: "Solve World Hunger",
        complete: true
      },
      {
        title: "Learn Scala",
        complete: false,
      },
      {
        title: "Learn ES6",
        complete: false,
      },
      {
        title: "Be good at Maths",
        complete: true,
      }
    ];*/
    return this.store.findAll('todo');
  }
});
