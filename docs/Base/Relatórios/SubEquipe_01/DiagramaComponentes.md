# SubEquipe_01: Diagrama de Componentes

## Descrição

Este artefato apresenta o Diagrama de Componentes do MVP do **G4_ProjetoJogo**, representando a organização do sistema em componentes, suas responsabilidades e as interfaces utilizadas na comunicação entre eles. A modelagem foi construída a partir dos [requisitos do Subgrupo 03][rf] e dos artefatos elaborados anteriormente pela equipe.

## Objetivo

Representar a estrutura do sistema em componentes e evidenciar suas interfaces e dependências, permitindo compreender a divisão de responsabilidades entre as partes do jogo e apoiar as etapas posteriores de projeto e implementação.

## Metodologia

O diagrama foi elaborado no [draw.io](https://www.drawio.com/), utilizando como base os requisitos funcionais definidos para o MVP e os artefatos produzidos anteriormente pela equipe, como o [mapa mental](https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/MapaMental), o [BPMN](https://unbarqdsw2026-2-turma01.github.io/2026.2-T01-G4_ProjetoJogo_Entrega_01/#/Base/Relat%C3%B3rios/SubEquipe_03/BPMN) e o [diagrama de atividades](DiagramaAtividades.md). Esses materiais foram analisados para identificar as principais responsabilidades do sistema e agrupá-las em componentes e subsistemas.

A definição dos componentes, portas e interfaces foi refinada com base na notação UML, nos slides de Milene Serrano (páginas 47 a 49), no [UML Diagrams](https://www.uml-diagrams.org/) e na especificação [UML 2.5.1](https://www.omg.org/spec/UML/2.5.1/). As versões anteriores foram preservadas para registrar a evolução da modelagem.

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
<p>A V2 apresenta uma separação mais clara das responsabilidades, agrupando componentes relacionados em subsistemas e explicitando os serviços oferecidos por meio de interfaces. Essa organização melhora a leitura arquitetural e reduz dependências diretas entre componentes de domínio.</p>
<p><a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes-v2.drawio" download>Fonte da V2 em draw.io</a> · <a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes-v2.svg" target="_blank" rel="noopener" download>SVG editável da V2</a></p>
</div>
</div>

Os quadrados representam portas; círculos e tomadas indicam interfaces fornecidas e requeridas. Os encaixes representam montagem, e as linhas entre portas externas e internas representam delegação. Em `papel : Tipo`, o nome à esquerda identifica a parte interna.

### Análise crítica

A decomposição adotada favorece a separação de responsabilidades e permite identificar com facilidade quais serviços cada parte do sistema fornece ou utiliza. Entretanto, o **Controle da Partida** concentra diversas dependências e achamos que deve ser observado durante a implementação para evitar que se torne um componente excessivamente acoplado.

Além disso, o diagrama oferece uma visão estrutural do sistema, mas não representa a ordem das interações nem o comportamento interno dos componentes. Por isso, sua interpretação deve ser complementada pelos outros diagramas desenvolvidos pela equipe.

### Serviços das interfaces

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Interface | Componente responsável | Serviço | Requisitos |
|-----------|------------------------|---------|------------|
| `IPartida` | Controle da Partida | Receber comandos da interface do jogador e coordenar o fluxo da sessão. | RF03 |
| `IExploracao` | Exploração | Movimentar o jogador e processar os eventos associados à exploração do mundo. | RF01, RF02, RF04, RF10 |
| `INPCs` | Interações com NPCs | Processar compras e iniciar missões secundárias. | RF14, RF15 |
| `ICombate` | Combate em Turnos | Resolver ações de combate, calcular dano, alternar turnos e determinar vitória ou derrota. | RF05, RF06, RF07, RF13, RF16, RF17 |
| `IMagias` | Magias | Determinar os efeitos das combinações de magia utilizadas pelo jogador. | RF05, RF09 |
| `IProgresso` | Estado do Jogador | Manter estatísticas e missões e incorporar os resultados das mecânicas ao estado do jogador. | RF15, RF16; integração de RF08, RF11, RF12, RF18 e RF19 |
| `IInventario` | Inventário | Administrar os itens e recursos mantidos pelo jogador. | RF14, RF18, RF19 |
| `IDiario` | Diário do Aventureiro | Registrar livros e magias descobertas e disponibilizar essas informações ao jogador. | RF08, RF11, RF12 |
| `ISalvamento` | Salvamento | Gravar e recuperar o progresso da partida. | RF03 |
| `ICatalogo` | Catálogo do Jogo | Fornecer definições utilizadas pelas mecânicas do jogo, como áreas, personagens, magias, itens e NPCs. | RF02, RF13, RF16, RF17 |

</div>

<p align="center">Tabela 1: Interfaces da V2 e cobertura funcional. Fonte: requisitos do Subgrupo 03, organizados por Yogi Nam de Souza Barbosa, 2026.</p>

O **Controle da Partida** atua como coordenador entre os principais subsistemas, enquanto as regras específicas permanecem nos componentes responsáveis por cada domínio. Essa divisão busca reduzir o conhecimento direto entre componentes e tornar suas responsabilidades mais explícitas.

## Referências

OBJECT MANAGEMENT GROUP. **UML 2.5.1**. 2017. Seções 11.2, 11.6 e 22. [Especificação](https://www.omg.org/spec/UML/2.5.1/PDF).

SERRANO, Milene. **Modelagem UML Estática**. Universidade de Brasília, [s. d.]. Páginas 47 a 49. [Slides](Base/Relatórios/SubEquipe_01/assets/componentes/referencias/modelagem-uml-estatica.pdf ':ignore').

SUBGRUPO 03. **Requisitos funcionais do MVP**. 2026. [Lista de referência][rf].

UML DIAGRAMS. **Component Diagrams**. [Notação e exemplos](https://www.uml-diagrams.org/component-diagrams.html). Acesso em: 14 set. 2026.

## Nível de Contribuição dos Integrantes

| Nome | % de Contribuição |
|------|-------------------|
| Yogi Nam de Souza Barbosa | 100% |

<p align="center">Tabela 2: Contribuição no artefato.</p>

## Histórico de Versão

<div role="region" aria-label="Tabela 3" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|:----:|-----------|-----------|---------|
| 1.0 | 12/09/2026 | Inserção do diagrama de componentes. | Yogi Nam de Souza Barbosa | - |
| 2.0 | 14/09/2026 | Adequação aos requisitos do Subgrupo 03, decomposição em subsistemas e carrossel de versões. | Yogi Nam de Souza Barbosa | - |
| 2.1 | 14/09/2026 | Revisão da descrição e metodologia. | Yogi Nam de Souza Barbosa | - |

</div>

<p align="center">Tabela 3: Histórico de versão.</p>

[rf]: Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt ':ignore'
