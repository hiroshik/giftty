export interface IParticipant {
  name: string;
  gift: string;
}

export class Participant implements IParticipant {
  name: string = '';
  gift: string = '';

  constructor(name: string = '', gift: string = '') {
    this.name = name;
    this.gift = gift;
  }
}
