# SubEquipe_01: Diagrama de Classes

## Descrição

Este artefato apresenta o Diagrama de Classes do MVP do **G4_ProjetoJogo**, representando o modelo conceitual de domínio: as principais entidades do jogo, seus atributos, métodos e os relacionamentos (herança, composição, agregação e associação) entre elas. A modelagem foi construída a partir dos [requisitos do Subgrupo 03][rf] e dos artefatos elaborados anteriormente pela equipe, em especial o [Diagrama de Componentes](DiagramaComponentes.md), o [Diagrama de Atividades](DiagramaAtividades.md) e o [Diagrama de Estados](DiagramaEstados.md).

## Objetivo

Representar a estrutura estática do domínio do jogo em nível conceitual, evidenciando as classes que sustentam os serviços já identificados no [Diagrama de Componentes](DiagramaComponentes.md) e o comportamento descrito no [Diagrama de Atividades](DiagramaAtividades.md), sem detalhar aspectos de implementação.

## Metodologia

O artefato foi produzido conforme a distribuição registrada na [Ata 01](/Atas/AtaSub01_01.md), na qual ficou definido que Cibelly seria responsável pelo Diagrama de Classes. Cada componente e cada serviço listado na [tabela de interfaces do Diagrama de Componentes](DiagramaComponentes.md#serviços-das-interfaces) foi analisado para identificar as classes de domínio que o realizam, e o [Diagrama de Atividades](DiagramaAtividades.md) e o [Diagrama de Estados](DiagramaEstados.md) foram usados para inferir métodos e o ciclo de vida do combate.

O diagrama foi construído em [draw.io](https://app.diagrams.net/), seguindo o mesmo padrão visual (fundo preto, linhas e texto em branco, fonte monoespaçada) adotado pelos demais diagramas estáticos e dinâmicos da SubEquipe_01. Estão disponíveis a [fonte editável em draw.io](Base/Relatórios/SubEquipe_01/assets/classes/classes.drawio ':ignore') e o [SVG exportado](Base/Relatórios/SubEquipe_01/assets/classes/classes.svg ':ignore').

Como a documentação do Subgrupo 01 não define um modelo de classes explícito, as classes, atributos e multiplicidades foram inferidos a partir dos artefatos citados; as inferências mais relevantes e as divergências encontradas entre os requisitos estão registradas na seção [Incertezas e decisões](#incertezas-e-decisões).

## Conteúdo

<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/classes/classes.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/classes/classes.svg" alt="Diagrama de classes: Personagem (abstrata) generaliza Jogador e Inimigo; Jogador compõe Inventário e Diário do Aventureiro; Inventário agrega Elemento Químico e Item; Combinação e Magia associam-se a Elemento Químico; Mundo compõe Área, que agrega Livro Colecionável e NPC; NPC associa-se a Sidequest; Combate associa-se a Jogador, Inimigo e Magia; Partida compõe Jogador e associa-se a Mundo e Combate."></a>
<figcaption>Figura 1: Diagrama de classes do MVP. Fonte: Cibelly, 2026.</figcaption>
</figure>

<p><a href="Base/Relatórios/SubEquipe_01/assets/classes/classes.drawio" download>Fonte editável em draw.io</a> · <a href="Base/Relatórios/SubEquipe_01/assets/classes/classes.svg" target="_blank" rel="noopener" download>SVG do diagrama</a></p>

Os losangos preenchidos indicam composição (a parte não existe sem o todo); os losangos vazados indicam agregação (a parte existe de forma independente); as setas com ponta vazada indicam herança/generalização; e as linhas simples, com seta aberta quando direcionadas, indicam associação. Os números nas pontas das linhas indicam a multiplicidade do relacionamento.

### Classes e justificativa

Os códigos abaixo remetem aos [requisitos do Subgrupo 03][rf]. A criação de itens por `Combinacao` preserva o RF05 das [anotações da reunião de 11/09][rf-iniciais], anterior à adoção dessa lista. As duas fontes usam a mesma numeração para comportamentos diferentes.

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Classe | Papel no domínio | Requisitos |
|--------|-------------------|------------|
| `Personagem` («abstract») | Generaliza atributos de combate comuns a `Jogador` e `Inimigo` (vida, ataque, defesa). | [RF06, RF07, RF16, RF17][rf] |
| `Jogador` | Entidade controlada pelo usuário: move-se, coleta elementos, combina-os, usa itens e consulta seu progresso. | [RF01, RF05, RF09, RF10, RF16][rf] |
| `Inimigo` | Participante do combate com fraqueza elemental usada no cálculo de dano. | [RF04, RF06, RF13, RF17][rf] |
| `Inventario` | Mantém os elementos químicos e itens do jogador, relacionados ao serviço do componente Inventário. | [RF18, RF19][rf] |
| `ElementoQuimico` | Recurso coletável, insumo de combinações e magias. | [RF05, RF09, RF18][rf] |
| `Item` | Objeto criado por combinação fora de combate ou vendido por NPCs. | [RF14, RF19][rf]; criação no [RF05 inicial][rf-iniciais] |
| `Combinacao` | Mistura de elementos fora de combate que consome ingredientes e produz um item. | [RF05 inicial][rf-iniciais] |
| `Magia` | Efeito determinado pela combinação de elementos coletados, aplicado em combate. | [RF05, RF09][rf] |
| `DiarioDoAventureiro` | Mantém descobertas, relacionadas ao serviço do componente Diário. | [RF08, RF11, RF12][rf] |
| `LivroColecionavel` | Objeto espalhado pelo mundo que, ao ser coletado, é registrado no Diário. | [RF10–RF12][rf] |
| `Mundo` | Agrega as áreas exploráveis pelo jogador. | [RF01, RF02][rf] |
| `Area` | Unidade do mundo classificada por `TipoArea`. | [RF01, RF02, RF04][rf] |
| `TipoArea` («enumeration») | Segura, não segura de mundo aberto, não segura de mundo não aberto. | [RF02][rf] |
| `NPC` | Vende itens e oferece sidequests. | [RF14, RF15][rf] |
| `Sidequest` | Missão secundária oferecida por um NPC. | [RF15][rf] |
| `Combate` | Coordena o confronto por turnos, calcula dano e determina vitória/derrota, relacionados ao serviço do componente Combate em Turnos. | [RF04, RF05, RF06, RF07, RF09, RF13, RF16, RF17][rf] |
| `Partida` | Sessão de jogo que coordena o fluxo geral e o salvamento, relacionados ao serviço do componente Controle da Partida. | [RF03][rf] |

</div>

<p align="center">Tabela 1: Classes identificadas e requisitos associados. Fonte: <a href="Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt" target="_blank" rel="noopener">requisitos do Subgrupo 03</a> e <a href="Base/Relatórios/SubEquipe_01/assets/evidencias/anotacoes_manuais.txt" target="_blank" rel="noopener">requisitos iniciais de 11/09</a>, organizados por Cibelly Lourenço Ferreira, 2026.</p>

### Análise

**Cibelly:** o maior cuidado na modelagem foi manter o nível conceitual sem descer a detalhes de implementação (getters/setters, tipos concretos de coleção, camadas de persistência), já que o [Diagrama de Pacotes](DiagramaPacotes.md) complementa essa visão com a organização em camadas do módulo do jogador. Também precisei decidir onde extrair uma superclasse: `Personagem` concentra os atributos de combate compartilhados por `Jogador` e `Inimigo`, evitando duplicação sem introduzir uma hierarquia mais profunda do que os requisitos justificam.

Uma dificuldade foi conciliar duas versões dos requisitos funcionais: a [lista inicial da própria SubEquipe_01][rf-iniciais], registrada nas anotações da [reunião de 11/09](/Atas/AtaSub01_01.md), e a [lista RF01–RF19 do Subgrupo 03][rf], adotada nos demais artefatos a partir da V2. Optei por manter `Combinacao` (fora de combate) e `Magia` (em combate) como classes distintas, pois cada conjunto de requisitos as descreve em momentos diferentes da jogatina, mas sinalizo essa escolha como uma inferência, não uma definição fechada da equipe.

### Relação com outros diagramas

`Inventario` e `DiarioDoAventureiro` descrevem dados e operações associados aos serviços `IInventario` e `IDiario` do [Diagrama de Componentes](DiagramaComponentes.md#serviços-das-interfaces). Essa aproximação é funcional: o modelo de classes não declara a realização dessas interfaces UML. A V2 de [atividades](DiagramaAtividades.md) e a V2 de [componentes](DiagramaComponentes.md) concentram a combinação de elementos no combate; a criação de itens por `Combinacao` preserva o recorte anterior e não integra o escopo dessas versões.

O [Diagrama de Sequência][sequencia] utiliza instâncias de `Jogador`, `Partida`, `Combate`, `Magia`, `Inimigo` e `DiarioDoAventureiro`. A comparação ajuda a conferir as operações necessárias às interações: mensagens como `processarTurno` e `aplicarDano` aparecem na sequência, mas ainda não constam como operações neste diagrama de classes.

### Incertezas e decisões

<div role="region" aria-label="Tabela 2" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Ponto em aberto | Decisão adotada | Justificativa e observação |
|------------------|------------------|-----------------------------|
| `Combinacao` vs. `Magia`: os [requisitos iniciais da SubEquipe_01][rf-iniciais] descrevem combinação de elementos *fora* de combate gerando itens; os [RF do Subgrupo 03][rf] descrevem magias combinadas *durante* o combate. | Manter as duas classes separadas. | A distinção conserva os dois recortes; a combinação fora de combate não integra a V2 de [atividades](DiagramaAtividades.md). |
| Atributos de estatísticas de `Jogador`/`Inimigo` (RF16, RF17) não são detalhados nos requisitos. | Representar de forma simplificada (`pontosDeVida`, `ataque`, `defesa`, `estatisticas`). | Não há definição de nível, experiência ou mana nos artefatos disponíveis. |
| O componente "Catálogo do Jogo" fornece definições de áreas, personagens, magias, itens e NPCs. | Não modelado como classe própria. | O [Diagrama de Componentes](DiagramaComponentes.md#serviços-das-interfaces) trata o Catálogo como serviço; este modelo conceitual não detalha sua implementação. |
| Multiplicidades entre `Combate`–`Inimigo` (1..\*) e `Combinacao`–`Item` (0..1). | Inferidas da narrativa dos requisitos. | Não há especificação formal de cardinalidade nos artefatos do Subgrupo 03. |

</div>

<p align="center">Tabela 2: Incertezas assinaladas e decisões de modelagem. Fonte: comparação entre os <a href="Base/Relatórios/SubEquipe_01/assets/evidencias/anotacoes_manuais.txt" target="_blank" rel="noopener">requisitos iniciais de 11/09/2026</a> e os <a href="Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt" target="_blank" rel="noopener">requisitos do Subgrupo 03</a>, 2026.</p>

## Referências

OBJECT MANAGEMENT GROUP. **UML 2.5.1**. 2017. Seções 9 e 11 (Diagramas de Classes). [Especificação](https://www.omg.org/spec/UML/2.5.1/PDF).

SERRANO, Milene. **Modelagem UML Estática**. Universidade de Brasília, [s. d.]. [Slides](Base/Relatórios/SubEquipe_01/assets/componentes/referencias/modelagem-uml-estatica.pdf ':ignore').

SUBGRUPO 03. **Requisitos funcionais do MVP**. 2026. [Lista de referência][rf].

UML DIAGRAMS. **Class Diagrams**. [Notação e exemplos](https://www.uml-diagrams.org/class-diagrams-overview.html). Acesso em: 17 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
| Cibelly | 100% |

<p align="center">Tabela 3: Contribuição no artefato.</p>

## Histórico de Versão

<div role="region" aria-label="Tabela 4" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|:----:|-----------|-----------|---------|
| 1.0 | 17/09/2026 | Inserção do diagrama de classes. | Cibelly | Yogi Nam de Souza Barbosa |

</div>

<p align="center">Tabela 4: Histórico de versão. O campo Revisor identifica revisão por outra pessoa.</p>

[rf]: Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt ':ignore'
[rf-iniciais]: Base/Relatórios/SubEquipe_01/assets/evidencias/anotacoes_manuais.txt ':ignore'
[sequencia]: DiagramaSequencia.md
