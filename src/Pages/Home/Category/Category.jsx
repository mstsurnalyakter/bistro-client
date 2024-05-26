import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle heading="Order Online" subHeading="From 11:00am to 10:00pm" />
      <Swiper
        slidesPerView={4}
        spaceBetween={19}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl text-white font-bold uppercase text-center -mt-20">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl text-white font-bold uppercase text-center -mt-20">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl text-white font-bold uppercase text-center -mt-20">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl text-white font-bold uppercase text-center -mt-20">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl text-white font-bold uppercase text-center -mt-20">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl text-white font-bold uppercase text-center -mt-20">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl text-white font-bold uppercase text-center -mt-20">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl text-white font-bold uppercase text-center -mt-20">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl text-white font-bold uppercase text-center -mt-20">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl text-white font-bold uppercase text-center -mt-20">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
