# SubEquipe_01: Requisitos Funcionais do MVP

## Descrição

Requisitos funcionais do MVP do **G4_ProjetoJogo**, baseados nos artefatos do Subgrupo 03 e na [Ata 01 do Subgrupo 01](/Atas/AtaSub01_01.md).

## Objetivo

Definir a base funcional dos diagramas estáticos e dinâmicos do Subgrupo 03.

## Metodologia

Foram analisados o [Mapa Mental][mapa], o [BPMN][bpmn], o [NFR Framework][nfr] e as atas relacionadas. Os requisitos detalham as nove famílias citadas na ata do Subgrupo 01 e o retorno ao jogador previsto no NFR Framework. Os cenários de exploração, combinação, combate e interrupção estruturam os requisitos e sua relação com os diagramas.

## Conteúdo

### Escopo

MVP local para um jogador, com exploração de uma área, coleta de elementos, criação de itens, Livro do Aventureiro e combate contra um inimigo por encontro. A criação ocorre na exploração; consumíveis causam dano imediato ao inimigo ou curam o protagonista no combate. Inventário e Livro podem ser consultados na exploração ou no turno do jogador. O progresso dura apenas a sessão, sem salvamento. Missões, lojas, personalização, fuga e efeitos persistentes ficam para evolução.

O mapa inclui criação de itens e salvamento, mas a [Ata 05 do Subgrupo 03][sub0305] registra sua retirada. Este recorte mantém a criação de itens conforme a ata posterior do Subgrupo 01 e exclui o salvamento, limitando o progresso à sessão.

### Requisitos

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| ID | Comportamento esperado |
|:--:|------------------------|
| RF01 | Iniciar uma partida pela opção Nova partida da tela inicial, com posição e pontos de vida (PV) iniciais, inventário vazio, Livro sem descobertas, recursos disponíveis e inimigos ativos, reinicializando todo o progresso anterior. |
| RF02 | Movimentar o protagonista em oito direções durante a exploração, respeitando obstáculos e limites da área. Comandos recusados preservam a posição. |
| RF03 | Coletar recursos disponíveis e ao alcance durante a exploração. Adicionar as quantidades ao inventário e retirar o recurso da área na mesma operação, impedindo coleta duplicada. Recusas preservam ambos. |
| RF04 | Consultar nomes, tipos e quantidades dos elementos e itens possuídos, indicando quando o inventário estiver vazio. |
| RF05 | Selecionar elementos e quantidades durante a exploração e confirmar uma combinação, mesmo sem conhecer previamente a receita. Uma receita predefinida válida consome todos os ingredientes e adiciona o produto em uma única atualização. Receita inexistente, saldo insuficiente ou cancelamento da seleção preservam o estoque; após recusa, permitir corrigir a seleção. |
| RF06 | Registrar a receita após uma criação bem-sucedida, sem duplicar descobertas nem registrar tentativas recusadas. |
| RF07 | Consultar as receitas descobertas, seus ingredientes, quantidades, produtos e efeitos no jogo, indicando quando não houver descobertas. |
| RF08 | Iniciar um combate ao encontrar um inimigo ativo após uma movimentação válida, usando os PV atuais do protagonista e os PV iniciais do inimigo. Suspender movimento, coleta, criação e novos encontros até o término do combate. |
| RF09 | Alternar turnos, começando pelo protagonista. Após um ataque básico ou item válido do jogador, executar um ataque do inimigo apenas se ele sobreviver. Consultas, cancelamentos de seleção e comandos inválidos mantêm o turno. |
| RF10 | Confirmar o uso de um consumível disponível no turno do jogador, validando tipo, quantidade e alvo antes de descontar uma unidade e aplicar dano ao inimigo ou cura ao protagonista. A ação ocupa o turno; recusa ou cancelamento da seleção preservam estoque, PV e turno. |
| RF11 | Encerrar o combate ao chegar a zero PV. Vitória retira o inimigo da área e retorna à exploração com os PV restantes, inventário e descobertas preservados. Derrota exibe o resultado, descarta a sessão e retorna à tela inicial, oferecendo Nova partida. |
| RF12 | Exibir resultados, PV atualizados, turno e motivos de recusa, como recurso fora de alcance, receita inexistente, saldo insuficiente ou alvo inválido. |
| RF13 | Permitir Sair enquanto a partida estiver ativa, inclusive durante exploração, consultas, combinação e combate. Interromper as ações em andamento, impedir a aplicação posterior de seus resultados, descartar o progresso da sessão e retornar à tela inicial. |

</div>

<p align="center">Tabela 1: Requisitos do MVP. Fonte: Mapa Mental, BPMN, NFR Framework e atas dos Subgrupos 01 e 03, detalhados por Yogi Nam de Souza Barbosa, 2026.</p>

Toda aplicação de dano ou cura mantém os PV entre zero e o máximo do personagem. O conteúdo mínimo inclui recursos para executar ao menos uma receita e usar seu produto em combate. Receitas, efeitos e valores de PV são parâmetros do Catálogo do Jogo; este modelo define seu comportamento, sem fixar valores de balanceamento.

## Referências

GRUPO 04. **Ata 01 do Subgrupo 01**. 11 set. 2026. [Planejamento da modelagem](/Atas/AtaSub01_01.md).

SUBGRUPO 03. **Ata 02**. 19 ago. 2026. [Alquimia e movimentação em oito direções][sub0302].

SUBGRUPO 03. **Ata 04**. 25 ago. 2026. [Combate com um inimigo por vez][sub0304].

SUBGRUPO 03. **Ata 05**. 27 ago. 2026. [Revisão de escopo][sub0305].

SUBGRUPO 03. **BPMN**. 2026. [Exploração e combate][bpmn].

SUBGRUPO 03. **Mapa Mental**. 2026. [Visão do jogo][mapa].

SUBGRUPO 03. **NFR Framework**. 2026. [Usabilidade e retorno ao jogador][nfr].

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
| Cibelly Lourenço Ferreira | 33,4% |
| Gabriel Andrade Magioli | 33,3% |
| Yogi Nam de Souza Barbosa | 33,3% |

<p align="center">Tabela 2: Contribuição no artefato.</p>

## Histórico de Versão

<div role="region" aria-label="Tabela 3" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|:----:|-----------|-----------|---------|
| 1.0 | 12/09/2026 | Levantamento de requisitos | Cibelly, Gabriel e Yogi | - |

</div>

<p align="center">Tabela 3: Histórico de versão.</p>

Ver também: [Diagrama de Atividades](DiagramaAtividades.md) · [Diagrama de Componentes](DiagramaComponentes.md) · [Modelagem Estática](ModelagemEstatica.md)

[mapa]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/MapaMental.md
[sub0302]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Atas/AtaSub03_02.md
[sub0304]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Atas/AtaSub03_04.md
[sub0305]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Atas/AtaSub03_05.md
[bpmn]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/BPMN.md
[nfr]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/NFRFramework.md
