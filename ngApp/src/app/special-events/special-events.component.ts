import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from './../shared/event.model';
import { EventsService } from './../shared/events.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss'],
})
export class SpecialEventsComponent implements OnInit {
  specialEvents: Event[] = [];
  isFeatching = false;
  error: any = null;

  constructor(private eventService: EventsService, private router: Router) {}

  ngOnInit(): void {
    this.isFeatching = true;
    this.eventService.getEvents().subscribe(
      (events) => {
        this.specialEvents = events;
        this.isFeatching = false;
      },
      (error) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
        this.error = error.error;
      }
    );
  }
}
