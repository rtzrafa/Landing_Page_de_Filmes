# 🎬 MovieCity — Landing Page de Filmes

<p align="center">
  <strong>Uma experiência visual para quem ama cinema.</strong>
</p>

<p align="center">
  Uma landing page inspirada em plataformas de streaming, desenvolvida com React, Vite, JavaScript e CSS puro.
</p>

---

## 📌 Sobre o projeto

O **MovieCity** é um projeto desenvolvido com o objetivo de praticar o desenvolvimento front-end por meio da criação de uma landing page de filmes.

A interface apresenta um design moderno, com fundo escuro, destaques em vermelho ou azul, navegação intuitiva e cards com imagens de filmes e séries.

O projeto foi desenvolvido para aplicar conceitos de componentização no React, estilização com CSS e criação de layouts responsivos para diferentes tamanhos de tela.

## 🎯 Objetivos

- Desenvolver uma interface moderna para uma plataforma fictícia de filmes.
- Praticar a criação e reutilização de componentes React.
- Organizar o projeto em arquivos e pastas.
- Aplicar conceitos de CSS puro e responsividade.
- Implementar um menu de navegação adaptável para dispositivos móveis.
- Trabalhar com imagens e elementos visuais em uma página web.

## ✨ Funcionalidades

- **Cabeçalho de navegação:** logo MovieCity e links para Filmes, Categoria, Sobre e Contato.
- **Botão de Login:** elemento visual de acesso à conta.
- **Seção principal:** apresentação da plataforma com título, descrição e botão Mais.
- **Galeria de filmes:** seis cards com imagens de filmes e séries.
- **Efeitos visuais:** animação ao passar o cursor sobre os cards.
- **Menu responsivo:** menu hambúrguer para dispositivos com telas menores.
- **Layout adaptável:** organização dos elementos para computadores, tablets e celulares.

> Observação: o Login e o botão Mais são elementos visuais nesta versão. A aplicação não possui autenticação nem sistema de reprodução de filmes implementados.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| React 19 | Construção da interface por componentes |
| Vite 7 | Servidor de desenvolvimento e build |
| JavaScript (ES Modules) | Lógica da aplicação |
| CSS3 | Estilização, animações e responsividade |
| HTML5 | Estrutura base da aplicação |
| ESLint | Verificação e padronização do código |
| Git e GitHub | Versionamento e hospedagem do código-fonte |

## 🖥️ Prévia do projeto

A interface foi planejada com fundo preto, tipografia clara, botões destacados e uma galeria de seis imagens organizadas em grade.

No computador, o conteúdo principal fica dividido entre o texto de apresentação e os cards de filmes. Em telas menores, as colunas se reorganizam para facilitar a navegação.

## 📂 Estrutura de pastas

```text
01_landinpage/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── afterlife.jpg
│   │   ├── transformers.jpg
│   │   ├── mowgli.jpg
│   │   ├── shift.png
│   │   ├── squidgame.webp
│   │   └── harrypotter.jpg
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Main.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── eslint.config.js
├── package.json
└── vite.config.js
```

*Os nomes das imagens e os arquivos apresentados devem corresponder à estrutura real do projeto. Arquivos que não são utilizados podem ser removidos.*

## ⚙️ Como executar o projeto

### 1. Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/) — versão compatível com o Vite utilizado no projeto.
- [Visual Studio Code](https://code.visualstudio.com/).
- Um navegador atualizado, como Google Chrome ou Microsoft Edge.

O npm é instalado junto com o Node.js.

### 2. Clonar o repositório

Caso o projeto esteja publicado no GitHub, execute:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Substitua `URL_DO_SEU_REPOSITORIO` pelo endereço real do seu repositório.

Entre na pasta do projeto:

```bash
cd 01_landinpage
```

Se você já possui o projeto no computador, basta abrir sua pasta no VS Code.

### 3. Instalar as dependências

No terminal, execute:

```bash
npm install
```

### 4. Iniciar o servidor

Execute:

```bash
npm run dev
```

O Vite exibirá um endereço local, geralmente:

```text
http://localhost:5173
```

Abra esse endereço no navegador para visualizar o MovieCity.

### 5. Verificar o projeto

Para analisar o código:

```bash
npm run lint
```

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## 📱 Responsividade

O MovieCity utiliza CSS responsivo para adaptar a interface a diferentes dimensões de tela.

- **Computadores:** texto de apresentação ao lado da galeria, com três colunas de cards.
- **Tablets:** espaçamentos e tamanhos ajustados para a largura disponível.
- **Celulares:** conteúdo empilhado, cards em duas colunas e menu hambúrguer.
- **Telas pequenas:** redução de fontes, espaçamentos e altura dos cards.

A responsividade é implementada com Flexbox, CSS Grid e media queries.

## 🧩 Componentização

O projeto é dividido em três componentes principais:

### `Header.jsx`

Responsável pelo cabeçalho, pela logo, pelos links de navegação, pelo botão Login e pelo menu hambúrguer.

### `Main.jsx`

Responsável pelo conteúdo principal, pelo texto de apresentação, pelo botão Mais e pelos seis cards de filmes.

### `Home.jsx`

Funciona como componente principal da página, reunindo o cabeçalho e o conteúdo.

O arquivo `App.jsx` importa o CSS global e renderiza o componente `Home`.

## 📚 Conceitos praticados

Durante o desenvolvimento, são trabalhados conceitos importantes do desenvolvimento front-end:

- Componentes funcionais do React.
- Importação e exportação de módulos.
- Hooks do React, como `useState`.
- Renderização de elementos com JavaScript.
- Classes CSS e seletores.
- Flexbox e CSS Grid.
- Media queries e design responsivo.
- Organização de arquivos e recursos.
- Execução de scripts com npm.
- Verificação de código e build de produção.

## 🚀 Possíveis melhorias futuras

O projeto pode evoluir com a implementação de novas funcionalidades:

- Adicionar títulos, sinopses e avaliações aos filmes.
- Criar páginas de detalhes para cada filme.
- Implementar pesquisa por título.
- Adicionar filtros por categoria e gênero.
- Integrar uma API de filmes, como a TMDB.
- Criar um carrossel para dispositivos móveis.
- Implementar cadastro e autenticação de usuários.
- Desenvolver uma lista de favoritos.
- Publicar a aplicação em uma plataforma de hospedagem.

Essas melhorias são sugestões para futuras versões e não fazem parte das funcionalidades já implementadas.

## 🎓 Finalidade acadêmica

Este projeto foi desenvolvido como atividade prática de desenvolvimento web, com foco na criação de uma landing page utilizando React, Vite, JavaScript e CSS puro.

A proposta é consolidar conhecimentos sobre componentização, organização do código, estilização e responsividade, aplicando esses conceitos em uma interface de entretenimento digital.

## 👨‍💻 Autor

**Pedro Henrique Gonzaga Castro**

Estudante de Desenvolvimento de Sistemas.

---

<p align="center">
  🎬 <strong>MovieCity</strong> — Sua próxima experiência cinematográfica começa aqui.
</p>
