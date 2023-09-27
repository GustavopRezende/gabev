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

#Requisitos Funcionais
1. O sistema ficará embaixo da busca, no canto direito da tela, chamando a atenção do usuário.
2. Ao clicar no feed, o mapa irá ocultar os pontos que já estavam adicionados e mostrar apenas os últimos pontos adicionados e de outra cor, ao invés do localizador ser azul será laranja isso fará com que o app não mude o padrão dele, do usuário escolher através do local.
3. O ponto de interesse terá forma de exibir as imagens a a história contada com as cores diferenciadas, chamando atenção para o nosso trabalho. 
4. O cliente possui interesse em uma criação de um sistema baseado nos últimos imóveis adicionados no aplicativos possuindo imagens e informações.	
5. O cliente não ficará satisfeito se o sistema não estiver visivel na tela inical de seu aplicativo (proporcional a tela).		
6. O cliente relatou sobre seu software, tendo como o objetivo o usuário acessar uma página Home, demonstrando um mapa tendo os imóveis recém adicionados.

#Requisitos Não-Funcionais

  1. Uilizar para a criação do sistema a linguagem JS(JavaScript) e ReactJS.
	
  2. O cliente é um empresário portanto não possui conhecimentos técnicos para desenvolvimento de software.

# Propósito do sistema

Notificar aos usuários quando um novo lugar for adicionado ao aplicativo, junto as suas caracteristicas como sua historia e curiosidades.

# Casos de Uso: Notificação de Novos Locais Adicionados
Atores:
Usuário
Sistema

Pré-condições:

1. O usuário deve ter o aplicativo instalado e estar logado.
O administrador deve ter adicionado novos locais ao aplicativo.

Fluxo Principal:

1. O sistema detecta que novos locais foram adicionados pelo administrador através de um feed localizado abaixo da busca no lado direito da página inicial.

2. O sistema gera uma notificação no feed de notícias, destacando os novos locais adicionados.

3. O usuário abre o aplicativo e visualiza a notificação no feed de notícias na página inicial.

4. O usuário clica na notificação para ver mais detalhes sobre os novos locais. O sistema oculta os pontos antigos no mapa e destaca os novos locais em uma cor diferente. Assim o usuário pode clicar em cada local para ver imagens e ler sobre a história do local.

Pós-condições:

1. O usuário está ciente dos novos locais adicionados e pode explorá-los conforme desejar após executar os passos de uso.

Fluxo Alternativo:

1. Se o usuário não estiver interessado nos novos locais, ele pode ignorar a notificação e continuar usando o aplicativo como de costume.
