// import React from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getAllCars,
//   getLoading,
  
//   User_URLS,
//   fetchUsersApi,
// } from "../features/cars/CarSlice";
// import { Card, Col, Container, Row, Spinner } from "react-bootstrap";

// const AllCars = () => {
//   const Loading = useSelector(getLoading);
//   const AllCars = useSelector(getAllCars);
//   const dispatch = useDispatch();
//   let contentToRender = "";

//   const fetchData = () => {
//     dispatch(fetchUsersApi());
//    };
//   useEffect(() => {
    
     
//     fetchData();
    
   
//   }, []);

//   contentToRender =
//     Loading === "pending" ? (
//       <>
//         <div className=" d-flex align-items-center justify-content-center">
//           <Spinner animation="border" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </Spinner>
//         </div>
//       </>
//     ) : (
//       <>
//         <Row xs={1} md={3} className="g-4">
//           {AllCars.map((carItem) => (
//             <Col key={carItem.id}>
//               <Card>
//                 <Card.Body>
//                   <Card.Title>{carItem.title}</Card.Title>
//                   <Card.Text>{carItem.body}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </>
//     );
//   return (
//     <>
//       <Container className="mt-2">{contentToRender}</Container>
//       {console.log(AllCars.length)}
//     </>
//   );
// };
// export default AllCars;



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
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";

// Wrap your component with React.memo
const AllCars = React.memo(() => {
 const Loading = useSelector(getLoading);
 const AllCars = useSelector(getAllCars);
 const dispatch = useDispatch();
 let contentToRender = "";

 const fetchData = () => {
 dispatch(fetchUsersApi());
 };
 useEffect(() => {
 
 
 fetchData();
 
 
 }, []);

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
 return (
 <>
 <Container className="mt-2">{contentToRender}</Container>
 {console.log(AllCars.length)}
 </>
 );
});

// Export the memoized version
export default AllCars;
