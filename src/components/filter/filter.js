import { useFilter } from "../../context/filterContext";
import "./filter.css";
export const Filter = () => {
  const { state, dispatch } = useFilter();
  const { man, women, kid, latest } = state.category;
  return (
    <aside className="side-bar">
      <div className="sidebar-title heading-lg">FILTERS</div>
      <div className="list">
        <div className="list-title">SORT BY</div>
        <div className="check-list-item">
          <label>
            <input
              name="checkbox"
              type="radio"
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
              }
            />
            High To Low Price
          </label>
        </div>

        <div className="check-list-item">
          <label>
            <input
              name="checkbox"
              type="radio"
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
              }
            />
            Low To High Price
          </label>
        </div>
        <div className="check-list-item">
          <label>
            <input
              name="checkbox"
              type="radio"
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH_RATE" })
              }
            />
            Low To High Rating
          </label>
        </div>
        <div className="check-list-item">
          <label>
            <input
              name="checkbox"
              type="radio"
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW_RATE" })
              }
            />
            High To Low Rating
          </label>
        </div>
      </div>
      <div className="list">
        <div className="list-title">CATEGORIES</div>
        <div className="check-list-item">
          <label>
            <input
              name="checkbox"
              type="checkbox"
              checked={man}
              onChange={(e) => {
                dispatch({ type: "MAN", payload: e.target.checked });
              }}
            />
            Man's
          </label>
        </div>

        <div className="check-list-item">
          <label>
            <input
              name="checkbox"
              type="checkbox"
              checked={women}
              onChange={(e) => {
                dispatch({ type: "WOMEN", payload: e.target.checked });
              }}
            />
            Women's
          </label>
        </div>
        <div className="check-list-item">
          <label>
            <input
              name="checkbox"
              type="checkbox"
              checked={kid}
              onChange={(e) => {
                dispatch({ type: "KID", payload: e.target.checked });
              }}
            />
            Kid's
          </label>
        </div>
        <div className="check-list-item">
          <label>
            <input
              name="checkbox"
              type="checkbox"
              checked={latest}
              onChange={(e) => {
                dispatch({ type: "LATEST", payload: e.target.checked });
              }}
            />
            Latest
          </label>
        </div>
      </div>
      <div className="list">
        <div className="list-title">RATING</div>
        <div className="check-list-item">
          <input
            name="checkbox"
            type="range"
            min="1"
            max="5"
            defaultValue="1"
            onChange={(e) => {
              dispatch({ type: "RATING", payload: parseInt(e.target.value) });
            }}
          />
        </div>
        <button
          className="btn btn-dark filter-btn"
          onClick={() => {
            dispatch({ type: "CLEAR" });
          }}
        >
          Clear
        </button>
      </div>
    </aside>
  );
};
