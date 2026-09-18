# SubEquipe_03 — IA Generativa

## Descrição

Registro do **FOCO_03 — IA Generativa** da SubEquipe_03. O artefato documenta em quais etapas da Entrega 02 a subequipe usou IA generativa, com quais ferramentas e com que resultado, incluindo os **erros das ferramentas** que a equipe identificou e corrigiu. Ao final, reúne os pontos de vista de cada integrante sobre as lições aprendidas.

## Objetivo

- Registrar com transparência onde a IA generativa participou da produção dos requisitos, das atas e dos artefatos da [Modelagem Estática](ModelagemEstatica.md) e da [Modelagem Dinâmica](ModelagemDinamica.md).
- Avaliar criticamente os acertos e os erros das ferramentas, com evidências verificáveis nas atas das reuniões e no repositório.
- Registrar as lições aprendidas e o ponto de vista de cada integrante. **Todos participam.**

## Metodologia

O levantamento seguiu três passos:

1. **Identificação dos usos.** Cada uso de IA foi localizado nos registros das três reuniões da subequipe ([Ata 01](/Atas/AtaSub03_01.md), [Ata 02](/Atas/AtaSub03_02.md) e [Ata 03](/Atas/AtaSub03_03.md)), nos históricos de versão dos artefatos, nas legendas das figuras e no histórico de commits.
2. **Verificação das saídas.** Cada saída foi confrontada com três referências: os requisitos funcionais (RF01 a RF19, listados na seção [Requisitos Funcionais de Referência](ModelagemEstatica.md?id=requisitos-funcionais-de-referência)), a especificação da UML (OBJECT MANAGEMENT GROUP, 2017) e o que foi efetivamente decidido nas reuniões, conferido nos registros de cada uma. Quando a saída divergia de alguma delas, o erro foi registrado na Tabela 2.
3. **Pontos de vista individuais.** As posições de cada integrante sobre o uso de IA foram levantadas a partir dos debates nas reuniões e revisadas pelo próprio integrante ([Tabela 3](#pontos-de-vista-dos-integrantes)).

Foram usadas duas ferramentas:

- **Gemini 3.1 Pro (Google):** anotações automáticas das reuniões no Google Meet e redação das atas a partir das transcrições.
- **Claude (Anthropic):** usado por Pedro Teixeira Moriel Sanchez em uma conversa mantida com o contexto do projeto desde a Entrega 01, para gerar a lista preliminar de requisitos e o protótipo do diagrama de classes. A partir de 15/09, também foi usado por Renan Pereira Reis, na interface web e depois via Claude Code, na revisão dos diagramas, na geração dos arquivos do Draw.io e na redação dos relatórios.

## Conteúdo

### Usos da IA Generativa na Entrega

| # | Ferramenta | Artefato | O que a IA fez | Como a equipe usou o resultado |
|:-:|------------|----------|----------------|--------------------------------|
| 1 | Claude | Requisitos funcionais (12/09) | Gerou uma lista preliminar de requisitos a partir do contexto do projeto. | A equipe revisou item por item comparando com o BPMN da Entrega 01, removeu a criação de itens na exploração e reescreveu vários requisitos (erro E1). |
| 2 | Claude | Diagrama de classes (15/09) | Gerou um protótipo do diagrama de classes. | Carlos Henrique Brasil de Souza apontou atributos públicos e protegidos; a equipe reescreveu o pedido à IA para usar apenas atributos privados e públicos, e depois ajustou o diagrama à mão no Draw.io ([Ata 02](/Atas/AtaSub03_02.md)). |
| 3 | Gemini | Anotações e atas das três reuniões | Resumiu as reuniões e redigiu as atas a partir das transcrições automáticas. | As atas foram revisadas por Pedro Teixeira Moriel Sanchez; a comparação com as transcrições revelou erros de interpretação (erro E2). |
| 4 | Claude | Diagrama de classes (v1.1 e v1.2) | Revisou a versão 1.0 contra a UML e os requisitos, apontou inconsistências e gerou os arquivos corrigidos. | A revisão foi feita ao vivo na reunião de 16/09; parte das correções foi aceita e parte refeita pela equipe (erros E3 e E4). |
| 5 | Claude | Diagrama de atividades | Gerou uma versão de referência a partir do diagrama de classes e verificou, ação por ação, se a operação citada pertencia à classe da partição. | A equipe usou a versão como base e acrescentou regras de jogabilidade que a IA não previu (erro E5). |
| 6 | Claude | Relatórios de modelagem e esta página | Redigiu os textos a partir dos diagramas, das atas, dos requisitos e das transcrições. | A equipe definiu autoria, fontes e contribuições, corrigiu atribuições de falas e revisou o conteúdo antes da publicação. |

<p align="center">Tabela 1: Usos da IA generativa na Entrega 02. Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026).</p>

### Erros Identificados e Correções

A Tabela 2 registra os erros das ferramentas que a equipe detectou, em ordem cronológica.

| Erro | Ferramenta | O que aconteceu | Como foi detectado | Correção |
|:----:|------------|-----------------|--------------------|----------|
| E1 | Claude | A lista preliminar de requisitos incluía a criação de itens por alquimia durante a exploração, funcionalidade que não existia nos fluxos BPMN da Entrega 01. | Comparação da lista com o BPMN no Miro ([Ata 01](/Atas/AtaSub03_01.md)). | Requisito removido; a mistura de elementos ficou restrita ao combate. |
| E2 | Gemini | A Ata 03 registrou a decisão de restaurar o *abstract* tomada no início da reunião, mas não a revisão feita no fim dela, quando a equipe aceitou a versão sem *abstract*. | Comparação da ata com os diagramas produzidos na própria reunião. | Versão 1.1 da [Ata 03](/Atas/AtaSub03_03.md). |
| E3 | Claude | Na revisão do diagrama de classes, a IA **removeu o salvamento** por seguir literalmente a [Ata 02](/Atas/AtaSub03_02.md), que eliminava o "ponto de salvamento", e sugeriu mantê-lo fora do MVP, o que contrariava o RF03. | Carlos notou a ausência do salvamento, e Pedro lembrou que ele estava nos requisitos ([Ata 03](/Atas/AtaSub03_03.md)). | Criação da classe `SistemaSave` ([Modelagem Estática](ModelagemEstatica.md?id=evolução-do-modelo-e-decisões-de-projeto), Tabela 4, item 10). |
| E4 | Claude | A IA manteve FOGO, GELO e VENENO como tipos de **elemento**, sem saber que o jogo usa elementos da tabela periódica. | Carlos apontou a confusão; Pedro reconheceu que ela vinha do contexto que ele mesmo tinha passado à IA ([Ata 03](/Atas/AtaSub03_03.md)). | `Elemento` passou a representar a tabela periódica, e FOGO, GELO e VENENO viraram a enumeração `TipoEfeito`. |
| E5 | Claude | Na versão de referência do diagrama de atividades, duas ações citavam operações de **outra classe**, e o fluxo **não previa** o uso de combinações já registradas. | O primeiro problema foi achado pela verificação sistemática da própria IA; o segundo, por Pedro, na revisão do fluxo do turno ([Ata 03](/Atas/AtaSub03_03.md)). | Ações corrigidas; inclusão do atalho de combinações registradas e revisão do RF08 ([Modelagem Dinâmica](ModelagemDinamica.md)). |

<p align="center">Tabela 2: Erros das ferramentas de IA identificados pela equipe. Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026).</p>

