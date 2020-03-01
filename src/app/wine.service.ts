import { Injectable } from '@angular/core';
import { Wine } from './wine.model';

@Injectable({
  providedIn: 'root'
})

export class WineService {


  constructor() {}

  getWines(): Wine[] {
    return wineList;
  }

  addWineToList(event) {
    wineList.unshift(event);
  }

  deleteWine(id) {
    wineList.splice(id, 1);
  }

  getById(id) {
    return wineList.find(wine => wine.wineId === id);
  }

  updateWine(currentWine: Wine) {
    wineList[wineList.findIndex(wine => wine.wineId === currentWine.wineId)] = currentWine;
  }
}

const wineList: Wine[] = [
  {
    wineId: 1,
    wineName: 'Dona Maria',
    wineType: 'White',
    wineRegion: 'Alentejo',
    wineQuantity: 0,
    wineRate: 5,
    wineYear: 2018,
    wineProducer: 'Wines Dona Maria',
    wineAlcohol: 13,
    wineGrapes: 'Arinto, Antão Vaz, Viosinho',
    wineDetails: 'Ideal temperature between 10 - 11ºC',
    wineConsumption: 'Seafood, grilled meat, fish',
    wineFlavours: 'Tropical fruit',
    wineImagePath: '../assets/winesupImages/whiteWine.jpg',
    wineNotes: 'Good wine for summer time',
  },
  {
    wineId: 2,
    wineName: 'Espera',
    wineType: 'Rose',
    wineRegion: 'Lisbon',
    wineQuantity: 1,
    wineRate: 6,
    wineYear: 2000,
    wineProducer: 'Espera',
    wineAlcohol: 12,
    wineGrapes: 'Touriga Nacional',
    wineDetails: 'Ideal temperature 12ºC',
    wineConsumption: 'Sushi, salads, seafood',
    wineFlavours: 'Alentejo',
    wineImagePath: '../assets/winesupImages/rose-wine.jpg',
    wineNotes: 'Nice rose wine',
  },
  {
    wineId: 3,
    wineName: 'Cavalo Negro',
    wineType: 'Red',
    wineRegion: 'Tejo',
    wineQuantity: 5,
    wineRate: 10,
    wineYear: 2017,
    wineProducer: 'Parras Partners',
    wineAlcohol: 13,
    wineGrapes: 'Aragonez, Castelão, Trincadeira',
    wineDetails: 'Reserva',
    wineConsumption: 'Grilled chicken’s fillets, grilled vegetables salads and duck',
    wineFlavours: 'Blackberry aromas',
    wineImagePath: '../assets/winesupImages/wine-bottle.jpg',
    wineNotes: 'One of my favorites',
  }
];

