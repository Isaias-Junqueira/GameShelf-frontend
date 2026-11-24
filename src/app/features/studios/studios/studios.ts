import { Component, inject, OnInit, signal } from '@angular/core';
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

  readonly studios = signal<Studio[]>([]);
  readonly loading = signal(true);
  readonly errorMessage = signal('');

  ngOnInit(): void {
    this.studioService.findAll().subscribe({
      next: (studios) => {
        this.studios.set(studios);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Could not load studios.');
        this.loading.set(false);
      },
    });
  }
}
