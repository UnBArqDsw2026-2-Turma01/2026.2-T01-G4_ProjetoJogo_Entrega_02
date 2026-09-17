# SubEquipe_03 — Modelagem Estática na Notação UML

## Descrição

Este artefato apresenta a modelagem estática do **G4_ProjetoJogo** elaborada pela SubEquipe_03, no escopo do **FOCO_01 — Modelagem Estática na Notação UML**. A modelagem foi feita por meio de um **diagrama de classes**, que representa as entidades do jogo, seus atributos, suas operações e os relacionamentos entre elas.

O ponto de partida foram os requisitos funcionais do MVP levantados na Entrega 01, a partir do [Mapa Mental](https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_01/blob/main/docs/Base/Relat%C3%B3rios/SubEquipe_03/MapaMental.md) e dos [modelos BPMN](https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_01/blob/main/docs/Base/Relat%C3%B3rios/SubEquipe_03/BPMN.md) da subequipe. O diagrama de classes também é a base da [Modelagem Dinâmica](ModelagemDinamica.md): cada partição do diagrama de atividades corresponde a uma classe definida aqui, e cada ação corresponde a uma operação ou associação deste modelo.

## Objetivo

- Representar a estrutura estática do núcleo do jogo: exploração, combate por turnos, mistura de elementos químicos, histórico de magias, livros, inventários e salvamento.
- Garantir que cada requisito funcional do MVP tenha ao menos uma classe responsável, tornando explícita a rastreabilidade entre requisitos e modelo.
- Servir de referência para a modelagem dinâmica e para as próximas entregas, em especial a de Padrões de Projeto.

## Metodologia

Segundo Booch, Rumbaugh e Jacobson (2005), o diagrama de classes é o diagrama mais usado na modelagem de sistemas orientados a objetos, pois descreve o vocabulário do sistema e as colaborações entre seus elementos. Larman (2007) recomenda construir esse modelo a partir dos requisitos, identificando classes candidatas nos substantivos e operações nos verbos das descrições, e refiná-lo de forma iterativa à medida que o entendimento do problema amadurece. A subequipe seguiu esse caminho em cinco etapas.

| Etapa | Descrição | Evidência |
|:-----:|-----------|-----------|
| 1. Revisão dos requisitos | Consolidação dos 19 requisitos funcionais do MVP, derivados do mapa mental e dos fluxos BPMN da Entrega 01. | [Ata 01 (12/09)](/Atas/AtaSub03_01.md) |
| 2. Identificação das classes | Substantivos dos requisitos (jogador, inimigo, área, elemento, livro, inventário) tornaram-se classes candidatas; verbos (misturar, coletar, registrar, sortear) tornaram-se operações. | [Ata 01 (12/09)](/Atas/AtaSub03_01.md) |
| 3. Versão 1.0 | Diagrama elaborado em reunião síncrona, com edição colaborativa no Draw.io. A equipe definiu a visibilidade dos atributos e corrigiu referências circulares. | [Ata 02 (15/09)](/Atas/AtaSub03_02.md) |
| 4. Revisão de consistência (versão 1.1) | Confronto do diagrama com a notação da UML (OBJECT MANAGEMENT GROUP, 2017) e com cada requisito funcional. As inconsistências e as correções estão na seção [Evolução do Modelo e Decisões de Projeto](#evolução-do-modelo-e-decisões-de-projeto). | Tabela 4 |
| 5. Refinamento cruzado (versão 1.2) | A construção do diagrama de atividades revelou operações ausentes, que foram incorporadas ao diagrama de classes. Nessa etapa, o RF08 também foi revisado. | [Modelagem Dinâmica](ModelagemDinamica.md) |

<p align="center">Tabela 1: Etapas da modelagem estática. Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026).</p>

