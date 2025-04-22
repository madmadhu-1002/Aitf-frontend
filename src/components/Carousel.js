"use client";

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import styles from '@/styles/Carousel.module.css';
import { useRouter } from 'next/navigation';

const homepage = {
    "sliders": [
        {
            "id": 35,
            "title_en": null,
            "title_ar": null,
            "summery_en": null,
            "summery_ar": null,
            "button_label": null,
            "button_link_to": null,
            "image": "/assets/image 1.png",
            "image_alt": null,
            "image_title": null,
            "sort_order": 15,
            "status": 1,
            "created_at": "2025-01-24T13:19:13.000000Z",
            "updated_at": "2025-04-14T12:11:45.000000Z"
        }
    ]
}
const Carousel = () => {
    const router = useRouter();
    
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const handleApplyClick = () => {
        router.push('/car-list'); // your dynamic slug path
      };
    useEffect(() => {
        if (!emblaApi) return;

        let autoplay;
        const play = () => {
            autoplay = setInterval(() => {
                if (!emblaApi) return;
                emblaApi.scrollNext();
            }, 3000);
        };

        const stop = () => clearInterval(autoplay);

        play();
        emblaApi.on('pointerDown', stop);
        emblaApi.on('pointerUp', play);

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {homepage?.sliders?.map((banners, index) => (
                    <div
                        className="min-w-full flex-shrink-0 position-relative"
                        key={banners.id}
                    >
                        <Image
                            src={banners.image}
                            width={1240}
                            height={485}
                            alt="banners"
                            layout="responsive"
                            priority={index === 0}
                            fetchPriority={index === 0 ? 'high' : 'auto'}
                        />
                        <div className={`${styles.carouselDiv} ms-2 text-white`} >
                            <h1 className="fw-bold display-6 display-md-5 display-lg-4">Transform Your Vision Into Reality</h1>
                            <p className="fs-6 fs-md-5 fs-lg-4">Professional Vehicle & Metal Modifications</p>
                            <div className="d-flex flex-wrap gap-2 mt-3">
                                <Button variant="primary" onClick={handleApplyClick}>Vehicle Modifications</Button>
                                <Button variant="outline-light" onClick={handleApplyClick}>Metal Works</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
