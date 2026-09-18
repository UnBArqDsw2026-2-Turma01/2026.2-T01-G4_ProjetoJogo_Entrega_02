# SubEquipe_01: Diagrama de Componentes

## Descrição

Este artefato apresenta o Diagrama de Componentes do MVP do **G4_ProjetoJogo**, representando a organização do sistema em componentes, suas responsabilidades e as interfaces utilizadas na comunicação entre eles. A modelagem foi construída a partir dos [requisitos do Subgrupo 03][rf] e dos artefatos elaborados anteriormente pela equipe.

## Objetivo

Representar a estrutura do sistema em componentes e evidenciar suas interfaces e dependências, permitindo compreender a divisão de responsabilidades entre as partes do jogo e apoiar as etapas posteriores de projeto e implementação.

## Metodologia

O artefato foi produzido conforme a distribuição registrada na [Ata 01](/Atas/AtaSub01_01.md) e na [issue #5][issue]. O [Mapa Mental][mapa] orientou a identificação das mecânicas, e o [BPMN][bpmn] e o [diagrama de atividades](DiagramaAtividades.md) ajudaram a identificar os serviços necessários para executá-las. Na V2, as responsabilidades foram reorganizadas a partir dos RF01 a RF19 do [Subgrupo 03][rf].

Os arquivos SVG e a fonte editável em arquivo draw.io foram construídos pelo site [draw.io](https://app.diagrams.net/). Informações sobre revisões e uso de IA estão registradas em [IA Generativa](IAGenerativa.md#yogi-nam-de-souza-barbosa). Os diagramas tomam como referência os [slides de Milene Serrano][slides] (páginas 47 a 49), os [exemplos de componentes do UML Diagrams](https://www.uml-diagrams.org/component-diagrams.html) e a [UML 2.5.1][uml] (§§11.2, 11.6 e 22).

A conferência da V2 examinou o sentido de cada interface fornecida/requerida, as delegações para as partes internas e a correspondência entre os serviços e os requisitos. O carrossel preserva a comparação visual; os commits da [V1][v1] e da [V2][v2] permitem consultar as alterações de conteúdo.

## Conteúdo

<div class="diagram-carousel" data-default-version="v2" aria-label="Versões do diagrama de componentes">
<div class="diagram-slide" data-version="v1" data-label="V1 · escopo anterior, 12/09/2026">
<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/componentes/componentes.svg" alt="V1: oito componentes, com Controle da Partida, Exploração, Combate, Alquimia, Inventário, Livro e Catálogo."></a>
<figcaption>Figura 1: Diagrama de componentes, V1. Fonte: Yogi Nam de Souza Barbosa, 2026.</figcaption>
</figure>
<p>A primeira versão estabeleceu uma separação inicial das principais mecânicas do jogo e tornou algumas dependências visíveis. Entretanto, ainda apresentava uma divisão menos clara entre responsabilidades, o que motivou o refinamento da arquitetura na versão seguinte.</p>
<p><a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes.svg" target="_blank" rel="noopener" download>SVG editável da V1</a></p>
</div>
<div class="diagram-slide" data-version="v2" data-label="V2 · requisitos do Subgrupo 03, 14/09/2026">
<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes-v2.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/componentes/componentes-v2.svg" alt="V2: Controle da Partida coordena Mundo e Interações, Combate e Magia e Progressão. Portas dos subsistemas delegam os serviços às partes internas. Salvamento e Catálogo atendem ao Controle; Magias atende ao Combate; Inventário e Diário atendem ao Estado do Jogador."></a>
<figcaption>Figura 2: Diagrama de componentes, V2. Fonte: Yogi Nam de Souza Barbosa, 2026.</figcaption>
</figure>
<p>A V2 apresenta uma separação mais clara das responsabilidades, agrupando componentes relacionados em subsistemas e explicitando os serviços oferecidos por meio de interfaces. Acho que essa organização melhora a leitura arquitetural e reduz dependências diretas entre componentes de domínio.</p>
<p><a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes-v2.drawio" download>Fonte da V2 em draw.io</a> · <a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes-v2.svg" target="_blank" rel="noopener" download>SVG editável da V2</a></p>
</div>
</div>

Os quadrados representam portas; círculos e tomadas indicam interfaces fornecidas e requeridas. Os encaixes representam montagem, e as linhas entre portas externas e internas representam delegação. Em `papel : Tipo`, o nome à esquerda identifica a parte interna.

### Análise

**Yogi Nam de Souza Barbosa:** uma questão que precisei esclarecer foi a diferença entre componentes e classes. Por exemplo, Inventário aparece aqui pelo serviço que oferece; seus atributos, operações e classes internas pertencem a outro nível de detalhamento. Os subsistemas foram úteis porque evidenciam esse limite entre um serviço público e sua realização interna.

A coordenação central reduz ligações diretas entre as mecânicas, mas exige cuidado para que o Controle da Partida não absorva regras de combate, compras ou inventário. Neste modelo, ele encaminha os dados necessários e incorpora os resultados ao progresso. O diagrama mostra essas dependências, mas não demonstra a ordem das chamadas nem como uma atualização é concluída antes do salvamento; essas questões dependem do detalhamento comportamental.

### Relação com outros diagramas

- O [Diagrama de Atividades](DiagramaAtividades.md#relação-com-os-componentes) dá contexto aos serviços: `Resolver combate por turnos` corresponde a `ICombate`, enquanto `Salvar progresso` corresponde a `ISalvamento`.
- O [Diagrama de Classes](DiagramaClasses.md#classes-e-justificativa) detalha entidades como `Inventario`, `DiarioDoAventureiro` e `Combate`, associadas aos serviços desses componentes. Uma classe não equivale necessariamente a um componente, que pode reunir várias classes e regras.
- O [Diagrama de Pacotes](DiagramaPacotes.md) organiza o módulo do jogador em camadas. Essa divisão complementa os subsistemas por mecânica apresentados aqui: a implementação de um serviço pode envolver entidades, casos de uso e persistência em pacotes distintos.

O [Diagrama de Sequência do turno de combate][sequencia] permite comparar a ordem das chamadas com essa separação de responsabilidades. Na sequência, `Combate` solicita o registro de uma descoberta diretamente ao `DiarioDoAventureiro`; na V2 de componentes, o acesso ao Diário passa pelo Estado do Jogador, no subsistema Progressão. Os dois desenhos, portanto, ainda apresentam formas diferentes de coordenar essa atualização.

### Serviços das interfaces

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Interface | Componente responsável | Serviço | Requisitos |
|-----------|------------------------|---------|------------|
| `IPartida` | Controle da Partida | Receber comandos da interface do jogador e coordenar o fluxo da sessão. | [RF03][rf] |
| `IExploracao` | Exploração | Movimentar o jogador e processar os eventos associados à exploração do mundo. | [RF01, RF02, RF04, RF10][rf] |
| `INPCs` | Interações com NPCs | Processar compras e iniciar missões secundárias. | [RF14, RF15][rf] |
| `ICombate` | Combate em Turnos | Resolver ações de combate, calcular dano, alternar turnos e determinar vitória ou derrota. | [RF05, RF06, RF07, RF13, RF16, RF17][rf] |
| `IMagias` | Magias | Determinar combinações e efeitos a partir dos elementos coletados pelo jogador. | [RF05, RF09][rf] |
| `IProgresso` | Estado do Jogador | Manter estatísticas e missões e incorporar os resultados das mecânicas ao estado do jogador. | [RF15, RF16][rf]; integração de [RF08, RF11, RF12, RF18 e RF19][rf] |
| `IInventario` | Inventário | Administrar os itens e recursos mantidos pelo jogador. | [RF14, RF18, RF19][rf] |
| `IDiario` | Diário do Aventureiro | Manter livros e magias descobertas e apresentar o enredo ou as combinações reveladas pelos livros. | [RF08, RF11, RF12][rf] |
| `ISalvamento` | Salvamento | Gravar o progresso ao salvar e sair. | [RF03][rf] |
| `ICatalogo` | Catálogo do Jogo | Fornecer definições utilizadas pelas mecânicas do jogo, como áreas, personagens, magias, itens e NPCs. | [RF02, RF13, RF16, RF17][rf] |

</div>

<p align="center">Tabela 1: Interfaces da V2 e cobertura funcional. Fonte: <a href="Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt" target="_blank" rel="noopener">requisitos do Subgrupo 03</a>, organizados por Yogi Nam de Souza Barbosa com auxílio IA para linkar requisitos, 2026.</p>

### Decisões e evidências

| Alternativa considerada | Decisão adotada | Justificativa e evidência |
|------------------------|-------------------------------------|-------------------------|
| Manter todos os componentes no mesmo nível, como na V1. | Agrupar responsabilidades em subsistemas com portas e delegações. | Expõe os serviços usados pelo Controle e preserva a estrutura interna. Comparação V1/V2 e [commit e732f48][v2]. |
| Manter a notação anônima `:Componente` da V1. | Nomear as partes no formato `papel : Tipo` e explicitar os pares de interfaces. | Distingue o papel interno do tipo do componente e permite conferir quem fornece e quem requer cada serviço. [Fonte da V2](Base/Relatórios/SubEquipe_01/assets/componentes/componentes-v2.drawio ':ignore'). |
| Complementar a lista do Subgrupo 03 com RF20 a RF22. | Retirar esses códigos da base funcional do artefato. | A IA tinha sugerido novos requisitos, mas acho que não são necessários. A remoção está no [commit 9a82f35][revisao-texto]; |

<p align="center">Tabela 2: Alternativas e decisões de modelagem. Fonte: solicitações de Yogi Nam de Souza Barbosa e histórico de alterações do artefato, 2026.</p>

## Referências

OBJECT MANAGEMENT GROUP. **UML 2.5.1**. 2017. Seções 11.2, 11.6 e 22. [Especificação][uml].

SERRANO, Milene. **Modelagem UML Estática**. Universidade de Brasília, [s. d.]. Páginas 47 a 49. [Slides][slides].

SUBGRUPO 03. **BPMN**. 2026. [Exploração e combate][bpmn].

SUBGRUPO 03. **Mapa Mental**. 2026. [Visão do jogo][mapa].

SUBGRUPO 03. **Requisitos funcionais do MVP**. 2026. [Lista de referência][rf].

UML DIAGRAMS. **Component Diagrams**. [Notação e exemplos](https://www.uml-diagrams.org/component-diagrams.html). Acesso em: 14 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
| Yogi Nam de Souza Barbosa | 100% |

<p align="center">Tabela 3: Contribuição no artefato.</p>

## Histórico de Versão

<div role="region" aria-label="Tabela 4" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|:----:|-----------|-----------|---------|
| 1.0 | 12/09/2026 | Inserção do diagrama de componentes. | Yogi Nam de Souza Barbosa | |
| 2.0 | 14/09/2026 | Adequação aos requisitos do Subgrupo 03, decomposição em subsistemas e carrossel de versões. | Yogi Nam de Souza Barbosa | |
| 2.1 | 14/09/2026 | Revisão da descrição e metodologia. | Yogi Nam de Souza Barbosa | |

</div>

<p align="center">Tabela 4: Histórico de versão. O campo Revisor identifica revisão por outra pessoa.</p>

[rf]: Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt ':ignore'
[mapa]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/MapaMental.md
[bpmn]: https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/BPMN.md
[issue]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/issues/5
[pr]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/pull/10
[v1]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/commit/d1ddd713d22038daa1a9189cd8fc9cdbb1f6e30b
[v2]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/commit/e732f4816fe9ad4201b15d2704d0e76d0db94512
[revisao-texto]: https://github.com/UnBArqDsw2026-2-Turma01/2026.2-T01-G4_ProjetoJogo_Entrega_02/commit/9a82f35660010398255b7e17f3ab8099983cd509
[sequencia]: Base/Relatórios/SubEquipe_01/assets/sequencia/sequencia.svg ':ignore'
[slides]: Base/Relatórios/SubEquipe_01/assets/componentes/referencias/modelagem-uml-estatica.pdf ':ignore'
[uml]: https://www.omg.org/spec/UML/2.5.1/PDF