**Ferramentas.** O diagrama foi construído no [Draw.io](https://app.diagrams.net/), editado colaborativamente pelo Google Drive. O arquivo-fonte está versionado no repositório (<a href="Base/Relatórios/SubEquipe_03/assets/diagrama-classes.drawio" download>diagrama-classes.drawio</a>) e pode ser aberto no site do Draw.io ou na extensão *Draw.io Integration* do VS Code. Na etapa 4, a subequipe usou IA generativa (Claude) para apontar inconsistências e gerar a versão corrigida. Cada correção foi discutida e aceita ou rejeitada pela equipe, e a análise crítica desse uso está no artefato [IA Generativa](IAGenerativa.md).

**Convenções adotadas.**

- **Visibilidade:** apenas privada (`-`) e pública (`+`), conforme decisão registrada na [Ata 02](/Atas/AtaSub03_02.md). Os atributos são privados e acessados por *getters* e *setters*, preservando o encapsulamento.
- **Assinaturas:** parâmetros no formato `nome: Tipo` e retorno após dois-pontos, como define a UML (OBJECT MANAGEMENT GROUP, 2017).
- **Enumerações:** marcadas com o estereótipo `«enumeration»` e usadas apenas como tipo de atributo, sem linhas de associação.

## Conteúdo

### Requisitos Funcionais de Referência

Os requisitos abaixo foram levantados na Entrega 01 e consolidados na [Ata 01](/Atas/AtaSub03_01.md). A terceira coluna indica as classes que atendem cada requisito, formando a matriz de rastreabilidade entre requisito e classe.

Durante a Entrega 02, o **RF08 foi revisado**. Ao modelar o turno de combate, a equipe percebeu que a redação original não deixava claro que uma combinação já descoberta pode ser usada diretamente, sem repetir a mistura dos elementos. Essa possibilidade faz parte da proposta de jogabilidade, pois recompensa a experimentação do jogador.

| ID | Requisito funcional | Classes responsáveis |
|:--:|---------------------|----------------------|
| RF01 | O sistema deve permitir movimentação livre do jogador pelo mundo. | `Jogador` (`mover`) |
| RF02 | O sistema deve classificar as áreas do mundo em três tipos: segura, não segura de mundo aberto e não segura de mundo não aberto. | `Area`, `AreaSegura`, `AreaNaoSegura` (`mundoAberto`) |
| RF03 | O sistema deve permitir salvar e sair do jogo em todas as áreas do jogo. | `SistemaSave` |
| RF04 | O sistema deve gerar eventos de combate aleatório em áreas não seguras. | `AreaNaoSegura` (`sortearCombate`, `taxaEncontro`), `Combate` |
| RF05 | O sistema deve permitir ao jogador misturar elementos químicos durante o combate por turnos. | `Jogador` (`misturarElementos`), `Combinacao`, `Combate` |
| RF06 | O sistema deve calcular dano com base na fraqueza elemental do inimigo em relação ao efeito aplicado. | `Inimigo` (`calcularMultiplicador`), `Efeito`, `TipoEfeito` |
| RF07 | O sistema deve alternar turnos entre jogador e inimigo até a resolução do combate. | `Combate` |
| **RF08** *(revisado)* | O sistema deve ter um histórico de magias, armazenando as combinações já descobertas **e permitindo que o jogador as utilize diretamente em combate, sem precisar misturar os elementos novamente**. | `DiarioAventureiro` (`registrarCombinacao`, `conhece`, `listarCombinacoes`), `Combate` (`executarTurnoJogador`) |
| RF09 | O sistema deve restringir as combinações possíveis aos elementos já coletados pelo jogador. | `InventarioElementos` (`possui`, `listarElementos`) |
| RF10 | O sistema deve permitir a coleta de livros espalhados pelo mundo. | `Jogador` (`coletarLivro`), `Livro` |
| RF11 | O sistema deve registrar os livros coletados no diário do aventureiro, evitando duplicidade de registro. | `DiarioAventureiro` (`registrarLivro`) |
| RF12 | O sistema deve apresentar parte do enredo e/ou novas combinações de elementos ao registrar um livro inédito. | `Livro` (`loreTexto`), associação `ensina` com `Combinacao` |
| RF13 | O sistema deve definir inimigos com fraquezas elementares específicas. | `Inimigo` (`fraqueza`) |
| RF14 | O sistema deve permitir a interação do jogador com NPCs para compra de itens. | `NPC` (`VENDEDOR`), `InventarioItens` *(parcial)* |
| RF15 | O sistema deve permitir a interação do jogador com NPCs para início de sidequests. | `NPC` (`QUEST_GIVER`) *(parcial)* |
| RF16 | O sistema deve definir estatísticas de jogador. | `Combatente`, `Jogador` |
| RF17 | O sistema deve definir estatísticas de cada inimigo. | `Combatente`, `Inimigo` |
| RF18 | O sistema deve possuir um inventário de elementos adquiridos. | `InventarioElementos` |
| RF19 | O sistema deve possuir um inventário de itens do jogador. | `InventarioItens` |

<p align="center">Tabela 2: Requisitos funcionais e classes responsáveis. Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026), a partir dos requisitos da Entrega 01.</p>

