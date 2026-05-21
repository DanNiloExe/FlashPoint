# ⚡ FlashPoint

> Resenhas rápidas, leves e bem-humoradas de jogos, livros, filmes, séries e música.

O **FlashPoint** é um repositório web pessoal projetado para catalogar e centralizar reviews de diversas mídias da cultura pop. O sistema foi desenvolvido com foco em performance, utilizando HTML5 e CSS3 puros, apresentando uma interface limpa, scannable (fácil leitura rápida) e totalmente responsiva.

---

## 📂 Estrutura de Diretórios

O projeto adota uma arquitetura de caminhos relativos rigorosa para separação de conteúdo (HTML) e recursos visuais (Assets):

```text
├── assets/
│   └── imagens/
│       ├── consumindo-atualmente/      # Destaques da página principal
│       ├── filmes/
│       │   └── blade-runner/ # Imagens internas do filme
│       │   └── de-volta-para-o-futuro/ # Imagens internas do filme
│       │   └── matrix/ # Imagens internas da obra
│       │   └── o-diabo-veste-prada-2/ # Imagens internas do filme
│       │   └── palm-springs/ # Imagens internas do filme
│       ├── jogos/
│       │   └── darkest-dungeon/ # Imagens internas do jogo
│       │   └── unknowz/ # Imagens internas do jogo
│       ├── livros/
│       │   └── devoradores-de-estrelas/ # Imagens internas da obra
│       ├── musica/
│       │   └── heavy-serenade/         # Imagens internas do álbum
│       └── series/
├── reviews/
│   ├── filmes/
│       └── blade-runner.html
│       └── de-volta-para-o-futuro.html
│       └── matrix.html
│       └── o diabo-veste-prada-2.html
│       └── palm-springs.html
│   ├── jogos/
│       └── darkest-dungeon.html
│       └── unknowz.html
│   ├── livros/
│   │   └── devoradores-de-estrelas.html
│   └── musicas/
│       └── heavy-serenade.html
│   └── series/
├── index.html                           # Landing page / Hub principal
└── style.css                            # Estilização global unificada
```
## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica de artigos (`<article>`, `<section>`, `<main>`, `<header>`).
* **CSS3:** Layouts baseados em variáveis globais, Flexbox, Grid e navegação por abas baseada em seletores nativos (`input[type="radio"]`).
* **JavaScript (Vanilla):** Scripts pontuais e leves, como a barra de progresso de leitura dinâmica no topo das reviews.

---

## 📊 Padrão de Design das Reviews

Cada página de review localizada dentro da pasta `reviews/` segue uma estrutura modular padrão para garantir consistência visual:

* **Barra de Progresso:** Indicador visual fixo no topo que acompanha o scroll do usuário.
* **Hero Section:** Título, subtítulo, tags de caracterização e uma Ficha Técnica detalhada.
* **Bloco de Disponibilidade:** Links rápidos com chips visuais para plataformas oficiais (Spotify, Apple Music, Steam, etc.).
* **Score Row:** Destaque para a Nota Flash (escala de 1 a 10) e metadados de leitura.
* **Corpo do Texto:** Parágrafos justificados intercalados com grids de imagens (`split-content`) e citações em destaque (`<blockquote>`).
* **Top Faixas / Conteúdo Mínimo:** Lista ordenada destacando os pontos altos da obra analisada. (Quando se tratando de álbuns)
* **Prós e Contras:** Painel comparativo (`pros-cons-container`) com ícones dinâmicos de sucesso e erro.
* **Comments Section:** Área dedicada para engajamento e discussões da comunidade.

---

## ✍️ Autor

* **Danilo José** - *Desenvolvimento e Conteúdo*
  * [LinkedIn](https://www.linkedin.com/in/danilojose-dev)
  * [GitHub](https://github.com/DanNiloExe)

---

## 📝 Licença

FLASHPOINT © 2026. Todos os direitos reservados.
FLASHPOINT © 2026. Todos os direitos reservados.

