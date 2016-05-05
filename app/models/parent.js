import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  email: attr('string'),
  password: attr('string'),
  username: attr('string'),
  parents: belongsTo('parent'),
  purchases: hasMany('purchase'),
  assignments: hasMany('assignment'),
  parents: hasMany('child'),
});
