import { Component, effect, input, output } from '@angular/core';
import { PageMeta } from '../../models/page-meta.model';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  paginationData = input.required<PageMeta | null>();
  changePageEvent = output<number>();

  onPreviousPage(  ): void {
    const pagination = this.paginationData();
    if(pagination && pagination.currentPage > 1) {
      this.goToPage(pagination.currentPage - 1);
    }
  }

  onNextPage(): void {
    const pagination = this.paginationData();
    if(pagination && pagination.currentPage < pagination.totalPages) {
      this.goToPage(pagination.currentPage + 1);
    }

  }

  goToPage(page: number): void {
    const pagination = this.paginationData();
    if(!pagination || page < 1 || page > pagination!.totalPages || page === pagination!.currentPage) {
      return;
    }
    this.changePageEvent.emit(page);
  }
}
