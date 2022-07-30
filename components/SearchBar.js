import React, { useState } from "react";
import sCss from "../styles/SearchBar.module.css";
import Link from 'next/link';
import Nav from '../styles/Navbar.module.css'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
     <div className={Nav.searchcontainer}>
      <div className={sCss.searchInputs}>
        <input
          type="text" className={"search"}
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className={sCss.searchIcon}>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon className={sCss.clearBtn} onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className={sCss.dataResult}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link href={value.link} key=''><a className={sCss.dataItem} >{value.title} </a>
               
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
