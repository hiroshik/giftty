import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../../types';
import { StorageService } from '../../servives/storage.service';
import { randomIntegerInRange } from '../../utilities';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  participants: Participant[] = [];
  stealingPool: Participant[];
  currentParticipant: Participant;
  firstCanSteal: boolean = false;
  steallingMode: boolean = false;

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {
    this.participants = JSON.parse(this.storageService.get('participants'));
    if (!this.participants) {
      this.router.navigate(['/setup']);
    }
  }

  ngOnInit() {
    this.checkFirstStatus();
  }

  saveGift(index: number): void {
    if (typeof this.participants[index]['giftInput'] !== 'undefined') {
      this.participants[index].gift = this.participants[index]['giftInput'];
      this.saveToStorage();
    }
  }

  showInput(participant: Participant): void {
    if (!participant.hasOwnProperty('giftStatus')) {
      participant.gift = '';
    }
  }

  keepGift(participant: Participant): void {
    participant['giftStatus'] = 'keep';
    this.checkFirstStatus();
    this.saveToStorage();
  }

  generateStealingPool(participant: Participant): void {
    this.currentParticipant = participant;
    this.resetStealingPool();
    this.steallingMode = true;

    // Get array of {Participant} who have a gift
    const haveGift: Participant[] = this.participants.filter((p, i) => { return p.gift !== '' && p.id !== participant.id; });
    // Pick a random number from all {Participant} with a gift
    const poolSlots: number = randomIntegerInRange(0, haveGift.length);
    // Pick 'poolSlots' number of random {Participant} object and assign them to stealingPool
    this.stealingPool = haveGift.sort(() => .5 - Math.random()).slice(0, poolSlots);
  }

  stealGift(target: Participant) {
    const myGift = this.currentParticipant.gift;
    const targetGift = target.gift;
    this.participants.forEach(p => {
      if (p.id === target.id) {
        p.gift = myGift;
      }

      if (p.id === this.currentParticipant.id) {
        p.gift = targetGift;
        p['giftStatus'] = 'keep';
      }
    });

    this.stealingPool = [];
    this.steallingMode = false;
    this.checkFirstStatus();
    this.saveToStorage();
  }

  saveToStorage(): void {
    console.log(this.participants);
    this.storageService.save('participants', JSON.stringify(this.participants));
  }

  checkFirstStatus(): void {
    this.firstCanSteal = this.participants[this.participants.length - 1].hasOwnProperty('giftStatus') && !this.participants[0].hasOwnProperty('giftStatus');
  }

  resetStealingPool(): void {
    this.stealingPool = [];
  }
}
