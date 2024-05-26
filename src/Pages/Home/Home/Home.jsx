import DynamicTitle from "../../../Components/DynamicTitle/DynamicTitle";
import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import PopularMenu from "../PopularMenu/PopularMenu"


const Home = () => {
  return (
    <div className="space-y-16">
      <DynamicTitle title="Home" />
      <Banner />
      <Category />
      <PopularMenu />
    </div>
  );
}

export default Home