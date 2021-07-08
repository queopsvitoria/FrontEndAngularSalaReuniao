import { RoomDetailsComponent } from 'src/app/room-details/room-details.component';
import { Observable } from "rxjs";
import { RoomService } from "../room.service";
import { Room } from "../room";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  //@Input()
 // rooms1 = new Room();

  rooms!: Observable<Room[]>;

  constructor(private roomService: RoomService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    console.log("entrei aqi");
    this.rooms = this.roomService.getRoomsList();
  }



}
