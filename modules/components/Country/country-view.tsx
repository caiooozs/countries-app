type CountryPageProps = {
  params: Promise<{ code: string }>;
};
export default async function CountryPage({ params }: CountryPageProps) {
  const { code } = await params;

  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const [country] = await res.json();

  return (
    <>
      <header>
        <div className="flex justify-center items-center h-24 border-b">
          <a href="/" className="flex items-center gap-2">
            <span className="font-display text-xl">FindYourCountry</span>
          </a>
        </div>
      </header>

      <main className="flex flex-col items-center mt-12">
        <div className="w-2/3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-6xl">{country.name.common}</h1>
              <p className="italic text-sx text-muted-foreground">
                {country.name.official}
              </p>
            </div>
            <img src={country.flags.png} alt="" />
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}
