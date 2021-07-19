import ReactPaginate from 'react-paginate';

const PaginationComponent = (props: any) => {
  const { pageCount, handlePageClick } = props;
  return (
  <ReactPaginate
    previousLabel={'previous'}
    nextLabel={'next'}
    breakLabel={'...'}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={handlePageClick}
    containerClassName={'pagination'}
    activeClassName={'active'}
  />
  )
};

export default PaginationComponent;