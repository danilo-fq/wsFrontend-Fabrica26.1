# Rick and Morty Portal Gun

Projeto desenvolvido como desafio prático da **Fábrica de Software 26.1**, com o objetivo de consumir a [Rick and Morty API](https://rickandmortyapi.com/) e construir uma interface para explorar os personagens da série.

🔗 **[Acesse o projeto online](https://ws-frontend-fabrica26-1-ar7oq7vsl-danilofqs-projects.vercel.app/)**

---

## Sobre o projeto

A ideia foi criar uma aplicação que permitisse navegar pelos personagens do universo Rick and Morty de forma simples e intuitiva. Dá pra buscar por nome, filtrar por status e ver os detalhes de cada personagem.

---

## Funcionalidades

- Landing page com listagem de personagem com imagem, nome, status e espécie
- Busca por nome com debounce — não fica disparando requisição a cada letra
- Filtro por status: Alive, Dead e Unknown
- Toggle entre visualização em grid e lista
- Página de detalhe com origem, localização, gênero e episódios
- Estados de loading, erro e resultado vazio

---

## Tecnologias

- [Next.js 15](https://nextjs.org/) — framework React com App Router
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização
- [Lucide React](https://lucide.dev/) — ícones
- [Biome](https://biomejs.dev/) — linter e formatter
- [Rick and Morty API](https://rickandmortyapi.com/) — fonte dos dados

---

## Como rodar localmente

Pré-requisitos: Node.js 18+ instalado.

```bash
# clone o repositório
git clone https://github.com/danilo-fq/wsFrontend-Fabrica26.1.git

# acesse a pasta
cd wsFrontend-Fabrica26.1

# instale as dependências
npm install

# rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no navegador.

---

## Estrutura de pastas

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── characters/
│       └── [id]/
│           └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CharacterCard.tsx
│   ├── CharacterDetailsCard.tsx
│   ├── CharacterDetailsEpisodesList.tsx
│   ├── CharacterDetailsHeader.tsx
│   ├── CharacterDetailsInfoCard.tsx
│   ├── CharacterList.tsx
│   ├── ErrorCard.tsx
│   ├── Filterbar.tsx
│   ├── IsLoadingCard.tsx
│   ├── SearchBar.tsx
│   ├── ToggleList.tsx
│ 
├── services/
│   └── characters.ts
└── types/
    └── character.ts
    └── status.ts
```

---

## Feito por

Danilo — estudante de Análise e Desenvolvimento de Sistemas.

[![GitHub](https://img.shields.io/badge/GitHub-danilo--fq-181717?style=flat&logo=github)](https://github.com/danilo-fq)
