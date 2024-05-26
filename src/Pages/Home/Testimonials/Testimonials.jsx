import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";


const Testimonials = () => {
    
    const {data:reviews,isLoading:reviewsLoading} = useQuery({
        queryKey:['reviews'],
        queryFn: async () =>{
            const {data} = await axios.get("/reviews.json");
            return data;
        }

    })

  return (
    <section>
      <SectionTitle heading="Testimonials" subHeading="What Our Client Say" />
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews?.length > 0 &&
            reviews?.map((review) => (
              <SwiperSlide key={review?._id}>
                <div className="w-2/3 mx-auto flex flex-col items-center text-center space-y-3">
                    <Rating
                      style={{ maxWidth: 180 }}
                      value={review?.rating}
                      readOnly
                    />

                  <p>{review?.details}</p>
                  <h3 className="text-2xl text-[#590D95]">{review?.name}</h3>
                  <p>{}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}



export default Testimonials