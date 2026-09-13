# SubEquipe_01: Diagrama de Atividades

## Descrição

Fluxos do MVP do **G4_ProjetoJogo**, baseados nos [requisitos funcionais](RequisitosFuncionais.md), nos artefatos do Subgrupo 03 e na [Ata 01 do Subgrupo 01](/Atas/AtaSub01_01.md).

## Objetivo

Representar o fluxo geral da partida, suas alternativas de exploração e as condições de encerramento.

## Metodologia

O [Mapa Mental][mapa] e o [BPMN][bpmn] orientaram os cenários do MVP. A notação segue os slides de Milene Serrano (páginas 17 a 19) e o [UML Diagrams](https://www.uml-diagrams.org/activity-diagrams.html): ações, decisões, uniões de alternativas e uma região interrompível com aceitação do evento de saída. Combinação e combate são representados como ações de alto nível. O diagrama possui versões em SVG e draw.io.

## Conteúdo

### Fluxo geral da partida

<a href="Base/Relatórios/SubEquipe_01/assets/atividades/partida.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/atividades/partida.svg" alt="Fluxo geral da partida. Uma região interrompível contém exploração, combinação e combate. O evento Sair solicitado interrompe as ações em andamento. Vitória retorna à exploração; derrota e saída encerram a região e descartam a sessão." style="width:100%;max-width:1400px;max-height:none;"></a>

<p align="center">Figura 1: Fluxo geral da partida. Fonte: Yogi Nam de Souza Barbosa, 2026.</p>

O diagrama evidencia como as funcionalidades se conectam e como a sessão termina, facilitando a conferência do MVP. A abstração de combinação e combate preserva a leitura do fluxo geral, mas omite suas regras internas. Diagramas de estados e sequência complementam essa visão com mudanças de estado e mensagens entre objetos.

[Fonte editável em draw.io](Base/Relatórios/SubEquipe_01/assets/atividades/DiagramaAtividades.drawio ':ignore')

A borda tracejada delimita a sessão ativa. O evento **Sair solicitado**, sem seta de entrada, permanece habilitado nessa região e pode interromper inclusive combate e combinação. As arestas em zigue-zague encerram a região por saída ou derrota. As ações marcadas com `(Jogador)` são escolhas do usuário; as demais são executadas pelo jogo. Arcos nas linhas indicam cruzamentos sem conexão.

### Relação com os componentes

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Etapa | Componentes centrais | Requisitos |
|-------|----------------------|------------|
| Sessão e exploração | Interface do Jogador, Controle da Partida e Exploração | RF01, RF02, RF03, RF04, RF07, RF08, RF11, RF12, RF13 |
| Combinação | Alquimia, Inventário, Livro e Catálogo | RF05, RF06, RF12 |
| Combate | Controle da Partida, Combate em Turnos e Inventário | RF04, RF07, RF08, RF09, RF10, RF11, RF12 |

</div>

<p align="center">Tabela 1: Rastreabilidade entre atividades, componentes e requisitos. Fonte: Requisitos Funcionais e Diagrama de Componentes do MVP, 2026.</p>

Os serviços usados nessas etapas estão descritos em [Serviços das interfaces](DiagramaComponentes.md#serviços-das-interfaces).

## Referências

OBJECT MANAGEMENT GROUP. **Unified Modeling Language, versão 2.5.1**. 2017. Seções 15.6 e 16.10. [Especificação](https://www.omg.org/spec/UML/2.5.1/PDF). Acesso em: 13 set. 2026.

SERRANO, Milene. **Modelagem UML Dinâmica**. Universidade de Brasília, [s. d.]. Páginas 17 a 19. [Slides](Base/Relatórios/SubEquipe_01/assets/atividades/referencias/modelagem-uml-dinamica.pdf ':ignore').

SUBGRUPO 03. **BPMN**. 2026. [Exploração e combate][bpmn].

SUBGRUPO 03. **Mapa Mental**. 2026. [Visão do jogo][mapa].

UML DIAGRAMS. **UML Activity Diagrams**. [Referência de notação](https://www.uml-diagrams.org/activity-diagrams.html). Acesso em: 13 set. 2026.

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
| 1.1 | 13/09/2026 | Atualização da navegação entre os artefatos. | Yogi Nam de Souza Barbosa | - |
| 1.2 | 13/09/2026 | Adoção do rodapé de navegação automática. | Yogi Nam de Souza Barbosa | - |

</div>

<p align="center">Tabela 3: Histórico de versão.</p>

[mapa]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/MapaMental.md
[bpmn]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/BPMN.md
