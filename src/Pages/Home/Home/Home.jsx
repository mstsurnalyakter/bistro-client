import DynamicTitle from "../../../Components/DynamicTitle/DynamicTitle";
import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu"
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
  return (
    <div className="space-y-20">
      <DynamicTitle title="Home" />
      <Banner />
      <Category />
      <PopularMenu />
      <Featured/>
      <Testimonials/>
    </div>
  );
}

export default Home