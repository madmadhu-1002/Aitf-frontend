"use client"

import EmblaCarouselWithThumbnails from '@/app/ui/EmblaCarouselWithThumbnails'
import GeneralSpecs from '@/app/ui/GeneralSpecs';
import TechnicalSpecs from '@/app/ui/TechnicalSpecs';
import { Container, Row, Col } from "react-bootstrap"

const slides = [
  '/assets/image 1.png',
  '/assets/image 1.png',
  '/assets/image 1.png',
  '/assets/image 1.png',
];

const CarSpecs = () => {
  return (
    <>
      <Row>
        <Col>
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