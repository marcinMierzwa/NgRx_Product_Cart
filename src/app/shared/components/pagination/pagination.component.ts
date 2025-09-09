import { Component, computed, input, output } from '@angular/core';
import { PageMeta } from '../../models/page-meta.model';

type PageItem = { type: 'page'; value: number } | { type: 'ellipsis' };

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  paginationData = input.required<PageMeta | null>();
  changePageEvent = output<number>();

  public pages = computed<PageItem[]>(() => {
    const data = this.paginationData();
    if (!data) {
      return [];
    }

    const { currentPage, totalPages } = data;
    const siblingCount = 1;
    const totalVisibleBlocks = siblingCount + 5;

    if (totalPages <= totalVisibleBlocks) {
      return range(1, totalPages).map((p) => ({
        type: 'page' as const,
        value: p,
      }));
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    const shouldShowLeftEllipsis = leftSiblingIndex > 2;
    const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [
        { type: 'page' as const, value: firstPageIndex }, 
        { type: 'ellipsis' as const },
        ...rightRange.map((p) => ({ type: 'page' as const, value: p })), 
      ];
    }

    if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [
        ...leftRange.map((p) => ({ type: 'page' as const, value: p })), 
        { type: 'ellipsis' as const },
        { type: 'page' as const, value: lastPageIndex }, 
      ];
    }

    if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [
        { type: 'page' as const, value: firstPageIndex }, 
        { type: 'ellipsis' as const },
        ...middleRange.map((p) => ({ type: 'page' as const, value: p })), 
        { type: 'ellipsis' as const },
        { type: 'page' as const, value: lastPageIndex }, 
      ];
    }

    return [];
  });

  onPreviousPage(): void {
    const pagination = this.paginationData();
    if (pagination && pagination.currentPage > 1) {
      this.goToPage(pagination.currentPage - 1);
    }
  }

  onNextPage(): void {
    const pagination = this.paginationData();
    if (pagination && pagination.currentPage < pagination.totalPages) {
      this.goToPage(pagination.currentPage + 1);
    }
  }

  goToPage(page: number): void {
    const pagination = this.paginationData();
    if (
      !pagination ||
      page < 1 ||
      page > pagination!.totalPages ||
      page === pagination!.currentPage
    ) {
      return;
    }
    this.changePageEvent.emit(page);
  }
}
