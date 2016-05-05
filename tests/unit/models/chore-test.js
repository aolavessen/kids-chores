import { moduleForModel, test } from 'ember-qunit';

moduleForModel('chore', 'Unit | Model | chore', {
  // Specify the other units that are required for this test.
  needs: ['model:assignment']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
