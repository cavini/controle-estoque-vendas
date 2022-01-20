import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";


export default function Home() {
  return (
    <div style={{padding: '1% 5%'}}>
        <Navbar />
        <Hero />
    </div>
  );
}
