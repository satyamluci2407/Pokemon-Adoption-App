import { useSearchParams } from "react-router-dom";
import classes from './PageControl.module.css';

export default function PageControl({maxPage}) {

  const [searchParams, setSearchParams] = useSearchParams();

  let page = parseInt(searchParams.get("page"));

  if (!Number.isInteger(page) || page < 1 || page > maxPage) {
    page = 1;
  }

  const previousPageHandler = () => {
    --page;
    setSearchParams(`page=${page}`);
  }

  const nextPageHandler = () => {
    ++page;
    setSearchParams(`page=${page}`);
  }

  return (
    <div className={classes.pageControl}>
      <button onClick={previousPageHandler} disabled={page===1}>Previous</button>
      <span><span style={{fontWeight: "800"}}>{page}</span> of {maxPage}</span>
      <button onClick={nextPageHandler} disabled={page==={maxPage}}>Next</button>
    </div>
  );

}