### Análise Crítica

**Onde a IA ajudou.** O ganho mais claro foi na **verificação sistemática** e na **organização**. Conferir a notação da UML elemento por elemento, cruzar os 19 requisitos com as classes e checar cada ação do diagrama de atividades contra as operações do diagrama de classes são tarefas repetitivas, e a IA as fez rápido. Foi assim que surgiram correções reais, como as enumerações ligadas por generalização, a fraqueza do inimigo modelada duas vezes e os requisitos sem classe responsável (RF07, RF08 e RF12). Na reunião de 16/09, a equipe avaliou que a organização da versão revisada tinha melhorado bastante ([Ata 03](/Atas/AtaSub03_03.md)).

**Onde a IA falhou.** A exceção é a primeira parte do E5, uma inconsistência do próprio modelo que a verificação sistemática encontrou. Todos os outros erros da Tabela 2 são **erros de contexto**, e não de notação. A IA não sabia o que a equipe tinha decidido fora dos documentos (E1, E3 e E4), não conhecia regras de jogabilidade que ainda não estavam escritas (E5) e, ao resumir uma reunião, perdeu a ordem das decisões (E2).

O E2 é um caso do que Ji *et al.* (2023) chamam de **alucinação** em sumarização: o texto gerado parece coerente, mas não é fiel à fonte. Nas atas, o erro pode se acumular em duas etapas: a transcrição automática nem sempre capta bem a fala, e o modelo que a interpreta pode acrescentar um segundo erro sobre o primeiro. O caso da Ata 03 mostra um risco menos óbvio: quando uma decisão é revista no fim da reunião, o resumo pode guardar a primeira versão e perder a revisão.

