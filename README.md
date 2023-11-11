# Empresa Carioca

A criação de um feed de noticias que deve notificar as pessoas com as mais recentes adições de monumentos e edifícios com suas histórias.


# 5W2H

1-O que:
- Um aplicativo para a passeios carioca que conta a história dos imóveis através de entrevista com síndicos e residentes. Além de ser um turismo arquitetônico, sobre o estilo dos prédios.

2-Como:
- A função será desenvolvida como uma extensão do aplicativo do PasseioCarioca através de um sistema de feed baseado em pontos de interesse recém adicionados pelo adm do app.

3-Quem:
- Pessoas interessadas em conhecer locais interessantes e suas histórias.

4-Por que:
- O aplicativo incluirá uma página inicial com um mapa mostrando os imóveis no Rio de janeiro com base na localização do usuário para instigar as pessoas a conhecerem locais de turismo que nunca foram explorados por esses usuários.

5-Onde:
- Na página principal, no canto direito em cima, proporcionando uma experiência unificada aos usuários interessados pelo feed dos locais récem adicionados proximos em uma exploração ao Rio de Janeiro.

6-Quando:
- O aplicativo estará disponível para uso assim que o projeto for finalizado e estiver pronto para ser lançado. O momento exato do lançamento dependerá da conclusão do desenvolvimento e da aprovação do proprietário, que demonstrou interesse em utilizar a ferramenta.

# Requisitos Funcionais e Não funcionais

# Requisitos Funcionais
1. O sistema ficará embaixo da busca, no canto direito da tela(em destaque).
2. O sistema,ao clicar no feed, o mapa irá ocultar os pontos que já estavam adicionados e mostrar apenas os últimos pontos adicionados e de outra cor.
3. O sistema do ponto de interesse terá forma de exibir as imagens a a história contada com as cores diferenciadas. 
4. O sistema é baseado nos últimos imóveis adicionados no aplicativo, possuindo imagens e informações.	
5. O sistema vai estar visivel na tela inical de seu aplicativo (proporcional a tela).		
6. O sistema tem uma Página Home, demonstrando o mapa com os imóveis recém adicionados.

# Requisitos Não-Funcionais

  1. O sistema será feito com as linguagens JS(JavaScript) e ReactJS.	
  2. É necessario tecnólogos que possuem conhecimentos para desenvolvimento do Sofware

# Propósito do sistema

Notificar aos usuários quando um novo lugar for adicionado ao aplicativo, junto as suas caracteristicas como sua historia e curiosidades.

# Casos de Uso: 

Botão de Interação para o Feed

	Caso de Uso Geral: Inicializa um botão a Página Home

  	Ator Principal: Administrador.

    	Ator Secundário: Usuário.

     	Resumo: O sistema inicializa um botão na Página Home na qual redirecionar o feed.

      	Pré-Condições: O usuário deve estar logado no sistema.

       Pós-Condiçõe: O sistema deve inicializar o botão para o feed

       Fluxo Principal:

       1.Fazer login no sistema.
       2. O usuário abre o aplicativo e visualiza a notificação no feed de notícias na página inicial.
       3. O usuário acessa o feed ao clicar no botão.

       Fluxo Alternativo:

       1. Seleciona o opção de retornar a pagina Home.
       2. Seliciona o logo do software , retornando a pagina Home.

Notificação de Novos Locais Adicionados

	Caso de Uso Geral: Adicionar locais para o Feed.
 
	Ator Principal: Administrador.
 
	Ator Secundário: Usuário.
 
	Resumo: O software gera um novo ponto no software e e notificar o usuário.
 
	Pré-Condições: O usuário deve estar logado no sitema.
 
	Pós-Condições: O administrador deve ter adiicionado novos locais ao aplicativo.

 	Fluxo Principal:
  
	1.Fazer login no sistema.
 	2. O usuário abre o aplicativo e visualiza a notificação no feed de notícias na página inicial.
	3. O sistema detecta que novos locais foram adicionados pelo administrador através de um feed localizado abaixo da busca no lado direito da página inicial.
	4. O sistema gera uma notificação no feed de notícias, destacando os novos locais adicionados.
	5. O usuário clica na notificação para ver mais detalhes sobre os novos locais. 
 	6.O sistema oculta os pontos antigos no mapa e destaca os novos locais em uma cor diferente. Assim o usuário pode clicar em cada local para ver imagens e ler sobre a história do local.


	Fluxo Alternativo:
	1. Se o usuário não estiver interessado nos novos locais, ele pode ignorar a notificação e continuar usando o aplicativo.
 	2. O usuário pode retornar a Home.


# Link Protótipo Figma
https://www.figma.com/file/oQn2y8GXz7JwIDHzV2mtE3/Untitled?type=design&node-id=13-8&mode=design&t=d5wWadZpMa0XkHfG-0

% Link ScramBanBoard (Trello)
https://trello.com/b/bImn7Bmx/tarefas
