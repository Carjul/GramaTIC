FROM tomsik68/xampp:latest

# Adicione quaisquer comandos adicionais que você precise executar durante a construção da imagem

# Exemplo de comando: copie um arquivo para o contêiner
COPY ./meu-arquivo.php /opt/lampp/htdocs/

# Exemplo de comando: defina as variáveis de ambiente
ENV MEU_ENV=valor

# Exemplo de comando: execute um comando durante a construção da imagem
RUN echo "Comando executado durante a construção da imagem"

# Exemplo de comando: especifique o diretório de trabalho
WORKDIR /opt/lampp/htdocs/

# Exemplo de comando: exponha uma porta
EXPOSE 80

# Exemplo de comando: defina um comando padrão a ser executado quando o contêiner for iniciado
CMD ["/opt/lampp/lampp", "start"]
