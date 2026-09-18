# SubEquipe_03 — Modelagem Dinâmica na Notação UML

## Descrição

Este artefato apresenta a modelagem dinâmica do **G4_ProjetoJogo** elaborada pela SubEquipe_03, no escopo do **FOCO_02 — Modelagem Dinâmica na Notação UML**. A modelagem foi feita por meio de um **diagrama de atividades** do fluxo central de jogabilidade: a exploração até o encontro aleatório, o combate por turnos com mistura de elementos químicos e o encerramento em vitória ou derrota.

O diagrama foi construído sobre a [Modelagem Estática](ModelagemEstatica.md) da subequipe. Cada **partição** corresponde a uma classe do diagrama de classes, e cada **ação** indica a operação ou associação que a realiza e o requisito funcional atendido.

## Objetivo

- Representar o comportamento do núcleo do jogo ao longo do tempo, com seus pontos de decisão, laços e caminhos alternativos: mistura inválida, combinação inédita, reutilização de combinação registrada, vitória e derrota.
- Verificar se o modelo estático sustenta o fluxo, ou seja, se cada ação tem uma operação correspondente na classe responsável.
- Tornar explícitas regras de jogabilidade que os requisitos descreviam de forma incompleta, como a penalidade por mistura inválida e o uso direto de combinações já descobertas.

## Metodologia

### Escolha do Diagrama

A escolha foi feita na reunião de 12/09 ([Ata 01](/Atas/AtaSub03_01.md)). O diagrama de sequência chegou a ser proposto, mas a equipe o considerou mais difícil de ler e de montar, e optou pelo **diagrama de atividades**, cujas partições se assemelham às *pools* do BPMN que a subequipe elaborou na Entrega 01. A [Ata 01](/Atas/AtaSub03_01.md) registrou a decisão de forma ambígua ("atividades/sequência"), e na reunião de 15/09 o grupo chegou a lembrar da escolha como diagrama de sequência, o que ficou na [Ata 02](/Atas/AtaSub03_02.md). A reunião de 16/09 confirmou o diagrama de atividades ([Ata 03](/Atas/AtaSub03_03.md)).

Fowler (2005) indica que diagramas de sequência são adequados para mostrar a colaboração entre objetos em um cenário, mas não são bons para representar laços e comportamento condicional. O combate por turnos é justamente um laço com várias decisões encadeadas. O diagrama de atividades descreve lógica procedural e fluxos de trabalho com decisões e iterações (FOWLER, 2005). Com o uso de **partições** (*swimlanes*), ele também mostra qual classe é responsável por cada ação (BOOCH; RUMBAUGH; JACOBSON, 2005), o que preserva o vínculo com o diagrama de classes.

### Escolha do Cenário

O cenário modelado é o **combate por turnos com mistura de elementos**, porque ele reúne a mecânica que diferencia o jogo e está no centro da ênfase em Jogabilidade do projeto. Um único fluxo cobre oito dos dezenove requisitos funcionais (RF01, RF02 e RF04 a RF09), listados na seção [Requisitos Funcionais de Referência](ModelagemEstatica.md?id=requisitos-funcionais-de-referência) da Modelagem Estática.

### Etapas

| Etapa | Descrição | Evidência |
|:-----:|-----------|-----------|
| 1. Definição das partições | As partições foram tiradas do diagrama de classes: `Jogador`, `AreaNaoSegura`, `Combate`, `InventarioElementos`, `Combinacao`, `DiarioAventureiro` e `Inimigo`. | [Modelagem Estática](ModelagemEstatica.md) |
| 2. Fluxo principal e alternativos | Modelagem da exploração, do sorteio de combate, do turno do jogador, da validação da mistura, do cálculo de dano e do turno do inimigo, com guardas em todas as decisões. | Figura 1 |
| 3. Verificação de consistência | Cada operação citada em uma ação foi conferida contra as operações da classe da partição. Foram encontradas duas ações com operação de outra classe, ambas corrigidas. | Tabela 3 |
| 4. Inclusão do atalho de combinação registrada | Em revisão, a equipe apontou que o jogador deve poder usar uma combinação já descoberta sem misturar os elementos de novo. O fluxo ganhou uma decisão no início do turno, e o RF08 foi revisado. | Tabela 3 |
| 5. Refinamento do modelo estático | O atalho exigiu `listarCombinacoes()` em `DiarioAventureiro` e mudou a assinatura de `executarTurnoJogador`, que passou a receber uma `Combinacao`. As mudanças foram levadas ao diagrama de classes (versão 1.2). | [Modelagem Estática](ModelagemEstatica.md?id=evolução-do-modelo-e-decisões-de-projeto) |

