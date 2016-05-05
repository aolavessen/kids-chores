import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  avatar: attr(),
  name: attr(),
  description: attr(),
  points: attr(),
  reward: belongsTo('purchase'),
});
