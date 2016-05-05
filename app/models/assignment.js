import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  chores: attr(),
  pointValue: attr(),
  date: attr(),
  checkbox: attr(),
  assignment: belongsTo('child'),
  assignment: hasMany('chore'),
});
