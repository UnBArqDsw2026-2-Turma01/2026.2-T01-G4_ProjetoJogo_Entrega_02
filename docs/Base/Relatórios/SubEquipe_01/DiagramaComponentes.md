# SubEquipe_01: Diagrama de Componentes

## Descrição

Estrutura do MVP do **G4_ProjetoJogo**, baseada nos [requisitos do Subgrupo 03][rf]. O artefato integra a modelagem definida na [Ata 01 do Subgrupo 01](/Atas/AtaSub01_01.md).

## Objetivo

Definir os componentes do jogo e as interfaces pelas quais colaboram.

## Metodologia

Os requisitos foram agrupados pelas responsabilidades do jogo e confrontados com o [diagrama de atividades](DiagramaAtividades.md). A V2 incorpora salvamento, NPCs, livros e mistura de elementos durante o combate. Os subsistemas e suas interfaces seguem os exemplos dos slides de Milene Serrano (páginas 47 a 49), o UML Diagrams e a UML 2.5.1. As versões anteriores foram preservadas para acompanhar a evolução do modelo.

## Conteúdo

<div class="diagram-carousel" data-default-version="v2" aria-label="Versões do diagrama de componentes">
<div class="diagram-slide" data-version="v1" data-label="V1 · escopo anterior, 12/09/2026">
<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/componentes/componentes.svg" alt="V1: oito componentes, com Controle da Partida, Exploração, Combate, Alquimia, Inventário, Livro e Catálogo."></a>
<figcaption>Figura 1: Diagrama de componentes, V1. Fonte: Yogi Nam de Souza Barbosa, 2026.</figcaption>
</figure>
<p>A primeira versão separou as mecânicas principais e tornou suas dependências visíveis. Seu recorte, porém, concentrava a combinação na exploração e não contemplava salvamento, NPCs e livros coletáveis. Por isso, representa o escopo anterior à lista do Subgrupo 03.</p>
<p><a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes.svg" target="_blank" rel="noopener" download>SVG editável da V1</a></p>
</div>
<div class="diagram-slide" data-version="v2" data-label="V2 · requisitos do Subgrupo 03, 14/09/2026">
<figure>
<a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes-v2.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/componentes/componentes-v2.svg" alt="V2: Controle da Partida coordena Mundo e Interações, Combate e Magia e Progressão. Portas dos subsistemas delegam os serviços às partes internas. Salvamento e Catálogo atendem ao Controle; Magias atende ao Combate; Inventário e Diário atendem ao Estado do Jogador."></a>
<figcaption>Figura 2: Diagrama de componentes, V2. Fonte: Yogi Nam de Souza Barbosa, 2026.</figcaption>
</figure>
<p>Mundo e Combate concentram as mecânicas, enquanto Progressão reúne os dados que acompanham o jogador entre sessões. As interfaces nas bordas deixam claro o que cada subsistema oferece. O Controle ainda depende de vários serviços, mas regras como dano e combinação permanecem nos componentes de domínio. O modelo ajuda a distribuir a implementação; as classes internas e a ordem das chamadas exigem outras perspectivas UML.</p>
<p><a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes-v2.drawio" download>Fonte da V2 em draw.io</a> · <a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes-v2.svg" target="_blank" rel="noopener" download>SVG editável da V2</a></p>
</div>
</div>

Os quadrados representam portas; círculos e tomadas indicam interfaces fornecidas e requeridas. Os encaixes representam montagem, e as linhas entre portas externas e internas representam delegação. Em `papel : Tipo`, o nome à esquerda identifica a parte interna.

### Complementos aos requisitos

Os RF01 a RF19 mantêm a numeração da [lista do Subgrupo 03][rf]. Os complementos abaixo explicitam a coleta de elementos, a retomada da partida e o uso dos itens comprados, fechando o ciclo jogável.

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| ID | Complemento adotado na V2 |
|:--:|--------------------------|
| RF03 (detalhamento) | Salvar e sair em qualquer área, inclusive durante o combate, preservando o estado da última ação concluída. Se a gravação falhar, informar o jogador e retomar a sessão em memória. |
| RF20 | Permitir coletar elementos disponíveis no mundo e adicioná-los ao inventário. |
| RF21 | Permitir iniciar uma nova partida ou continuar a partir de um salvamento válido, restaurando a exploração ou o combate em andamento. |
| RF22 | Permitir usar consumíveis do inventário no turno do jogador, aplicando seus efeitos no combate. |