<p align="center">Tabela 1: Etapas da modelagem dinâmica. Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026).</p>

**Ferramentas.** O diagrama foi construído no [Draw.io](https://app.diagrams.net/), e o arquivo-fonte está versionado no repositório (<a href="Base/Relatórios/SubEquipe_03/assets/diagrama-atividades-combate.drawio" download>diagrama-atividades-combate.drawio</a>). A primeira versão foi gerada com apoio de IA generativa (Claude) a partir do diagrama de classes, como referência para a equipe trabalhar. O cenário de combate veio dessa versão e foi aceito pela subequipe; as regras de jogabilidade, como a penalidade e o atalho de combinações, vieram da própria subequipe. A análise desse uso está em [IA Generativa](IAGenerativa.md).

## Conteúdo

### Elementos Utilizados

| Elemento | Notação | Uso no diagrama |
|----------|---------|-----------------|
| Nó inicial | Círculo preenchido | Início da jornada de exploração. |
| Ação | Retângulo de cantos arredondados | Passo executado. A segunda linha indica a operação ou associação do diagrama de classes e o requisito atendido. |
| Partição | Raia vertical com nome da classe | Classe responsável pelas ações nela contidas. |
| Nó de decisão | Losango com uma entrada e saídas com guardas | Sorteio de combate, tipo de ação do turno, validade da mistura, ineditismo da combinação, vida do inimigo e do jogador. |
| Nó de fusão (*merge*) | Losango com várias entradas e uma saída | Retorno à exploração, início de cada turno e convergência dos caminhos antes do efeito e do dano. |
| Condição de guarda | Texto entre colchetes na transição | Condição que habilita cada saída de uma decisão, como `[inválida]` e `[jogador vivo]`. |
| Nó final de atividade | Círculo preenchido dentro de outro círculo | Dois finais: vitória e derrota. |
| *Frame* | Moldura com rótulo `act` | Delimita e nomeia a atividade. |

<p align="center">Tabela 2: Elementos da UML empregados. Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026), com base em OBJECT MANAGEMENT GROUP (2017).</p>

