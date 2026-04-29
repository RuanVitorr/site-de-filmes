# 🎬 Pirate King of Movies

## 📌 Visão Geral

O projeto **Pirate King of Movies** consiste no desenvolvimento de uma interface web voltada para a visualização organizada de conteúdos relacionados a filmes e séries. A aplicação foi construída utilizando HTML5, CSS3 e JavaScript, com foco em boas práticas de engenharia de interface, acessibilidade e organização de código.

---

## 🧠 Definição do Problema

### Contexto
O consumo de conteúdos audiovisuais, como filmes e séries, tem crescido significativamente. No entanto, muitas plataformas apresentam excesso de informações, interfaces complexas e navegação pouco intuitiva.

### Público-alvo
Jovens e adultos que consomem filmes e séries e utilizam a internet com frequência, buscando informações rápidas e organizadas.

### Dor principal (Pain Point)
Dificuldade em encontrar conteúdos de forma simples, organizada e acessível em uma única plataforma.

### Critério de sucesso
O usuário consegue acessar informações sobre filmes e séries em poucos segundos, de forma intuitiva, com navegação clara e leitura facilitada.

---

## 🎯 Objetivo do Projeto

Desenvolver uma interface web que apresente filmes e séries de forma clara, organizada e intuitiva, aplicando princípios de design de interface, acessibilidade e estruturação semântica.

---

## ⚙️ Funcionalidades

- Visualização de filmes organizados em cards
- Visualização de séries organizadas em cards
- Acesso a páginas individuais com detalhes
- Reprodução de vídeos nas páginas individuais
- Suporte a legendas em vídeos
- Campo de busca para pesquisa de conteúdos
- Navegação através de menu principal
- Acesso à página de cadastro
- Exibição de categorias na barra lateral

---

## 🧩 Wireframe

O wireframe foi elaborado com o objetivo de definir a estrutura da interface antes da implementação visual, focando na organização dos elementos e hierarquia de conteúdo.

### Hierarquia da Informação

- Alta: Header (título, navegação e busca), seções de filmes e séries  
- Média: Notícias e categorias  
- Baixa: Rodapé  

### Estrutura

- Header com título, navegação e busca
- Conteúdo principal dividido em:
  - Filmes
  - Séries
  - Notícias
- Barra lateral com categorias
- Rodapé com informações institucionais

O wireframe encontra-se disponível em:

assets/wireframe.png

---

## 🧠 Arquitetura de Informação

A arquitetura do projeto foi definida com base nos princípios de organização, rotulagem e navegação:

### Organização
Conteúdos agrupados em:
- Filmes
- Séries
- Notícias
- Categorias

### Navegação
- Menu principal direcionando para cadastro
- Links internos conectando páginas de conteúdo
- Navegação direta através dos cards

### Rotulagem
Uso de nomes claros e objetivos para facilitar a compreensão do usuário.

---

## 🎨 Sistema de Cores

A paleta de cores foi definida com foco em contraste e legibilidade, seguindo recomendações de acessibilidade (WCAG 2.1 - nível AA).

### Cores principais

- Cor primária: #6A1B9A  
- Fundo principal: #0B0B0F  
- Fundo secundário: #15151F  
- Texto principal: #E5E7EB  
- Borda: #222222  

A escolha de cores proporciona boa leitura em ambiente escuro e reduz fadiga visual.

---

## 🔤 Tipografia

A tipografia foi definida para garantir legibilidade e hierarquia visual.

### Fontes

- Títulos: Arial / Helvetica (sans-serif)  
- Corpo de texto: Arial / Helvetica (sans-serif)  

### Escala tipográfica

- H1: 2.5rem  
- H2: 1.8rem  
- H3: 1.3rem  
- Texto padrão: 1rem  
- Texto secundário: 0.9rem  

A hierarquia tipográfica facilita a escaneabilidade e organização da informação.

---

## 🗂️ Organização do Projeto (ITCSS)

O projeto segue a metodologia ITCSS, organizando os estilos de forma escalável e modular.

### Estrutura de pastas

projeto/
├── index.html
├── README.md
├── assets/
│   └── wireframe.png
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── base.css
│   ├── layout.css
│   ├── utilities.css
│   └── components/
│       ├── nav.css
│       ├── hero.css
│       ├── card.css
│       └── footer.css
├── js/
│   └── main.js
├── media/
│   ├── img/
│   ├── videos/
│   └── legendas/
├── cadastro.html
├── batman.html
├── flash.html
├── got.html
├── homem-aranha.html
├── lucifer.html
├── modern-family.html
├── superman.html
├── supernatural.html

---

## ⚙️ Tecnologias Utilizadas

- HTML5 (estrutura semântica)
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (interações básicas)
- VS Code (ambiente de desenvolvimento)

---

## ♿ Acessibilidade

O projeto aplica boas práticas de acessibilidade:

- Uso de HTML semântico
- Textos alternativos em imagens
- Foco visível em elementos interativos
- Navegação por teclado
- Contraste adequado entre texto e fundo

---

## 🧪 Validação

O projeto foi testado garantindo:

- Layout responsivo em diferentes resoluções
- Funcionamento de links e navegação
- Reprodução de vídeos e legendas
- Ausência de erros no console do navegador

---

## ✅ Conclusão

O projeto demonstra a aplicação prática de conceitos de engenharia de interface, incluindo planejamento, organização de código, acessibilidade e estruturação visual.

A abordagem adotada permite fácil manutenção, escalabilidade e boa experiência do usuário.

---