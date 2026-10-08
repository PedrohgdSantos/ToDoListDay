# To Do List Day

**To Do List Day** é uma aplicação web desenvolvida com React, TypeScript e Create React App para ajudar o usuário a organizar tarefas do dia. A interface é apresentada em português e permite criar, consultar, editar e excluir tarefas com diferentes níveis de dificuldade.

O projeto foi criado para facilitar o acompanhamento de tarefas pessoais e o gerenciamento de uma lista cotidiana, oferecendo uma experiência simples e direta.

## Funcionalidades

- Criar uma nova tarefa com título e dificuldade.
- Visualizar todas as tarefas cadastradas.
- Editar uma tarefa existente.
- Excluir uma tarefa.
- Exibir uma mensagem quando não há tarefas.
- Usar componentes React para manter a interface organizada.

> As tarefas são mantidas em estado local da aplicação. Isso significa que os dados não são persistidos após o recarregamento ou fechamento da página.

## Tecnologias

- **React 19** para construir a interface.
- **TypeScript** para tipar os dados e os componentes.
- **Create React App** para gerenciar o projeto e executar o build.
- **CSS Modules** para organizar os estilos dos componentes.
- **Jest** e **Testing Library** disponíveis para testes e validação de componentes.

## Estrutura do projeto

```text
src/
├── App.tsx                 # Composição da aplicação e gerenciamento do estado
├── App.module.css           # Estilos da aplicação principal
├── index.css                # Estilos globais
├── components/
│   ├── Header.tsx           # Cabeçalho da aplicação
│   ├── Header.module.css     # Estilos do cabeçalho
│   ├── Footer.tsx           # Rodapé da aplicação
│   ├── Footer.module.css     # Estilos do rodapé
│   ├── TaskForm.tsx         # Formulário de criação e edição
│   ├── TaskForm.module.css   # Estilos do formulário
│   ├── TaskList.tsx         # Lista de tarefas
│   ├── TaskList.module.css   # Estilos da lista
│   └── Modal.tsx            # Modal de edição
├── interfaces/
│   └── Task.ts              # Interface dos dados da tarefa
└── *.module.css             # Estilos adicionais do projeto
```

## Requisitos

Antes de executar o projeto, verifique se você possui:

- Node.js instalado.
- npm instalado.
- Git instalado, caso queira clonar o repositório.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/PedrohgdSantos/ToDoListDay.git
cd ToDoListDay
```

Instale as dependências:

```bash
npm install
```

## Executar a aplicação

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicação ficará disponível em:

[http://localhost:3000](http://localhost:3000)

Durante o desenvolvimento, o navegador será atualizado automaticamente quando os arquivos forem alterados.

## Validar o projeto

Para executar os testes:

```bash
npm test
```

Para criar uma versão de produção:

```bash
npm run build
```

O resultado do build será gerado na pasta `build`.

## Como usar

1. Abra a aplicação no navegador.
2. Informe o título da tarefa e sua dificuldade.
3. Clique em **Criar tarefa** para adicionar a tarefa à lista.
4. Use os botões de edição e exclusão para alterar ou remover uma tarefa.

## Contribuição

Fique à vontade para contribuir com o projeto. Para isso, faça um fork do repositório, crie uma branch para sua alteração, implemente a mudança e envie um pull request.

## Licença

Este projeto foi desenvolvido como uma aplicação pessoal e não possui uma licença específica documentada.
