import Loopback from 'ember-simple-auth-loopback/authenticators/loopback';
import config from 'kids-chores/config/environment';

export default Loopback.extend({
  loginEndpoint: `${config.apiHost}/api/children/login?include=user`,
});