A modelagem não usa nós de bifurcação e junção (*fork*/*join*), pois o combate por turnos é sequencial por definição: não há ações concorrentes a sincronizar.

### Diagrama de Atividades

Por causa do tamanho, clique na imagem para abri-la em resolução original.

<p align="center">
  <a href="Base/Relatórios/SubEquipe_03/assets/diagrama-atividades-combate.png" target="_blank">
    <img src="Base/Relatórios/SubEquipe_03/assets/diagrama-atividades-combate.png" alt="Diagrama de atividades do combate por turnos com mistura de elementos, da SubEquipe_03" style="max-height:none">
  </a>
</p>

<p align="center">Figura 1: Diagrama de atividades "Combate por turnos com mistura de elementos". Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026), com apoio de IA generativa.</p>

### Descrição do Fluxo

#### 1. Exploração e encontro

O jogador explora o mundo (`mover`) e, ao entrar em uma área não segura, a área sorteia um combate (`sortearCombate`). Se não houver combate, o fluxo volta à exploração pelo nó de fusão inicial. Se houver, a área gera os inimigos e inicia o `Combate`.

#### 2. Turno do jogador: mistura ou combinação registrada

A cada turno, o jogador escolhe entre dois caminhos:

- **`[usar combinação registrada]`:** o diário lista as combinações já descobertas (`listarCombinacoes`), e o jogador escolhe uma. Como só combinações válidas entram no histórico, o fluxo segue direto para a geração do efeito, sem nova validação.
- **`[misturar elementos]`:** o inventário lista os elementos coletados (`listarElementos`), o jogador seleciona dois ou mais (multiplicidade `2..*` de *combina*) e realiza a mistura (`misturarElementos`).

#### 3. Validação, penalidade e histórico

A combinação misturada é validada (`ehValida`).

- **`[inválida]`:** o jogador sofre a penalidade de explosão (`receberDano`), regra definida na [Ata 01](/Atas/AtaSub03_01.md), e perde a ação do turno.
- **`[válida]`:** o diário verifica se a combinação já é conhecida (`conhece`). Se for inédita, ela é registrada (`registrarCombinacao`). Os dois caminhos convergem para a geração do efeito.

#### 4. Dano, turno do inimigo e término

A combinação gera um efeito (`gerarEfeito`). O inimigo calcula o multiplicador conforme sua fraqueza (`calcularMultiplicador`) e recebe o dano. Em seguida, o fluxo verifica se o inimigo continua vivo (`estaVivo`):

- **`[inimigo derrotado]`:** o combate termina em vitória.
- **`[inimigo vivo]`:** o inimigo ataca (`atacar`), e o jogador recebe o dano. Se o jogador morrer, o combate termina em derrota. Se continuar vivo, o laço volta ao início do turno do jogador.

### Rastreabilidade entre Ação, Classe e Requisito

| Ação | Partição (classe) | Operação ou associação | Requisito |
|------|-------------------|------------------------|:---------:|
| Explorar o mundo | `Jogador` | `mover(dx, dy)` | RF01 |
| Entrar em área não segura | `Jogador` | associação *ocupa* | RF02 |
| Sortear combate | `AreaNaoSegura` | `sortearCombate()` | RF04 |
| Gerar inimigo | `AreaNaoSegura` | associações *gera* e *inicia* | RF04 |
| Iniciar combate | `Combate` | `iniciar()` | RF04 |
| Iniciar turno do jogador | `Combate` | `executarTurnoJogador(combinacao)` | RF07 |
| Listar combinações | `DiarioAventureiro` | `listarCombinacoes()` | RF08 |
| Escolher combinação | `Jogador` | associação *histórico* | RF08 |
| Listar elementos coletados | `InventarioElementos` | `listarElementos()` | RF09 |
| Selecionar elementos (2..*) | `Jogador` | multiplicidade de *combina* | RF09 |
| Misturar elementos | `Jogador` | `misturarElementos(elementos)` | RF05 |
| Validar combinação | `Combinacao` | `ehValida()` | RF05 |
| Sofrer penalidade (explosão) | `Jogador` | `receberDano(valor)` | [Ata 01](/Atas/AtaSub03_01.md) |
| Consultar histórico de magias | `DiarioAventureiro` | `conhece(combinacao)` | RF08 |
| Registrar nova combinação | `DiarioAventureiro` | `registrarCombinacao(combinacao)` | RF08 |
| Gerar efeito | `Combinacao` | `gerarEfeito()` | RF05, RF06 |
| Calcular multiplicador | `Inimigo` | `calcularMultiplicador(efeito)` | RF06 |
| Receber dano (inimigo) | `Inimigo` | `receberDano(valor)` | RF06 |
| Encerrar combate: vitória | `Combate` | `verificarFim()` | RF07 |
| Atacar o jogador | `Inimigo` | `atacar(alvo)` | RF07 |
| Receber dano (jogador) | `Jogador` | `receberDano(valor)` | RF07 |
| Encerrar combate: derrota | `Combate` | `verificarFim()` | RF07 |

<p align="center">Tabela 3: Rastreabilidade entre ações, classes e requisitos. Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026).</p>

As operações `receberDano()` e `estaVivo()` pertencem a `Combatente` e são herdadas por `Jogador` e `Inimigo`. Por isso aparecem nas duas partições.

### Análise Crítica

**O que a modelagem dinâmica revelou.** O principal ganho da modelagem foi expor falhas que o diagrama de classes, sozinho, não mostrava:

1. **Duas ações citavam operações de outras classes.** "Selecionar elementos" usava `possui()`, de `InventarioElementos`, dentro da partição `Jogador`. "Atacar o jogador" usava `executarTurnoInimigo()`, de `Combate`, dentro da partição `Inimigo`. Numa partição, a ação deve ser realizada pela classe da raia; as duas foram corrigidas.
2. **O requisito de histórico estava incompleto.** Ao percorrer o turno passo a passo, a equipe notou que o RF08 não dizia se o jogador precisava repetir a mistura de uma combinação já descoberta. A resposta, reutilizar diretamente, virou o atalho do diagrama e a revisão do RF08.
3. **Faltavam operações no modelo estático.** O atalho exigiu `listarCombinacoes()` e uma nova assinatura de `executarTurnoJogador`.

Esse ciclo, em que o modelo dinâmico corrige o estático e o requisito, mostra por que Larman (2007) defende o refinamento iterativo dos artefatos em vez de tratá-los como documentos fechados.

**Simplificações assumidas.**

- **A penalidade não verifica a morte do jogador imediatamente.** Após uma mistura inválida, o fluxo segue para o turno do inimigo, e a vida do jogador só é verificada depois do ataque. Na implementação, a verificação deve ocorrer logo após a penalidade. A equipe preferiu não duplicar o nó de decisão para manter o diagrama legível.
- **O fluxo mostra um único inimigo.** O modelo estático admite vários (`Combate` *enfrenta* `1..*` inimigos), mas a escolha do alvo não foi modelada.
- **A guarda `[usar combinação registrada]` pressupõe que o histórico não está vazio.** Uma guarda complementar, como `[histórico vazio]`, forçaria o caminho da mistura e tornaria a regra explícita.
- **Algumas ações de combate ficaram de fora.** Não foram modelados o uso de itens, a fuga nem o consumo de mana. Em particular, o atributo `mana` existe em `Jogador`, mas nenhum requisito define seu consumo, e isso precisa ser especificado antes de entrar no fluxo.
- **Os dados que trafegam não são explícitos.** A modelagem não usa nós de objeto (*object nodes*) para mostrar a `Combinacao` e o `Efeito` passando entre as ações. Eles tornariam o fluxo de dados mais claro, ao custo de mais elementos em um diagrama que já é extenso.

**Legibilidade.** Sete partições e um laço de turnos produzem um diagrama alto e com cruzamentos de fluxo. Uma alternativa seria dividi-lo em dois diagramas, exploração e combate. A subequipe manteve uma visão única para preservar a leitura do cenário completo, do encontro ao término, e compensou com a descrição por etapas e a Tabela 3.

**Elo com as próximas entregas.** A alternância de turnos e a mudança de comportamento do combate conforme o estado (turno do jogador, turno do inimigo, fim) são candidatas a padrões comportamentais, a serem avaliados na Entrega 03.

### Pontos de Vista dos Integrantes

Posição de cada integrante nos debates das reuniões, descrita em primeira pessoa e revisada por cada um.

- **Carlos Henrique Brasil de Souza:** Na escolha do diagrama, achei o de sequência complicado e lembrei que as partições do diagrama de atividades se parecem com as *pools* do BPMN que fizemos na Entrega 01 ([Ata 01](/Atas/AtaSub03_01.md)). No debate sobre onde ficaria o histórico de magias, apoiei mantê-lo dentro do Diário do Aventureiro ([Ata 03](/Atas/AtaSub03_03.md)).
- **Pedro Teixeira Moriel Sanchez:** Defendi o diagrama de atividades por ser mais simples de montar e parecido com o BPMN ([Ata 01](/Atas/AtaSub03_01.md)). Na revisão da versão de referência, apontei que faltava, no início do turno, a opção de usar uma magia já descoberta como alternativa à mistura. Propus que o Diário do Aventureiro tivesse duas abas, livros e histórico de magias, já que o jogador precisaria consultá-lo durante o combate de qualquer forma ([Ata 03](/Atas/AtaSub03_03.md)).
- **Renan Pereira Reis:** Sugeri inicialmente o diagrama de sequência e concordei com o de atividades após a discussão ([Ata 01](/Atas/AtaSub03_01.md)). No debate sobre o atalho, ponderei que magias prontas não combinavam com o sistema que eu imaginava, mas concordei com a proposta: se o jogador já descobriu uma combinação, pode usá-la sem misturar de novo ([Ata 03](/Atas/AtaSub03_03.md)). Também levei à equipe a sugestão de explicitar isso nos requisitos, que todos aprovaram.

### Rastreabilidade com Outros Artefatos

| Artefato | Relação com este modelo |
|----------|-------------------------|
| [Modelagem Estática](ModelagemEstatica.md) | Fonte das partições e operações; recebeu os refinamentos da versão 1.2. |
| [Requisitos Funcionais de Referência](ModelagemEstatica.md?id=requisitos-funcionais-de-referência) | Requisitos cobertos pelo fluxo, incluindo o RF08 revisado. |
| [BPMN — Entrega 01](https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_01/blob/main/docs/Base/Relat%C3%B3rios/SubEquipe_03/BPMN.md) | Os fluxos de exploração e combate levantados por engenharia reversa originaram a sequência exploração, encontro e combate por turnos. |
| [Ata 01 — 12/09](/Atas/AtaSub03_01.md) | Escolha do diagrama de atividades, mistura de elementos concentrada no combate e penalidade por combinação inválida. |
| [Ata 02 — 15/09](/Atas/AtaSub03_02.md) | Registro, por engano, do diagrama de sequência como opção da modelagem dinâmica. |
| [Ata 03 — 16/09](/Atas/AtaSub03_03.md) | Revisão do diagrama de atividades, atalho de combinações registradas e histórico de magias no Diário do Aventureiro. |
| [IA Generativa](IAGenerativa.md) | Análise crítica do uso de IA generativa na elaboração do diagrama. |
| <a href="Base/Relatórios/SubEquipe_03/assets/diagrama-atividades-combate.drawio" download>diagrama-atividades-combate.drawio</a> | Arquivo-fonte editável do diagrama. |

<p align="center">Tabela 4: Rastreabilidade com outros artefatos. Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026).</p>

## Referências

BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. **UML: guia do usuário**. 2. ed. Rio de Janeiro: Elsevier, 2005.

FOWLER, Martin. **UML essencial: um breve guia para a linguagem-padrão de modelagem de objetos**. 3. ed. Porto Alegre: Bookman, 2005.

G4_PROJETOJOGO. **SubEquipe_03 — BPMN**. Entrega 01, Arquitetura e Desenho de Software, Universidade de Brasília, 2026. Disponível em: <https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_01/blob/main/docs/Base/Relat%C3%B3rios/SubEquipe_03/BPMN.md>. Acesso em: 16 set. 2026.

LARMAN, Craig. **Utilizando UML e padrões: uma introdução à análise e ao projeto orientados a objetos e ao desenvolvimento iterativo**. 3. ed. Porto Alegre: Bookman, 2007.

OBJECT MANAGEMENT GROUP. **OMG Unified Modeling Language (OMG UML), Version 2.5.1**. 2017. Disponível em: <https://www.omg.org/spec/UML/2.5.1/PDF>. Acesso em: 16 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
| Carlos Henrique Brasil de Souza | 33% |
| Pedro Teixeira Moriel Sanchez | 33% |
| Renan Pereira Reis | 33% |

<p align="center">Tabela 5: Contribuição dos integrantes.</p>

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|------|:----------|:----------|:--------|
| 1.0 | 16/09/2026 | Versão de referência do diagrama de atividades, derivada do diagrama de classes, com apoio de IA generativa | Carlos Henrique Brasil de Souza, Pedro Teixeira Moriel Sanchez, Renan Pereira Reis | |
| 1.1 | 16/09/2026 | Verificação de consistência entre ações e operações e correção de duas ações | Carlos Henrique Brasil de Souza, Pedro Teixeira Moriel Sanchez, Renan Pereira Reis | |
| 1.2 | 16/09/2026 | Inclusão do atalho de reutilização de combinações registradas e redação do relatório | Carlos Henrique Brasil de Souza, Pedro Teixeira Moriel Sanchez, Renan Pereira Reis | |
| 1.3 | 18/09/2026 | Correção do histórico da escolha do diagrama, inclusão dos pontos de vista dos integrantes e da Ata 03 na rastreabilidade | Carlos Henrique Brasil de Souza, Pedro Teixeira Moriel Sanchez, Renan Pereira Reis | |

<p align="center">Tabela 6: Histórico de versão.</p>

Ver também: [Modelagem Estática na Notação UML](ModelagemEstatica.md) · [IA Generativa](IAGenerativa.md)
