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
    // this.homeService.search().subscribe((homes: Home[]) => {
    // console.log("home", homes);
    // var loadedHome = new Home();
    // loadedHome.address = home.address;
    // loadedHome.city = home.city;
    // loadedHome.state = home.state;
    // loadedHome.price = home.price;
    // let homes = [...this.homes];
    // homes.push(loadedHome);
    // var unsortedHomes = [...this.homes, loadedHome]
    // this.homes = unsortedHomes.sort((a: Home, b: Home) => { b.price - a.price });
    // });
  }

  title = 'Home-Search';

  selectHome(home: Home) {
    console.log("select", home);
  }

  search(event: any){
    var searchTerm = event.target.value;
    this.homeService.search(searchTerm).subscribe((homes: any) => {
      console.log("test", homes);
    });
  }

}
