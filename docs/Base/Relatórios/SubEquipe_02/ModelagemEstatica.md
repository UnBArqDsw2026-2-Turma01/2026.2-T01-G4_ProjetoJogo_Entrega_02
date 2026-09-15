# SubEquipe_02 — Modelagem Estática na Notação UML

## Descrição

Modelagem de processo de negócio da SubEquipe_02, no escopo do **FOCO_01 — Modelagem Estática na Notação UML**. Representa, na notação UML, a modelagem Estática do software.

## Objetivo

Elaborar em UML uma modelagem estática pela subequipe, evidenciando as atividades, os eventos e os pontos de decisão do processo.

## Metodologia

A modelagem estática é definida como um conjunto de atividades sistemáticas para realizar uma tarefa, fornecendo os passos a serem tomados nos diversos estágios do desenvolvimento de software. No presente projeto, a modelagem tem como objetivo elucidar os objetos atuantes no jogo. Para a representação dos diagramas, foi utilizada a plataforma [Draw.io](https://app.diagrams.net/).

## Conteúdo

### Diagrama de Classe

Segundo a IBM, os diagramas de classe são fundamentais para o processo de modelagem de objetos, pois modelam a estrutura estática de um sistema. Dependendo da complexidade do projeto, é possível utilizar um único diagrama de classe para representar o sistema inteiro ou múltiplos diagramas para especificar componentes individuais.

Estes diagramas funcionam como representações abstratas da estrutura do sistema ou subsistema e são utilizados para:

* **Modelar os objetos** que compõem o sistema e suas respectivas responsabilidades;
* **Exibir os relacionamentos** entre os objetos (associação, herança, composição, dependência);
* **Descrever as operações** e serviços fornecidos por meio de seus métodos;
* **Especificar os atributos** e propriedades que caracterizam cada objeto;
* **Estabelecer as restrições** e regras de negócio do domínio.

---

### Elementos Essenciais do Diagrama de Classe

| Elemento | Descrição | Exemplo |
| :--- | :--- | :--- |
| **Classes** | Estruturas representadas por retângulos divididos em três seções (nome, atributos e operações). | `Jogador`, `Inimigo` |
| **Atributos** | Características que definem o estado de um objeto. | `vida`, `nome`, `posição` |
| **Métodos / Operações** | Comportamentos e funcionalidades executadas pela classe. | `atacar()`, `coletar()`, `validar()` |
| **Relacionamentos** | Conexões que indicam como as classes interagem entre si. | Associação, Herança, Composição, Agregação |

### Modelagem Estática: Diagrama de Classe

<img src="../../../Assets/diagramaDeClasse.png" alt="Diagrama de Classe">

<p align="center">Figura 1: Modelo Estático na notação UML. Fonte: COSTA, João Igor (2026).</p>

## Referências

CARVALHO, Ariadne Maria Brito Rizzoni. **Engenharia de Software: Capítulo 3**. Instituto de Computação – UNICAMP. Disponível em: <https://www.ic.unicamp.br/~ariadne/mc426/cap03.pdf>. Acesso em: 15 set. 2026.

IBM. **Diagramas de classe**. IBM Documentation, 2021. Disponível em: <https://www.ibm.com/docs/pt-br/rsas/7.5.0?topic=structure-class-diagrams>. Acesso em: 15 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
|João Igor |     25%       |

<p align="center">Tabela 1: Contribuição dos integrantes.</p>

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|------|:----------|:----------|:--------|
|  1.0   | 15/09|  Adição da literatura correspondente e dos Diagramas de Classe e Atividade  | [João Igor](github.com/JoaoPC10)          |         |

<p align="center">Tabela 2: Histórico de versão.</p>

Ver também: [Modelagem Dinâmica na Notação UML](ModelagemDinamica.md) · [IA Generativa](IAGenerativa.md)