import React, { useState } from "react";

function Search({ userInput, setUserInput }) {
  
  function handleOnChange(e){
    e.preventDefault()
    setUserInput(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          value={userInput} 
          onChange={handleOnChange} 
          className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
