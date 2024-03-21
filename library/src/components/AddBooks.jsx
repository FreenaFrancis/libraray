


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const BookForm = () => {
const [name,setName]=useState('');
const [author,setAuthor]=useState('');
const [description,setdescription]=useState('');
const [price,setPrice]=useState('');
const [file,setFile]=useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with bookData, e.g., send to a server or update state
    const formData= new FormData();
    formData.append('file',file);
    formData.append('description',description);
    formData.append('price',price);
    formData.append('author',author)
    axios.post('http://localhost:7000/api/book/addbooks')
    .then(res =>{
      console.log(res)
      // navigate('/department')
     })
     .catch(err =>console.log(err))
  };



  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body">
              <h2 className="card-title text-center mb-4" style={{ color: '#343a40' }}>
                Book Details Form
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="bookName" className="form-label" style={{ color: '#343a40' }}>
                    Book Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bookName"
                    name="bookName"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label" style={{ color: '#343a40' }}>
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e)=>setdescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label" style={{ color: '#343a40' }}>
                    Author
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label" style={{ color: '#343a40' }}>
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label" style={{ color: '#343a40' }}>
                    Image
                  </label>
                  <input
  type="file"
  className="form-control"
  id="image"
  name="file"  // Should match the field name used in upload.single('file')
  accept="image/*"
  onChange={(e) => setFile(e.target.files[0])}
  required
/>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#007bff' }}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookForm;



