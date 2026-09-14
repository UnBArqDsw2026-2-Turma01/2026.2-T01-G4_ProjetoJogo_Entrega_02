# SubEquipe_01: Diagrama de Atividades

## Descrição

Fluxo geral do MVP do **G4_ProjetoJogo**, baseado nos [requisitos do Subgrupo 03][rf] e nos [complementos adotados na modelagem](DiagramaComponentes.md#complementos-aos-requisitos). O artefato integra o trabalho definido na [Ata 01 do Subgrupo 01](/Atas/AtaSub01_01.md).

## Objetivo

Representar o fluxo geral da partida, suas alternativas de exploração e as condições de encerramento.

## Metodologia

O [Mapa Mental][mapa] e o [BPMN][bpmn] orientaram a primeira versão. Na V2, os requisitos do Subgrupo 03 reorganizam as ações de exploração, o combate e o salvamento. A notação segue os slides de Milene Serrano (páginas 17 a 19), o UML Diagrams e a UML 2.5.1. As raias distinguem as escolhas do jogador das responsabilidades do jogo. O fluxo foi conferido com as interfaces do [diagrama de componentes](DiagramaComponentes.md).

## Conteúdo

### Fluxo geral da partida

<div class="diagram-carousel" data-default-version="v2" aria-label="Versões do diagrama de atividades">
<div class="diagram-slide" data-version="v1" data-label="V1 · escopo anterior, 13/09/2026">
<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/atividades/partida.svg" alt="V1: exploração, combinação e combate dentro de uma região interrompível. Saída e derrota encerram a sessão sem salvamento."></a>
<figcaption>Figura 1: Fluxo geral da partida, V1. Fonte: Yogi Nam de Souza Barbosa, 2026.</figcaption>
</figure>
<p>A primeira versão organizou a alternância entre exploração e combate e tratou a saída como interrupção. Ela ajuda a compreender a origem do fluxo, mas o descarte da sessão e a combinação fora do combate pertencem ao escopo anterior. Os códigos RF inscritos nessa imagem correspondem à numeração antiga.</p>
<p><a href="Base/Relatórios/SubEquipe_01/assets/atividades/DiagramaAtividades.drawio" download>Fonte da V1 em draw.io</a> · <a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida.svg" target="_blank" rel="noopener" download>SVG da V1</a></p>
</div>
<div class="diagram-slide" data-version="v2" data-label="V2 · requisitos do Subgrupo 03, 14/09/2026">
<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida-v2.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/atividades/partida-v2.svg" alt="V2: raias Jogador e Jogo, validação antes da execução, exploração com coletas e NPCs, encontros aleatórios e combate por turnos. Sair solicitado interrompe a região ativa para salvar; falha retoma a sessão em memória, sucesso retorna ao menu. Continuar restaura também um combate salvo."></a>
<figcaption>Figura 2: Fluxo geral da partida, V2. Fonte: Yogi Nam de Souza Barbosa, 2026.</figcaption>
</figure>
<p>As raias evidenciam quem toma cada iniciativa, e a validação separada da execução torna visível o caminho de uma ação recusada. O salvamento passa a fazer parte do ciclo da partida, inclusive quando há falha de gravação. Combate e interações continuam em alto nível: o diagrama permite verificar como as mecânicas se conectam, mas não substitui a análise dos turnos e das mensagens nos modelos de estados e sequência.</p>
<p><a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida-v2.drawio" download>Fonte da V2 em draw.io</a> · <a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida-v2.svg" target="_blank" rel="noopener" download>SVG da V2</a></p>
</div>
</div>

A região tracejada delimita a partida ativa. **Sair solicitado**, sem aresta de entrada, pode interromper qualquer ação dessa região. As arestas em zigue-zague levam o fluxo para fora dela. Os pares de círculos A, B e C dão continuidade às setas sem atravessar o desenho; A explicita a repetição da exploração.

As alternativas se reencontram em *merges*. Não há tarefas paralelas que precisem de *fork* e *join*: até o evento de saída permanece habilitado pela própria região interrompível. Parâmetros, objetos consumidos e um nó de loop estruturado não acrescentariam informação ao nível geral escolhido. A nota sobre o estado salvo esclarece uma decisão que afeta a continuidade do jogo.

### Relação com os componentes

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Ação da V2 | Relação com o jogo e os componentes | Requisitos |
|------------|------------------------------------|------------|
| Mover protagonista | Exploração respeita o tipo da área: segura, não segura aberta ou não segura fechada. Apenas as duas últimas admitem encontros aleatórios. | RF01, RF02, RF04 |
| Coletar objeto do mundo | Exploração obtém elementos ou livros. Progressão atualiza o inventário ou registra o livro no diário, revelando seu conteúdo. | RF10, RF11, RF12, RF18, RF20 |
| Interagir com NPC | Interações com NPCs trata compras e início de missões; Progressão conserva os resultados. | RF14, RF15, RF19 |
| Consultar inventário ou diário | Progressão apresenta os elementos, os itens, os livros e o histórico de magias. | RF08, RF11, RF18, RF19 |
| Resolver combate por turnos | Combate permite misturar elementos e usar consumíveis, considerando estatísticas e fraquezas no cálculo de dano. | RF05, RF06, RF07, RF09, RF13, RF16, RF17, RF22 |
| Preparar sessão e salvar progresso | Controle da Partida coordena inicialização e retomada. Salvamento grava o estado usado ao continuar. | RF03, RF21 |

</div>

<p align="center">Tabela 1: Rastreabilidade da V2. Fonte: requisitos do Subgrupo 03 e Diagrama de Componentes V2, organizados por Yogi Nam de Souza Barbosa, 2026.</p>

Os serviços usados nessas etapas estão descritos em [Serviços das interfaces](DiagramaComponentes.md#serviços-das-interfaces).

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
| 2.0 | 14/09/2026 | Adequação aos requisitos do Subgrupo 03, raias, salvamento e carrossel de versões. | Yogi Nam de Souza Barbosa | - |

</div>

<p align="center">Tabela 3: Histórico de versão.</p>

[mapa]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/MapaMental.md
[bpmn]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/BPMN.md
[rf]: Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt ':ignore'
