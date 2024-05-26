import SectionTitle from '../../../Components/SectionTitle/SectionTitle'

import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
  return (
    <section className="featured-item py-20 bg-fixed text-white">
      <SectionTitle heading="Featured Item" subHeading="Check it out" />

      <div className="flex flex-col bg-opacity-60 bg-slate-500  md:flex-row justify-center items-center  gap-10 ">
        <div className="px-36 ">
          <img src={featuredImage} alt="" />
        </div>
        <div className="space-y-2">
          <p>Aug 20,2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            deleniti, sunt perferendis repellat nihil at quam ipsa et. Fugiat,
            excepturi!
          </p>
          <button className=" btn border-0 border-b-4 border-[#9505fc]">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}


export default Featured