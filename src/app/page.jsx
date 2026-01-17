import Banner from "@/component/home/Banner";
import Categories from "@/component/home/Categories";
import Deals from "@/component/home/Deals";
import Features from "@/component/home/Features";
import Newsletter from "@/component/home/Newsletter";
import Products from "@/component/home/Products";
import Testimonials from "@/component/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">
     
       <section>
        <Banner></Banner>
       </section>

       <section>
        <Categories></Categories>
       </section>

      

       <section>
        <Products></Products>
       </section>

        <section>
        <Deals></Deals>
       </section>

       <section>
        <Features></Features>
       </section>

       <section>
        <Testimonials></Testimonials>
       </section>

       <section>
        <Newsletter></Newsletter>
       </section>


    </div>
  );
}
