# teste-cypress-ui
<h1><p align="center">Testes automatizados com Cypress </h1></p>
<p align="center">
  <img src="https://github.com/sarahdfweb/teste-cypress-ui/assets/87348787/e338f694-0fe5-414e-89b5-c7d27b6d5c9f" width="500" />  
</p>



> Para este primeiro teste, clonei este repositório no Visual Studio com o comando `git clone`, juntamente com o link do repositório, para evitar que ficasse apenas local. No `.gitignore`ao criar o repositório, escolhi a opção "Node". Para entrar na pasta, utilizei no terminal do Visual o comando `cd teste1cypress`. Em seguida, comecei a criar meu projeto Node com o comando `npm init -y`assim iniciei o projeto Node dentro da pasta 'teste1cypress' e criou um arquivo JSON, que atua como um controlador para meus pacotes e o projeto em si. Com ele, consigo gerenciar a biblioteca Cypress, que foi instalada com o comando `npm install cypress -D` (onde '-D' indica uma dependência de desenvolvimento), também no terminal. Por fim, logo após, utilizei o comando `npx cypress open` para abrir automaticamente o painel de controle do Cypress.
Criei dentro da pasta e2e o arquivo do meu primeiro teste automatizado (login.cy.js) nele precisei referenciar o cypress, então importei a biblioteca do cypress para o meu arquivo com o comando `/// <reference types="cypress"/>` e escrevi o código com três cenário um positivo e dois negativo, concluíndo os meus testes, no terminal do VS code dei um `git status` para verificar se estava na pasta como não estava dei um `ls` entrei na minha pasta `cd` para iniciar o commit  `git add.` porém precisei fazer um `git pull origin main` antes  para trazer alterações do repositório remoto para o local depois o `git commit -m` "Meu primeiro commit de teste" e foi enviado todos os commit para meu github.

<details>
<summary><h3>O código usado na automação dos cenários de teste de login</h3></summary>
  
````
/// <reference types="cypress"/>

// Cenário 01 Login válido
describe('Teste de Login', () => {
  it('Deve fazer login com sucesso', () => {
    // Visitar a página de login
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
  
    // Preencher o formulário de login
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    // Clicar no botão de login
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain', 'Minha conta')
  })
})

