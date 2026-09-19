# SubEquipe_01: Diagrama de Estados

## Descrição

Diagrama de estados do fluxo de batalhas do **G4_ProjetoJogo**, elaborado pela SubEquipe_01 no escopo do **FOCO_02: Modelagem Dinâmica na Notação UML**.

## Objetivo

Representar em UML os estados e as transições do fluxo de batalhas, permitindo compreender a progressão do jogador pelos mapas e as condições de continuidade ou encerramento da jornada.

## Metodologia

O diagrama de estados representa o comportamento do sistema ao longo do tempo, evidenciando estados, eventos, transições e pontos de decisão ([OBJECT MANAGEMENT GROUP, 2017][uml]).

O diagrama parte do início da jornada do jogador, que leva a `Entrar em novo mapa` e depois a `Batalhar`. O trecho de combate detalha a seleção do comando de ataque, a aplicação de dano, a verificação da vida do oponente e a troca do personagem que ataca. Ao final do combate, a condição `Possui vida?` decide a continuidade: em caso positivo (`Sim`), o fluxo retorna a `Entrar em novo mapa`, reiniciando o ciclo de progressão pelos mapas; em caso negativo (`Não`), segue para `Fim`. O diagrama foi feito com apoio do material do módulo de Modelagem disponibilizado no [site da disciplina][disciplina].

## Conteúdo

### Diagrama de Estados

O diagrama de estados descreve o ciclo de progressão do jogador pelos mapas do sistema G4_ProjetoJogo, alternando entre a entrada em um novo mapa, a batalha contra os inimigos presentes nele e a decisão sobre a continuidade da jornada, conforme a sua condição de vida.

![Diagrama de estados do fluxo de batalhas](assets/diagrama-estados-batalhas.png)

<p align="center">Figura 1: Diagrama de estados do fluxo de batalhas. Fonte: Elaboração própria, 2026.</p>

O detalhamento de `Batalhar` concentra o comportamento repetitivo do combate: selecionar um comando, aplicar dano e alternar o atacante enquanto os participantes possuem vida. A condição `Possui vida?` determina se o jogador segue para um novo mapa (`Sim`) ou se a jornada é encerrada em `Fim` (`Não`).

### Relação com outros diagramas

`Batalhar` se relaciona à ação `Resolver combate por turnos` do [Diagrama de Atividades](DiagramaAtividades.md#fluxo-geral-da-partida) e ao serviço `ICombate` do [Diagrama de Componentes](DiagramaComponentes.md#serviços-das-interfaces). O [Diagrama de Classes](DiagramaClasses.md) apresenta `Combate.alternarTurno()` e os pontos de vida de `Personagem`, que dão suporte a esse ciclo. O [Diagrama de Sequência][sequencia] mostra as mensagens entre os participantes durante o turno.

O recorte deste diagrama é mais restrito que o da partida: não inclui o salvamento e a interrupção presentes em [atividades](DiagramaAtividades.md). Também conduz a um novo mapa após a sobrevivência ao confronto, enquanto atividades retorna à exploração. Essa diferença limita a equivalência entre os fluxos após o combate.

## Referências

OBJECT MANAGEMENT GROUP. **OMG Unified Modeling Language (OMG UML), Version 2.5.1**. 2017. [Especificação][uml]. Acesso em: 12 set. 2026.

UNB FCTE: ARQDSW. **Módulo de Modelagem**. [Material da disciplina][disciplina]. Acesso em: 12 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
|  Gabriel Andrade Magioli    |         100%         |

<p align="center">Tabela 1: Contribuição dos integrantes.</p>

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|------|:----------|:----------|:--------|
|    1.0    |   12/09/2026   |     Incluir diagrama de estados      |     Gabriel Andrade Magioli     |     Yogi Nam de Souza Barbosa    |
| 1.1 | 18/09/2026 | Adequação do título, descrição, objetivo e seções à página específica do diagrama de estados. | Yogi Nam de Souza Barbosa |  |

<p align="center">Tabela 2: Histórico de versão.</p>

[sequencia]: DiagramaSequencia.md
[uml]: https://www.omg.org/spec/UML/2.5.1/PDF
[disciplina]: https://sites.google.com/view/unb-fcte-arqdsw/módulos/módulo-modelagem?authuser=0