### Diagrama de Classes

A Figura 1 apresenta a versão vigente (1.2) do diagrama. Por causa do tamanho, clique na imagem para abri-la em resolução original.

<p align="center">
  <a href="Base/Relatórios/SubEquipe_03/assets/diagrama-classes.png" target="_blank">
    <img src="Base/Relatórios/SubEquipe_03/assets/diagrama-classes.png" alt="Diagrama de classes do G4_ProjetoJogo, versão 1.2, da SubEquipe_03" style="max-height:none">
  </a>
</p>

<p align="center">Figura 1: Diagrama de classes do G4_ProjetoJogo (versão 1.2). Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026), com apoio de IA generativa na revisão.</p>

### Organização do Modelo

As 20 classes do modelo se agrupam em quatro regiões, descritas a seguir.

#### Personagens

`Personagem` concentra o que é comum a qualquer figura do jogo, o `nome`. Dela derivam `NPC` e `Combatente`, e de `Combatente` derivam `Jogador` e `Inimigo`. A classe intermediária `Combatente` reúne vida, ataque, defesa, `receberDano()` e `estaVivo()`, que só fazem sentido para quem participa de combates. Com isso, `NPC` não herda atributos que nunca usaria. `Jogador` acrescenta mana, conforme definido na [Ata 01](/Atas/AtaSub03_01.md) (o inimigo não usa mana), e as ações de exploração e alquimia. `Inimigo` acrescenta a `fraqueza` e a operação `atacar()`. O papel de cada NPC, vendedor ou *quest giver*, é dado pela enumeração `TipoNPC`.

#### Mundo e Combate

`Area` é especializada em `AreaSegura` e `AreaNaoSegura`. Esta última guarda se pertence a mundo aberto (`mundoAberto`), o que atende às três categorias do RF02, e a taxa de encontros usada por `sortearCombate()` (RF04). Quando o sorteio é positivo, a área **inicia** um `Combate` e **gera** os inimigos. `Combate` **envolve** exatamente um jogador e **enfrenta** um ou mais inimigos, e controla a alternância de turnos (RF07). Na terminologia de Larman (2007), `Combate` atua como **controlador**: recebe os eventos do turno e os delega às classes especialistas, sem concentrar as regras de dano ou de alquimia.

#### Alquimia: Elementos, Combinações e Efeitos

`Elemento` representa um elemento da **tabela periódica** (por exemplo, H, O e C), identificado por símbolo, nome e número atômico. `Combinacao` **combina** dois ou mais elementos, guarda sua `formula` (por exemplo, "H2O") e, quando válida, **gera** um `Efeito`. O efeito tem um tipo (`TipoEfeito`) e um dano base. O mesmo `TipoEfeito` define a `fraqueza` do `Inimigo`, que usa `calcularMultiplicador(efeito)` para ajustar o dano conforme a vulnerabilidade (RF06 e RF13). Separar o elemento químico, que é a entrada do jogador, do tipo de efeito, que é o resultado na jogabilidade, permite que combinações diferentes produzam o mesmo tipo de efeito.

#### Progressão e Persistência

`Jogador` é composto por um `InventarioElementos` (RF18), um `InventarioItens` (RF19) e um `DiarioAventureiro`. O diário agrega os livros coletados (RF10 e RF11) e o **histórico** de combinações descobertas (RF08). `Livro` guarda o texto de enredo e **ensina** combinações (RF12). Por fim, `SistemaSave` **persiste** o estado do jogador e oferece `salvar()`, `carregar()` e `salvarESair()`, disponíveis em qualquer área (RF03).