**O contexto fornecido pela equipe também conta.** Parte dos erros da IA refletia lacunas ou erros do contexto que a própria equipe forneceu. O protótipo de 15/09 ainda trazia a customização do personagem porque a IA não tinha sido avisada de que ela saiu do escopo ([Ata 02](/Atas/AtaSub03_02.md)). A confusão entre elementos e efeitos (E4) tinha sido aceita antes pela equipe. A interpretação da IA sobre o salvamento mudou conforme o que foi informado a ela sobre as áreas ([Ata 03](/Atas/AtaSub03_03.md)). A saída da IA só é tão boa quanto o contexto que ela recebe.

**O risco de confiar demais.** Parasuraman e Manzey (2010) descrevem o **viés de automação**: a tendência de aceitar a saída de um sistema automatizado sem verificá-la, principalmente sob pressão de tempo. A equipe viu esse risco de perto. A remoção do salvamento (E3) vinha com uma justificativa plausível, baseada em uma ata real, e passaria despercebida sem a revisão atenta. Por isso, a equipe adotou três práticas:

- Toda saída da IA é conferida contra os **requisitos** e contra o que foi **dito nas reuniões**, e não apenas contra os documentos. Na revisão, Pedro defendeu uma verificação minuciosa antes de aceitar a nova versão ([Ata 03](/Atas/AtaSub03_03.md)).
- As atas geradas por IA são tratadas como **rascunho**. Quando divergem do que foi decidido na reunião, são corrigidas, e a correção fica no histórico de versão da ata.
- O uso de IA é **declarado** nas legendas das figuras, nas metodologias e nos históricos de versão, para que o leitor saiba o que foi produzido com apoio de IA.

**Conclusão.** A IA generativa funcionou bem como **revisora sistemática** e como **geradora de rascunhos**, mas mal como fonte de decisões. As decisões de modelagem que mais importaram, como o salvamento, os elementos da tabela periódica e o atalho de combinações, vieram dos debates da equipe, e várias delas corrigiram a própria IA.

### Pontos de Vista dos Integrantes

Posição de cada integrante nos debates das reuniões, descrita em primeira pessoa e revisada por cada um.

