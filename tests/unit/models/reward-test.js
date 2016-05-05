import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reward', 'Unit | Model | reward', {
  // Specify the other units that are required for this test.
  needs: ['model:purchase']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
