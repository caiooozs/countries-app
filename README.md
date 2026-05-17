# FindYourCountry

Aplicacao desenvolvida com **Next.js + TypeScript** para consulta de paises, com foco em experiencia do usuario, organizacao de codigo e boas praticas.

## Deploy

Aplicacao publicada na Vercel:

<https://countries-app-delta-orpin.vercel.app/>

## Funcionalidades

- Listagem de paises com informacoes basicas (bandeira, nome, populacao, regiao/sub-regiao)
- Home com seção de paises em destaque
- Pagina **All Countries** com busca textual e filtro por sub-regiao
- Pagina de detalhes do pais com informacoes complementares e links de mapa

## Tecnologias

- Next.js (App Router)
- React
- TypeScript
- React Query (@tanstack/react-query)
- Axios
- Tailwind CSS
- shadcn/ui

## Arquitetura (MVVM)

O projeto segue o padrao **MVVM** nos componentes principais:

- **View**: renderizacao e interacao visual (`*.view.tsx`)
- **ViewModel**: regras de apresentacao, estados derivados e composicao de dados (`*.viewmodel.ts`)
- **Model**: contratos de props e tipagens de tela (`*.model.ts`)

Exemplo:

- `AllCountries.tsx` conecta `AllCountries.view.tsx` ao `AllCountries.viewmodel.ts`
- `CountriesHome.tsx` conecta `CountriesHome.view.tsx` ao `CountriesHome.viewmodel.ts`

## Estrutura de pastas atualizada

```text
src/
  app/                             # rotas (App Router)
  components/                      # UI (views, componentes reutilizaveis)
  features/
    countries/
      queries/                     # hooks de consulta de dados da feature
  services/
    Countries/                     # servicos de API (countries.service, types)
  api/                             # instancia/configuracao de cliente HTTP
  provider/                        # providers globais (React Query etc.)
  types/                           # tipagens compartilhadas
```

## Como executar

1. Clone o repositorio

```bash
git clone <url-do-repositorio>
cd <nome-da-pasta>
```

2. Instale as dependencias

```bash
npm install
```

3. Configure variaveis de ambiente no arquivo `.env.local`

```bash
NEXT_PUBLIC_API_BASEURL=https://restcountries.com
```

4. Rode o projeto

```bash
npm run dev
```

Acesse por: <http://localhost:3000>
