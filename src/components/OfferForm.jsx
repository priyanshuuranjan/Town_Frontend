import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OfferForm = ({ selectedProduct, setSelectedProduct }) => {
  const [offer, setOffer] = useState({
    price: "",
    comments: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer({ ...offer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOffer = {
      id: Date.now(),
      product: selectedProduct,
      offerPrice: `$${offer.price}`,
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString(),
      status: "Pending",
    };

    const existingOffers = JSON.parse(localStorage.getItem("offers")) || [];
    const updatedOffers = [...existingOffers, newOffer];

    localStorage.setItem("offers", JSON.stringify(updatedOffers));

    alert("Your offer has been submitted successfully!");
    setSelectedProduct(null); 
    navigate("/sellerDashboard"); 
  };

  return (
    <Modal show={true} onHide={() => navigate("/")} centered>
      <Modal.Header closeButton>
        <Modal.Title>Make an Offer for "{selectedProduct}"</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="offerPrice">
            <Form.Label>Offer Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your offer price"
              name="price"
              value={offer.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="offerComments">
            <Form.Label>Comments or Justification</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your comments or justification"
              name="comments"
              value={offer.comments}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            Submit Offer
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default OfferForm;
