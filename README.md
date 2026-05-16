# FindYourCountry

Aplicação desenvolvida com **Next.js + TypeScript** para consulta de países, com foco em experiência do usuário, organização de código e boas práticas de desenvolvimento.

## Deploy

A aplicação está publicada em produção via Vercel:

🔗 [https://countries-app-delta-orpin.vercel.app/](https://countries-app-delta-orpin.vercel.app/)

## Sobre o desafio

Este projeto atende ao desafio técnico de construir uma aplicação com:

- Listagem de países com informações básicas:
  - Bandeira
  - Nome
  - População
  - Continente/Sub-região
- Página de detalhes com informações adicionais
- Busca por nome
- Filtro por sub-região

## Demo da solução

A aplicação oferece:

- Home com destaque de países
- Página “All Countries” com:
  - Busca textual por país
  - Filtro por sub-região
- Página de detalhes do país com informações complementares e links de mapa

## Tecnologias utilizadas

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **React Query (@tanstack/react-query)** para cache e gerenciamento de dados
- **Axios** para consumo da API
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes de interface

## Arquitetura e organização

Estrutura baseada em separação de responsabilidades:

- `modules/components/` → componentes de UI e páginas visuais
- `hook/` → hooks de dados e estado
- `services/` → camada de acesso à API
- `types/` → tipagens TypeScript
- `app/` → rotas da aplicação

Também foi aplicado o padrão de separação entre lógica e UI em partes da aplicação, facilitando manutenção e evolução.

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd <nome-da-pasta>
````
### 2. Instale as dependências

```bash
npm install
````

### 3. Configure as variáveis de ambiente
#### Crie um arquivo .env.local com:
````bash
NEXT_PUBLIC_API_BASEURL=https://restcountries.com
````

### 4. Rode o projeto
```bash
npm run dev
````

### Acesse: http://localhost:3000
