# hacka60-include-cbrain - Intérprete virtual

## Equipe: #include (cbrain)
## Membros:
Guilherme Henrique

Matheus Dias

Watyson Guimarães

Gabriel Diniz

Márcio Antusa

## Problema:
Uns dos problemas que a pessoa surda sofre, quando usa somente libras para se comunicar,  é a dificuldade em apresentar seminário sem intérprete disponível para ajudá-lo. Essa situação pode ocorrer na escola, faculdade e até em empresas.

## Solução:
 A solução é um software, o intérprete virtual, que possa traduzir de libras para português, por meio de uma câmera, gerando legendas. O software vai fazer leitura de mão em tempo real e gerando uma legenda em português.

## Projeto:
Pegamos dois projetos para ajudar a atingir nosso objetivo principal. Esses dois projetos foram:

Projeto Fingerpose do autor andypotato:

https://openbase.io/js/fingerpose/documentation

https://github.com/andypotato/fingerpose

Projeto Handpose da empresa TensorFlow:

https://github.com/tensorflow/tfjs-models/tree/master/handpose

## Intrusção para rodar:

Obs.: Foi testado apenas no Windows

1)Instalar node.js
https://nodejs.org/en/download/

2)Abrir prompt de comando e usar comando:
cd <colocar o caminho até a pasta hacka60-include-cbrain-master>

Exemplo:
C:\Users\guina\Downloads\hacka60-include-cbrain-master

3)Usar os seguintes comandos:

npm install react-webcam

npm install @tensorflow/tfjs @tensorflow-models/handpose react-webcam

npm run start


E pronto, ele vai abrir o navegador, como o Google Chrome, e rodar a aplicação.
É bom esperar um pouco para carregar, para aparecer as linhas na mão.
