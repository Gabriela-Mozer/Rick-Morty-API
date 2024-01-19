import { Component } from '@angular/core';
import { RickAndMortyService } from 'src/rick-morty.service';
import { OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private rickAndMortyService: RickAndMortyService, private router: Router) {}

  ngOnInit(): void {
  }
}
