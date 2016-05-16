import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  avatar: attr(),
  email: attr(),
  username: attr(),
  password: attr(),
  pointTotal: attr(),
  parent: belongsTo('parent'),
  purchases: hasMany('purchase'),
  assignments: hasMany('assignment'),
});
