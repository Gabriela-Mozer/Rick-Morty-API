import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from './app/interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character/';
  constructor(private http: HttpClient) {}

  getCharacterData(data : string): Observable<Character[]> {
   const params = new HttpParams().set('data', data);
   return this.http.get<Character[]>(this.apiUrl, {params}).pipe(
    map((response: any) => response.results)
   )
  }

  getDetails(id: number): Observable<any> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}
