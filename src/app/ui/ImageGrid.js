import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import styles from "@/styles/ImageGrid.module.css";

const cells = Array.from({ length: 15 }); // however many items you have

export default function ImageGrid() {
  return (
    <>
    <div className={styles.container}>
      <h2 className="fs-1 fw-bold p-4 text-center">Our Upgrade Services</h2>

      {/* 5 columns at all sizes: */}
      <Row xs={5} className="g-4 px-4">
        {cells.map((_, idx) => (
          <Col key={idx} className="p-2" data-aos="fade-up">
            <div className={styles.contentBox}>
                <div className={styles.iconBox}>
                  <Image
                    src="/assets/wheel1.png"
                    alt="Car"
                    width={64}
                    height={64}
                  />
                </div>
                <p className={styles.label}>6 Wheel drive</p>
              </div>
          </Col>
        ))}
      </Row>
    </div>
    </>
  );
}
