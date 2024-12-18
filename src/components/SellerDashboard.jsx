import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Container, Row, Col } from "react-bootstrap";

const SellerDashboard = () => {
  const [offers, setOffers] = useState([]);
  const [filters, setFilters] = useState({ date: "", product: "", status: "" });

  useEffect(() => {
    const savedOffers = JSON.parse(localStorage.getItem("offers")) || initialOffers;
    setOffers(savedOffers);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredOffers = offers.filter((offer) => {
    return (
      (filters.date === "" || offer.date === filters.date) &&
      (filters.product === "" ||
        offer.product.toLowerCase().includes(filters.product.toLowerCase())) &&
      (filters.status === "" || offer.status === filters.status)
    );
  });

  const updateStatus = (id, newStatus) => {
    const updatedOffers = offers.map((offer) =>
      offer.id === id ? { ...offer, status: newStatus } : offer
    );
    setOffers(updatedOffers);

    localStorage.setItem("offers", JSON.stringify(updatedOffers));
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Seller Dashboard</h2>

      <Row className="mb-3">
        <Col md={4}>
          <Form.Group controlId="filterDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="filterProduct">
            <Form.Label>Product</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              name="product"
              value={filters.product}
              onChange={handleFilterChange}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="filterStatus">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Accepted">Accepted</option>
              <option value="Rejected">Rejected</option>
              <option value="Countered">Countered</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Table striped bordered hover responsive className="text-center shadow-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Offer Price</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOffers.map((offer, index) => (
            <tr key={offer.id}>
              <td>{index + 1}</td>
              <td>{offer.product}</td>
              <td>{offer.offerPrice}</td>
              <td>{offer.date}</td>
              <td>{offer.time}</td>
              <td>
                <span
                  className={`badge ${
                    offer.status === "Accepted"
                      ? "bg-success"
                      : offer.status === "Rejected"
                      ? "bg-danger"
                      : offer.status === "Countered"
                      ? "bg-warning"
                      : "bg-secondary"
                  }`}
                >
                  {offer.status}
                </span>
              </td>
              <td>
                <Button
                  variant="success"
                  size="sm"
                  className="me-2"
                  onClick={() => updateStatus(offer.id, "Accepted")}
                >
                  Accept
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  className="me-2"
                  onClick={() => updateStatus(offer.id, "Rejected")}
                >
                  Reject
                </Button>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => updateStatus(offer.id, "Countered")}
                >
                  Counter
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SellerDashboard;
