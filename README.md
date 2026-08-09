# Pirate King of Movies

Interface web estatica para catalogar filmes e series, exibir paginas individuais com video e legenda, permitir busca no catalogo e demonstrar um fluxo simples de cadastro e login usando `localStorage`.

O projeto foi desenvolvido com HTML, CSS e JavaScript puros, com foco em organizacao de interface, navegacao clara, responsividade e boas praticas de estrutura de arquivos.

---

## Sumario
[dhiogo](https://www.linkedin.com/in/ruan-vitorr/)

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Paginas disponiveis](#paginas-disponiveis)
- [Fluxo de cadastro e login](#fluxo-de-cadastro-e-login)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Como executar](#como-executar)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Arquitetura CSS](#arquitetura-css)
- [Acessibilidade](#acessibilidade)
- [Limitacoes atuais](#limitacoes-atuais)
- [Melhorias futuras](#melhorias-futuras)

---

## Sobre o projeto

O **Pirate King of Movies** simula uma pequena plataforma de filmes e series. A pagina inicial apresenta conteudos em cards, separados por categoria, e cada item possui uma pagina propria com poster, descricao, player de video e legenda.

A proposta do sistema e resolver um problema comum em catalogos audiovisuais: excesso de informacao e navegacao pouco objetiva. Por isso, a interface prioriza leitura rapida, cards visuais, busca direta e acesso simples ao conteudo.

### Publico-alvo

Pessoas que consomem filmes e series e querem navegar por uma interface simples, escura, responsiva e facil de entender.

### Objetivo

Criar uma experiencia web organizada para listar, pesquisar e acessar conteudos de filmes e series, aplicando conceitos de HTML semantico, CSS modular, JavaScript de interacao e boas praticas de interface.

---

## Funcionalidades

- Catalogo de filmes e series na pagina inicial.
- Cards clicaveis por inteiro, alem do botao `Ver mais`.
- Botao `Ver mais` padronizado no rodape dos cards.
- Busca por titulo e descricao dos cards.
- Paginas individuais para cada filme ou serie.
- Player de video HTML5.
- Suporte a legendas em arquivos `.vtt`.
- Cadastro de usuario com validacao de campos.
- Login de usuario com sessao local.
- Botao `Sair` quando existe usuario logado.
- Menu responsivo para telas menores.
- Footer com links de navegacao.
- Layout responsivo com CSS Grid e Flexbox.

---

## Paginas disponiveis

### Paginas principais

- `index.html`: pagina inicial com catalogo, busca, cards e categorias.
- `cadastro.html`: formulario de cadastro.
- `login.html`: formulario de login.

### Filmes

- `batman.html`
- `superman.html`
- `flash.html`
- `homem-aranha.html`

### Series

- `supernatural.html`
- `got.html`
- `modern-family.html`
- `lucifer.html`

---

## Fluxo de cadastro e login

O projeto usa `localStorage` para demonstrar o funcionamento de cadastro e login sem precisar de backend.

### Cadastro

Na pagina `cadastro.html`, o usuario informa:

- nome completo
- email
- senha
- confirmacao de senha

O JavaScript valida:

- campos obrigatorios
- formato do email
- tamanho minimo da senha
- igualdade entre senha e confirmacao
- email duplicado

Os usuarios sao salvos na chave:

```text
pirateKingUsers
```

### Login

Na pagina `login.html`, o usuario informa:

- email
- senha

Se os dados baterem com um usuario salvo, uma sessao local e criada na chave:

```text
pirateKingSession
```

Quando existe uma sessao ativa, o link `Login` vira `Sair`. Ao clicar em `Sair`, a sessao e removida.

> Observacao importante: este fluxo e apenas demonstrativo. Em um sistema real, senhas nunca devem ser salvas em `localStorage`. O ideal seria usar backend, banco de dados, hash de senha e autenticacao segura.

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- CSS Grid
- Flexbox
- Media Queries
- Video HTML5
- WebVTT para legendas

---

## Como executar

Como o projeto e estatico, ele pode ser aberto diretamente pelo navegador. No entanto, a forma recomendada e rodar um servidor local para evitar problemas com carregamento de recursos.

### Opcao 1: usando Python

Na raiz do projeto, execute:

```bash
python -m http.server 5500
```

Depois acesse:

```text
http://127.0.0.1:5500/index.html
```

### Opcao 2: usando Node.js

Se tiver um servidor estatico instalado, como `serve`, execute:

```bash
npx serve .
```

Depois abra a URL indicada no terminal.

---

## Estrutura de pastas

```text
site-de-filmes/
├── index.html
├── cadastro.html
├── login.html
├── batman.html
├── flash.html
├── got.html
├── homem-aranha.html
├── lucifer.html
├── modern-family.html
├── superman.html
├── supernatural.html
├── README.md
├── assets/
│   └── wireframe.png
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── base.css
│   ├── layout.css
│   ├── animations.css
│   ├── responsive.css
│   ├── utilities.css
│   └── components/
│       ├── accessibility.css
│       ├── btn.css
│       ├── card.css
│       ├── filter.css
│       ├── footer.css
│       ├── form.css
│       ├── hero.css
│       ├── navbar.css
│       ├── search.css
│       └── video-player.css
├── js/
│   └── main.js
└── media/
    ├── img/
    ├── legendas/
    └── videos/
```

---

## Arquitetura CSS

O CSS foi separado por responsabilidade, seguindo uma organizacao inspirada em ITCSS e componentes reutilizaveis.

### Camadas principais

- `variables.css`: tokens de design, como cores, fontes, espacamentos, bordas e sombras.
- `reset.css`: normalizacao de estilos padrao do navegador.
- `base.css`: estilos globais do documento.
- `layout.css`: estrutura de grid, container, sidebar e paginas de detalhe.
- `utilities.css`: classes utilitarias e recursos de acessibilidade.
- `components/`: estilos especificos de navbar, cards, botoes, formularios, footer e player.

### Componentes principais

- `navbar.css`: menu principal, menu mobile e busca.
- `card.css`: cards do catalogo, hover, clique e alinhamento do botao.
- `btn.css`: botoes primarios e outline.
- `form.css`: campos, labels e mensagens de sucesso/erro.
- `video-player.css`: hero das paginas internas, player e cards de descricao.
- `footer.css`: rodape e links institucionais.

---

## JavaScript

O arquivo `js/main.js` concentra as interacoes do projeto.

Principais responsabilidades:

- abrir e fechar menu mobile
- filtrar cards pela busca
- tornar cards clicaveis
- atualizar ano do footer
- marcar link ativo da navegacao
- cadastrar usuarios no `localStorage`
- realizar login
- controlar sessao local
- alternar link `Login` para `Sair`

---

## Acessibilidade

O projeto inclui alguns cuidados de acessibilidade:

- uso de elementos semanticos como `header`, `main`, `section`, `article`, `aside` e `footer`
- textos alternativos nas imagens
- `aria-label` em navegacao e cards clicaveis
- `aria-live` para mensagens de formulario
- foco visivel via CSS
- cards acessiveis por teclado com `Enter` e `Espaco`
- link de pular para o conteudo principal

---

## Design

A interface usa tema escuro para reforcar o clima de plataforma de streaming, com contraste alto e foco em conteudo visual.

### Cores principais

- Fundo principal: `#0b0b0f`
- Fundo secundario: `#11111a`
- Cards: `#15151f`
- Marca: `#6a1b9a`
- Texto principal: `#e5e7eb`
- Texto claro: `#ffffff`

### Tipografia

- Titulos: `Poppins`
- Corpo: `Inter`

---

## Midia

Os arquivos de midia ficam em `media/`.

### Imagens

```text
media/img/
```

Contem posters dos filmes e series.

### Videos

```text
media/videos/
```

Contem arquivos `.mp4` usados nas paginas individuais.

### Legendas

```text
media/legendas/
```

Contem arquivos `.vtt` usados pelo elemento `<track>` dos videos.

---

## Limitacoes atuais

- O projeto ainda nao possui backend.
- O login e apenas demonstrativo e usa `localStorage`.
- Senhas sao armazenadas localmente para fins de prototipo.
- Nao ha banco de dados real.
- Nao ha recuperacao de senha.
- Nao ha protecao de rotas privadas.
- Os dados cadastrados ficam apenas no navegador do usuario.

---

## Melhorias futuras

- Criar backend com Node.js e Express.
- Salvar usuarios em banco de dados.
- Aplicar hash seguro nas senhas.
- Criar login com token ou sessao segura.
- Adicionar pagina de perfil do usuario.
- Permitir favoritos.
- Adicionar filtros por categoria.
- Criar avaliacao por estrelas.
- Melhorar a busca com destaque de resultados.
- Adicionar testes automatizados.
- Publicar o projeto em uma plataforma como GitHub Pages, Vercel ou Netlify.

---

## Status do projeto

Projeto em desenvolvimento.

Ja possui uma interface navegavel, paginas individuais com videos, busca, cadastro e login demonstrativo. A proxima grande evolucao seria transformar a autenticacao local em autenticacao real com backend.

---

## Autor

Desenvolvido por **Ruan Vitor** como projeto de estudo e pratica em desenvolvimento web front-end.
