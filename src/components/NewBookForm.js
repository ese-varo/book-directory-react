import { useState } from 'react';

const NewBookForm = () => {
  const [values, setValues] = useState({ 
    title: '',
    author: '',
    resume: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      [name]: value
    });
  }

  const handleAddBook = (e) => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <div className="row justify-content-md-center">
      <div className="col-sm-6">
        <h5>Add a new book</h5>
        <form onSubmit={handleAddBook}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Resume</label>
            <input
              type="textarea"
              className="form-control"
              id="resume"
              name="resume"
              value={values.resume}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={values.author}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cover">Cover</label>
            <input type="file" className="form-control" id="cover" aria-describedby="cover" />
          </div>
          <button className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewBookForm;
