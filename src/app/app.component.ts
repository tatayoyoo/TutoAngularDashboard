import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyServiceService]
})
export class AppComponent {
  title = 'Dashboard';
  private data: string[];

  constructor(private myServiceService: MyServiceService)
  {

  }

  ngOnInit(): void
  {
    this.data = this.myServiceService.doSomething();
  }
}
