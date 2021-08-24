import { stringify } from '@angular/compiler/src/util';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Home } from './models/home.model';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private homeService: HomeService) { }

  homes: Home[] = [];
  selectedHome: Home | null = null;
  sortBy: string = "priceLowToHigh";

  ngOnInit() {
    this.homeService.search('').subscribe((homes: any) => {
      this.homes = homes;
      this.sortHomes();
    });
  }

  title = 'Home-Search';

  selectHome(home: Home) {
    this.selectedHome = home;
  }

  search(event: any){
    var address = event.target.value;
    this.homeService.search(address).subscribe((homes: any) => {
      this.homes = homes;
      this.sortHomes();
    });
  }

  updateSort(event: any) {
    this.sortBy = event.value;
    this.sortHomes();
  }

  sortHomes() {
    console.log("homes", this.homes[0].price);
    if (this.sortBy == "priceLowToHigh")
      this.homes.sort((a, b) => {return a.price - b.price});
    else if (this.sortBy == "priceHighToLow")
      this.homes.sort((a, b) => {return b.price - a.price});
  }

  numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

}
