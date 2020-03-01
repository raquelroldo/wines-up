import { Component, OnInit } from '@angular/core';
import { Wine } from '../wine.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WineService } from '../wine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-wine-form',
  templateUrl: './add-wine-form.component.html',
  styleUrls: ['./add-wine-form.component.css']
})
export class AddWineFormComponent implements OnInit {
  wineForm: FormGroup;
  wine: Wine;
  wineId: number;
  wineSubmited = false;
  show = false;
  linkName = 'More';

  constructor(private wineService: WineService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

    this.wineForm = new FormGroup({
      wineId: new FormControl (null),
      wineName: new FormControl(null, Validators.required),
      wineType: new FormControl(null),
      wineRegion: new FormControl(null),
      wineQuantity: new FormControl(null),
      wineRate: new FormControl(null),
      wineYear: new FormControl(null),
      wineProducer: new FormControl(null),
      wineAlcohol: new FormControl(null),
      wineGrapes: new FormControl(null),
      wineDetails: new FormControl(null),
      wineConsumption: new FormControl(null),
      wineFlavours: new FormControl(null),
      wineImagePath: new FormControl(null),
      wineNotes: new FormControl(null),
    });

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.wine = this.wineService.getById(+params['id']);
        this.wineForm.setValue(this.wine);
      }
    });

  }


  addWine() {
    this.wine = new Wine(
      this.wineForm.controls.wineId.value,
      this.wineForm.controls.wineName.value,
      this.wineForm.controls.wineType.value,
      this.wineForm.controls.wineRegion.value,
      this.wineForm.controls.wineQuantity.value,
      this.wineForm.controls.wineRate.value,
      this.wineForm.controls.wineYear.value,
      this.wineForm.controls.wineProducer.value,
      this.wineForm.controls.wineAlcohol.value,
      this.wineForm.controls.wineGrapes.value,
      this.wineForm.controls.wineDetails.value,
      this.wineForm.controls.wineConsumption.value,
      this.wineForm.controls.wineFlavours.value,
      this.wineForm.controls.wineImagePath.value,
      this.wineForm.controls.wineNotes.value,
    );


    this.route.params.subscribe(params => {
      if (params['id']) {
        this.wineService.updateWine(this.wine);
      } else {
        this.wineService.addWineToList(this.wine);
      }
      this.wineForm.reset();
      this.router.navigate(['/wines']);
    });


  }

  toggleForm() {
    this.show = !this.show;
    if (!this.show) {
      this.linkName = 'More';
    } else {
      this.linkName = 'Less';
    }
  }


}
