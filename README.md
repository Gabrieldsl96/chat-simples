# 💬 Chat Simples

Uma aplicação web moderna de chat construída com Next.js, React e TypeScript. Este projeto permite que usuários enviem mensagens em um chat simples e interativo com interface responsiva.

🔗 **[Acesse o site aqui](https://chat-simples.gbcmtecnologia.com.br/)**

## ✨ Funcionalidades

- 💬 Sistema de chat em tempo real
- 👤 Input de nome de usuário personalizado
- 📱 Design responsivo (mobile, tablet e desktop)
- ⚡ Performance otimizada com Next.js
- 🎨 Interface moderna com Tailwind CSS
- 🔄 Gerenciamento de estado com Context API e Reducers

## 🛠️ Tecnologias Utilizadas

- **Next.js 15.5.6** - Framework React com App Router
- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **Geist Font** - Fonte otimizada do Vercel

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 18 ou superior)
- npm, yarn, pnpm ou bun

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd chat-simples
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
chat-simples/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Página principal
│   │   └── globals.css     # Estilos globais
│   ├── components/
│   │   ├── Chat.tsx        # Componente principal do chat
│   │   ├── ChatInput.tsx   # Componente de input de mensagem
│   │   ├── ChatMessages.tsx # Componente de exibição de mensagens
│   │   └── NameInput.tsx   # Componente de input de nome
│   ├── contexts/
│   │   ├── ChatContext.tsx # Context para gerenciar o chat
│   │   └── UserContext.tsx  # Context para gerenciar o usuário
│   ├── reducers/
│   │   └── chatReducer.ts  # Reducer para gerenciar mensagens
│   └── types/
│       └── Message.ts      # Tipos TypeScript
├── package.json
└── README.md
```

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Turbopack
- `npm run build` - Cria a build de produção com Turbopack
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## 📝 Como Usar

1. Ao abrir a aplicação, insira seu nome de usuário
2. Após inserir o nome, o chat será habilitado
3. Digite suas mensagens no campo de input
4. As mensagens serão exibidas no histórico do chat
5. Você pode enviar mensagens como usuário ou como bot

## 🔧 Personalização

Para personalizar o chat, você pode:

1. Modificar os estilos em `src/app/globals.css`
2. Ajustar os componentes em `src/components/`
3. Adicionar novas funcionalidades nos contexts em `src/contexts/`
4. Estender os tipos em `src/types/Message.ts`

## 👨‍💻 Autor

Gabriel Lemos
