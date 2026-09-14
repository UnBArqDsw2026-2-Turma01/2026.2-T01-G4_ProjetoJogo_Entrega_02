# SubEquipe_01: Diagrama de Atividades

## Descrição

Este artefato apresenta o Diagrama de Atividades do MVP do **G4_ProjetoJogo**, representando o fluxo geral de uma partida e as principais ações realizadas pelo jogador e pelo sistema. A modelagem foi construída a partir dos [requisitos do Subgrupo 03][rf] e dos artefatos elaborados anteriormente pela equipe.

## Objetivo

Representar o comportamento geral da partida por meio do fluxo de atividades, evidenciando decisões, alternativas e responsabilidades do jogador e do jogo. O diagrama busca facilitar a compreensão de como as principais mecânicas se relacionam durante a execução do sistema.

## Metodologia

O diagrama foi elaborado no [draw.io](https://www.drawio.com/), utilizando como base os requisitos funcionais definidos para o MVP e os artefatos produzidos anteriormente pela equipe, principalmente o [Mapa Mental][mapa] e o [BPMN][bpmn]. Esses materiais auxiliaram na identificação das principais atividades, decisões e caminhos possíveis durante uma partida.

A modelagem também foi confrontada com o [diagrama de componentes](DiagramaComponentes.md), buscando manter coerência entre o fluxo comportamental e a divisão estrutural do sistema. A notação utilizada foi baseada nos slides de Milene Serrano (páginas 17 a 19), no [UML Diagrams](https://www.uml-diagrams.org/) e na especificação [UML 2.5.1](https://www.omg.org/spec/UML/2.5.1/). As versões anteriores foram preservadas para registrar a evolução do artefato.

## Conteúdo

### Fluxo geral da partida

<div class="diagram-carousel" data-default-version="v2" aria-label="Versões do diagrama de atividades">
<div class="diagram-slide" data-version="v1" data-label="V1 · escopo anterior, 13/09/2026">
<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/atividades/partida.svg" alt="V1: exploração, combinação e combate organizados no fluxo geral de uma partida."></a>
<figcaption>Figura 1: Fluxo geral da partida, V1. Fonte: Yogi Nam de Souza Barbosa, 2026.</figcaption>
</figure>
<p>A primeira versão organizou as principais atividades de exploração e combate e permitiu visualizar o ciclo básico da partida. Entretanto, algumas responsabilidades e decisões ainda não estavam claramente separadas, o que motivou o refinamento do fluxo.</p>
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

A região tracejada delimita o fluxo da partida ativa. As raias separam as responsabilidades do **Jogador** e do **Jogo**, enquanto os nós de decisão e *merge* representam caminhos alternativos que posteriormente retornam ao fluxo principal. Os conectores identificados por letras são utilizados para dar continuidade ao fluxo sem aumentar o cruzamento de arestas no desenho.

Não foram utilizados *forks* e *joins*, pois o fluxo modelado não exige a representação de atividades paralelas. Essa escolha mantém o diagrama focado na sequência lógica das principais ações do jogo.

### Análise crítica

O uso de raias contribui para distinguir com clareza as decisões do jogador das ações processadas pelo sistema, enquanto a organização em um fluxo geral facilita a identificação dos principais caminhos da partida. O diagrama também permite observar como diferentes mecânicas se conectam sem detalhar sua implementação interna.

Por outro lado, a quantidade de decisões torna o fluxo relativamente extenso e pode reduzir sua legibilidade à medida que novas mecânicas forem adicionadas. Além disso, por representar uma visão geral, o diagrama não detalha aspectos como a troca de mensagens entre objetos ou os estados internos do combate, que devem ser analisados em outros diagramas dinâmicos.

### Relação com os componentes

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Ação da V2 | Relação com o jogo e os componentes | Requisitos |
|------------|------------------------------------|------------|
| Mover protagonista | O componente de Exploração trata a movimentação e as regras relacionadas às diferentes áreas do mundo. | RF01, RF02, RF04 |
| Coletar objeto do mundo | A Exploração identifica objetos disponíveis no ambiente, enquanto os dados correspondentes são mantidos pelos componentes responsáveis pelo progresso do jogador. | RF10, RF11, RF12, RF18 |
| Interagir com NPC | Interações com NPCs trata compras e início de missões, enquanto o progresso mantém os resultados dessas ações. | RF14, RF15, RF19 |
| Consultar inventário ou diário | Os componentes relacionados à progressão disponibilizam itens, livros e informações descobertas pelo jogador. | RF08, RF11, RF18, RF19 |
| Resolver combate por turnos | O componente de Combate coordena as ações dos turnos, o uso de magias e o cálculo dos resultados do confronto. | RF05, RF06, RF07, RF09, RF13, RF16, RF17 |
| Salvar progresso | O Controle da Partida coordena o fluxo da sessão e utiliza o componente de Salvamento para persistir o progresso previsto nos requisitos. | RF03 |

</div>

<p align="center">Tabela 1: Relação entre as principais atividades da V2, os componentes e os requisitos funcionais. Fonte: requisitos do Subgrupo 03 e Diagrama de Componentes V2, organizados por Yogi Nam de Souza Barbosa, 2026.</p>

Os serviços associados a essas responsabilidades estão descritos em [Serviços das interfaces](DiagramaComponentes.md#serviços-das-interfaces). A relação entre os dois artefatos permite analisar o sistema sob perspectivas complementares: o diagrama de atividades enfatiza **como o fluxo ocorre**, enquanto o diagrama de componentes evidencia **quais partes do sistema são responsáveis por executá-lo**.

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

<p align="center">Tabela 2: Contribuição no artefato.</p>

## Histórico de Versão

<div role="region" aria-label="Tabela 3" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|:----:|-----------|-----------|---------|
| 1.0 | 13/09/2026 | Inserção do diagrama de atividades. | Yogi Nam de Souza Barbosa | - |
| 2.0 | 14/09/2026 | Adequação aos requisitos do Subgrupo 03, raias e carrossel de versões. | Yogi Nam de Souza Barbosa | - |
| 2.1 | 14/09/2026 | Revisão da descrição e metodologia. | Yogi Nam de Souza Barbosa | - |

</div>

<p align="center">Tabela 3: Histórico de versão.</p>

[mapa]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/MapaMental.md
[bpmn]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/BPMN.md
[rf]: Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt ':ignore'
