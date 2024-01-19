import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, take } from 'rxjs';
import { RickAndMortyService } from 'src/rick-morty.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  searchResults: any[] = [];

  characters: Character[] = [];

  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  id: number = 1;
  name: string = '';

  private query: string = '';
  private pageNum: number = 1;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService
      .getDetails(this.id)
      .subscribe((characterDetails: any) => {
        console.log(characterDetails);
      });
    this.getCharacterName();
  }

  getCharacterName(): void {
    this.rickAndMortyService
      .getCharacterByName(this.name)
      .subscribe((characterName: any) => {
        console.log(characterName);
      });
  }
  private getDataFromService(): void {
    this.rickAndMortyService
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.characters = [...this.characters];
      });
  }
}
