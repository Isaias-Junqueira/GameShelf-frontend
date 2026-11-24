import { Component, inject, OnInit } from '@angular/core';
import { Studio } from '../../../core/models/studio.model';
import { StudioService } from '../studio.service';

@Component({
  imports: [],
  selector: 'app-studios',
  styleUrl: './studios.scss',
  templateUrl: './studios.html',
})
export class Studios implements OnInit {
  private readonly studioService = inject(StudioService);

  studios: Studio[] = [];
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.studioService.findAll().subscribe({
      next: (studios) => {
        this.studios = studios;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Could not load studios.';
        this.loading = false;
      },
    });
  }
}
