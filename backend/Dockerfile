# Usar a imagem oficial do Node.js como base
FROM node:14

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Expor a porta em que a aplicação rodará
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["node", "src/app.js"]
