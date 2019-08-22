import { Component, OnInit,Input } from '@angular/core';
import { JOKES } from './../../../core/jokes-mock';
import {Joke} from './../../../core/joke'

@Component({
  selector: 'app-Joke',
  templateUrl: './Joke.component.html',
  styleUrls: ['./Joke.component.css']
})
export class JokeComponent implements OnInit {
  jokes= JOKES;
  selectedJoke: Joke
 
 // @Input("joke") data: Joke;

  constructor() { }

  ngOnInit() {
  }

}
