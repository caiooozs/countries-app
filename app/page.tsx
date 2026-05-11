import Countries from "@/modules/components/Countries";
import Header from "@/modules/components/header";
import Hero from "@/modules/components/Hero";

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
