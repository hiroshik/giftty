import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Participant} from "../../types";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  participants: Participant[] = [];
  gift = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.participants = JSON.parse(localStorage.getItem('participants'));
    if (!this.participants) {
      this.router.navigate(['/setup']);
    }

    console.log(this.participants);
  }

  saveGift(index: number): void {
    this.participants[index].gift = this.gift;
    this.gift = '';
    console.log(this.participants);
  }

  showInput() {

  }
}
