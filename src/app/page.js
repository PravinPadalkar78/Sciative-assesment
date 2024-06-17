import Image from "next/image";
import Hero from '@/components/hero/Hero.jsx'
import Navbar from "@/components/nav/Navbar";
import Reviews from "@/components/reviews/Reviews.jsx";
import Courses from "@/components/courses/Courses.jsx";
import TableSection from "@/components/table/TableSection";
import Progress from "@/components/progress/Progress";

export default function Home() {
  return (
    
      <>
        <Navbar/>
        <Hero/>
        
        <Courses/>
        <Progress/>
        <TableSection/>
        <Reviews/>
       
      </>
      
    
  );
}
