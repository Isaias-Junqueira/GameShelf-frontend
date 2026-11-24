import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, GameRequest } from '../../core/models/game.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/games`;

  findAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  findById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${id}`);
  }

  create(request: GameRequest): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, request);
  }

  update(id: number, request: GameRequest): Observable<Game> {
    return this.http.put<Game>(`${this.apiUrl}/${id}`, request);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
