import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Wine } from '../wine.model';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  @Output() wineToEdit = new EventEmitter<Wine>();
  wines: Wine[] = [];

  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.wines = this.wineService.getWines();
  }

}
