import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {
  moviesDB: any[] = [];
  actorsDB: any[] = [];

  selectedMovie: any = {_id: null};
  selectedActor: any = {_id: null};

  constructor(private dbService: DatabaseService, private router: Router) {}

  //Get all Movies
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  //Get all Actors
  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  onSelectMovie(movie) {
    this.selectedMovie = movie;
  }

  onSelectActor(actor) {
    this.selectedActor = actor;
  }

  onAddActorToMovie() {
    this.dbService.addActorToMovie(this.selectedMovie._id, this.selectedActor._id).subscribe(result => {
      this.onGetMovies();
    });
    let obj = {id: this.selectedMovie._id}
    this.dbService.addMovieToActor(this.selectedActor._id, obj).subscribe(result => {
      this.onGetActors();
    });
  }
  
  // This callback function will be invoked with the component get initialized by Angular.
  ngOnInit() {
    this.onGetMovies();
    this.onGetActors();
  }

}