| Relacionamento | Tipo | Multiplicidade | Leitura |
|----------------|------|:--------------:|---------|
| `AreaNaoSegura` → `Combate` | Associação (*inicia*) | 1 → 0..1 | Uma área não segura inicia no máximo um combate por vez. |
| `AreaNaoSegura` → `Inimigo` | Associação (*gera*) | 1 → * | Uma área não segura gera inimigos. |
| `Combate` → `Jogador` | Associação (*envolve*) | 0..1 → 1 | Todo combate envolve o jogador, que está em no máximo um combate. |
| `Combate` → `Inimigo` | Associação (*enfrenta*) | 0..1 → 1..* | Um combate tem ao menos um inimigo. |
| `Jogador` → `Area` | Associação (*ocupa*) | 0..1 → 1 | O jogador ocupa uma área; uma área pode estar vazia. |
| `Combinacao` → `Elemento` | Associação (*combina*) | * → 2..* | Toda combinação usa ao menos dois elementos. |
| `Combinacao` → `Efeito` | Associação (*gera*) | 1 → 0..1 | Uma combinação inválida não gera efeito. |
| `Livro` → `Combinacao` | Associação (*ensina*) | * → 0..* | Um livro pode ensinar combinações. |
| `SistemaSave` → `Jogador` | Associação (*persiste*) | 1 → 1 | O sistema de save persiste o estado do jogador. |
| `Jogador` ◆ `InventarioElementos`, `InventarioItens`, `DiarioAventureiro` | Composição | 1 — 1 | As partes não existem sem o jogador. |
| `InventarioElementos` ◇ `Elemento` | Agregação | 1 — * | Elementos existem independentemente do inventário. |
| `InventarioItens` ◇ `Item` | Agregação | 1 — * | Itens existem independentemente do inventário. |
| `DiarioAventureiro` ◇ `Livro` | Agregação | 1 — * | O diário registra livros que existem no mundo. |
| `DiarioAventureiro` ◇ `Combinacao` | Agregação (*histórico*) | 1 — * | O diário é a única fonte das combinações já descobertas. |

<p align="center">Tabela 3: Relacionamentos do diagrama de classes (exceto generalizações). Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026).</p>

### Evolução do Modelo e Decisões de Projeto

A versão 1.0 foi confrontada com a especificação da UML e com cada requisito funcional. A Tabela 4 registra o que foi encontrado, o que mudou e por quê.

| # | Problema na versão 1.0 | Correção | Justificativa |
|:-:|------------------------|----------|---------------|
| 1 | Enumerações ligadas às classes por **generalização** (`TipoElemento` → `Elemento`). | Generalizações removidas; enumerações usadas como tipo de atributo. | A generalização expressa "é um tipo de" (OBJECT MANAGEMENT GROUP, 2017); um enumerado não é subtipo da classe que o utiliza. |
| 2 | Estereótipos escritos como `<abstract>` e `<enumeration>`. | `«enumeration»` com aspas angulares; marcação de abstrata retirada. | Notação da UML. A retirada do *abstract* segue a decisão da [Ata 02](/Atas/AtaSub03_02.md), discutida na análise crítica. |
| 3 | `NPC` herdava vida, ataque e `receberDano()` de `Personagem`. | Criação de `Combatente` entre `Personagem` e `Jogador`/`Inimigo`. | Evita herança de responsabilidades que a subclasse não usa, mantendo a coesão das classes (LARMAN, 2007). |
| 4 | Um único `Inventario`, com `adicionar(Item)` e sem forma de adicionar elementos. | `InventarioElementos` e `InventarioItens`. | Atende RF18 e RF19 separadamente, como decidido na [Ata 01](/Atas/AtaSub03_01.md). |
| 5 | Nenhuma classe responsável pela alternância de turnos. | Classe `Combate`. | RF07 não tinha responsável; `Combate` assume o papel de controlador (LARMAN, 2007). |
| 6 | Fraqueza do inimigo modelada duas vezes: atributo e associação "vulnerável a" com `Efeito`. | Mantido apenas o atributo `fraqueza`. | Redundância permite estados contraditórios no modelo. |
| 7 | Histórico de magias sem vínculo com `Combinacao`; indicadores `conhecida` e `registrado` espalhados pelas classes. | Agregação *histórico* e `registrarCombinacao()` no diário; indicadores removidos. | O diário passa a ser a única fonte do que foi descoberto (RF08 e RF11), evitando dados duplicados. |
| 8 | `Livro` sem relação com combinações. | Associação *ensina*. | RF12 prevê que livros apresentem novas combinações. |
| 9 | `TipoElemento` (FOGO, GELO, VENENO) confundia elemento químico com efeito. | `Elemento` passa a representar a tabela periódica; criado `TipoEfeito`. | Alinha o modelo à mecânica central do projeto, a mistura de elementos da tabela periódica. |
| 10 | Salvamento representado por `permiteSaveLivre()` em `Area`. | Classe `SistemaSave`. | RF03 permite salvar em qualquer área; a responsabilidade de persistência não pertence à área. |
| 11 | Multiplicidade `1` do lado de `Jogador` na associação *ocupa*; parâmetros sem nome; atributo `aparencia`. | Multiplicidade `0..1`; parâmetros `nome: Tipo`; `aparencia` removida. | Áreas podem estar vazias; notação da UML; a customização do personagem saiu do escopo ([Ata 01](/Atas/AtaSub03_01.md)). |
| 12 | *(v1.1)* `executarTurnoJogador(elementos)` e ausência de listagem do histórico. | `executarTurnoJogador(combinacao: Combinacao)` e `listarCombinacoes()`. | Identificado na modelagem dinâmica: o turno pode usar uma combinação já registrada (RF08 revisado). |

