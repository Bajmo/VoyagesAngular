import { Component, Input } from '@angular/core';
import { ChamberStyle, Tour } from '../../models/tour.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent {
  @Input() tour!: Tour;
  placesToReserve: number = 1;
  chamberStyle = ChamberStyle; // To use the enum in the template, IS NOT THE SELECTED CHAMBERSTYLE!
  departureDate: Date = new Date();
  departureDateSet: boolean = false;
  price!: number;

  ngOnInit() {
    this.price = this.tour.finalPrice;
  }

  reset() {
    this.placesToReserve = 1;
    this.departureDateSet = false;
    this.tour.dining = false;
    this.tour.chamber = ChamberStyle.Normal;
    this.tour.finalPrice = this.tour.initialPrice;
    this.price = this.tour.finalPrice;
    const radioButtons = document.getElementsByName('startDate');
    radioButtons.forEach((radio) => {
      (radio as HTMLInputElement).checked = false;
    });
  }

  openPopup() {
    const confirmation = window.confirm(`Récapitulatif de la réservation:
    \nVoyage: ${this.tour.name}
    \nDate de départ: ${this.departureDate}
    \nNombre de places: ${this.placesToReserve}
    \nPrix total: ${this.price} DHS
    \n\nConfirmer la réservation?`);

    if (confirmation) {
      this.reservePlaces();
      this.reset();
    } else {
      this.reset();
    }
  }

  isPastDate(date: Date): boolean {
    const currentDate = new Date();
    return date.getTime() < currentDate.getTime();
  }

  areAllDatesPast(): boolean {
    return this.tour.possibleDates.every(date => this.isPastDate(date));
  }

  formatDate(date: Date): string {
    return formatDate(date, 'yyyy-MM-dd', 'en-US');
  }

  setDepartureDate(date: Date) {
    this.departureDate = date;
    this.departureDateSet = true;
  }

  setChamber(chamber: ChamberStyle) {
    this.tour.setChamber(chamber);
    this.price = this.tour.finalPrice * this.placesToReserve;
  }

  addDining() {
    this.tour.addDining();
    this.price = this.tour.finalPrice * this.placesToReserve;
  }

  removeDining() {
    this.tour.removeDining();
    this.price = this.tour.finalPrice * this.placesToReserve;
  }

  incrementPlaces() {
    if (this.placesToReserve < this.tour.places) {
      this.placesToReserve++;
      this.price = this.tour.finalPrice * this.placesToReserve;
    }
  }

  decrementPlaces() {
    if (this.placesToReserve > 1) {
      this.placesToReserve--;
      this.price = this.tour.finalPrice * this.placesToReserve;
    }
  }

  reservePlaces() {
    const placesToReserve = Math.min(this.placesToReserve, this.tour.places);
    if (placesToReserve > 0) {
      this.tour.places -= placesToReserve;
    }
  }
}
