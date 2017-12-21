export interface IParticipant {
  order: number;
  name: string;
  gift: string;
}

export class Participant implements IParticipant {
  order: number = null;
  name: string = '';
  gift: string = '';

  constructor(name: string = '', gift: string = '') {
    this.name = name;
    this.gift = gift;
  }
}
