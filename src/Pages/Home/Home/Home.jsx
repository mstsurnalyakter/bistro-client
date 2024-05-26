import DynamicTitle from "../../../Components/DynamicTitle/DynamicTitle";
import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu"


const Home = () => {
  return (
    <div className="space-y-16">
      <DynamicTitle title="Home" />
      <Banner />
      <Category />
      <PopularMenu />
      <Featured/>
    </div>
  );
}

export default Home