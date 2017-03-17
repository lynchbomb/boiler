interface IOccupantOptions {
  fullName?: string;
  type?: string;
  gender?: string;
}

export default class Occupant {
  private _fullName: string;
  private _type: string;
  private _gender: string;

  constructor(public options: IOccupantOptions) {
    this._fullName = options.fullName || this._fullName;
    this._type = options.type || this._type;
    this._gender = options.gender || this._gender;
  }

  set fullName(newName: string) {
    this._fullName = newName;
  }

  get fullName(): string {
    return this._fullName;
  }

  set type(newType: string) {
    this._type = newType;
  }

  get type(): string {
    return this._type;
  }

  set gender(newGender: string) {
    this._gender = newGender;
  }

  get gender(): string {
    return this._gender;
  }
}