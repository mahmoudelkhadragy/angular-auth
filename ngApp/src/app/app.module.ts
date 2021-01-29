import { TokenInterceptorService } from './token-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { HeaderComponent } from './header/header.component';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    HeaderComponent,
    ErrorMessageComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
