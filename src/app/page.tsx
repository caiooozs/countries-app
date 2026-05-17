import Countries from "@/src/components/CountriesHome/CountriesHome";
import Header from "../components/Header/Header";
import Hero from "@/src/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Countries />
      </div>
    </>
  );
}
