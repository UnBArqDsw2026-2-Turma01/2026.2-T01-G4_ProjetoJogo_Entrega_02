# Ata — Reunião de 16/09/2026 (Refinamento de Diagramas)

## Identificação

| Data | Horário de Início | Horário de Término | Local | Projeto | Redator |
| :--: | :---------------: | :----------------: | :---: | :-----: | :-----: |
| 16/09/2026 | 19:39 | Não especificado | Google Meet | RPG Didático | Gemini PRO 3.1 |

<p align="center">Tabela 1: Identificação da reunião. Fonte: transcrição automática da reunião, 2026.</p>

## Participantes da Reunião

| Convocados | Presente (Sim/Não) |
| :--------- | :----------------: |
| Carlos Henrique Brasil de Souza | Sim |
| Pedro Teixeira | Sim |
| Renan Pereira Reis | Sim |

<p align="center">Tabela 2: Participantes da reunião. Fonte: transcrição automática da reunião, 2026.</p>

## Pauta

| Nº | Descrição |
| :-: | :-------- |
| 1 | Revisão inicial do diagrama de classes estático e definição de enumerações |
| 2 | Resolução de laços arquiteturais sobre áreas seguras e sistema de salvamento |
| 3 | Discussão sobre o modificador "abstract" nas classes de entidades (Personagem e Área) |
| 4 | Criação e refinamento do diagrama de atividades (dinâmico) na ferramenta Draw.io |
| 5 | Planejamento e sorteio dos integrantes para a gravação do vídeo de apresentação |

<p align="center">Tabela 3: Pauta reconstruída a partir dos assuntos discutidos. Fonte: transcrição automática da reunião, revisada pelos autores, 2026.</p>

## Pendências Anteriores

| Nº | Pendência | Responsável | Data |
| :-: | :-------- | :---------- | :--: |
| 1 | Criação do modelo do diagrama dinâmico. | O Grupo | Reunião anterior |

<p align="center">Tabela 4: Pendências anteriores. Fonte: transcrição automática da reunião, 2026.</p>

## Assuntos Tratados

| Nº | Descrição | Tipo |
| :-: | :-------- | :--: |
| 1 | O grupo avaliou os modelos exportados e decidiu, por enquanto, considerar o diagrama estático como concluído para poder concentrar os esforços na construção do diagrama dinâmico (atividades). | 2 |
| 2 | Houve um debate sobre a exclusão da entidade "área segura" do modelo, sendo decidido que ela atua como um padrão de herança na arquitetura para áreas sem combates aleatórios, justificando sua permanência estrutural mesmo estando vazia. | 2 |
| 3 | A partir da revisão da UML feita com IA, a equipe concordou inicialmente em retornar a definição abstrata (tag ou itálico) às superclasses 'Personagem' e 'Área'. Ao revisar a versão corrigida do diagrama, que seguia a [Ata 02](AtaSub03_02.md) e retirava o modificador, a equipe considerou coerente a nova hierarquia com `Combatente` e manteve as classes concretas, registrando o custo dessa escolha na análise crítica da [Modelagem Estática](/Base/Relatórios/SubEquipe_03/ModelagemEstatica.md). | 2 |
| 4 | O grupo simplificou as enumerações no diagrama. Em vez de uma enumeração com todos os elementos químicos reais, os elementos da tabela periódica passaram a ser representados pela classe `Elemento` (símbolo, nome e número atômico), e a enumeração ficou restrita aos tipos de efeito das magias (`TipoEfeito`: fogo, gelo e veneno). | 2 |
| 5 | O salvamento foi mantido como classe própria (`SistemaSave`), com as operações de salvar, carregar e salvar e sair, pois o RF03 permite salvar em qualquer área do jogo. | 2 |
| 6 | No planejamento do "Diário do Aventureiro", ficou determinado que ele possuirá duas abas principais: livros descobertos e histórico de magias. Essa modificação garantirá que o jogador utilize combinações registradas durante o combate. | 3 |
| 7 | A equipe realizou um pequeno script de sorteio com a linguagem Python para definir os apresentadores do vídeo de entrega (Entrega 2). A responsabilidade pela apresentação recaiu sobre Carlos Henrique e Pedro Teixeira, em função do domínio das regras de negócio. | 2 |

<p align="center">Tabela 5: Assuntos tratados. Fonte: transcrição automática da reunião, revisada pelos autores, 2026.</p>

> **Tipos:** 1. Apresentação · 2. Decisão · 3. Definição · 4. Solicitação · 5. Pendência.

## Próxima Reunião

Não agendada explicitamente, mas alinhou-se a obrigação conjunta de gravar o vídeo para a entrega 2.

## Compromissos

| Nº | Compromisso | Responsável | Data |
| :-: | :---------- | :---------- | :--: |
| 1 | Gravar o vídeo oficial da Entrega 2. | O grupo (Apresentadores: Carlos e Pedro) | Não especificado |
| 2 | Fazer o upload das alterações dos diagramas e anotações gerativas no repositório do GitHub. | Renan Pereira Reis | Não especificado |

<p align="center">Tabela 6: Compromissos acordados. Fonte: transcrição automática da reunião, revisada pelos autores, 2026.</p>

## Gravação da Reunião

- **[Gravação em Vídeo](https://drive.google.com/file/d/1E8ac2_-rEdYhg5MFZ5SDsPuyjkAuSnJp/view?usp=drive_web)**

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|------|:----------|:----------|:--------|
| 1.0 | 17/09/2026 | Criação da ata com base na transcrição automática e resumos gerados por IA | Gemini PRO 3.1 | Pedro Teixeira Moriel Sanchez |
| 1.1 | 17/09/2026 | Revisão após conferência com os participantes: a versão gerada por IA registrava como decisão o retorno do *abstract*, que não refletia o resultado final da reunião. Correção dos itens 3 e 4, inclusão do item sobre o sistema de salvamento e remoção do compromisso de ajuste da notação abstrata | Carlos Henrique Brasil de Souza, Pedro Teixeira Moriel Sanchez, Renan Pereira Reis | |
| 1.2 | 18/09/2026 | Ajuste do item 3 após conferência com a transcrição, registrando as duas etapas da decisão sobre o *abstract*: a concordância inicial em restaurá-lo e a revisão que manteve as classes concretas | Carlos Henrique Brasil de Souza, Pedro Teixeira Moriel Sanchez, Renan Pereira Reis | |

<p align="center">Tabela 7: Histórico de versão.</p>
