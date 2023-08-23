import React from "react";

function NewStory({ handleAdd, setTitle, setAuthor }) {
  return (
    <div className="content newstory">
    <h2>Add book</h2>
      <div className="outside-form-div">
        <form className="form">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title :
            </label>
            <input
              type="text"
              className="form-control"
              required
              id="exampleInputEmail1"
              onChange={(e) => setTitle(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Author :
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              required
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button className="button" onClick={handleAdd}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewStory;
