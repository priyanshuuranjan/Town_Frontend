import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card as BootstrapCard,
  Button,
} from "react-bootstrap";
import Lamp from "../Assets/Royal.jpg";
import pottery from "../Assets/pottery.jpeg";
import Pottery from "../Assets/Chairs.jpg";
import Dinner from "../Assets/Cabinet.jpg";
import sofa from "../Assets/sofa1.jpg";
import OfferForm from "../components/OfferForm";

const products = [
  {
    id: 1,
    image: Lamp,
    title:
      "Large Collection of Royal Copenhagen Blue Flower Braided, 98 Pieces",
    price: "$2500",
    status: "",
  },
  {
    id: 2,
    image: Pottery,
    title: "Theodore Alexander Cane Chairs with Schumacher Seats, Set of 6",
    price: "$800",
    status: "Sold",
  },
  {
    id: 3,
    image: Dinner,
    title: "Antique Spanish Colonial Geometric Front Walnut Cabinet with Inlay",
    price: "$2,400",
    status: "",
  },
  {
    id: 4,
    image: pottery,
    title: "Antique Spanish Colonial Geometric Front Walnut Cabinet with Inlay",
    price: "$2560",
    status: "",
  },
  {
    id: 5,
    image: sofa,
    title: "Antique Spanish Colonial Geometric Front Walnut Cabinet with Inlay",
    price: "$2960",
    status: "",
  },
];

const Card = () => {
  return (
    <Container className="py-5 mt-20">
      <Row className="g-4">
        {products.map((product) => (
          <Col lg={4} md={6} key={product.id}>
            <BootstrapCard className="h-100 text-center shadow-sm">
              <BootstrapCard.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="p-3"
              />
              <BootstrapCard.Body>
                <BootstrapCard.Title className="fw-bold fs-5">
                  {product.title}
                </BootstrapCard.Title>
                <BootstrapCard.Text className="text-success fs-5 fw-bold">
                  {product.price}
                </BootstrapCard.Text>
                {product.status && (
                  <BootstrapCard.Text className="text-success fw-semibold">
                    {product.status}
                  </BootstrapCard.Text>
                )}
              </BootstrapCard.Body>
              <BootstrapCard.Footer className="bg-white">
                <Button variant="primary" className="w-100 mb-2">
                  ADD TO CART
                </Button>
                <Button variant="info" className="w-100 text-white">
                  <OfferForm />
                </Button>
              </BootstrapCard.Footer>
            </BootstrapCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Card;
