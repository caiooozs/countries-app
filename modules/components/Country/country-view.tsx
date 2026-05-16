import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Country } from "@/types/types";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

type CountryPageProps = {
  params: Promise<{ code: string }>;
};

export default async function CountryPage({ params }: CountryPageProps) {
  const { code } = await params;

  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const [country] = (await res.json()) as Country[];
  const firstCurrency = country.currencies
    ? Object.values(country.currencies)[0]
    : undefined;

  return (
    <>
      <header className="border-b bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4">
          <Link href="/" className="font-display text-xl">
            FindYourCountry
          </Link>
          <Button asChild variant="outline">
            <Link href="/">
              <FiArrowLeft />
              Voltar para a Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <section className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-muted/60 via-background to-muted/40 p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                Perfil do Pais
              </p>
              <h1 className="mt-2 text-4xl font-semibold md:text-5xl">
                {country.name.common}
              </h1>
              <p className="mt-2 text-muted-foreground italic">
                {country.name.official}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  {country.region}
                </span>
                <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  {country.subregion ?? "Sub-regiao nao informada"}
                </span>
                <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  Codigo: {country.cca3}
                </span>
              </div>
            </div>
            <img
              src={country.flags.png}
              alt={country.flags.alt ?? `Bandeira de ${country.name.common}`}
              className="h-40 w-64 rounded-md border object-cover shadow-sm"
            />
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardDescription>Capital</CardDescription>
              <CardTitle>{country.capital?.[0] ?? "N/A"}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Populacao</CardDescription>
              <CardTitle>
                {country.population.toLocaleString("pt-BR")}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Area</CardDescription>
              <CardTitle>{country.area.toLocaleString("pt-BR")} km2</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>Fronteiras</CardDescription>
              <CardTitle>{country.borders?.length ?? 0}</CardTitle>
            </CardHeader>
          </Card>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Detalhes</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="space-y-3 pt-4 text-sm">
              <p>
                <span className="font-medium">Moeda:</span>{" "}
                {firstCurrency
                  ? `${firstCurrency.name} (${firstCurrency.symbol ?? "-"})`
                  : "N/A"}
              </p>
              <p>
                <span className="font-medium">Fronteiras:</span>{" "}
                {country.borders?.join(", ") ?? "Sem fronteiras terrestres"}
              </p>
              <p>
                <span className="font-medium">Regiao:</span> {country.region}
              </p>
              <p>
                <span className="font-medium">Sub-regiao:</span>{" "}
                {country.subregion ?? "N/A"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Navegacao</CardTitle>
              <CardDescription>Explore a localizacao do pais</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="flex flex-wrap gap-3 pt-4">
              <Button asChild variant="secondary">
                <a
                  href={country.maps.googleMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Maps
                  <FiExternalLink />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={country.maps.openStreetMaps}
                  target="_blank"
                  rel="noreferrer"
                >
                  OpenStreetMap
                  <FiExternalLink />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
