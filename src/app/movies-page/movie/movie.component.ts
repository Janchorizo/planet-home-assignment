import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie, Rating } from 'src/app/shared/types';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() rating: Rating|null;
  @Output() onRate = new EventEmitter<number>();;

  constructor() { }

  ngOnInit(): void {
  }

  handleRating(score: number) {
    this.onRate.emit(score);
  }
}
