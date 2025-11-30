# 💻 Portfólio Dinâmico e Interativo

## Descrição do Projeto

Desenvolvimento de um portfólio web dinâmico, utilizando JavaScript puro para gerenciar e exibir projetos de forma interativa. O objetivo é criar uma vitrine profissional que demonstre não apenas os projetos concluídos, mas também a habilidade de manipular o DOM e implementar lógica de interface complexa.

## 🎯 Desafio

O desafio foi criar uma experiência de usuário fluida e envolvente, onde os projetos pudessem ser navegados e filtrados sem a necessidade de recarregar a página, destacando a capacidade técnica do desenvolvedor.

## ✨ Solução: Análise de Pontos Fortes do JavaScript

A lógica implementada no JavaScript é o coração deste portfólio e demonstra habilidades sólidas em desenvolvimento front-end:

1.  **Gerenciamento de Estado Centralizado:** O array `projetos` atua como a única fonte de verdade (Single Source of Truth), armazenando todos os dados de forma organizada e estruturada.
2.  **Carrossel de Projetos (Slider):** A implementação de um carrossel com navegação manual (`right`, `left`) e automática (`setInterval`) demonstra domínio sobre a manipulação de eventos e lógica de temporização. O uso do operador módulo (`% listaFiltrada.length`) garante que a navegação seja cíclica e robusta.
3.  **Filtros Dinâmicos (`filtro` function):** A função `filtro` utiliza o método `Array.prototype.filter()` para criar uma nova lista de projetos (`listaFiltrada`) com base na categoria. Isso é uma excelente prática de programação funcional, mantendo o array original (`projetos`) imutável e garantindo que a interface seja atualizada dinamicamente.
4.  **Transições Suaves (UX):** O uso de `opacity = 0` seguido por um `setTimeout` antes de atualizar o conteúdo e restaurar a opacidade cria um efeito de *fade-in/fade-out* (transição suave), melhorando significativamente a experiência do usuário.
5.  **Modularidade e Clareza:** O código é bem organizado em seções (`PROJETOS`, `ELEMENTOS`, `AUTO PLAY`, `FILTROS`), facilitando a leitura e a manutenção.

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologias |
| :--- | :--- |
| **Front-end** | HTML5, CSS3, JavaScript (Puro) |
| **Lógica** | Manipulação do DOM, Funções de Ordem Superior (`filter`), Lógica de Carrossel Cíclico |
| **UX** | Transições de Opacidade (Fade), Navegação por Eventos |

## 📈 Resultados Esperados

O portfólio demonstra as seguintes habilidades:

*   **Habilidade em JavaScript:** Capacidade de criar componentes interativos complexos sem depender de bibliotecas externas.
*   **Foco em UX:** Preocupação com a fluidez e a estética da navegação.
*   **Organização de Dados:** Habilidade em estruturar dados de forma eficiente para consumo pela interface.

## 🔗 Acesso ao Projeto

https://joel-rian.github.io/Portifolio/

---
*Desenvolvido por Yerijhon Rian*
