import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsUrl = 'http://localhost:3000/api/events';
  private specialUrl = 'http://localhost:3000/api/special';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }

  getSpecialEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.specialUrl);
  }
}
