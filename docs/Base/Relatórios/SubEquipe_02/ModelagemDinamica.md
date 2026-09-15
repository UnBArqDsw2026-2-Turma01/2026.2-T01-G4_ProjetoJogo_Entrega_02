# SubEquipe_02 — Modelagem Dinâmica na Notação UML

## Descrição

Modelagem de processo de negócio da SubEquipe_02, no escopo do **FOCO_02 — Modelagem Dinâmica na Notação UML**. Representa, na notação UML, a modelagem dinâmica do software.

## Objetivo

Elaborar em UML uma modelagem dinâmica pela subequipe, evidenciando as atividades, os eventos e os pontos de decisão do processo.

## Metodologia

A modelagem dinâmica descreve o comportamento do sistema ao longo do tempo, complementando a visão estrutural fornecida pela modelagem estática. Enquanto os diagramas estruturais mostram quais elementos compõem o sistema, os diagramas de interação mostram como esses elementos colaboram para realizar uma funcionalidade (BOOCH; RUMBAUGH; JACOBSON, 2005).

Para esta entrega, a subequipe optou pelo **Diagrama de Comunicação**. Conforme Fowler (2005), os diagramas de comunicação e os de sequência são semanticamente equivalentes, ambos representam trocas de mensagens entre objetos, porém enfatizam aspectos distintos: o diagrama de sequência destaca a ordem temporal das mensagens, ao passo que o diagrama de comunicação destaca os vínculos estruturais entre os objetos participantes. Essa segunda ênfase foi considerada mais adequada ao momento do projeto, pois permite verificar diretamente se as colaborações previstas nos fluxos do jogo são suportadas pelos componentes definidos na modelagem estática.

O processo seguido foi dividido em quatro etapas:

