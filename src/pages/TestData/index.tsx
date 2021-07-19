import React, { useEffect, useState, useCallback, Profiler } from "react";
// import { useContext } from "react";
import './style.css';
import fetchComments, { IData } from "../../services/fetch";
import Loader from "../../components/Loader";
import ListComponent from '../../components/List';
import PaginationComponent from '../../components/Pagination';
import TableComponent from "../../components/Table";
import { Container, IconButton } from '@material-ui/core';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
// import AppContext from "../../context/AppContext";

interface IPagination {
  data: IData[],
  offset: number,
  numberPerPage: number,
  pageCount: number,
  currentData: IData[];
};

enum DisplayView {
  Table,
  List
}


const TestData = () => {
  // const { setItems } = useContext(AppContext);
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [displayView, setDisplayView] = useState<DisplayView>(DisplayView.Table);
  const [pagination, setPagination] = useState<IPagination>({
    data: data,
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: []
  });

  const clockPerformance = useCallback(
    (profilerId: any, mode: any, actualTime: any, baseTime: any, startTime: any, commitTime: any) => {
      console.log({ profilerId, mode, actualTime, baseTime, startTime, commitTime });
      // setItems({ profilerId, mode, actualTime, baseTime, startTime, commitTime });
    }, []);

  const handlePageClick = useCallback((event: { selected: any; }) => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    const currentData = data.length > 0 ?
      data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
      : []
    setPagination({ ...pagination, offset, currentData })
  }, [data, pagination]);

  useEffect(() => {
    setIsLoading(true);

    async function fetch() {
      try {
        const data = await fetchComments()
        setData(data);
        setPagination({ ...pagination, currentData: data.slice(0, 10), pageCount: data.length / pagination.numberPerPage });
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setHasError(true);
        setIsLoading(false);
      }
    }

    fetch();

  }, []);

  const showView = (view: DisplayView) => {
    setDisplayView(view);
  }

  if (hasError) {
    return (
      <div className="info-container">
        <h1>Something went wrong. Please try again later!</h1>
      </div>
    )
  }

  return (
    <Profiler id="TestData" onRender={clockPerformance}>
      {isLoading ? <Loader /> : (
        <Container maxWidth="lg">
          <div className="menu-holder">
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              title="table view"
              className={displayView === DisplayView.Table ? "activeView" : ''}
              onClick={() => showView(DisplayView.Table)}
            >
              <TableChartOutlinedIcon />
            </IconButton>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              title="list view"
              className={displayView === DisplayView.List ? "activeView" : ''}
              onClick={() => showView(DisplayView.List)}
            >
              <ListOutlinedIcon />
            </IconButton>
          </div>
          {displayView === DisplayView.Table && (
            <>
              <TableComponent data={pagination.currentData} />
              <PaginationComponent pageCount={pagination.pageCount} handlePageClick={handlePageClick} />
            </>
          )}
          {displayView === DisplayView.List && (
            <>
              <ListComponent data={pagination.currentData} />
              <PaginationComponent pageCount={pagination.pageCount} handlePageClick={handlePageClick} />
            </>
          )
          }
        </Container>
      )}
    </Profiler>
  );
};

export default React.memo(TestData);