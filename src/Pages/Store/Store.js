import React from 'react'
import { Col, Row } from "react-bootstrap";
import { Card } from '../../Components';
import storeItems from '../../Data/storeitems.json';


const Store = () => {

  

  return (
    
    <div className="container">
         <Row md={2} xs={1} lg={3} className="g-3 card-store">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <Card {...item} />
          </Col>
        ))}
      </Row>
       </div>

       



  )
}

export default Store