import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Studio, StudioRequest } from '../../core/models/studio.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudioService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/studios`;

  findAll(): Observable<Studio[]> {
    return this.http.get<Studio[]>(this.apiUrl);
  }

  findById(id: number): Observable<Studio> {
    return this.http.get<Studio>(`${this.apiUrl}/${id}`);
  }

  create(request: StudioRequest): Observable<Studio> {
    return this.http.post<Studio>(this.apiUrl, request);
  }

  update(id: number, request: StudioRequest): Observable<Studio> {
    return this.http.put<Studio>(`${this.apiUrl}/${id}`, request);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}