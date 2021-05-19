const Book = ({ title, resume, author, cover }) => {
  return (
    <div className="col-sm">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-title">
            <span className="text-muted">Author: </span>
            {author}
          </p>
          <p className="card-text">
            <span className="text-muted">Abstract: </span>
            {resume}
          </p>
          <a href="#" className="btn btn-warning">Edit</a>
          <a href="#" className="btn btn-danger ms-2">Delete</a>
        </div>
      </div>
    </div>
  );
}

export default Book;
