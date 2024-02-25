import React, { useContext, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import data from '../data/data.json'

const Home = () => {
  const [priceValue, setPriceValue] = React.useState(5000);
  const [locationName, setLocationName] = React.useState('');
  const [items, setItems] = React.useState([])

  const handleReset = () => {
    setPriceValue(5000)
    setLocationName('')
    setItems([...data.Placedatas])
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(priceValue, locationName)

    if(!(priceValue!=5000) && !locationName){
      setItems([...data.Placedatas])
    }else if(priceValue!=5000 && locationName){
      const listener = data.Placedatas.filter(item => {
        return item.location.toLocaleLowerCase() == locationName.toLocaleLowerCase() && priceValue >= item.price ? {...item} : null
      })
      setItems(listener)
    }
    else if(locationName){
      const listener = data.Placedatas.filter(item => {
        return item.location.toLocaleLowerCase() == locationName.toLocaleLowerCase() ? {...item} : null
      })
      setItems(listener)
    }else if(priceValue!=5000){
      const listener = data.Placedatas.filter(item => {
        return priceValue >= item.price ? {...item} : null
      })
      setItems(listener)
    }
    else{
      setItems([])
    }
    return
  }

  useEffect(() => {
    setItems([...data.Placedatas])
    setLocationName('')
  }, [])

  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero 
            priceValue={priceValue}
            setPriceValue={setPriceValue}
            handleReset={handleReset}
            setLocationName={setLocationName}
            handleSearch = {handleSearch}
            locationName = {locationName}
          />
        </div>
        <Places 
          items={items}
        />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
