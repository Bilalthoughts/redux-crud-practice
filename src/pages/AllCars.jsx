import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCars,
  getLoading,

  User_URLS,
  fetchUsersApi,
} from "../features/cars/CarSlice";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Wrap your component with React.memo
const AllCars = React.memo(() => {
  const Loading = useSelector(getLoading);
  const AllCars = useSelector(getAllCars);
  const dispatch = useDispatch();
  let contentToRender = "";
  const navigate = useNavigate();
 
  useEffect(() => {
    dispatch(fetchUsersApi());
    // Log the data only when it changes
    console.log(AllCars.length);
    console.log(AllCars);
  }, [dispatch]);

  contentToRender =
    Loading === "pending" ? (
      <>
        <div className=" d-flex align-items-center justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </>
    ) : (
      <>
        <Row xs={1} md={3} className="g-4">
          {AllCars.map((carItem) => (
            <Col key={carItem.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{carItem.title}</Card.Title>
                  <Card.Text>{carItem.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
    // console.log(AllCars.length) 
  return (
    <>
    <div> <Button  type="button" onClick={() => {navigate("/addcar")}}>Add New Car</Button></div>
      <Container className="mt-2">{contentToRender}</Container>
      {/* Move the console.log outside the return statement */}
    </>
  );
});

// Export the memoized version
export default AllCars;
