import { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router';
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';

const Order = () => {
    const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
     const { category } = useParams();
     const initialIndex = categories.indexOf(category)

     const [tabIndex, setTabIndex] = useState(initialIndex);
     const {menu,refetch,isLoading} = useMenu();


         const desserts = menu?.filter((item) => item?.category === "dessert");
         const soup = menu?.filter((item) => item?.category === "soup");
         const salad = menu?.filter((item) => item?.category === "salad");
         const pizza = menu?.filter((item) => item?.category === "pizza");
         const drinks = menu?.filter((item) => item?.category === "drinks");

         if (isLoading) {
           return <p>Loading.................</p>;
         }


  return (
    <div className="space-y-20">
      <DynamicTitle title="Order" />
      <Cover img={orderImg} title="Order Food" />

      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="flex items-center justify-center mb-10">
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drink</Tab>
            </TabList>
          </div>

          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Order