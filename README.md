# Projeto Corpo Novo - Landing Page

Site estatico de venda para o produto digital **Projeto Corpo Novo: Receitas Fitness Baratas + Rotina Saudavel de 21 Dias**.

Preco da oferta: **R$ 19,99**  
Checkout oficial: **https://pay.kiwify.com.br/RQPyQaS**

## Estrutura

```text
.
|-- index.html
|-- checkout.html
|-- gracias.html
|-- assets/
|   |-- css/
|   |   `-- style.css
|   |-- js/
|   |   `-- script.js
|   `-- images/
|       |-- favicon.svg
|       |-- projeto-corpo-novo-hero.png
|       `-- projeto-corpo-novo-mealprep.png
`-- produto-digital/
    |-- Projeto-Corpo-Novo-Produto-Digital-Completo.pdf
    |-- projeto-corpo-novo-produto-completo.html
    `-- projeto-corpo-novo-mealprep-pdf-corrigida.png
```

## Paginas

- `index.html`: pagina principal de vendas.
- `checkout.html`: resumo visual antes de enviar para a Kiwify.
- `gracias.html`: pagina de obrigado/acesso.

## Publicacao no GitHub Pages

Este projeto nao precisa de build. Para publicar, envie todos os arquivos da pasta para um repositorio GitHub e ative **Settings > Pages > Deploy from a branch**, usando a branch `main` e a pasta raiz.

Os caminhos de CSS, JavaScript e imagens sao relativos, entao funcionam bem em GitHub Pages.

## Observacoes importantes

- Nao alterar o preco sem revisar os textos de venda.
- Nao alterar o link da Kiwify sem substituir em todas as paginas.
- O arquivo do produto digital esta em `produto-digital/Projeto-Corpo-Novo-Produto-Digital-Completo.pdf`.
