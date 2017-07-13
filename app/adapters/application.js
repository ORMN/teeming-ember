import DS from 'ember-data';
import Ember from 'ember';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiURL,
  namespace: 'api',

  pathForType(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});
