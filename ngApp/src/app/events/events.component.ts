import { EventsService } from './../shared/events.service';
import { Component, OnInit } from '@angular/core';
import { Event } from './../shared/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  isFeatching = false;
  error: any = null;

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.isFeatching = true;
    this.eventService.getEvents().subscribe(
      (events) => {
        this.events = events;
        this.isFeatching = false;
      },
      (error) => {
        this.error = error.error;
      }
    );
  }
}
