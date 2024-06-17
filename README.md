# React + TypeScript + Vite

#Descrição
Este é o repositório do desafio fullstack, na parte do front-end, desenvolvida em React utilizando Vite.

#Como Executar
Instale as dependências utilizando o comando: npm install
Rode o servidor com: npm run dev


#Estrutura de Pastas
A aplicação segue uma estrutura organizada de pastas para melhor modularização e manutenção do código. Abaixo está a descrição das pastas principais:

pages: Contém todas as páginas da aplicação. Cada página tem sua própria pasta, como auth e home. Dentro de cada pasta de página, existem as seguintes subpastas:

components: Armazena todos os componentes utilizados exclusivamente naquela página.
hooks: Contém lógicas customizadas reutilizáveis utilizadas especificamente naquela página.
store: Armazena os slices do Redux específicos daquela página, se houver.
styles: Contém arquivos de estilos CSS específicos daquela página.
types: Armazena arquivos de tipagem específicos daquela página.
validations: Contém as validações de formulários específicas daquela página.
routes: Responsável pelo roteamento das páginas da aplicação.

shared: Esta pasta contém recursos compartilhados em toda a aplicação:

services: Configura as chamadas à API e fornece funções de serviço compartilhadas.
utils: Contém funções e métodos utilitários globais que podem ser usados em diferentes partes da aplicação.
store: Configura o Redux global da aplicação, incluindo a configuração do store, reducers e middlewares globais, se houver.

Essa estrutura de pastas foi projetada para facilitar o desenvolvimento, manutenção e escalabilidade da aplicação, promovendo a reutilização de código e uma separação clara de responsabilidades entre os diferentes elementos da aplicação.





