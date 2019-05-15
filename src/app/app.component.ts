import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCUKqDYUGAWPFU2FUIeeyfO-kiDKEmcb8Y",
      authDomain: "ng-recipe-book-e6e61.firebaseapp.com"
    });
  }

  onNavigate(feat: string) {
    this.loadedFeature = feat;
  }

}
