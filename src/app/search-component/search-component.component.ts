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

  characters: Character[] = [];

  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  private query: string = '';
  private pageNum: number = 1;
  characterData: string = '';

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.getCharacterName();
    console.log(this.characters);
  }

  getCharacterName(): void {
    this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((characterData: string) =>
          this.rickAndMortyService.getCharacterData(characterData)
        )
      )
      .subscribe((characterInfo: Character[]) => {
        this.characters = characterInfo;
      });
  }
}
