import { moduleForModel, test } from 'ember-qunit';

moduleForModel('assignment', 'Unit | Model | assignment', {
  // Specify the other units that are required for this test.
  needs: ['model:child']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
