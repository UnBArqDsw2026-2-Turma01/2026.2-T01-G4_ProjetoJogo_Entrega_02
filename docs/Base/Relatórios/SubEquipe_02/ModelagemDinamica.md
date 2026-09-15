# SubEquipe_02 — Modelagem Dinâmica na Notação UML

## Descrição

Modelagem de processo de negócio da SubEquipe_02, no escopo do **FOCO_02 — Modelagem Dinâmica na Notação UML**. Representa, na notação UML, a modelagem dinâmica do software.

## Objetivo

Elaborar em UML uma modelagem dinâmica pela subequipe, evidenciando as atividades, os eventos e os pontos de decisão do processo.

## Metodologia

A Modelagem Dinâmica é aplicada na fase de análise e projeto de sistemas orientados a objetos para representar o comportamento do sistema ao longo do tempo. No projeto, ela foi empregada para especificar a lógica de execução e a coordenação temporal das interações entre os objetos em cenários críticos.
A elaboração dos diagramas foi conduzida na plataforma web **Draw.io** (*diagrams.net*). A escolha da ferramenta fundamentou-se em sua conformidade com a notação padrão da UML, além da facilidade de versionamento e portabilidade para documentações técnicas em formato digital (PENDER, 2003).

## Conteúdo

### Diagrama de Atividade

Na UML, um diagrama de atividade fornece uma visualização do comportamento de um sistema, descrevendo a sequência de ações em um processo. Os diagramas de atividades são semelhantes aos fluxogramas porque representam o fluxo entre as ações em uma atividade; no entanto, eles são mais poderosos, pois também podem ilustrar fluxos paralelos ou simultâneos, fluxos alternativos (condicionais) e estruturas de sincronização entre diferentes caminhos de execução.

### Elementos Principais

Nos diagramas de atividades, os nós de atividades e os arcos (transições) são utilizados para modelar o fluxo de controle e o fluxo de dados entre as ações:

| Elemento | Representação Visual | Função |
| :--- | :--- | :--- |
| **Nó Inicial** | Círculo sólido preto | Marca o início do fluxo de atividade. |
| **Ação / Atividade** | Retângulo arredondado | Representa um passo de execução ou tarefa no processo. |
| **Decisão** | Losango | Ponto de bifurcação condicional (caminhos alternativos). |
| **Fork / Join** | Barra espessa horizontal | Sincronização ou divisão de fluxos paralelos. |
| **Nó Final** | Círculo duplo (olho de boi) | Indica o encerramento do fluxo. |
| **Transição** | Setas direcionadas | Indicam a direção do fluxo de controle entre os elementos. |

---

### Caso de Uso: Projeto Jogo – Sistema de Crafting

Um diagrama de atividades para o sistema de *crafting* do projeto é particularmente útil para:

* **Visualizar o fluxo completo** de coleta de elementos, validação de receitas e criação de itens;
* **Identificar pontos de decisão** (*Elemento encontrado? Receita válida?*);
* **Documentar caminhos de sucesso e falha** no processo de criação;
* **Servir como base** para a implementação direta das classes e seus métodos correspondentes.

## Modelagem Dinâmica: Diagrama de Atividades

<img src="../../../Assets/diagramaDeAtividade.png" alt="Diagrama de Classe">

<p align="center">Figura 1: Modelo Estático na notação UML. Fonte: COSTA, João Igor (2026).</p>

## Referências

IBM. **Diagramas de atividade**. IBM Documentation, 2021. Disponível em: <https://www.ibm.com/docs/pt-br/rational-soft-arch/9.7.0?topic=diagrams-activity>. Acesso em: 15 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
|João Igor |     25%       |

<p align="center">Tabela 1: Contribuição dos integrantes.</p>

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|------|:----------|:----------|:--------|
|  1.0   | 15/09|  Adição da literatura correspondente e do Diagrama de Atividade  | [João Igor](github.com/JoaoPC10)          |         |

<p align="center">Tabela 2: Histórico de versão.</p>

Ver também: [Modelagem Estática na Notação UML](ModelagemEstatica.md) · [IA Generativa](IAGenerativa.md)