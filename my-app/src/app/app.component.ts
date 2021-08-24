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
  @ViewChild('bodyContainer') bodyContainer: ElementRef | undefined;
  @ViewChild('startError') startError: ElementRef | undefined;

  ngOnInit() {
    this.homeService.search('').subscribe((homes: any) => {
      this.homes = homes;
    });
  }

  title = 'Home-Search';

  selectHome(home: Home) {
    this.selectedHome = home;
    console.log("select", home);
  }

  search(event: any){
    var address = event.target.value;
    this.homeService.search(address).subscribe((homes: any) => {
      this.homes = homes;
    });
  }

  numberWithCommas(x: any) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

}
