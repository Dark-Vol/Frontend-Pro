export default function Pagination(
  {
    page,
    setPage,
    next,
    prev
  }) {
  return (
    <nav className="d-flex justify-content-center mt-4">
      <ul className="pagination">
        <li className={`page-item ${!prev ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => prev && setPage(page - 1)}>
            Previous
          </button>
        </li>
        <li className="page-item disabled">
          <span className="page-link">Page {page}</span>
        </li>
        <li className={`page-item ${!next ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => next && setPage(page + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}