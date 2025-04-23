import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const partnerLogos = [
  {
    "id": 2,
    "title_en": "Service my car",
    "title_ar": null,
    "summery_en": null,
    "summery_ar": null,
    "link": null,
    "image": "https://admin.moatamad.com/storage/files/1/CompanyLogos/servicemycar.png",
    "image_alt": null,
    "image_title": null,
    "sort_order": 1,
    "status": 1,
    "created_at": "2025-01-16T10:33:51.000000Z",
    "updated_at": "2025-01-16T10:33:51.000000Z"
  },
  {
    "id": 3,
    "title_en": "Autorent",
    "title_ar": null,
    "summery_en": null,
    "summery_ar": null,
    "link": "https://autorent-me.com/home",
    "image": "https://admin.moatamad.com/storage/files/1/CompanyLogos/Autorent-Logo.png",
    "image_alt": null,
    "image_title": null,
    "sort_order": 2,
    "status": 1,
    "created_at": "2025-01-16T10:43:15.000000Z",
    "updated_at": "2025-01-16T10:43:15.000000Z"
  },
  {
    "id": 4,
    "title_en": "Autofix",
    "title_ar": null,
    "summery_en": null,
    "summery_ar": null,
    "link": "https://autofix.ae/home",
    "image": "https://admin.moatamad.com/storage/files/1/CompanyLogos/thumbnail_Autorent_Motorcycle_Logo-01 (1).png",
    "image_alt": null,
    "image_title": null,
    "sort_order": 3,
    "status": 1,
    "created_at": "2025-01-16T10:45:39.000000Z",
    "updated_at": "2025-01-16T12:36:20.000000Z"
  },
  {
    "id": 6,
    "title_en": "Bahwanmotors",
    "title_ar": null,
    "summery_en": null,
    "summery_ar": null,
    "link": "https://bahwanmotors.com/",
    "image": "https://admin.moatamad.com/storage/files/1/CompanyLogos/Bahwan_Motors_Dubai_Logo-01.png",
    "image_alt": null,
    "image_title": null,
    "sort_order": 5,
    "status": 1,
    "created_at": "2025-01-16T10:47:19.000000Z",
    "updated_at": "2025-01-16T10:47:19.000000Z"
  },
  {
    "id": 7,
    "title_en": "Aitf",
    "title_ar": null,
    "summery_en": null,
    "summery_ar": null,
    "link": "https://aitf-me.com/",
    "image": "https://admin.moatamad.com/storage/files/1/CompanyLogos/aitf-logo-top.png",
    "image_alt": null,
    "image_title": null,
    "sort_order": 6,
    "status": 1,
    "created_at": "2025-01-16T10:47:51.000000Z",
    "updated_at": "2025-01-16T10:47:51.000000Z"
  },
  {
    "id": 8,
    "title_en": "Iparkglobal",
    "title_ar": null,
    "summery_en": null,
    "summery_ar": null,
    "link": "https://iparkglobal.com/",
    "image": "https://admin.moatamad.com/storage/files/1/CompanyLogos/logo1.png",
    "image_alt": null,
    "image_title": null,
    "sort_order": 7,
    "status": 1,
    "created_at": "2025-01-16T10:48:19.000000Z",
    "updated_at": "2025-01-16T10:48:19.000000Z"
  },
  {
    "id": 9,
    "title_en": "jpc-autoparts",
    "title_ar": null,
    "summery_en": null,
    "summery_ar": null,
    "link": "https://jpc-autoparts.com/",
    "image": "https://admin.moatamad.com/storage/files/1/CompanyLogos/logo-bg.png",
    "image_alt": null,
    "image_title": null,
    "sort_order": 8,
    "status": 1,
    "created_at": "2025-01-16T10:48:54.000000Z",
    "updated_at": "2025-01-16T10:48:54.000000Z"
  },
  {
    "id": 10,
    "title_en": "Bahwanauto",
    "title_ar": null,
    "summery_en": null,
    "summery_ar": null,
    "link": "https://bahwanauto.com/",
    "image": "https://admin.moatamad.com/storage/files/1/CompanyLogos/bahwanauto.png",
    "image_alt": null,
    "image_title": null,
    "sort_order": 9,
    "status": 1,
    "created_at": "2025-01-16T10:49:23.000000Z",
    "updated_at": "2025-01-16T10:49:23.000000Z"
  }
];

const Partners = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    if (!emblaApi) return;

    let autoplay;
    const play = () => {
      autoplay = setInterval(() => emblaApi.scrollNext(), 2000);
    };
    const stop = () => clearInterval(autoplay);

    play();
    emblaApi.on("pointerDown", stop);
    emblaApi.on("pointerUp", play);

    if (prevBtnRef.current && nextBtnRef.current) {
      prevBtnRef.current.addEventListener("click", () => emblaApi.scrollPrev());
      nextBtnRef.current.addEventListener("click", () => emblaApi.scrollNext());
    }

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <Container fluid className="py-5 border-bottom border-top border-black mt-4">
      <Row>
        <h3 className="text-center mb-4">Partners and Certifications</h3>
        <div className="position-relative w-100 overflow-hidden" ref={emblaRef}>
          {/* Carousel Items */}
          <div className="d-flex gap-3">
            {partnerLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0 pe-2"
              >
                <a
                  href={logo.link || "#"}
                  className="d-block text-center shadow-sm p-2"
                  aria-label={logo.title_en || "Partner logo"}
                >
                  <Image
                    src={logo.image}
                    alt={logo.title_en || "Partner logo"}
                    width={200}
                    height={80}
                    style={{ objectFit: 'contain', maxHeight: '80px' }}
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            ref={prevBtnRef}
            className="btn btn-dark position-absolute start-0 top-50 translate-middle-y"
          >
            &lsaquo;
          </button>
          <button
            ref={nextBtnRef}
            className="btn btn-dark position-absolute end-0 top-50 translate-middle-y"
          >
            &rsaquo;
          </button>
        </div>
      </Row>
    </Container>
  );
};

export default Partners;
