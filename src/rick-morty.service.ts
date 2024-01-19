import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './app/interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character/';
  constructor(private http: HttpClient) {}

  searchCharacters(query = '', page = 1) {
    const filteredCharacters = `${this.apiUrl}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filteredCharacters);
  }

  getCharacterByName(name: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/?name=${name}`);
  }

  getDetails(id: number): Observable<any> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}
