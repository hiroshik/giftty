import { Component, OnInit } from '@angular/core';
import { Participant } from '../../types';
import { shuffle } from '../../utilities';
import { StorageService } from '../../servives/storage.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  total_number: number = 0;
  participant: Participant = new Participant();
  participants: Participant[] = [];
  orderAssigned: boolean = false;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  reset(): void {
    this.participants = [];
    this.storageService.remove('participants');
  }


  addParticipant(): void {
    if (this.participant.name !== '') {
      this.participants.push(this.participant);
      this.participant = new Participant();
      this.total_number = this.participants.length;

      // Reassign id for current array
      this.participants.map((p, i) => {
        return p.id = i + 1;
      });
    }
  }

  removeParticipant(index: number): void {
    this.participants.splice(index, 1);
  }

  assignOrder(): void {
    if (this.participants.length > 0) {
      this.orderAssigned = true;
      this.participants = shuffle(this.participants);
      this.participants.forEach((p, i) => {
        p['order'] = i + 1;
      });
      this.storageService.save('participants', JSON.stringify(this.participants));
    } else {
      // TODO: error message
    }

  }
}
