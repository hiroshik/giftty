export interface IParticipant {
  id: number;
  order: number;
  name: string;
  gift: string;
}

export class Participant implements IParticipant {
  id: number = 0;
  order: number = null;
  name: string = '';
  gift: string = '';

  constructor(name: string = '', gift: string = '') {
    this.name = name;
    this.gift = gift;
  }
}
