# fake-store-service

serviço que se comunica com a fake-store api: https://fakestoreapi.com/docs.

## Rodando aplicação com suas dependências
Veja https://github.com/Joaoasbittencourt/microservices-user-manager


## Como rodar aplicação sem dependências
 1. Certifique-se de que todas as aplicações dependências estão rodando
 2. Certifique-se de ter docker instalado
 3. docker build . -t fake-store-service
 4. docker run -p 5000:5000 fake-store-service
