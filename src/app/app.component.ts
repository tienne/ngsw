import { Component, OnInit } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app5';

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    this.swUpdate.available.subscribe(event => {
      console.log('[App] Update available: current version is', event.current, 'available version is', event.available);
    });

    this.swUpdate.activated.subscribe(event => {
      console.log('[App] Update activated: old version was', event.previous, 'new version is', event.current);
    });
  }

  checkForUpdate() {
    console.log('[App] checkForUpdate started');
    this.swUpdate.checkForUpdate()
      .then(() => {
        console.log('[App] checkForUpdate completed');
      })
      .catch(err => {
        console.error(err);
      });
  }

  activateUpdate() {
    console.log('[App] activateUpdate started');
    this.swUpdate.activateUpdate()
      .then(() => {
        console.log('[App] activateUpdate completed');
      })
      .catch(err => {
        console.error(err);
      });
  }
}
