"use client"

import EmblaCarouselWithThumbnails from '@/app/ui/EmblaCarouselWithThumbnails'
import GeneralSpecs from '@/app/ui/GeneralSpecs';
import TechnicalSpecs from '@/app/ui/TechnicalSpecs';
import { Container, Row, Col } from "react-bootstrap"

const slides = [
  '/assets/modif6.png',
  '/assets/modif6.png',
  '/assets/modif6.png',
  '/assets/modif6.png',
];

const CarSpecs = () => {
  return (
    <>
      <Row className='w-100 p-5 mb-3'>
        <Col sm={6}>
        <EmblaCarouselWithThumbnails slides={slides} />
        </Col>
        <Col>
          <TechnicalSpecs />
        </Col>
      </Row>
      <GeneralSpecs />
    </>
  )
}



export default CarSpecs