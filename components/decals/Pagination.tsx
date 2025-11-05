'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxPagesToShow?: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxPagesToShow = 5,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      
      // Scroll to pagination (smooth)
      const paginationEl = document.querySelector('.pagination-container');
      if (paginationEl) {
        document.documentElement.style.scrollBehavior = 'auto';
        paginationEl.scrollIntoView({ block: 'end' });
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    }
  };

  // Calculate page range to show
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-container">
      {/* Previous Button */}
      <button
        className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      {/* First Page */}
      {startPage > 1 && (
        <>
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          {startPage > 2 && (
            <span className="pagination-dots">...</span>
          )}
        </>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Last Page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="pagination-dots">...</span>
          )}
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next Button */}
      <button
        className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        ›
      </button>
    </div>
  );
}

