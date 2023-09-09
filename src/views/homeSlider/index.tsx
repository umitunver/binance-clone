"use client"
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Container } from '@/components';
import { Pagination, Autoplay } from 'swiper/modules';
import { HomeBannerData } from '@/data/homeBanner';
import Image from 'next/image';
import Images from '@/constants/images';
import SwiperCore from 'swiper';
import { useRef } from 'react';

SwiperCore.use([Pagination]);
export default function HomeSlider() {
  const swiperRef = useRef<any>(null);
  const handlePaginationClick = (index: any) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
        modules={[Autoplay]}
        className={`${styles.banner} ${'mySwiper'}`}>
        {
          HomeBannerData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.images}>
                <Image src={Images[item.image]} fill alt='banner' />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="custom-pagination">
        {HomeBannerData?.map((item, index) => (
          <div
            key={index}
            className={`custom-pagination-bullet ${index === 0 ? 'swiper-pagination-bullet-active' : ''
              }`}
            onClick={() => handlePaginationClick(index)}
          ></div>
        ))}
      </div>
    </Container>
  );
};