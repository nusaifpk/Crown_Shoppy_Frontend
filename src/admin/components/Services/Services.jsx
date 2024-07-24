import React from 'react'
import 'reactstrap'
import {motion} from 'framer-motion'
import { Container ,Row,Col } from 'reactstrap'
import './Services.css'
import 'remixicon/fonts/remixicon.css'
import ServiceData from '../../../assets/ServiceData'


const Services = () => {
  return (
    <section className='services'>
      <Container>
        <Row>
          {ServiceData.map((item,index)=> (
              <Col lg='3' md='4' key={index} style={{display:"flex",justifyContent:"space-evenly"}}>
                <motion.div whileHover={{scale:1.02}} className='service__item' style={{background : `${item.bg}`}}>
                  <span><i class={item.icon}></i></span>
                  <div>
                    <h3>{item.title}</h3>
                    <h2>{item.subtitle}</h2>
                  </div>
                </motion.div>
              </Col> )) 
              }
        </Row>
      </Container>
    </section>
  )
}

export default Services