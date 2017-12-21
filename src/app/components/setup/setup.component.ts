import { Component, OnInit } from '@angular/core';
import {Participant} from "../../types";
import {shuffle} from "../../utilities";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  total_number: number = 0;
  participant: Participant = new Participant();
  participants: Participant[] = [];

  constructor() { }

  ngOnInit() {
  }

  saveTotal() {
    localStorage.setItem('total', this.total_number.toString());
  }

  addParticipant(): void {
    if (this.participant.name !== '') {
      this.participants.push(this.participant);
      this.participant = new Participant();
    }
  }

  assignOrder(): void {
    this.participants = shuffle(this.participants);
    this.participants.forEach((p, i) => {
      p['order'] = i + 1;
    });
    console.log(this.participants);
    this.saveToStorage('participants', JSON.stringify(this.participants));
  }

  saveToStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
