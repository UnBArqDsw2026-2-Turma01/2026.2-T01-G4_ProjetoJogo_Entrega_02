# SubEquipe_01: Diagrama de Sequência

## Descrição

Diagrama de sequência do combate elemental do **G4_ProjetoJogo**, com as mensagens entre jogador, partida, combate, magia, inimigo e diário do aventureiro.

## Objetivo

Mostrar a ordem das interações e as responsabilidades dos objetos na combinação de elementos, aplicação de dano e descoberta de magias.

## Metodologia

O diagrama foi elaborado em draw.io por Cibelly Lourenço Ferreira, conforme a distribuição da [Ata 01](/Atas/AtaSub01_01.md), e registrado no [commit de criação][criacao]. Nesta página, as interações foram relacionadas aos [RF05, RF06, RF08, RF09 e RF13 do Subgrupo 03][rf]. A leitura da notação considera os [slides da disciplina][slides] e os [exemplos do UML Diagrams][uml-sequencia].

## Conteúdo

<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/sequencia/sequencia.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/sequencia/sequencia.svg" alt="Sequência do combate elemental: seleção de elementos, criação de magia, cálculo de dano pela fraqueza do inimigo, registro da descoberta, resposta do inimigo e retorno do resultado."></a>
<figcaption>Figura 1: Diagrama de sequência do combate elemental. Fonte: Cibelly Lourenço Ferreira, 2026.</figcaption>
</figure>

<p><a href="Base/Relatórios/SubEquipe_01/assets/sequencia/sequencia.drawio" download>Fonte editável em draw.io</a> · <a href="Base/Relatórios/SubEquipe_01/assets/sequencia/sequencia.svg" download>SVG do diagrama</a></p>

Os [fragmentos `alt` e `opt`][fragmentos] representam, respectivamente, alternativas e um comportamento opcional, aqui usado para registrar uma magia inédita. A sequência detalha interações da ação `Resolver combate por turnos` do [Diagrama de Atividades](DiagramaAtividades.md), com participantes definidos no [Diagrama de Classes](DiagramaClasses.md).

O recorte ajuda a identificar quem solicita cada operação. Como limite, o bloco `loop` contém a resposta do inimigo, sem incluir uma nova ação do jogador; por isso, não representa sozinho toda a alternância dos turnos. As diferenças entre mensagens e operações das classes estão discutidas na [relação entre os modelos](DiagramaClasses.md#relação-com-outros-diagramas), e o caminho de registro no diário é comparado ao [Diagrama de Componentes](DiagramaComponentes.md#relação-com-outros-diagramas).

## Referências

OBJECT MANAGEMENT GROUP. **UML 2.5.1**. 2017. [Especificação](https://www.omg.org/spec/UML/2.5.1/PDF).

SERRANO, Milene. **Modelagem UML Dinâmica**. Universidade de Brasília, [s. d.]. Páginas 6 a 11. [Slides][slides].

SUBGRUPO 03. **Requisitos funcionais do MVP**. 2026. [Lista de referência][rf].

UML DIAGRAMS. **Sequence Diagrams**. [Notação e exemplos][uml-sequencia] · [Fragmentos combinados][fragmentos]. Acesso em: 18 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
| Cibelly Lourenço Ferreira | 100% |

<p align="center">Tabela 1: Contribuição na elaboração do diagrama.</p>

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|:----:|-----------|-----------|---------|
| 1.0 | 17/09/2026 | Inclusão do diagrama em SVG e da fonte editável em draw.io. | Cibelly Lourenço Ferreira | |

<p align="center">Tabela 2: Histórico de versão.</p>

[criacao]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/commit/5f5d41a876c823f2cd50983f2c1ad7ebc95618ca
[rf]: Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt ':ignore'
[slides]: Base/Relatórios/SubEquipe_01/assets/atividades/referencias/modelagem-uml-dinamica.pdf ':ignore'
[uml-sequencia]: https://www.uml-diagrams.org/sequence-diagrams.html
[fragmentos]: https://www.uml-diagrams.org/sequence-diagrams-combined-fragment.html
