import { Component, OnInit, Input } from '@angular/core';
import { Wine } from 'src/app/wine.model';
import { WineService } from 'src/app/wine.service';

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css']
})

export class WineItemComponent implements OnInit {
  @Input() wine: Wine;
  @Input() wineId: number;
  @Input() currentIndex: number;

  constructor(private wineService: WineService) { }

  ngOnInit() {
  }

  removeWine(index) {
    this.wineService.deleteWine(index);
    return false;
  }

}
