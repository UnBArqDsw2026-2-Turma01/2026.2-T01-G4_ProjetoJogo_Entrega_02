# Ata — Reunião de Modelagem Estática e Refinamento de Requisitos

## Identificação

| Data | Horário de Início | Horário de Término | Local | Projeto | Redator |
| :--: | :---------------: | :----------------: | :---: | :-----: | :-----: |
| 15/09/2026 | 19:34 | 21:02 | Google Meet | RPG Didático | Gemini PRO 3.1 |

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
| 1 | Definição da abordagem para modelagem estática e dinâmica |
| 2 | Refinamento do diagrama de classes e padronização de atributos |
| 3 | Estrutura de herança, lógica de áreas e requisitos funcionais |
| 4 | Resolução de problemas técnicos no arquivo colaborativo no Draw.io |
| 5 | Correções no modelo (remoção de abstract e correção de referências circulares) |

<p align="center">Tabela 3: Pauta reconstruída a partir dos assuntos discutidos. Fonte: transcrição automática da reunião, 2026.</p>

## Pendências Anteriores

| Nº | Pendência | Responsável | Data |
| :-: | :-------- | :---------- | :--: |
| 1 | Elaboração dos diagramas de modelagem UML (estática e dinâmica). | O Grupo | Reunião Anterior (12/09) |

<p align="center">Tabela 4: Pendências anteriores. Fonte: transcrição automática da reunião, 2026.</p>

## Assuntos Tratados

| Nº | Descrição | Tipo |
| :-: | :-------- | :--: |
| 1 | O grupo decidiu priorizar a elaboração do diagrama de classes para representar a modelagem estática, adiando a definição do diagrama de sequência (dinâmica) para a próxima reunião. | 2 |
| 2 | Após analisar um protótipo gerado por IA (Claude), foi decidido que o diagrama utilizará apenas atributos privados ou públicos, devendo a implementação em código usar os métodos "getters" e "setters". O uso de atributos protegidos ("protected") foi excluído. | 3 |
| 3 | A equipe identificou redundância na classe de "área segura" relacionada à mecânica de salvamento. Foi decidido remover a entidade explícita "ponto de salvamento" tanto do diagrama quanto dos requisitos funcionais, pois a funcionalidade de "salvamento livre" foi considerada suficiente e simplifica o MVP. | 2 |
| 4 | Houve um consenso sobre a remoção da associação para o enum "tipo elemento", pois ele não representa um tipo de dado tradicional, além de ajustar laços de auto-referência (self loop) na classe de jogador. | 3 |
| 5 | Identificou-se que a presença da tag 'abstract' nas classes dificultava a sua instanciação adequada em código. Ficou acordado remover a instrução 'abstract' de classes como a de personagem e de "área". | 2 |
| 6 | A equipe reportou problemas com permissões de edição simultânea via Draw.io pelo Google Drive, os quais foram solucionados durante a chamada. No entanto, exigiram-se correções manuais nas setas de associação que haviam perdido a formatação. | 1 |

<p align="center">Tabela 5: Assuntos tratados. Fonte: transcrição automática da reunião, 2026.</p>

> **Tipos:** 1. Apresentação · 2. Decisão · 3. Definição · 4. Solicitação · 5. Pendência.

## Próxima Reunião

Ficou acordada a realização de uma próxima reunião para discutir exclusivamente a modelagem dinâmica por meio do diagrama de sequência.

## Compromissos

| Nº | Compromisso | Responsável | Data |
| :-: | :---------- | :---------- | :--: |
| 1 | Ajustar diagrama de classes no Draw.io: corrigir formatação e setas de associação. | Pedro Teixeira, Carlos Henrique, Renan Pereira | Não especificado |
| 2 | Atualizar os requisitos funcionais e remover o 'save point' das áreas não seguras. | O grupo | Não especificado |
| 3 | Planejar a Modelagem Dinâmica (diagrama de sequência). | O grupo | Próxima reunião |
| 4 | Corrigir os erros identificados no código base gerado, garantindo a integridade das classes. | Renan Pereira Reis | Não especificado |
| 5 | Subir as gravações das últimas duas reuniões para a nova branch no repositório GitHub. | Pedro Teixeira | Até o final do dia |
| 6 | Remover a definição abstrata remanescente nas classes de personagem. | Carlos Henrique Brasil de Souza | Não especificado |

<p align="center">Tabela 6: Compromissos acordados. Fonte: transcrição automática da reunião, 2026.</p>

## Gravação da Reunião

- **[Gravação em Vídeo](https://drive.google.com/file/d/11qzXBtpfd2JpZZM0FasqjvCfQ-zWTE0_/view?usp=drive_web)**
- **[Transcrição Automática](https://docs.google.com/document/d/1TXpxm76y-UqvfBHU87paDYGzXpcujMUg5IYnygkPqn8/edit?usp=drive_web&tab=t.q2rm1djwjxuy)**

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor |
|:------:|------|:----------|:----------|:--------|
| 1.0 | 16/09/2026 | Criação da ata com base na transcrição automática e anotações geradas por IA | Gemini PRO 3.1 | Pedro Teixeira Moriel Sanchez |

<p align="center">Tabela 7: Histórico de versão.</p>
