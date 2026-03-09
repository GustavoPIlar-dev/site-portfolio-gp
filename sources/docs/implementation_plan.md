---
title: "Plano de Implementação do Portfólio Lúdico"
author: "Brainstorming AI Facilitator"
date: "2026-03-09"
---

# Objetivo
Desenvolver a primeira versão do portfólio digital enxuto de Gustavo Pilar, focado em estabelecer presença e converter contatos através de uma experiência "Lúdica e Criativa" baseada na estrutura de "Jornada Scroll".

---

## 🔒 Entendimento Lock (Assunções Base)

*   **Público/Cenário:** Visitantes buscando conhecer o profissional e entrar em contato rapidamente.
*   **Foco Principal:** Uma jornada imersiva, rápida e memorável (apenas informações essenciais para primeiro contato).
*   **Restrições Técnicas:**
    *   Arquitetura limpa usando TailwindCSS.
    *   Sem backend nesta etapa inicial.
    *   Performance otimizada (mesmo com animações CSS).
    *   Hospedagem em plataforma estática (GitHub Pages/Vercel/Netlify).

---

## 📝 Decision Log (Decisões Tomadas)

*   **Decisão 1:** A página terá o formato de "Jornada Scroll" (Opção 2).
    *   *Por que:* Permite contar uma pequena história visual enquanto o usuário descobre o conteúdo suavemente, combinando perfeitamente com a estética lúdica.
*   **Decisão 2:** O estilo visual será focado no fundo escuro com cores neon e elementos fluidos/geométricos (Hero Section imersiva).
    *   *Por que:* Confere personalidade imediata, destacando-se de portfólios corporativos comuns.
*   **Decisão 3:** A seção "Sobre Mim" usará um Avatar (ilustração) com badges interativos de tecnologias.
    *   *Por que:* Reforça a linguagem não-convencional e premia a interação do usuário (hover states).
*   **Decisão 4:** O rodapé ("Links e Contato") usará botões em formato de "Cards" grandes com reações hiper-táteis/engajadoras (ex: efeito de afundar ou pequenas animações divertidas nos ícones).
    *   *Por que:* Transforma o fim da página (o momento da conversão) em uma recompensa visual.

---

## 🛠 Plano de Implementação Proposto (Próximos Passos Físicos)

Abaixo estão os passos lógicos que um desenvolvedor (ou agente de execução) precisará seguir para transformar esse design em código:

### 1. Setup Base e Design System
*   Modificar o arquivo `index.html` existente.
*   Configurar a paleta de cores no Tailwind (criando a configuração via script customizado ou `style` block temporário).
*   *Cores Base Propostas:* Fundo base (ex: `#0B0F19`), Destaques Neon (Ciano `#00f2fe` e Rosa/Roxo `#4facfe`).
*   Configurar as fontes escolhidas pelo Google Fonts (ex: `Space Grotesk` para os títulos, `Inter` para o texto).

### 2. Implementar a Hero Section ("A Primeira Impressão")
*   Criar o container `min-h-screen` que ocupe 100% da viewport.
*   Inserir o texto central (Nome e um título de "Chamada").
*   Criar a animação sutil de fundo (pode ser feita com pseudo-elementos e CSS animations de pulsação ou "blobs" desfocados usando as classes `blur-3xl`).
*   Adicionar botão/ícone de "Scroll Down" animado (`animate-bounce`).

### 3. Implementar a Seção "Sobre Mim" ("A Descoberta")
*   Criar o layout dividido (geralmente flex, invertendo no mobile): lado A com o texto de bio curta; lado B com o espaço para o Avatar.
*   Listar as "Skills/Tecnologias" usando pequenos *badges* ou *tags* (elementos `div` ou `span` com bordas arredondadas).
*   Adicionar efeitos de hover (`hover:scale-110`, `transition-transform`) nos badges.

### 4. Implementar a Seção de Contato/Links ("Ação Rápida")
*   Criar um grid responsivo no final da página com os "Cards" para LinkedIn, GitHub e E-mail.
*   Adicionar estilos hiper-táteis: `active:scale-95` e sombras fortes no hover para criar o efeito de clique agradável.
*   Adicionar o *easter-egg* ou aviso sutil no texto do copyright.

### 5. Finalização e Polimento
*   Revisão da Responsividade (testar no layout Mobile).
*   Revisão de Performance (verificar se as animações CSS estão ocorrendo na GPU evitando lentidão de scroll).

---

## User Review Required
> [!IMPORTANT]
> A estrutura e a estética da página foram solidificadas. 
> Antes de qualquer inserção ou edição no código, eu preciso que você valide se este `implementation_plan` traduziu bem tudo o que decidimos.