</div>

<p align="center">Tabela 1: Complementos de modelagem à lista do Subgrupo 03. Fonte: Yogi Nam de Souza Barbosa, 2026.</p>

### Serviços das interfaces

<div role="region" aria-label="Tabela 2" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Interface | Componente responsável | Serviço | Requisitos |
|-----------|------------------------|---------|------------|
| `IPartida` | Controle da Partida | Receber comandos da interface do jogador e coordenar início, continuidade e saída da sessão. | RF03, RF21 |
| `IExploracao` | Exploração | Movimentar, coletar objetos e sortear encontros após deslocamentos em áreas não seguras. | RF01, RF02, RF04, RF10, RF20 |
| `INPCs` | Interações com NPCs | Processar compras e iniciar missões secundárias. | RF14, RF15 |
| `ICombate` | Combate em Turnos | Resolver ações com magias e consumíveis, calcular dano, alternar turnos e determinar vitória ou derrota. | RF05, RF06, RF07, RF13, RF16, RF17, RF22 |
| `IMagias` | Magias | Obter o efeito da mistura usando os elementos coletados pelo jogador. | RF05, RF09 |
| `IProgresso` | Estado do Jogador | Manter estatísticas e missões; incorporar os resultados das mecânicas ao inventário e ao diário. | RF15, RF16; integração de RF08, RF11, RF12, RF18 e RF19 |
| `IInventario` | Inventário | Administrar elementos, itens e o saldo usado nas compras. | RF14, RF18, RF19, RF20, RF22 |
| `IDiario` | Diário do Aventureiro | Registrar livros e magias descobertas; apresentar o histórico, o enredo e as combinações reveladas pelos livros. | RF08, RF11, RF12 |
| `ISalvamento` | Salvamento | Gravar e recuperar o progresso, incluindo mundo, jogador e contexto do combate. | RF03, RF21 |
| `ICatalogo` | Catálogo do Jogo | Fornecer definições de áreas, personagens, fraquezas, magias, livros, itens e NPCs. | RF02, RF13, RF16, RF17; apoio às demais mecânicas |

</div>

<p align="center">Tabela 2: Interfaces da V2 e cobertura funcional. Fonte: requisitos do Subgrupo 03 e complementos da Tabela 1, organizados por Yogi Nam de Souza Barbosa, 2026.</p>

O Controle entrega às mecânicas as definições do Catálogo e os dados necessários da sessão, incorporando seus resultados por `IProgresso`. Assim, Compras e Combate não acessam diretamente o Inventário. O Diário reúne duas informações distintas: magias descobertas e livros coletados. O salvamento inclui também a posição no mundo e o turno em andamento; a derrota preserva o último arquivo salvo.

## Referências

OBJECT MANAGEMENT GROUP. **UML 2.5.1**. 2017. Seções 11.2, 11.6 e 22. [Especificação](https://www.omg.org/spec/UML/2.5.1/PDF).

SERRANO, Milene. **Modelagem UML Estática**. Universidade de Brasília, [s. d.]. Páginas 47 a 49. [Slides](Base/Relatórios/SubEquipe_01/assets/componentes/referencias/modelagem-uml-estatica.pdf ':ignore').

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
| 1.0 | 12/09/2026 | Inserção do diagrama de componentes. | Yogi Nam de Souza Barbosa | - |
| 2.0 | 14/09/2026 | Adequação aos requisitos do Subgrupo 03, decomposição em subsistemas e carrossel de versões. | Yogi Nam de Souza Barbosa | - |

</div>

<p align="center">Tabela 4: Histórico de versão.</p>

[rf]: Base/Relatórios/SubEquipe_01/assets/referencias/requisitos-subgrupo03.txt ':ignore'