<p align="center">Tabela 4: Problemas identificados e correções entre as versões. Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026).</p>

Um episódio da revisão merece registro. Na primeira rodada de correções, o salvamento chegou a ser removido do diagrama com base na [Ata 02](/Atas/AtaSub03_02.md), que eliminava o "ponto de salvamento". A equipe identificou que a remoção contrariava o RF03, que continua vigente: a ata eliminou o *ponto* fixo de salvamento, não o salvamento. A funcionalidade voltou como a classe `SistemaSave`. O episódio mostrou que as atas registram decisões de um momento, e que os requisitos consolidados devem prevalecer quando os dois divergem.

### Análise Crítica

**Pontos fortes.** Todos os 19 requisitos funcionais têm ao menos uma classe responsável (Tabela 2), e cada classe tem responsabilidades delimitadas. O modelo também se mostrou útil para a modelagem dinâmica: o diagrama de atividades foi construído usando apenas as classes e operações definidas aqui, e as lacunas encontradas nesse processo voltaram como melhorias para o diagrama de classes (Tabela 4, item 12). Esse ciclo corresponde ao refinamento iterativo que Larman (2007) defende.

**Decisões com custo conhecido.**

- **Classes concretas em vez de abstratas.** Conceitualmente, `Personagem`, `Combatente` e `Area` seriam abstratas, já que o jogo nunca instancia um "personagem genérico". A equipe optou por classes concretas para simplificar a instanciação na futura implementação ([Ata 02](/Atas/AtaSub03_02.md)). O custo é que o modelo não impede a criação dessas instâncias genéricas. A decisão pode ser revista quando houver código.
- **Composição e agregação.** Fowler (2005) observa que a semântica da agregação na UML é vaga e que muitos modeladores a evitam. A subequipe usou **composição** apenas onde o ciclo de vida é dependente: os inventários e o diário não existem sem o jogador. A **agregação** ficou para partes que existem por conta própria, como um elemento químico ou um livro no mundo. A distinção é intencional, mas uma associação simples comunicaria quase o mesmo.
- **Fórmula como texto.** O atributo `formula: String` identifica a combinação de forma legível, mas não representa estruturalmente a quantidade de cada elemento (em H2O, dois átomos de hidrogênio e um de oxigênio). Uma classe associativa com a quantidade seria mais precisa. A solução foi adiada para não sobrecarregar o MVP.
- **Enumeração para o papel do NPC.** `TipoNPC` resolve bem a classificação, mas, se vendedores e *quest givers* passarem a ter comportamentos muito diferentes, o polimorfismo por subclasses ou por padrões comportamentais será mais adequado.

**Limitações.** RF14 e RF15 estão apenas **parcialmente** modelados: o `NPC` sabe seu papel, mas não existem classes para loja, preço, moeda ou *sidequest*. A subequipe priorizou as mecânicas centrais da ênfase em Jogabilidade (combate e alquimia) e registra essas classes como evolução necessária. Além disso, o atributo `mana` existe em `Jogador`, mas nenhum requisito define como ele é consumido. Essa regra de negócio ainda precisa ser especificada.

**Elo com as próximas entregas.** Alguns pontos do modelo são candidatos naturais a padrões de projeto, que serão avaliados na Entrega 03. A alternância de turnos em `Combate` e as diferenças de comportamento entre tipos de NPC são exemplos.

