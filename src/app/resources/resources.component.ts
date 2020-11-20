import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  data: any;
  resources: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      console.log(data);
      this.data = JSON.parse(JSON.stringify(data));
      this.resources = this.data.resources;
    });
  }


  public getJSON(): Observable<any> {
    return this.http.get(`assets/data/resources.json`);
  }
}
