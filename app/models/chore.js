import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  description: attr(),
  avatar: attr(),
  points: attr(),
  date: attr(),
  chore: belongsTo('assignment'),
  chore: belongsTo('child'),
});
