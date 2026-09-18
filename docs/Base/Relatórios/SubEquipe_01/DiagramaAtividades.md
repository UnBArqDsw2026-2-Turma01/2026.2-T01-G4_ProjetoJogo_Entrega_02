# SubEquipe_01: Diagrama de Atividades

## Descrição

Este artefato apresenta o Diagrama de Atividades do MVP do **G4_ProjetoJogo**, representando o fluxo geral de uma partida e as principais ações realizadas pelo jogador e pelo sistema. A modelagem foi construída a partir dos [requisitos do Subgrupo 03][rf] e dos artefatos elaborados anteriormente pela equipe.

## Objetivo

Representar o comportamento geral da partida por meio do fluxo de atividades, evidenciando decisões, alternativas e responsabilidades do jogador e do jogo. O diagrama busca facilitar a compreensão de como as principais mecânicas se relacionam durante a execução do sistema.

## Metodologia

O artefato foi produzido conforme a [Ata 01](/Atas/AtaSub01_01.md) e a [issue #6][issue]. O [Mapa Mental][mapa] e o [BPMN][bpmn] orientaram a seleção dos caminhos de exploração e combate. Com a adoção dos RF01 a RF19 do [Subgrupo 03][rf], a V2 incorporou salvamento, interações com NPCs e combinação de elementos durante o combate.

Os arquivos SVG e as fontes editáveis em draw.io foram construídos pelo site [draw.io](https://draw.io/). As decisões de reduzir os fluxos detalhados, incluir raias e revisar o fluxo de saída, bem como os demais usos de IA durante a elaboração do artefato, estão registradas em [IA Generativa](IAGenerativa.md#yogi-nam-de-souza-barbosa). A notação foi confrontada com os slides de Milene Serrano (páginas 17 a 19), os [exemplos de atividades do UML Diagrams](https://www.uml-diagrams.org/activity-diagrams.html) e a UML 2.5.1 (§§15 e 16.10).

A conferência percorreu início, exploração, combate, saída e falha no salvamento, observando as guardas, os retornos e as arestas que deixam a região interrompível. As ações também foram relacionadas aos serviços do [diagrama de componentes](DiagramaComponentes.md). O carrossel e os commits preservam a evolução.

## Conteúdo

### Fluxo geral da partida

<div class="diagram-carousel" data-default-version="v2" aria-label="Versões do diagrama de atividades">
<div class="diagram-slide" data-version="v1" data-label="V1 · escopo anterior, 13/09/2026">
<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/atividades/partida.svg" alt="V1: exploração, combinação e combate organizados no fluxo geral de uma partida."></a>
<figcaption>Figura 1: Fluxo geral da partida, V1. Fonte: Yogi Nam de Souza Barbosa, 2026.</figcaption>
</figure>
<p>A primeira versão organizou as principais atividades de exploração e combate e permitiu visualizar o ciclo básico da partida. Entretanto, algumas responsabilidades e decisões ainda não estavam claramente separadas, o que motivou o refinamento do fluxo. A V1 foi precedida por uma versão preliminar utilizada durante a concepção inicial do fluxo. Essa versão não foi preservada no repositório e, portanto, não pôde ser incorporada ao histórico de versões. </p>
<p><a href="Base/Relatórios/SubEquipe_01/assets/atividades/DiagramaAtividades.drawio" download>Fonte da V1 em draw.io</a> · <a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida.svg" target="_blank" rel="noopener" download>SVG da V1</a></p>
</div>
<div class="diagram-slide" data-version="v2" data-label="V2 · requisitos do Subgrupo 03, 14/09/2026">
<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida-v2.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/atividades/partida-v2.svg" alt="V2: raias Jogador e Jogo, exploração, interações, encontros e combate por turnos no fluxo geral da partida."></a>
<figcaption>Figura 2: Fluxo geral da partida, V2. Fonte: Yogi Nam de Souza Barbosa, 2026.</figcaption>
</figure>
<p>A V2 utiliza raias para distinguir as ações iniciadas pelo jogador das responsabilidades executadas pelo jogo. A organização das decisões e dos retornos ao fluxo principal torna mais clara a relação entre exploração, interações e combate, mantendo o diagrama em um nível de abstração adequado para representar o comportamento geral da partida.</p>
<p><a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida-v2.drawio" download>Fonte da V2 em draw.io</a> · <a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida-v2.svg" target="_blank" rel="noopener" download>SVG da V2</a></p>
</div>
</div>

A região tracejada delimita a partida ativa. `(Jogador)` identifica a participação externa; a outra raia reúne as ações do jogo. Losangos separam decisões e reuniões de caminhos alternativos (*merges*). Cada par de círculos com a mesma letra continua uma única aresta. O zigue-zague indica uma aresta de interrupção: ao atravessá-la, o fluxo abandona a região e encerra as ações que ainda estiverem ativas nela.

Não há *fork/join* porque as ações principais são alternativas, sem trabalho paralelo a sincronizar. `Sair solicitado` é uma aceitação de evento habilitada durante a execução da região, sem precisar integrar cada caminho de exploração ou combate. A repetição da exploração já aparece nas arestas de retorno; um nó de laço estruturado acrescentaria detalhe sem esclarecer outra regra neste nível.

### Análise

**Yogi Nam de Souza Barbosa:** o principal cuidado foi escolher o nível de detalhe. Considerei manter fluxos separados de combinação e combate, mas concentrei este artefato na partida para evitar repetir o trabalho previsto para estados e sequência. As raias acrescentam informação sobre responsabilidade; parâmetros e objetos consumidos exigiriam detalhar os dados de cada ação. Por isso, sua ausência é compatível com o objetivo deste fluxo.

Por outro lado, a quantidade de decisões torna o fluxo relativamente extenso e pode reduzir sua legibilidade à medida que novas mecânicas forem adicionadas. Além disso, por representar uma visão geral, o diagrama não detalha aspectos como a troca de mensagens entre objetos ou os estados internos do combate, que devem ser analisados em outros diagramas dinâmicos.

### Relação com os componentes

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Ação da V2 | Relação com o jogo e os componentes | Requisitos |
|------------|------------------------------------|------------|
| Mover protagonista | O componente de Exploração trata a movimentação e as regras relacionadas às diferentes áreas do mundo. | RF01, RF02, RF04 |
| Coletar objeto do mundo | Exploração identifica o livro; Progressão registra a descoberta e o conteúdo revelado. O inventário de elementos é tratado de forma agregada, pois a lista não detalha sua coleta. | RF10, RF11, RF12; apoio a RF18 |
| Interagir com NPC | Interações com NPCs trata compras e início de missões, enquanto o progresso mantém os resultados dessas ações. | RF14, RF15, RF19 |
| Consultar inventário ou diário | Os componentes relacionados à progressão disponibilizam itens, livros e informações descobertas pelo jogador. | RF08, RF11, RF18, RF19 |
| Resolver combate por turnos | O componente de Combate coordena as ações dos turnos, o uso de magias e o cálculo dos resultados do confronto. | RF05, RF06, RF07, RF09, RF13, RF16, RF17 |
| Salvar progresso | O Controle da Partida coordena o fluxo da sessão e utiliza o componente de Salvamento para persistir o progresso previsto nos requisitos. | RF03 |

</div>

<p align="center">Tabela 1: Relação entre as principais atividades da V2, os componentes e os requisitos funcionais. Fonte: requisitos do Subgrupo 03 e Diagrama de Componentes V2, organizados por Yogi Nam de Souza Barbosa com auxílio IA para linkar requisitos, 2026.</p>

Os serviços associados a essas responsabilidades estão descritos em [Serviços das interfaces](DiagramaComponentes.md#serviços-das-interfaces). A relação entre os dois artefatos permite analisar o sistema sob perspectivas complementares: o diagrama de atividades enfatiza **como o fluxo ocorre**, enquanto o diagrama de componentes evidencia **quais partes do sistema são responsáveis por executá-lo**.

### Decisões e evidências

| Alternativa considerada | Decisão adotada | Justificativa e evidência |
|------------------------|-------------------------------------|-------------------------|
| Detalhar combinação e combate em diagramas de atividades próprios. | Manter o fluxo geral e representar o combate em uma ação de alto nível. | Preserva o espaço de detalhamento dos diagramas atribuídos aos colegas na [Ata 01](/Atas/AtaSub01_01.md). Solicitação registrada em [IA Generativa](IAGenerativa.md#iterações-e-decisões). |
| Tratar a saída somente como uma opção na exploração. | Preservar `Sair solicitado` e a região interrompível; acrescentar salvamento na V2. | Permite representar a saída durante uma ação em andamento e relacioná-la ao RF03. Comparação V1/V2 e [commit e732f48][v2]. |
| Acrescentar mais símbolos UML para tornar o modelo completo. | Usar raias e separar validação de execução, sem introduzir paralelismo artificial. | As responsabilidades e os caminhos de recusa precisavam ficar claros; o fluxo não exigia sincronização entre ações paralelas. [Fonte da V2](Base/Relatórios/SubEquipe_01/assets/atividades/partida-v2.drawio ':ignore'). |

<p align="center">Tabela 2: Alternativas e decisões de modelagem. Fonte: solicitações de Yogi Nam de Souza Barbosa e histórico de alterações do artefato, 2026.</p>

## Referências

OBJECT MANAGEMENT GROUP. **UML 2.5.1**. 2017. Seções 15 e 16.10. [Especificação](https://www.omg.org/spec/UML/2.5.1/PDF).

SERRANO, Milene. **Modelagem UML Dinâmica**. Universidade de Brasília, [s. d.]. Páginas 17 a 19. [Slides](Base/Relatórios/SubEquipe_01/assets/atividades/referencias/modelagem-uml-dinamica.pdf ':ignore').

SUBGRUPO 03. **BPMN**. 2026. [Exploração e combate][bpmn].

SUBGRUPO 03. **Mapa Mental**. 2026. [Visão do jogo][mapa].

SUBGRUPO 03. **Requisitos funcionais do MVP**. 2026. [Lista de referência][rf].

UML DIAGRAMS. **Activity Diagrams**. [Notação e exemplos](https://www.uml-diagrams.org/activity-diagrams.html). Acesso em: 14 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
| Yogi Nam de Souza Barbosa | 100% |

<p align="center">Tabela 3: Contribuição na produção do artefato.</p>

## Histórico de Versão

<div role="region" aria-label="Tabela 4" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|:----:|-----------|-----------|---------|
| 1.0 | 13/09/2026 | Inserção do diagrama de atividades. | Yogi Nam de Souza Barbosa |  |
| 2.0 | 14/09/2026 | Adequação aos requisitos do Subgrupo 03, raias e carrossel de versões. | Yogi Nam de Souza Barbosa |  |
| 2.1 | 14/09/2026 | Revisão da descrição e metodologia. | Yogi Nam de Souza Barbosa |  |
| 2.2 | 16/09/2026 | Registro das alternativas e análise. | Yogi Nam de Souza Barbosa |  |

</div>

<p align="center">Tabela 4: Histórico de versão. O campo Revisor identifica revisão por outra pessoa.</p>

[mapa]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/MapaMental.md
[bpmn]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/BPMN.md
[rf]: Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt ':ignore'
[issue]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/issues/6
[pr]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/pull/10
[v1]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/commit/d36316de57703613a2451c4a7f30de1b22358e40
[v2]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/commit/e732f4816fe9ad4201b15d2704d0e76d0db94512
[revisao-texto]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/commit/9a82f35660010398255b7e17f3ab8099983cd509
[base-evidencias]: Base/Relatórios/SubEquipe_01/assets/evidencias/README.md ':ignore'
