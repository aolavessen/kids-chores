import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'kids-chores/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: `https://kids-chores.herokuapp.com`,
  namespace: `api`,
  authorizer: `authorizer:application`,
});
