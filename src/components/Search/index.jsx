import React from "react";
import { SearchContext } from "../../App";

import styles from "./Search.module.scss";

import debounce from "lodash.debounce";

const Search = () => {
  const { setSearchValue } = React.useContext(SearchContext);
  const [value, setValue] = React.useState("");

  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <span className={styles.icon}>
        <svg
          enableBackground="new 0 0 48 48"
          height="48px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 48 48"
          width="48px"
          // xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          // xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            clipRule="evenodd"
            d="M24,45C12.402,45,3,35.598,3,24S12.402,3,24,3s21,9.402,21,21S35.598,45,24,45z   M24,5C13.507,5,5,13.507,5,24s8.507,19,19,19s19-8.507,19-19S34.493,5,24,5z M40,25h-1c-0.553,0-1-0.447-1-1s0.447-1,1-1h1  c0.553,0,1,0.447,1,1S40.553,25,40,25z M33.979,33.204c-0.032,0.188-0.115,0.367-0.261,0.514c-0.308,0.307-0.762,0.355-1.129,0.172  l0.058,0.059l0.008,0.008l0,0l0,0c-0.162-0.067-0.306-0.13-0.464-0.195c-5.189-2.162-8.213-3.856-9.867-4.938  c-1.313-0.858-1.775-1.333-1.794-1.353c-0.045-0.043-2.488-2.412-6.485-12.125l0.001,0c0,0,0,0-0.001,0l0.067,0.067  c-0.01-0.02-0.012-0.042-0.02-0.062C14,15.139,13.99,14.908,14.054,14.69c0.044-0.147,0.111-0.29,0.229-0.407  c0.299-0.299,0.738-0.35,1.101-0.181c0.009,0.004,0.02,0.005,0.028,0.01l-0.023-0.025l-0.043-0.042c0,0,0,0,0.001,0l-0.001,0  c9.713,3.997,12.082,6.44,12.125,6.485c0.045,0.043,2.488,2.413,6.485,12.125l-0.001-0.001c0.001,0,0.001,0.001,0.001,0.001  l-0.044-0.044l-0.023-0.022c0.023,0.047,0.032,0.097,0.048,0.146C33.986,32.888,34.006,33.047,33.979,33.204z M26.046,21.933  c-0.021-0.021-2.016-1.927-9.187-5.073c3.146,7.171,5.055,9.167,5.095,9.208c0.021,0.021,2.016,1.928,9.187,5.073  C27.995,23.969,26.086,21.974,26.046,21.933z M24,23c0.553,0,1,0.447,1,1s-0.447,1-1,1s-1-0.447-1-1S23.447,23,24,23z M24,10  c-0.553,0-1-0.448-1-1V8c0-0.552,0.447-1,1-1s1,0.448,1,1v1C25,9.552,24.553,10,24,10z M24,38c0.553,0,1,0.447,1,1v1  c0,0.553-0.447,1-1,1s-1-0.447-1-1v-1C23,38.447,23.447,38,24,38z M9,25H8c-0.553,0-1-0.447-1-1s0.447-1,1-1h1c0.553,0,1,0.447,1,1  S9.553,25,9,25z"
            fillRule="evenodd"
          />
        </svg>
      </span>
      <input
        ref={inputRef}
        onChange={onChangeInput}
        value={value}
        className={styles.input}
        placeholder="Поиск питсы..."
        type="text"
      />
      {value && (
        <span onClick={onClickClear} className={styles.close}>
          <svg
            version="1.1"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g transform="translate(378.000000, 278.000000)">
                <path d="M-345.9-222.1c-13.2,0-23.9-10.7-23.9-23.9c0-13.2,10.7-23.9,23.9-23.9     c13.2,0,23.9,10.7,23.9,23.9C-322-232.9-332.7-222.1-345.9-222.1L-345.9-222.1z M-345.9-267.4c-11.7,0-21.3,9.6-21.3,21.3     c0,11.7,9.6,21.3,21.3,21.3s21.3-9.6,21.3-21.3C-324.6-257.8-334.2-267.4-345.9-267.4L-345.9-267.4z" />
                <polyline points="-356.3,-233.8 -358.2,-235.7 -335.6,-258.3 -333.7,-256.4 -356.3,-233.8    " />
                <polyline points="-335.6,-233.8 -358.2,-256.4 -356.3,-258.3 -333.7,-235.7 -335.6,-233.8    " />
              </g>
            </g>
          </svg>
        </span>
      )}
    </div>
  );
};

export default Search;