| Nome do Membro | Lições Aprendidas | Uso da IA Generativa (senso crítico) |
|----------------|-------------------|--------------------------------------|
| Carlos Henrique Brasil de Souza | O protótipo gerado pela IA seguia padrões genéricos, como atributos públicos e protegidos, que precisaram ser ajustados às convenções do projeto. Ajudei a reescrever o pedido à IA para excluir `protected` ([Ata 02](/Atas/AtaSub03_02.md)). | Pedi que a herança das áreas fosse analisada pela IA, como uma segunda opinião ([Ata 02](/Atas/AtaSub03_02.md)). Na revisão da versão 1.1, notei que a IA tinha removido o salvamento e confundido elementos químicos com efeitos ([Ata 03](/Atas/AtaSub03_03.md)): a saída estava bem organizada, mas errada em pontos de conteúdo. |
| Pedro Teixeira Moriel Sanchez | Mantive uma conversa com o Claude atualizada com o contexto do projeto e percebi que a qualidade da resposta depende desse contexto: o protótipo ainda trazia a customização do personagem porque eu não tinha avisado a IA da mudança ([Ata 02](/Atas/AtaSub03_02.md)). A confusão entre elementos e efeitos também vinha de algo que eu tinha aceitado antes ([Ata 03](/Atas/AtaSub03_03.md)). | Usei a IA para gerar a lista preliminar de requisitos e o protótipo do diagrama de classes como pontos de partida ([Ata 01](/Atas/AtaSub03_01.md); [Ata 02](/Atas/AtaSub03_02.md)). Recomendei testar as alterações da IA em um arquivo separado, porque uma tentativa anterior tinha desorganizado o diagrama. Gostei da organização da versão revisada, mas defendi uma verificação minuciosa antes de aceitá-la, e sugeri parar as revisões quando elas deixaram de compensar o tempo e os *tokens* gastos ([Ata 03](/Atas/AtaSub03_03.md)). |
| Renan Pereira Reis | Percebi que a IA responde conforme o contexto que recebe: quando a consultei sobre as áreas sem mencionar o salvamento livre, a interpretação foi outra ([Ata 03](/Atas/AtaSub03_03.md)). Vi também que ela seguiu as atas ao pé da letra e retirou o *abstract* com base na Ata 02. Por isso, não confio 100% nas atas geradas por IA: a transcrição nem sempre capta bem a conversa, e o modelo que a interpreta pode registrar decisões erradas. | Usei o Claude para revisar o código dos diagramas e gerar as versões corrigidas ([Ata 02](/Atas/AtaSub03_02.md); [Ata 03](/Atas/AtaSub03_03.md)). Achei que algumas respostas tinham texto demais e que a interface web consumia muitos *tokens*; em alguns momentos, a IA também foi além do necessário, como ao referenciar artefatos da Entrega 01. |

<p align="center">Tabela 3: Pontos de vista dos integrantes sobre o uso de IA generativa. Fonte: SOUZA, Carlos; SANCHEZ, Pedro; REIS, Renan (2026).</p>

## Referências

ANTHROPIC. **Claude**. [S. l.]: Anthropic, 2026. Disponível em: <https://claude.ai>. Acesso em: 18 set. 2026.

GOOGLE. **Gemini**. Versão 3.1 Pro. [S. l.]: Google, 2026. Disponível em: <https://gemini.google.com>. Acesso em: 18 set. 2026.

JI, Ziwei *et al*. Survey of hallucination in natural language generation. **ACM Computing Surveys**, v. 55, n. 12, p. 1-38, 2023. DOI: 10.1145/3571730.

OBJECT MANAGEMENT GROUP. **OMG Unified Modeling Language (OMG UML), Version 2.5.1**. 2017. Disponível em: <https://www.omg.org/spec/UML/2.5.1/PDF>. Acesso em: 18 set. 2026.

PARASURAMAN, Raja; MANZEY, Dietrich H. Complacency and bias in human use of automation: an attentional integration. **Human Factors**, v. 52, n. 3, p. 381-410, 2010.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
| Carlos Henrique Brasil de Souza | 33% |
| Pedro Teixeira Moriel Sanchez | 33% |
| Renan Pereira Reis | 33% |

<p align="center">Tabela 4: Contribuição dos integrantes.</p>

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|------|:----------|:----------|:--------|
| 1.0 | 18/09/2026 | Levantamento dos usos de IA generativa a partir dos registros das reuniões, registro dos erros identificados, análise crítica e pontos de vista dos integrantes | Carlos Henrique Brasil de Souza, Pedro Teixeira Moriel Sanchez, Renan Pereira Reis | |

<p align="center">Tabela 5: Histórico de versão.</p>

Ver também: [Modelagem Estática na Notação UML](ModelagemEstatica.md) · [Modelagem Dinâmica na Notação UML](ModelagemDinamica.md)
