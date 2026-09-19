# SubEquipe_01: Diagrama de Sequência

## Descrição

Diagrama de sequência do **turno de combate elemental** do **G4_ProjetoJogo**, com as mensagens trocadas entre `Jogador`, `Combate`, `Magia`, `Inimigo` e `Partida` desde a ação inicial do jogador até a atualização do estado da partida.

## Objetivo

Mostrar, de forma simples e direta, a ordem temporal das interações de um turno de combate: a identificação da magia a partir dos elementos escolhidos, o cálculo e a aplicação do dano no inimigo, a decisão sobre a continuidade do combate e a atualização do resultado na partida.

## Metodologia

O diagrama foi elaborado em [draw.io](https://app.diagrams.net/) por Cibelly Lourenço Ferreira, conforme a distribuição da [Ata 01](/Atas/AtaSub01_01.md), e registrado no [commit de criação][criacao]. As interações representam os [RF05, RF06 e RF07 do Subgrupo 03][rf]: combinação de elementos em combate, cálculo de dano pela fraqueza do inimigo e alternância de turnos. A leitura da notação considera os [slides da disciplina][slides], a [especificação UML 2.5.1][uml] e os [exemplos do UML Diagrams][uml-sequencia].

Nesta versão, o artefato prioriza clareza visual e facilidade de leitura em vez de reproduzir integralmente a estrutura de nomes do [Diagrama de Classes](DiagramaClasses.md). Os participantes e a maioria das operações continuam compatíveis com as classes `Jogador`, `Combate`, `Magia`, `Inimigo` e `Partida` já definidas; alguns nomes de mensagens foram simplificados para reforçar a compreensão do fluxo, e essa escolha está registrada em [Incertezas e decisões](#incertezas-e-decisões).

### Cenário escolhido e justificativa

O cenário representado é **um turno de combate elemental**, do início da ação do jogador até a atualização do resultado na partida: o jogador inicia o turno, o sistema identifica a magia formada pelos elementos combinados, o combate calcula o dano considerando o inimigo, o dano é aplicado, verifica-se se o inimigo foi derrotado e, caso não tenha sido, ele contra-ataca antes de a partida ser atualizada.

Esse fluxo concentra o maior número de colaborações entre objetos do MVP e é o ponto em que os demais diagramas dinâmicos permanecem em alto nível: o [Diagrama de Atividades](DiagramaAtividades.md#fluxo-geral-da-partida) trata o combate como a ação `Resolver combate por turnos`, e o [Diagrama de Estados](DiagramaEstados.md) representa `Batalhar` como um único estado composto. Nesta versão, optou-se por um recorte enxuto do turno — sem participantes ou mensagens que não contribuam diretamente para a legibilidade do cenário.

## Conteúdo

<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/sequencia/sequencia.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/sequencia/sequencia.svg" alt="Sequência simplificada do turno de combate elemental: o jogador inicia o turno no combate, que identifica a magia, calcula o dano e o aplica no inimigo; se o inimigo foi derrotado, o combate finaliza o confronto, senão o inimigo contra-ataca e o dano é aplicado no jogador; por fim, o combate atualiza o resultado na partida."></a>
<figcaption>Figura 1: Diagrama de sequência do turno de combate elemental. Fonte: Cibelly Lourenço Ferreira, 2026.</figcaption>
</figure>

<p><a href="Base/Relatórios/SubEquipe_01/assets/sequencia/sequencia.drawio" download>Fonte editável em draw.io</a> · <a href="Base/Relatórios/SubEquipe_01/assets/sequencia/sequencia.svg" download>SVG do diagrama</a></p>

### Participantes

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Participante | Papel no cenário | Requisitos |
|--------------|-------------------|------------|
| `Jogador` | Inicia o turno e recebe o dano do contra-ataque. | [RF05, RF16][rf] |
| `Combate` | Coordena o turno: identifica a magia, calcula e aplica o dano, decide a continuidade e informa o resultado. | [RF05, RF06, RF07][rf] |
| `Magia` | Representa o efeito determinado pelos elementos combinados pelo jogador. | [RF05][rf] |
| `Inimigo` | Recebe o dano, informa a vida atual e executa o contra-ataque enquanto está vivo. | [RF06, RF13, RF17][rf] |
| `Partida` | Recebe o resultado do turno e mantém o estado geral da sessão de jogo. | [RF03, RF07][rf] |

</div>

<p align="center">Tabela 1: Participantes do diagrama e requisitos relacionados. Fonte: Cibelly Lourenço Ferreira, 2026.</p>

O `DiarioDoAventureiro` — presente na versão anterior deste diagrama — foi removido deste cenário porque o registro de descobertas ([RF08][rf]) não é central ao fluxo de dano e turno, e sua inclusão deixava o diagrama mais denso sem ganho de clareza para este recorte.

### Fluxo principal

1. `Jogador` envia `iniciarTurno(elementos)` a `Combate`, com os elementos combinados na ação.
2. `Combate` solicita a `Magia` que `identificarMagia(elementos)` e recebe de volta o efeito correspondente.
3. `Combate` calcula o dano (mensagem reflexiva `calcularDano(magia, inimigo)`), considerando a fraqueza do inimigo.
4. `Combate` envia `receberDano(dano)` a `Inimigo`, que devolve `vidaAtual`.
5. Havendo **[inimigo derrotado]**, `Combate` encerra o confronto com `finalizarCombate(vitoria)` a `Partida`.
6. Caso **[inimigo com vida]**, `Inimigo` executa `contraAtacar()`, devolve o `dano` sofrido, e `Combate` aplica esse dano ao `Jogador`.
7. Em ambos os casos, `Combate` encerra o turno enviando `atualizarResultado(turno)` a `Partida`.

### Decisão do fluxo

O único fragmento combinado do diagrama é o `alt` que decide a continuidade do combate:

<div role="region" aria-label="Tabela 2" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Condição de guarda | Significado | Requisito |
|---------------------|-------------|-----------|
| `[inimigo derrotado]` | O combate é finalizado como vitória, sem contra-ataque. | [RF06, RF07][rf] |
| `[inimigo com vida]` | O inimigo contra-ataca e o dano é aplicado ao jogador antes de o turno terminar. | [RF07][rf] |

</div>

<p align="center">Tabela 2: Condição de guarda do fragmento <code>alt</code>. Fonte: Cibelly Lourenço Ferreira, 2026.</p>

Optou-se por um único fragmento `alt`, sem `opt` ou `loop`, para manter o diagrama simples: a alternância contínua de turnos já é representada pelo [Diagrama de Estados](DiagramaEstados.md), e repeti-la aqui como `loop` tornaria a leitura mais pesada sem agregar informação nova.

### Relação com a modelagem orientada a objetos

Cada participante mantém a responsabilidade que já lhe cabia nos demais artefatos da SubEquipe_01: `Combate` concentra a lógica do turno sem assumir tarefas de `Partida`; `Inimigo` informa a própria vida e executa o próprio ataque, em vez de ter esses dados manipulados de fora; `Magia` é consultada para identificar o efeito, e não para calcular dano; e `Partida` apenas recebe o resultado, sem conhecer os detalhes do cálculo. Essa divisão preserva o espírito do [Diagrama de Classes](DiagramaClasses.md), ainda que os nomes de algumas mensagens tenham sido simplificados para esta versão (ver [Incertezas e decisões](#incertezas-e-decisões)).

### Relação com outros diagramas

A sequência detalha a ação `Resolver combate por turnos` do [Diagrama de Atividades](DiagramaAtividades.md#fluxo-geral-da-partida) e o estado `Batalhar` do [Diagrama de Estados](DiagramaEstados.md), cuja condição `Possui vida?` corresponde ao `alt` deste diagrama. Os participantes correspondem às classes `Jogador`, `Combate`, `Magia`, `Inimigo` e `Partida` do [Diagrama de Classes](DiagramaClasses.md), com nomes de mensagens simplificados neste recorte.

### Incertezas e decisões

<div role="region" aria-label="Tabela 3" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Ponto em aberto | Decisão adotada | Justificativa |
|------------------|------------------|----------------|
| Fidelidade aos nomes exatos de operações do [Diagrama de Classes](DiagramaClasses.md) (ex.: `calcularDano`, `alternarTurno`). | Mensagens renomeadas para uma forma mais direta (`iniciarTurno`, `identificarMagia`, `receberDano`, `contraAtacar`, `atualizarResultado`), priorizando clareza sobre fidelidade estrita ao modelo estático. | Esta versão do diagrama tem como objetivo principal ser simples e apresentável; a correspondência conceitual com as classes é mantida, mesmo com nomes mais didáticos. |
| Inclusão do `DiarioDoAventureiro` (presente na versão anterior). | Removido deste cenário. | O registro de descobertas não é central ao fluxo de dano e turno; a remoção reduz a quantidade de participantes e melhora a leitura, conforme o objetivo desta revisão. |
| Nível de detalhe dos fragmentos combinados. | Apenas um `alt`, sem `opt` nem `loop`. | Evita poluição visual; a alternância de turnos já está descrita no [Diagrama de Estados](DiagramaEstados.md). |
| Verificação dos elementos já coletados ([RF09][rf]). | Não representada explicitamente neste diagrama. | Mantida fora do escopo deste recorte simplificado, que foca no cálculo de dano e na alternância de turno; pode ser detalhada em versão futura, se necessário. |

</div>

<p align="center">Tabela 3: Incertezas assinaladas e decisões de modelagem. Fonte: Cibelly Lourenço Ferreira, 2026.</p>

## Referências

OBJECT MANAGEMENT GROUP. **UML 2.5.1**. 2017. [Especificação][uml].

SERRANO, Milene. **Modelagem UML Dinâmica**. Universidade de Brasília, [s. d.]. Páginas 6 a 11. [Slides][slides].

SUBGRUPO 03. **Requisitos funcionais do MVP**. 2026. [Lista de referência][rf].

UML DIAGRAMS. **Sequence Diagrams**. [Notação e exemplos][uml-sequencia] · [Fragmentos combinados][fragmentos]. Acesso em: 18 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
| Cibelly Lourenço Ferreira | 100% |

<p align="center">Tabela 4: Contribuição na elaboração do diagrama.</p>

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|:----:|-----------|-----------|---------|
| 1.0 | 17/09/2026 | Inclusão do diagrama em SVG e da fonte editável em draw.io. | Cibelly Lourenço Ferreira | |
| 2.0 | 18/09/2026 | Refinamento do cenário do turno de combate, ajuste das responsabilidades e da notação, novo estilo visual com fundo branco e detalhamento da documentação. | Cibelly Lourenço Ferreira | |
| 3.0 | 18/09/2026 | Diagrama recriado com foco em simplicidade visual: redução para 5 participantes, remoção do `DiarioDoAventureiro` e de fragmentos secundários, mensagens simplificadas e novo layout mais enxuto. | Cibelly Lourenço Ferreira | |

<p align="center">Tabela 5: Histórico de versão.</p>

[criacao]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/commit/5f5d41a876c823f2cd50983f2c1ad7ebc95618ca
[rf]: Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt ':ignore'
[slides]: Base/Relatórios/SubEquipe_01/assets/atividades/referencias/modelagem-uml-dinamica.pdf ':ignore'
[uml]: https://www.omg.org/spec/UML/2.5.1/PDF
[uml-sequencia]: https://www.uml-diagrams.org/sequence-diagrams.html
[fragmentos]: https://www.uml-diagrams.org/sequence-diagrams-combined-fragment.html
