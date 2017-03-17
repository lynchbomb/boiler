import Car from 'index';

QUnit.module('tests/basic');

QUnit.test('basic', function(assert) {
  let car = new Car({});
  let i = 0;
  assert.ok(car, 'Car instance has been instantiated');
  assert.equal(i, 0, 'Index equals 0');
  i++;
  assert.equal(i, 1, 'Index equals 1');
});

QUnit.test('can change car color', function(assert){
  let car = new Car({});
  assert.ok(car, 'car has been instantiated');
  assert.equal(car.color, 'white', 'car color should be the default white');
  car.color = 'green';
  assert.equal(car.color, 'green', 'car color has been set to green');
});

QUnit.test('can update the audio system', function(assert){
  let car = new Car({});
  let defaultAudioSystem = {
    brand: 'polk',
    speakerCount: 12,
    quality: 'high'
  };
  let updatedAudioSystem = {
    brand: 'b & o',
    speakerCount: 34,
    quality: 'extreme'
  };
  assert.ok(car, 'car has been instantiated');
  assert.deepEqual(car.audioSystem, defaultAudioSystem, 'car audio system should be the default');
  car.audioSystem = updatedAudioSystem;
  assert.notDeepEqual(car.audioSystem, defaultAudioSystem, 'car audio system is not set to default');
  assert.deepEqual(car.audioSystem, updatedAudioSystem, 'car audio system has been updated');
});

QUnit.test('can instantiate car with options', function(assert){
  let carOptions = {
    doorsCount: 30,
    color: 'red'
  };
  let defaultAudioSystem = {
    brand: 'polk',
    speakerCount: 12,
    quality: 'high'
  };
  let car = new Car(carOptions);
  assert.ok(car, 'car has been instantiated');
  assert.deepEqual(car.doorsCount, carOptions.doorsCount, 'car doors count has been updated');
  assert.deepEqual(car.color, carOptions.color, 'car color has been updated');
  assert.deepEqual(car.audioSystem, defaultAudioSystem, 'car audio system is still set to the default');
});

QUnit.test('can add occupant to the car', function(assert){
  let occupant1 = {
    gender: 'male',
    type: 'dog',
    fullName: 'kodie'
  };
  let occupant2 = {
    gender: 'female',
    type: 'human',
    fullName: 'jessica lambert'
  };
  let carOptions = {
    occupants: [occupant1]
  };
  let car = new Car(carOptions);
  assert.ok(car, 'car has been instantiated');
  assert.deepEqual(car.occupants[0], occupant1, 'car contains only 1 occupant which is the occupant1 object');
  car.addOccupant = occupant2;
  assert.equal(car.occupants.length, 2, 'car contains 2 occupants');
  assert.notDeepEqual(car.occupants[0], occupant2, 'car contains two different occupants');
});
