//page.tsx
import { Metadata } from "next";
import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import ReviewBrands from "@/components/ReviewBrands";
import PreviewHome from "@/components/PreviewHome";
import FilteredHome from "@/components/FilteredHome";
import GuideSlotsHome from "@/components/GuideSlotsHome";


export const metadata: Metadata = {
  title: "Bubenbot: Your Comprehensive Source for Casino Reviews and Insights",
  description: "Welcome to Bubenbot, your ultimate destination for comprehensive casino reviews and invaluable insights. Whether you're a seasoned gambler or just starting your casino journey, we're here to guide you through the world of online casinos. Our expert team meticulously reviews casinos, covering game variety, bonuses, payment options, security, and more. With our in-depth analysis and unbiased recommendations, you can make informed decisions and elevate your gaming experience. Explore our extensive database, stay updated with the latest trends, and embark on a rewarding casino adventure with Bubenbot.",
};

export default async function Home() {
  return (
    <>

      <PreviewHome />
      <div className="background-block">
        <TopBrands />
        <NewBrands />
      </div>
      <ReviewBrands />
      <FilteredHome />
      <GuideSlotsHome />
    </>
  );
}
