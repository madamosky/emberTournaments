import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tournament-listing', 'Integration | Component | tournament listing', {
  integration: true
});

test('should toggle wide class on click', function(assert) {
  assert.expect(3);
  let stubTournament = Ember.Object.create({
    image: 'fake.png',
    title: 'test-title',
    divisions: 'test-owner',
    location: 'test-type',
    date: 'test-city'
    
  });
  this.set('tournamentObj', stubTournament);
  this.render(hbs`{{tournament-listing tournament=tournamentObj}}`);
  assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
});