### Rastreabilidade com Outros Artefatos

| Artefato | Relação com este modelo |
|----------|-------------------------|
| [Mapa Mental — Entrega 01](https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_01/blob/main/docs/Base/Relat%C3%B3rios/SubEquipe_03/MapaMental.md) | Os ramos Personagens, Mecânicas e Funcionalidades deram origem às classes candidatas. |
| [BPMN — Entrega 01](https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_01/blob/main/docs/Base/Relat%C3%B3rios/SubEquipe_03/BPMN.md) | Os fluxos de exploração, combate e livro colecionável fundamentam `AreaNaoSegura`, `Combate` e `DiarioAventureiro`. |
| [Ata 01 — 12/09](/Atas/AtaSub03_01.md) | Consolidação dos requisitos, separação dos inventários, atributos de personagens e remoção da customização. |
| [Ata 02 — 15/09](/Atas/AtaSub03_02.md) | Elaboração da versão 1.0, convenção de visibilidade e retirada do *abstract*. |
| [Modelagem Dinâmica](ModelagemDinamica.md) | As partições do diagrama de atividades são classes deste modelo; o refinamento da versão 1.2 veio dessa modelagem. |
| [IA Generativa](IAGenerativa.md) | Análise crítica do uso de IA generativa na revisão do diagrama. |
| <a href="Base/Relatórios/SubEquipe_03/assets/diagrama-classes.drawio" download>diagrama-classes.drawio</a> | Arquivo-fonte editável do diagrama. |

<p align="center">Tabela 5: Rastreabilidade com outros artefatos. Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026).</p>

## Referências

BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. **UML: guia do usuário**. 2. ed. Rio de Janeiro: Elsevier, 2005.

FOWLER, Martin. **UML essencial: um breve guia para a linguagem-padrão de modelagem de objetos**. 3. ed. Porto Alegre: Bookman, 2005.

G4_PROJETOJOGO. **SubEquipe_03 — BPMN**. Entrega 01, Arquitetura e Desenho de Software, Universidade de Brasília, 2026. Disponível em: <https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_01/blob/main/docs/Base/Relat%C3%B3rios/SubEquipe_03/BPMN.md>. Acesso em: 16 set. 2026.

G4_PROJETOJOGO. **SubEquipe_03 — Mapa Mental**. Entrega 01, Arquitetura e Desenho de Software, Universidade de Brasília, 2026. Disponível em: <https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_01/blob/main/docs/Base/Relat%C3%B3rios/SubEquipe_03/MapaMental.md>. Acesso em: 16 set. 2026.

LARMAN, Craig. **Utilizando UML e padrões: uma introdução à análise e ao projeto orientados a objetos e ao desenvolvimento iterativo**. 3. ed. Porto Alegre: Bookman, 2007.

OBJECT MANAGEMENT GROUP. **OMG Unified Modeling Language (OMG UML), Version 2.5.1**. 2017. Disponível em: <https://www.omg.org/spec/UML/2.5.1/PDF>. Acesso em: 16 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
| Carlos Henrique Brasil de Souza | 33% |
| Pedro Teixeira Moriel Sanchez | 33% |
| Renan Pereira Reis | 33% |

<p align="center">Tabela 6: Contribuição dos integrantes.</p>

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|------|:----------|:----------|:--------|
| 1.0 | 15/09/2026 | Elaboração da primeira versão do diagrama de classes no Draw.io | Carlos Henrique Brasil de Souza, Pedro Teixeira Moriel Sanchez, Renan Pereira Reis | |
| 1.1 | 16/09/2026 | Revisão de consistência com a UML e com os requisitos; inclusão de `Combate`, `Combatente`, `SistemaSave`, inventários separados e elementos da tabela periódica, com apoio de IA generativa | Carlos Henrique Brasil de Souza, Pedro Teixeira Moriel Sanchez, Renan Pereira Reis | |
| 1.2 | 16/09/2026 | Refinamento cruzado com o diagrama de atividades, revisão do RF08 e redação do relatório | Carlos Henrique Brasil de Souza, Pedro Teixeira Moriel Sanchez, Renan Pereira Reis | |

<p align="center">Tabela 7: Histórico de versão.</p>

Ver também: [Modelagem Dinâmica na Notação UML](ModelagemDinamica.md) · [IA Generativa](IAGenerativa.md)
