# SubEquipe_01: Diagrama de Componentes

## Descrição

Estrutura do MVP do **G4_ProjetoJogo**, conforme os [requisitos funcionais](RequisitosFuncionais.md) e a [Ata 01 do Subgrupo 01](/Atas/AtaSub01_01.md).

## Objetivo

Definir os componentes do jogo e as interfaces pelas quais colaboram.

## Metodologia

As funcionalidades do MVP foram agrupadas por responsabilidade. A representação segue a [referência do UML Diagrams](https://www.uml-diagrams.org/component-diagrams.html) e os exemplos dos slides de Milene Serrano: componentes internos, portas e interfaces fornecidas e requeridas, unidos por conectores de montagem. O [fluxo da partida](DiagramaAtividades.md) orienta a verificação das responsabilidades e dos contratos.

## Conteúdo

<a href="Base/Relatórios/SubEquipe_01/assets/componentes/componentes.svg" target="_blank" rel="noopener"><img src="Base/Relatórios/SubEquipe_01/assets/componentes/componentes.svg" alt="Oito componentes do jogo com portas e interfaces fornecidas e requeridas. A Interface do Jogador acessa o Controle da Partida, que coordena Exploração, Combate, Alquimia, Inventário e Livro. O Controle da Partida e os módulos de domínio consultam o Catálogo." style="width:100%;max-width:1400px;max-height:none;"></a>

<p align="center">Figura 1: Componentes do MVP e suas interfaces. Fonte: Yogi Nam de Souza Barbosa, 2026.</p>

A separação por responsabilidades explicita dependências e favorece a substituição de módulos. Concentrar a coordenação no Controle da Partida simplifica o MVP, mas exige preservar sua função de coordenação, mantendo as regras de combate e alquimia nos componentes correspondentes. O modelo define contratos, sem detalhar classes internas nem a ordem das chamadas.

[Abrir diagrama em tamanho original (SVG editável)](Base/Relatórios/SubEquipe_01/assets/componentes/componentes.svg ':ignore :target=_blank')

O Controle da Partida mantém a sessão e os PV do protagonista entre os modos; o Combate recebe esses PV e devolve o resultado atualizado. Exploração mantém posição, recursos e inimigos ativos; Inventário mantém quantidades; Livro mantém descobertas. O Catálogo fornece definições, sem armazenar progresso. Chamadas retornam dados e resultados pelas próprias interfaces.

### Responsabilidades e requisitos

<div role="region" aria-label="Tabela 1" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Componente | Responsabilidade | Requisitos |
|------------|------------------|------------|
| Interface do Jogador | Receber comandos e apresentar telas, resultados e mensagens. | RF12; apresentação dos demais RF |
| Controle da Partida | Inicializar a sessão, controlar os modos, conservar PV e interromper as ações ao receber Sair em qualquer modo. | RF01, RF08, RF11, RF13 |
| Exploração | Validar movimento e coleta, identificar encontros e retirar inimigos vencidos da área. | RF02, RF03, RF08, RF11 |
| Inventário | Consultar quantidades, adicionar coletas, consumir itens e trocar ingredientes pelo produto sem atualização parcial. | RF03, RF04, RF05, RF10 |
| Alquimia | Validar receitas, transformar ingredientes em itens e solicitar o registro da descoberta. | RF05, RF06 |
| Livro do Aventureiro | Registrar e consultar receitas descobertas, sem duplicação. | RF06, RF07 |
| Combate em Turnos | Resolver ações, alternar turnos, determinar o resultado e interromper o combate quando a sessão termina. | RF08, RF09, RF10, RF11, RF13 |
| Catálogo do Jogo | Fornecer área, PV iniciais e máximos, itens, receitas e efeitos. | Apoio a RF01 a RF12 |

</div>

<p align="center">Tabela 1: Responsabilidades e cobertura dos requisitos. Fonte: Requisitos Funcionais do MVP, 2026.</p>

### Serviços das interfaces

<div role="region" aria-label="Tabela 2" tabindex="0" style="overflow-x:auto;padding:0 6px 6px 0;">

| Interface fornecida | Serviços principais |
|---------------------|---------------------|
| `IPartida` | Iniciar e interromper a sessão; receber Sair em qualquer modo e os demais comandos permitidos; devolver estado e mensagens. |
| `IExploracao` | Inicializar área; mover, coletar e informar encontro; retirar inimigo vencido. |
| `ICombate` | Iniciar com inimigo e PV atuais; resolver ações; consultar turno e PV; devolver resultado; interromper ao encerrar a sessão. |
| `IAlquimia` | Validar combinação; solicitar troca ao Inventário; registrar receita no Livro somente após sucesso. |
| `IInventario` | Reinicializar, consultar, adicionar e consumir; conferir saldo e trocar todos os ingredientes pelo produto como uma única operação. |
| `ILivro` | Reinicializar descobertas; registrar receita sem duplicar; consultar receitas descobertas. |
| `ICatalogo` | Consultar definições de área, personagens, elementos, itens, receitas e efeitos. |

</div>

<p align="center">Tabela 2: Contratos necessários aos fluxos de atividades. Fonte: Requisitos Funcionais e Diagrama de Atividades do MVP, 2026.</p>

O Controle encaminha consultas ao Inventário e ao Livro também durante o turno do jogador, sem avançá-lo. Na derrota ou saída, encerra as ações e descarta a sessão, impedindo a aplicação posterior de seus resultados. Uma nova partida reinicializa os componentes da sessão.

## Referências

OBJECT MANAGEMENT GROUP. **Unified Modeling Language, versão 2.5.1**. 2017. Seção 11.6. [Especificação](https://www.omg.org/spec/UML/2.5.1/PDF). Acesso em: 12 set. 2026.

SERRANO, Milene. **Modelagem UML Estática**. Universidade de Brasília, [s. d.]. Páginas 47 a 49. [Slides](Base/Relatórios/SubEquipe_01/assets/componentes/referencias/modelagem-uml-estatica.pdf ':ignore').

UML DIAGRAMS. **UML Component Diagrams**. [Referência de notação](https://www.uml-diagrams.org/component-diagrams.html). Acesso em: 12 set. 2026.

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
| 1.1 | 13/09/2026 | Atualização da navegação entre os artefatos. | Yogi Nam de Souza Barbosa | - |
| 1.2 | 13/09/2026 | Adoção do rodapé de navegação automática. | Yogi Nam de Souza Barbosa | - |

</div>

<p align="center">Tabela 4: Histórico de versão.</p>