1. **Seleção dos cenários**: a partir dos fluxos centrais do jogo, foram escolhidas quatro interações representativas: o turno de combate, a mistura de elementos, a batalha no Coliseu e a interação com as lojas;
2. **Identificação dos participantes**: para cada cenário, foram levantados os objetos envolvidos, reutilizando os nomes dos componentes já definidos na [Modelagem Estática](ModelagemEstatica.md), de modo a manter a rastreabilidade entre os dois modelos;
3. **Definição das mensagens**: as chamadas entre os objetos foram nomeadas como operações (`inputElementos()`, `consomeReagentes()`, `concedePremio()`) e numeradas segundo o esquema decimal aninhado da UML, com a inclusão de condições de guarda nos pontos de decisão;
4. **Diagramação**: as quatro interações foram desenhadas na plataforma [Draw.io](https://app.diagrams.net/), cada uma delimitada por um *frame* `interaction` próprio, e reunidas em uma única prancha para permitir tanto a leitura individual quanto a visão de conjunto.

A ferramenta **Draw.io** foi escolhida por disponibilizar uma biblioteca de formas aderente à notação UML e por permitir o posicionamento direto dos objetos e das mensagens com o mouse, o que se mostrou decisivo em um diagrama cujo entendimento depende fortemente da disposição espacial dos participantes.

Como achado principal, a modelagem evidenciou que os objetos `:GerenciadorDeInventario` e `:SistemaSalvar` recebem mensagens em praticamente todos os cenários analisados, confirmando o papel central que lhes havia sido atribuído na modelagem estática e reforçando a necessidade de que suas interfaces sejam estáveis, uma vez que qualquer alteração nelas se propaga para múltiplos fluxos do jogo.
A Modelagem Dinâmica é aplicada na fase de análise e projeto de sistemas orientados a objetos para representar o comportamento do sistema ao longo do tempo. No projeto, ela foi empregada para especificar a lógica de execução e a coordenação temporal das interações entre os objetos em cenários críticos.
A elaboração dos diagramas foi conduzida na plataforma web **Draw.io** (*diagrams.net*). A escolha da ferramenta fundamentou-se em sua conformidade com a notação padrão da UML, além da facilidade de versionamento e portabilidade para documentações técnicas em formato digital (PENDER, 2003).

## Conteúdo

### Diagrama de Comunicação
### Diagrama de Atividade

O diagrama de comunicação é um diagrama de interação que exibe um conjunto de objetos, os vínculos existentes entre eles e as mensagens trocadas para realizar um determinado comportamento. Diferentemente do diagrama de sequência, ele não possui um eixo temporal explícito: a ordem das mensagens é expressa exclusivamente pela sua numeração (OMG, 2017).
Na UML, um diagrama de atividade fornece uma visualização do comportamento de um sistema, descrevendo a sequência de ações em um processo. Os diagramas de atividades são semelhantes aos fluxogramas porque representam o fluxo entre as ações em uma atividade; no entanto, eles são mais poderosos, pois também podem ilustrar fluxos paralelos ou simultâneos, fluxos alternativos (condicionais) e estruturas de sincronização entre diferentes caminhos de execução.

Sua utilização no projeto tem por finalidade:

* **Detalhar os cenários** mais relevantes da jogabilidade em termos de troca de mensagens;
* **Validar a arquitetura** definida na modelagem estática, verificando se os componentes possuem os vínculos necessários para realizar cada fluxo;
* **Explicitar as condições** que direcionam o comportamento do sistema, por meio das guardas associadas às mensagens;
* **Identificar acoplamentos**, revelando os objetos que concentram o maior número de colaborações;
* **Orientar a implementação**, já que cada mensagem corresponde a uma operação a ser codificada.

### Elementos Essenciais do Diagrama de Comunicação

| Elemento | Descrição | Exemplo no diagrama |
| :--- | :--- | :--- |
| **Ator** | Entidade externa que inicia a interação com o sistema. | `J: Jogador` |
| **Objeto / Instância** | Participante da interação, nomeado no formato `nome:Classe`. | `:MotorDeBatalhaATB`, `:LivroDoAventureiro` |
| **Vínculo (*link*)** | Linha que conecta dois participantes, indicando que existe um caminho de comunicação entre eles. | `J: Jogador` — `:MisturaDeElementosQuimicos` |
| **Mensagem** | Seta rotulada sobre o vínculo, representando a chamada de uma operação. | `1.1.1: consomeReagentes()` |
| **Numeração aninhada** | Sequência decimal que expressa a ordem e o aninhamento das chamadas. | `1`, `1.1` e `1.1.1` |
| **Condição de guarda** | Expressão entre colchetes que condiciona o envio da mensagem. | `[sucesso na mistura]`, `[se vitoria]` |
| **Marcador de iteração** | Asterisco que indica envio repetido da mensagem. | `1.2 *: sincronizaTurnosEDanos()` |
| ***Frame* de interação** | Moldura que delimita e nomeia o cenário representado. | `interaction Turno De Combate` |

### Modelagem Dinâmica: Diagrama de Comunicação

A prancha a seguir reúne as quatro interações modeladas pela subequipe. Em razão da sua extensão, cada cenário é apresentado individualmente nas subseções seguintes.

<img src="../../../Assets/subgrupo02_diagrama_comunicacao.png" alt="Diagrama de Comunicação completo">

<p align="center">Figura 1: Modelo Dinâmico na notação UML — visão geral das quatro interações. Fonte: SILVA, Marcos (2026).</p>

---

#### Interação 1: Turno de Combate

Este cenário representa o ciclo de um turno no sistema de batalha. O `:MotorDeBatalhaATB` sinaliza ao jogador que o seu turno começou; caso a ação escolhida seja a utilização de elementos químicos, a mistura consome os reagentes do inventário e devolve o efeito da poção ao motor de batalha. Em paralelo, o motor mantém a sincronização contínua com a inteligência artificial dos inimigos, comportamento representado pelo marcador de iteração.

<img src="../../../Assets/subgrupo02_diagrama_comunicacao_interacao1.png" alt="Interação Turno de Combate">

<p align="center">Figura 2: Interação "Turno de Combate". Fonte: SILVA, Marcos (2026).</p>

| Nº | Mensagem | Origem | Destino |
| :--- | :--- | :--- | :--- |
| 1 | `sinalizaTurno()` | `:MotorDeBatalhaATB` | `J: Jogador` |
| 1.1 | `[turno do jogador]: inputElementos()` | `J: Jogador` | `:MisturaDeElementosQuimicos` |
| 1.1.1 | `consomeReagentes()` | `:MisturaDeElementosQuimicos` | `:GerenciadorDeInventario` |
| 1.1.2 | `aplicaEfeitoNovaPocao()` | `:MisturaDeElementosQuimicos` | `:MotorDeBatalhaATB` |
| 1.2 | `*: sincronizaTurnosEDanos()` | `:MotorDeBatalhaATB` | `:IADeInimigos` |

<p align="center">Tabela 1: Mensagens da interação "Turno de Combate".</p>

---

#### Interação 2: Mistura e Descoberta

Este cenário detalha o sistema de *crafting* químico fora do combate. O jogador combina elementos, o que consome reagentes do inventário e, em caso de sucesso, devolve a nova poção ao mesmo inventário. Quando a combinação resulta em uma receita inédita, ela é registrada no Livro do Aventureiro, que por sua vez aciona a serialização das descobertas, garantindo a persistência do progresso.

<img src="../../../Assets/subgrupo02_diagrama_comunicacao_interacao2.png" alt="Interação Mistura e Descoberta">

<p align="center">Figura 3: Interação "Mistura e Descoberta". Fonte: SILVA, Marcos (2026).</p>

| Nº | Mensagem | Origem | Destino |
| :--- | :--- | :--- | :--- |
| 1 | `combinaElementos()` | `J: Jogador` | `:MisturaDeElementosQuimicos` |
| 1.1 | `consomeReagentes()` | `:MisturaDeElementosQuimicos` | `:GerenciadorDeInventario` |
| 1.2 | `[sucesso na mistura]: outputNovaPocao()` | `:MisturaDeElementosQuimicos` | `:GerenciadorDeInventario` |
| 1.3 | `[nova receita]: registraNovaReceita()` | `:MisturaDeElementosQuimicos` | `:LivroDoAventureiro` |
| 1.3.1 | `serializaDescobertas()` | `:LivroDoAventureiro` | `:SistemaSalvar` |

<p align="center">Tabela 2: Mensagens da interação "Mistura e Descoberta".</p>

---

#### Interação 3: Batalha no Coliseu

Este cenário representa o modo de jogo do Coliseu, no qual o jogador aposta um item para disputar uma batalha. Ao receber a aposta, `:OColiseu` remove o item apostado do inventário e configura as regras da arena junto ao motor de batalha. Concluído o combate, o motor reporta o resultado e, havendo vitória, o prêmio é concedido e o estado do jogo é salvo.

<img src="../../../Assets/subgrupo02_diagrama_comunicacao_interacao3.png" alt="Interação Batalha no Coliseu">

<p align="center">Figura 4: Interação "Batalha no Coliseu". Fonte: SILVA, Marcos (2026).</p>

| Nº | Mensagem | Origem | Destino |
| :--- | :--- | :--- | :--- |
| 1 | `interageAposta()` | `J: Jogador` | `:OColiseu` |
| 1.1 | `removeItemApostado()` | `:OColiseu` | `:GerenciadorDeInventario` |
| 1.2 | `configuraRegrasDeArena()` | `:OColiseu` | `:MotorDeBatalhaATB` |
| 2 | `[batalha concluida]: reportaVitoriaTurnos()` | `:MotorDeBatalhaATB` | `:OColiseu` |
| 2.1 | `[se vitoria]: concedePremio()` | `:OColiseu` | `:GerenciadorDeInventario` |
| 2.2 | `gatilhoDeSalvar()` | `:OColiseu` | `:SistemaSalvar` |

<p align="center">Tabela 3: Mensagens da interação "Batalha no Coliseu".</p>

---

#### Interação 4: Interação de Loja

Este cenário descreve a compra de itens junto aos mercadores. O fluxo tem início quando o jogador ativa o *collider* de um NPC; identificado o NPC, a conversa é iniciada e, caso a opção de compra seja escolhida, a interface da loja é aberta. Havendo ouro suficiente, o valor é debitado no menu de status e o item é transferido para o inventário do jogador.

<img src="../../../Assets/subgrupo02_diagrama_comunicacao_interacao4.png" alt="Interação de Loja">

<p align="center">Figura 5: Interação "Interação de Loja". Fonte: SILVA, Marcos (2026).</p>

| Nº | Mensagem | Origem | Destino |
| :--- | :--- | :--- | :--- |
| 1 | `ativaCollider()` | `J: Jogador` | `:InteracaoEGatilhos` |
| 1.1 | `[isNPC]: iniciaConversa()` | `:InteracaoEGatilhos` | `:ControladorDeNPCs` |
| 1.1.1 | `[opcao comprar]: acionaAbertura()` | `:ControladorDeNPCs` | `:LojasMerchants` |
| 1.1.2 | `[ouro suficiente]: debitaOuro()` | `:LojasMerchants` | `:MenuDeStatus` |
| 1.1.3 | `transacaoItem()` | `:LojasMerchants` | `:GerenciadorDeInventario` |

<p align="center">Tabela 4: Mensagens da interação "Interação de Loja".</p>
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

<p align="center">Figura 1: Modelo Dinâmico na notação UML. Fonte: COSTA, João Igor (2026).</p>

## Referências

BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. **UML: Guia do Usuário**. 2. ed. Rio de Janeiro: Elsevier, 2005.

FOWLER, Martin. **UML Essencial: um breve guia para a linguagem-padrão de modelagem de objetos**. 3. ed. Porto Alegre: Bookman, 2005.

OMG. **Unified Modeling Language Specification, version 2.5.1**. Object Management Group, 2017. Disponível em: <https://www.omg.org/spec/UML/2.5.1/>. Acesso em: 16 set. 2026.
IBM. **Diagramas de atividade**. IBM Documentation, 2021. Disponível em: <https://www.ibm.com/docs/pt-br/rational-soft-arch/9.7.0?topic=diagrams-activity>. Acesso em: 15 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
|Marcos Vinícius Gündel da Silva |     25%       |
|João Igor |     25%       |

<p align="center">Tabela 5: Contribuição dos integrantes.</p>

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|------|:----------|:----------|:--------|
|  1.0   | 16/09|  Adição da literatura correspondente e do Diagrama de Comunicação, com o detalhamento das quatro interações  | [Marcos Vinícius](https://github.com/MarcosViniciusG)          |         |
|  1.0   | 15/09|  Adição da literatura correspondente e do Diagrama de Atividade  | [João Igor](github.com/JoaoPC10)          |         |

<p align="center">Tabela 6: Histórico de versão.</p>

Ver também: [Modelagem Estática na Notação UML](ModelagemEstatica.md) · [IA Generativa](IAGenerativa.md)
