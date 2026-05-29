# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)                                                                                                                                                                                                                                                                                                                
# 📝 Todo React Avançado

## 📌 Descrição do Projeto

Aplicação de lista de tarefas (Todo List) desenvolvida com React, utilizando conceitos avançados como Hooks, Context API, Hooks customizados e técnicas de otimização de performance.

O objetivo do projeto é demonstrar boas práticas de organização, reutilização de código e gerenciamento de estado em aplicações modernas React.

---

## 🚀 Funcionalidades

* ✅ Adicionar novas tarefas
* ✔️ Marcar tarefas como concluídas
* ❌ Remover tarefas
* 🔍 Filtrar tarefas:

  * Todas
  * Concluídas
  * Pendentes
* 💾 Persistência de dados com localStorage

---

## 🧠 Conceitos Aplicados

### 🔹 Hooks

* `useState` → gerenciamento de estado
* `useEffect` → persistência no localStorage

### 🔹 Context API

* Gerenciamento global do estado da aplicação
* Compartilhamento de dados entre componentes

### 🔹 Hooks Customizados

* `useLocalStorage` para reutilização da lógica de armazenamento

### 🔹 Memoization

* `useMemo` → otimização de filtros
* `React.memo` → evitar renderizações desnecessárias

---

## 🏗️ Estrutura do Projeto

```
src/
│
├── components/
│   ├── TodoItem/
│   ├── TodoList/
│   ├── TodoForm/
│   ├── TodoFilters/
│
├── context/
│   └── TodoContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🛠️ Tecnologias Utilizadas

* React
* JavaScript (ES6+)
* Vite
* HTML5
* CSS3

---

## ▶️ Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/todo-react-avancado.git
```

### 2. Acessar a pasta do projeto

```bash
cd todo-react-avancado
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Rodar o projeto

```bash
npm run dev
```

---

## 📈 Melhorias Futuras

* Interface com Tailwind CSS
* Animações com Framer Motion
* Testes automatizados
* Integração com API externa

---

## 👨‍💻 Autor

Gabriel Neves

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
