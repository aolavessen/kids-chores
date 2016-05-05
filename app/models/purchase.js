import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  points: attr(),
  name: attr(),
  reward: attr(),
  purchase: belongsTo('child'),
  purchase: hasMany('reward'),
});
