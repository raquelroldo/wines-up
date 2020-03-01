import { Component, OnInit, Input } from '@angular/core';
import { Wine } from 'src/app/wine.model';
import { WineService } from 'src/app/wine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {
  wineId: number;
  @Input() wine: Wine;

  constructor(private wineService: WineService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe( param => this.wineId = +param.get('id') );
    this.wine = this.wineService.getById(this.wineId);
    console.log(this.wine);
  }


}
