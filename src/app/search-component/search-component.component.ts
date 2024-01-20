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

  private query: string = '';
  private pageNum: number = 1;
  name: string = '';

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.getCharacterName();
    console.log(this.characters);
  }

  getCharacterName(): void {
    this.searchForm
      .get('search')
      ?.valueChanges.pipe(debounceTime(300), distinctUntilChanged(),
      switchMap((name:string) => this.rickAndMortyService.getCharacterByName(name))
      ).subscribe((characterNames: Character[]) => {
        this.characters = characterNames;
      })
    // this.rickAndMortyService
    //   .getCharacterByName(this.name)
    //   .subscribe((res: { name: string }) => {
    //     this.name = res.name;
    //     console.log(this.name);
    //   });
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