// Cenário 02 Usuário inválido 
describe('Teste de Login', () => {
  it('Deve fazer login com sucesso', () => {
    // Visitar a página de login
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    // Preencher o formulário de login
    cy.get('#username').type('sarah_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    // Clicar no botão de login
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain','Minha conta')
    cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
  })
})

// Cenário 03 Senha inválida 
describe('Teste de Login', () => {
  it('Deve fazer login com sucesso', () => {
    // Visitar a página de login
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    // Preencher o formulário de login
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@')
    // Clicar no botão de login
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain','Minha conta')
    cy.get('.woocommerce-error > li').should('contain','Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
  })
})
````
</details>
  
[![Assista ao vídeo] 🚀
Nesse teste foi selecionado 4 itens no carrinho escolhendo tamanho e cor do produto, adicionado ao carrinho e preenchendo o formulário de pagamento.

https://github.com/sarahdfweb/ex_st_mod12/assets/87348787/717145ed-7b41-474c-9491-26fe19da8d87
<h1><p align="center">Otimizando o código com Hook  </h1></p>

>Em Cypress, um "hook" se refere a funções especiais que são executadas em diferentes 
pontos durante a execução de um teste. Eles permitem que os desenvolvedores modifiquem 
ou personalizem o comportamento dos testes. Alguns hooks 
no Cypress incluem before, beforeEach, after, afterEach, entre outros.

>beforeEach--> Cenário ou rotina que roda antes de cada teste por exemplo acesse a url 
antes de cada teste
>
>after--> Cenário rotina que roda depois de todos os testes por exemplo limpa uma base 
de dados depois de executar os testes.
>
>afterEach--> Cenário ou rotina que roda depois de cada teste por exemplo limpar algum 
dado comum depois de cada teste mas que não é comum o uso pois o cypress já limpa 
aos dados de cada teste. 

<details>
<summary><h3>Otimizando o código com Hook</h3></summary>
  
````
/// <reference types="cypress"/>
// Cenário 01 Login válido
context('Teste de Login', () => {
 // Visitar a página de login
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
  });
 afterEach(() => {
    cy.screenshot()
 }); 
  it('Deve fazer login com sucesso', () => {
    // Preencher o formulário de login
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    // Clicar no botão de login
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain', 'Minha conta')
  })
// Cenário 02 Usuário inválido 
  it('Deve fazer login com sucesso', () => {
    // Preencher o formulário de login
    cy.get('#username').type('sarah_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    // Clicar no botão de login
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain','Minha conta')
    cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
  })
// Cenário 03 Senha inválida 
  it('Deve fazer login com sucesso', () => {
    // Preencher o formulário de login
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@')
    // Clicar no botão de login
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain','Minha conta')
    cy.get('.woocommerce-error > li').should('contain','Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
  })
})
````
</details>

<h1><p align="center">Gerando a biblioteca Faker para massa de teste   </h1></p>

> A biblioteca Faker.js é uma biblioteca JavaScript amplamente utilizada para gerar dados falsos de forma realista. Ela é frequentemente usada em testes automatizados para criar dados fictícios que podem ser utilizados durante os testes.
No contexto do Cypress, a biblioteca Faker.js pode ser utilizada para gerar dados como nomes de usuários, endereços de e-mail, senhas, números de telefone e muitos outros tipos de informações que podem ser necessárias para preencher formulários ou simular dados em testes automatizados.


<details>
<summary><h3>O código gerando a biblioteca Fake</h3></summary>
  
````
/// <reference types="cypress" />
const faker = require('faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        
    });

    it('Deve completar o Pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('sarahdfweb@13')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker);
        cy.get('#account_last_name').type(sobrenomeFaker);
        cy.get('.woocommerce-Button').click();
        cy.get('.woocommerce-message').should('exist', 'Detalhes da conta modificados com sucesso.')
   

        });
    
});


````
</details>
  
<h1><p align="center">Arquivo de dados </h1></p>

> Um "arquivo de dados" é utilizado para armazenar informações necessárias nos testes automatizados. Essas informações incluem conjuntos de dados para preencher formulários, valores de verificação após a execução de ações no aplicativo e cenários de teste variados. Ao empregar arquivos de dados, os testes tornam-se mais flexíveis e adaptáveis, permitindo a fácil modificação dos dados sem a necessidade de alterar o código do teste. Isso facilita a manutenção, reutilização e ajuste dos dados para lidar com diferentes condições de teste, proporcionando escalabilidade e eficiência na execução de testes automatizados. Por exemplo, ao testar um formulário de registro, um arquivo de dados pode conter várias combinações de informações, como nomes, endereços de e-mail e senhas, simplificando a execução de testes com conjuntos de dados diversificados.

<h1><p align="center">Modo Headless </h1></p>

> O modo headless é eficaz para a execução de testes automatizados, que dispensa a abertura do navegador com interface gráfica. Esse método é particularmente útil em cenários de testes de esteira
> execuções frequentes e agendamentos frequentes, otimizando o consumo de recursos computacionais, como memória, CPU e armazenamento de cache.

> A execução dos testes pode ser iniciada diretamente pelo terminal do Visual Studio, utilizando o comando 'npx cypress run'. Durante a execução, o log fornece informações importantes, incluindo a versão do Cypress,  
> o navegador em uso, a versão do Node, e registra detalhes abrangentes de cada teste contido na pasta 'e2e'. O log destaca claramente os testes que foram bem-sucedidos e aqueles que falharam, proporcionando uma visão 
 > abrangente do status da execução."

