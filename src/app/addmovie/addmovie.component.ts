import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {
  title: string = "";
  year: number = 0;

  constructor(private dbService: DatabaseService, private router: Router) {}
  
  //Create a new Movie, POST request
  onSaveMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.addMovie(obj).subscribe(result => {
      this.router.navigate(["/listmovies"]);
    });
  }

}
