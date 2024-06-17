import Image from "next/image";
import Hero from '@/components/hero/Hero.jsx'
import Features from "@/components/cards/Features";
import Navbar from "@/components/nav/Navbar";
import Process from "@/components/cards/Process.jsx";
import Card from "@/components/cards/Card.jsx";
import Reviews from "@/components/reviews/Reviews.jsx";
import Courses from "@/components/courses/courses.jsx";
import TableSection from "@/components/table/TableSection";

export default function Home() {
  return (
    
      <>
        <Navbar/>
        <Hero/>
        <Courses/>
     
        <TableSection/>
        <Reviews/>
       
      </>
      
    
  );
}
