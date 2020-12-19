import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>Copyright &copy;</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
