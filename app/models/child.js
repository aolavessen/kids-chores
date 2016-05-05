import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  avatar: attr(),
  username: attr(),
  password: attr(),
  pointTotal: attr(),
  children: belongsTo('child'),
  purchases: hasMany('purchase'),
  assignments: hasMany('assignment'),
});
