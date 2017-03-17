// boiler Class example with options interface
import Occupant from './occupant';

interface ICarOptions {
  doorsCount?: number;
  color?: string;
  audioSystem?: IAudioSystem;
  occupants?: object[];
}

interface IAudioSystem {
  brand?: string;
  speakerCount?: number;
  quality?: string;
}

export default class Car {
  private _doorsCount: number = 4;
  private _color: string = 'white';
  private _audioSystem: IAudioSystem = {
    brand: 'polk',
    speakerCount: 12,
    quality: 'high'
  };
  private _allOptions: object = {};
  private _occupants: object[] = [];

  constructor(public options: ICarOptions) {
    this._doorsCount = options.doorsCount || this._doorsCount;
    this._color = options.color || this._color;
    this._audioSystem = options.audioSystem || this._audioSystem;
    this._occupants = options.occupants || this._occupants;
    this._allOptions = {
      doorsCount: this._doorsCount,
      color: this._color,
      audioSystem: this._audioSystem
    };
  }

  set addOccupant(newOccupant: object) {
    this._occupants.push(new Occupant(newOccupant));
  }

  get occupants(): object[] {
    return this._occupants;
  }

  set audioSystem(newAudioSystem: object) {
    this._audioSystem = newAudioSystem;
  }

  get audioSystem(): object {
    return this._audioSystem;
  }

  set color(newColor: string) {
    this._color = newColor;
  }

  get color(): string {
    return this._color;
  }

  get doorsCount(): number {
    return this._doorsCount;
  }

  get allOptions(): object {
    return this._allOptions;
  }
}
