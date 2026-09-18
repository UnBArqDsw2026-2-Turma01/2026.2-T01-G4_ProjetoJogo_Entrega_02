# SubEquipe_01: IA Generativa

## Descrição

Registro do **FOCO_03: IA Generativa** da SubEquipe_01. Reúne os pontos de vista de cada integrante sobre as lições aprendidas e o uso de IA Generativa na entrega.

## Objetivo

Registrar, com senso crítico, como cada membro utilizou IA Generativa no trabalho e quais lições foram aprendidas no processo. **TODOS DEVEM PARTICIPAR.**

## Metodologia

Os relatos identificam individualmente a experiência de cada integrante com ferramentas de IA Generativa.

Para os diagramas de [componentes](DiagramaComponentes.md) e [atividades](DiagramaAtividades.md), Yogi Nam de Souza Barbosa selecionou trechos das interações realizadas com ferramentas de IA e relacionou essas solicitações às decisões tomadas durante a elaboração dos artefatos. As transcrições reproduzem trechos dos prompts, enquanto as descrições dos resultados apresentam uma síntese crítica do processo.

A IA foi utilizada principalmente como instrumento de apoio à análise, geração de alternativas, revisão e consulta. As sugestões produzidas não foram consideradas automaticamente corretas. As propostas foram comparadas com os [requisitos do Subgrupo 03][rf], os slides de [modelagem estática][slides-estatica] e [dinâmica][slides-dinamica], a [especificação UML 2.5.1][uml] e os exemplos de [componentes](https://www.uml-diagrams.org/component-diagrams.html) e [atividades](https://www.uml-diagrams.org/activity-diagrams.html) do UML Diagrams.

## Conteúdo

### Yogi Nam de Souza Barbosa

Durante a entrega, utilizei IA Generativa como apoio em diferentes etapas do trabalho:

- resumir e classificar tópicos discutidos nas reuniões;
- analisar artefatos produzidos pelo Subgrupo 03 antes da elaboração dos novos modelos;
- gerar exemplos de requisitos funcionais para compreender melhor o domínio do projeto;
- consultar conceitos e objetivos de diagramas UML;
- propor alternativas para os diagramas de componentes e atividades;
- avaliar notação, nível de abstração e organização visual dos diagramas;
- comparar decisões de modelagem com referências acadêmicas e técnicas;
- analisar o parecer da entrega anterior e transformar os apontamentos em ações de revisão;
- revisar textos da documentação e remover explicações genéricas ou redundantes;
- auxiliar na melhoria da usabilidade do site da documentação;
- verificar links, organização e consistência textual;
- estruturar critérios para revisão cruzada dos diagramas pelos integrantes.

A IA foi utilizada principalmente para ampliar o espaço de alternativas e acelerar atividades de análise e revisão. A decisão final permaneceu condicionada à conferência com requisitos, referências e validação dos integrantes.

#### Iterações e decisões

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| ID  | Trecho de prompt | Resultado e avaliação | Evidência do resultado adotado |
| :-: | --- | --- | --- |
| P01 | “Aqui estão as anotações da reunião que fizemos. [...] Por favor faça uma ata assim como o modelo.” | Como a reunião não possuía transcrição automática, forneci manualmente os acontecimentos e decisões e utilizei IA para organizá-los seguindo o padrão da ata anterior. Nesse caso, a ferramenta auxiliou na estruturação e redação, enquanto o conteúdo factual permaneceu baseado nas anotações produzidas durante a reunião. | [Ata 01 do Subgrupo 01](/Atas/AtaSub01_01.md). |
| P02 | “quais os objetivos de um diagrama de componentes? de acordo com alguma bibliografia/fonte” | A consulta foi utilizada para verificar a fundamentação teórica do artefato. Em vez de justificar decisões somente por uma resposta gerada pela IA, busquei relacioná-las a bibliografia e referências reconhecidas de UML. Isso também auxiliou a delimitar o nível de abstração esperado para o diagrama. | [UML 2.5.1][uml], [slides de Modelagem UML Estática][slides-estatica] e [UML Diagrams](https://www.uml-diagrams.org/component-diagrams.html) listados nas referências. |
| P03 | “Não ficou bom, tem que ser nesse estilo: https://www.uml-diagrams.org/component-diagrams.html.” | Tentei gerar um diagrama de componentes de exemplo mas ficou muito ruim, com notações bem erradas, sem seguir o estilo presenta nas referências. Esqueci de salvar esse diagrama V0 para mostrar, mas acho que ajudou a definir as principais interfaces para a V1. | [V1 do diagrama de componentes](DiagramaComponentes.md) |
| P04 | “Acho que é melhor remover o diagrama de atividades de combinação de elementos e combate, o que acha?” | Ainda em relação à esse diagrama V0, a IA inicialmente apoiava um detalhamento maior dos fluxos. Após avaliar a divisão de responsabilidades da equipe e os próprios focos de cada diagrama, optei por concentrar o artefato apenas no fluxo geral do jogo. Isso reduziu a sobreposição com outros diagramas e manteve combate e combinação como ações de maior nível de abstração nesse diagrama. | [Fluxo geral de atividades](DiagramaAtividades.md) e distribuição de responsabilidades registrada na [Ata 01](/Atas/AtaSub01_01.md). |
| P05 | “se a gente sair do jogo não tem um edge de interrupção?” | Ainda na V0, eu fui tirando dúvidas e perguntando sobre coisas que eu acho que deveriam ter no diagramas e conferindo. | [V1 e V2 do diagrama de atividades.](DiagramaAtividades.md) |
| P06 | “avalie esses diagramas academicamente corretude etc” | Solicitei uma revisão independente dos diagramas para identificar possíveis problemas conceituais, de notação e de organização. As observações da IA foram tratadas como hipóteses de revisão e não como uma avaliação definitiva. Após a análise, os pontos relevantes foram sintetizados e comparados com as referências utilizadas pela equipe. | [Diagramas de componentes](DiagramaComponentes.md) e [diagramas de atividades](DiagramaAtividades.md). |
| P07 | “Acha que falta adicionar forks/joins no meu diagrama? fica uma diagramação melhor ou nesse caso não precisa?” | Evitei utilizar elementos UML apenas para aumentar artificialmente a complexidade dos diagramas. | [V2 Diagrama de atividades](DiagramaAtividades.md) e justificativas apresentadas nas páginas dos diagramas. |
| P08 | “Adicione um carrosel para mostrar as diferentes versões dos diagramas.” | Em vez de substituir os artefatos anteriores, eu queria preservar a V1 e adicionar uma nova versão. Daí pedi à IA para implementar um carrossel. | Carrosséis nas páginas de [atividades](DiagramaAtividades.md#fluxo-geral-da-partida) e [componentes](DiagramaComponentes.md#conteúdo). |
| P09 | “Consegue analisar esse pdf e dar um resumo do que pode ser melhorado e como?” | Utilizei IA para decompor o parecer da entrega anterior em problemas e possíveis ações de correção. A atividade ajudou principalmente a identificar a necessidade de melhorar evidências, justificativas e rastreabilidade. | Revisões realizadas em 16/09 a partir do parecer da Entrega 01.                                                              |
| P10 | “faça com que ao clicar numa imagem eu consiga dar zoom e mover para visualizar melhor os diagramas.” | Quando eu fui ver os BPMNs do subgrupo 03 vi que não dava para ler o conteúdo direito, daí nessa entrega quis uma funcionalidade para resolver isso. | Funcionalidade de zoom ao clicar numa imagem. |
| P11 | “Refaz então o script e me manda completo. porque o novo teve o dobro de linhas do antigo?” | Ao sair da funcionalidade de zoom a página não continuava da imagem aberta, ela voltava pra cima, daí foi necessário corrigir. | Validação manual realizada após a correção do comportamento de abertura das imagens no site.                                 |
| P12 | “Dê uma sugestão de um checklist para cada integrante preencher avaliando os diagramas” | A IA foi utilizada também para ajudar a estruturar uma revisão cruzada entre os integrantes. A ideia do checklist surgiu da necessidade de separar a avaliação automática da validação humana, registrando concordâncias, problemas encontrados e sugestões de alteração pelos próprios membros da equipe. | [Fluxo de revisão no GitHub](MetodologiaGitHub.md#fluxo-de-trabalho). |

</div>

<p align="center">Tabela 1: Prompts, decisões e resultados do uso de IA por Yogi Nam de Souza Barbosa. Fonte: histórico de interações utilizado durante a elaboração da entrega e commits vinculados, 2026.</p>

| Nome do Membro | Lições Aprendidas | Uso da IA Generativa (senso crítico) |
|----------------|-------------------|--------------------------------------|
| Cibelly Lourenço Ferreira | Na elaboração dos diagramas de [classes](DiagramaClasses.md) e [sequência](DiagramaSequencia.md), aprendi a distinguir a estrutura do jogo das interações entre seus objetos. A dificuldade de conciliar versões dos requisitos reforçou a importância de manter os modelos coerentes e justificar escolhas como a separação entre combinação de itens e magia. | Vejo a IA como apoio para discutir alternativas e esclarecer dúvidas de modelagem. Uma resposta convincente, porém, não garante um diagrama correto: é preciso conferir a notação, os requisitos e a correspondência entre as mensagens da sequência e as operações das classes. |
|        Gabriel Andrade Magioli        |         Aprendi de forma teórica e prática sobre a confecção de diagramas estaticos e dinamicos, principalmente se tratando de diagrama de pacotes e de estado e como podem enriquecer uma documentação, contribuindo com planejamento, além de reforçar conhecimentos previos de DDD e Hexagonal e como aplicar na diagramação          |                 A IA Generativa foi utilizada para aprofundar os textos escritos previamente e fazer revisões do conteúdo encontrado na internet para deixar mais resumido para fazer os diagramas no Draw.io                     |
| Yogi Nam de Souza Barbosa | Aprendi principalmente a definir o nível de abstração adequado para diferentes diagramas UML, distinguindo elementos arquiteturais de componentes de detalhes próprios de diagramas de classes e evitando que o diagrama de atividades assumisse responsabilidades de outros modelos. As sucessivas revisões também mostraram a importância de rastrear cada decisão aos requisitos e de preservar versões anteriores para comparar a evolução do modelo. | Utilizei IA como ferramenta de apoio para analisar requisitos, propor alternativas de modelagem, consultar conceitos, revisar diagramas e melhorar a documentação. As respostas não foram aceitas automaticamente: questionei notação, rejeitei propostas excessivamente detalhadas, confrontei afirmações com referências e testei alterações antes de adotá-las. Algumas respostas inicialmente plausíveis precisaram ser corrigidas após comparação com os requisitos e com o parecer da entrega anterior. |

<p align="center">Tabela 2: Pontos de vista dos integrantes sobre o uso de IA Generativa.</p>

## Referências

GRUPO 04. **Ata 01 do Subgrupo 01**. 11 set. 2026. [Planejamento da modelagem](/Atas/AtaSub01_01.md).

OBJECT MANAGEMENT GROUP. **UML 2.5.1**. 2017. [Especificação][uml].

SERRANO, Milene. **Modelagem UML Dinâmica**. Universidade de Brasília, [s. d.]. Páginas 17 a 19. [Slides][slides-dinamica].

SERRANO, Milene. **Modelagem UML Estática**. Universidade de Brasília, [s. d.]. Páginas 47 a 49. [Slides][slides-estatica].

SUBGRUPO 03. **Requisitos funcionais do MVP**. 2026. [Lista de referência][rf].

UML DIAGRAMS. **Activity Diagrams**. [Notação e exemplos](https://www.uml-diagrams.org/activity-diagrams.html). Acesso em: 16 set. 2026.

UML DIAGRAMS. **Component Diagrams**. [Notação e exemplos](https://www.uml-diagrams.org/component-diagrams.html). Acesso em: 16 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
|   Cibelly    | 33,4% |
|   Gabriel Andrade Magioli   | 33,3% |
| Yogi Nam de Souza Barbosa | 33,3% |

<p align="center">Tabela 3: Contribuição dos integrantes.</p>

## Histórico de Versão

| Versão | Data       | Descrição                                                                                                                                      | Autor(es)                 | Revisor |
| :----: | ---------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------ | :------ |
|  1.0   | 12/09/2026 | Inclusão de lições aprendidas e uso de IA                                                                                                      | Gabriel Andrade Magioli   |         |
|  2.0   | 16/09/2026 | Inclusão do relato de Yogi sobre componentes e atividades, prompts, resultados aproveitados e rejeitados, commits. | Yogi Nam de Souza Barbosa |         |
| 2.1 | 18/09/2026 | Inclusão do relato de Cibelly sobre classes, sequência e avaliação crítica da IA na tabela de lições aprendidas. | Cibelly Lourenço | |

<p align="center">Tabela 4: Histórico de versão.</p>

[rf]: Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt ':ignore'
[slides-estatica]: Base/Relatórios/SubEquipe_01/assets/componentes/referencias/modelagem-uml-estatica.pdf ':ignore'
[slides-dinamica]: Base/Relatórios/SubEquipe_01/assets/atividades/referencias/modelagem-uml-dinamica.pdf ':ignore'
[uml]: https://www.omg.org/spec/UML/2.5.1/PDF
