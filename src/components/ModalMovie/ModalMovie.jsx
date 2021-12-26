import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalMovie.css";

function ModalMovie({ getMoviesListData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: 0
  });
  const handleAdd = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    getMoviesListData(newMovie);
    handleClose();
  };

  return (
    <div className="modal-btn-pos">
      <Button
      className="hoover-btn"
         style={{
          backgroundColor: "#17141d",
          color: "#7a7a8c",
          fontSize: "15px",
          fontWeight: "bold",
          fontFamily: "cursive",
          borderRadius: "10px",
          borderStyle: "none",
          height: "40px",
          pointer: "cursor"
        }}
        variant="primary"
        onClick={handleShow}
      >
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label className="input-labels">Tittle :</label>
              <input type="text" name="title" onChange={handleAdd} />
            </div>
            <div>
              <label className="input-labels">Description :</label>
              <input type="text" name="description" onChange={handleAdd} />
            </div>
            <div>
              <label className="input-labels">PosterUrl :</label>
              <input type="text" name="posterUrl" onChange={handleAdd} />
            </div>
            <div>
              <label className="input-labels">Rating :</label>
              <br />
              <input
                type="number"
                min="0"
                max="5"
                name="rating"
                onChange={handleAdd}
              />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalMovie;
