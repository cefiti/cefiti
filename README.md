# **CEFiTI**

# Catálogo de Exigências Fitosssanitárias para o Trânsito Interestadual

## **_CHANGELOG_**

## 4.4.24
- [db] Atualização Mosca da Carambola ([28bab9b](28bab9b9a215ce578badb8567c4ca3df7082d90b), [b222ad](4b222ad1cad7a9fc94630d57eb0514617f68994a), [74d71a6](74d71a61885befb51fd8106c049be87e76361115))
- [db] Atualização Ácaro Hindu (hospedeiros) ([f2cd2e6](f2cd2e6b7baf5e6d131df9b610afdf37c4f5280b))
- [db] Atualização Gorgulho da Manga ([9626a8](9626a84754a56f4f0fbe1500de62a87e3a66fce0))
- [db] Atualização Bicudo da Acerola
- [db] Atualização Sigatoka Negra (GO) ([a7d974b]
- [db] Atualização Gorgulho da Acerola ([c302d37](c302d378fd7a780c8f19215b2c2851df3d609ec1))(a7d974b5d37de5f82054b6fa492aa1fee08cac2a))
- Atualização Cancro Europeu das Pomãceas ([b434c0c](b434c0c8594b7ef1493e19f6574cdde84c027725))
- [db] Exclusão Cocholilha do Carmim e Broca Conígera ([674a33c](674a33c41a4023468f55a17e970d7936275694ee), [5c89612](5c89612fe724cd4fbd2c782fbe681d8c204feba2))
- [db] Atualização Pinta Preta ([cb12f8](cb12f841c76d9d45896cee0b5b6e84b73a694bbf), [ae568e0](ae568e0cc1fe32f45acf6d428ddc59ee98d80156))
- Melhoria no Google Analytics
- Melhorias nos Testes
- Migração para o create-reatc-app (9bfa7903134a936315a0d532796a87acdfc47655)
- Atualização das dependências
- BREAKING CHANGE: Internet Explorer menor que 11 não são mais compaíveis


## 4.3-23

- Utilização do react-scripts(CRA) como bunbler, uma vez que este suporta agora Typescript

## 4.2-23

- Atualização de dependências
- [db] Adequação das regras para Cancro Cítrico à IN 21/2018.

## 4.1-22

- [db] Mosca da Carambola: altera Pará para Área com Ocorrência
- [db] Inclusão das partes "material de propagação", "mudas", "estacas", "gemas", "plantas" para Greening, Pinta Preta e Cancro Cítrico, para harmonizar com Cancro Europeu das Pomáceas que tem 'Citrus sinensis' como hospedeiro e estas outras partes listadas.
- [db] Correção na grafia de dois hospedeiros: ''Crataegus oxyacanthoides (syn: oxyacantha)' e 'Fagus crenata f. grandifolia (syn. Americana)'.

## 4.1-21

- Substituição do WebPack(CRA) pelo Parcel como bundler
- Inclusão dos botões Voltar e Nova Consulta na tela de Resultados
- Eliminação das mensagens referente às famílias de hospedeiros de 'Raoiela indica'
- [db] Retirada da praga 'Raoiela indica' e de seus hospedeiros devido à revogação da IN 14/2010 pela IN 10/2018
- [db] Alteração do status de Rondônia, Paraíba e Espírito Santo de Cancro Cítrico de Risco Desconhecido para Área com Praga Ausente, conforme as Resoluções nº 1602/2018, 19/2017 e 01/2018.
- [db] Correção no status fitossanitário do Paraná em Cancro Cítrico emMaterial de Propagação em SMR.
- [db] Conferência das regras de Cancro Cítrico com o Comunicado nº 1/2018/CGPP/DSV/MAPA/SDA/MAPA

## 4.0-20

- [db] Revogação do Ofício Circular 15/2017 do Ácaro Vermelho, permanecendo com área infestada somente RR e AM.

## 4.0-19

- [db] Alteração do status do Paraná para Cancro Cítrico de Risco Desconhecido para o Área sob Sistema de Mitigação de Risco (SMR), conforme a Resolução nº 18 de 08/12/17.

## 4.0-18

- [db] Alteração do status de Pernambuco e Sergipe para Cancro Cítrico de Risco Desconhecido para Área com praga ausente, conforme as Resoluções nº 16 de 20/09/17 e 17 de 28/09/17.

## 4.0-17

- [db] Unificação das regras para Ácaro Indu para frutos de citros e outros hospedeiros ( a regra existente estava sendo aplicada a todas as partes da planta e não apenas a frutos de citros)
- [db] Separação e normalização da base de dados em três arquivos: Pragas, Hospedeiros e Regras, para evitar repetição de dados e facilitar a manutenção.
- [db] Implementação da possibilidade de acrescentar mais de um arquivo PED de legislação por praga
- [db] Inclusão do arquivo PDF do Ofício Circular 15/2017 de Ácaro Vermelho

## 4.0-16:

- [db] Inclusão da regra para Cancro Cítrico "DE Sistema de Manejo de Risco (SMR) de Cancro Cítrico PARA qualquer UF" para material de propagação, sendo o trânsito proibido.
- [db] Amazonas e Distrito Federal passam de Área de Risco Desconhecido de Cancro Cítrico para Área com Ausência de Praga, conforme as Resoluções 14/2017 e 15/2017.
- [db] Ceará passa de Área de Risco Desconhecido de Cancro Cítrico para Área sob Erradicação ou Supressão, conforme a Resolução 13/2017.
- [db]DE Área com Cancro Cítrico Ausente PARA qualquer UF teve a exigência alterada de PTV para SEM EXIGÊNCIAS PARA O TRÂNSITO.

## 4.0-15

- [db] Correção na regra "DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra" para incluir o SMR como opção.

## 4.0-14:

- [db] Alteração da regra "DE área com ocorrência de Sigatoka Negra PARA demais áreas" para "DE área com ocorrência de Sigatoka Negra PARA área livre de Sigatoka Negra", pois estava havendo sobreposição com a regra "DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra". Por exemplo, frutos de banana de RO pa MT gerava dois requisitos: "sem PTV"" e "PTV com SMR", gerando dúvida fiscal em qual aplicar. Com a modificação "PTV com SMR" será exigido apenas para ALP, sendo para as demais áreas com ocorrência "transito livre sem PTV", ressalvada o trânsito por ALP.

## 4.0-13:

- Alteração do status fitossanitário dos Estados Bahia, Ceará, Goiás, Minas Gerais, Pará, Paraná, Rio Grande do Norte, São Paulo, Sergipe e no Distrito Federal, de ausente para presente da praga Ácaro Vermelho ('Raoiella indica'), conforme processo SEI 21000.022348/2017-84.

## 4.0-12:

- Cancro Cítrico: Santa Catarina passa de Área de Risco Desconhecido para Área sob Mitigação de Risco, conforme a Resolução 12/2017

## 4.0-11:

- Alterou a regra de Sigatoka Negra excluindo as regras de "DE área de ocorrência PARA área livre de Sigatoka", substituindo a regra para "DE área de ocorrência de Sigatoka Negra PARA demais áreas", para atender ao art. 2º, VI, da IN nº 17/2007

## 4.0

- Correção do botão Imprimir
- Reimplementação do botão Download para uso do sistema off-line
- Atualização para React 16.0 e Mobx 3.3
- Uso de ferramenta create-react-app para compilação

## 3.6-12

- Ajustes para colocar em produção

## 3.5-12

- Cancro Cítrico: Santa Catarina passa de Área de Risco Desconhecido para Área sob Mitigação de Risco, conforme a Resolução 12/2017

## 3.5-11

- [DB]: Alterada a regra de Sigatoka Negra excluindo as regras de "DE área de ocorrência PARA área livre de Sigatoka", substituindo a regra para "DE área de ocorrência de Sigatoka Negra PARA demais áreas", para atender ao art. 2º, VI, da IN nº 17/2007
- [UPDATE] Adequação no alerta sobre as Famílias Botânicas do Ácaro Vermelho

## 3.4-10

- [UPDATE]: Atualiza Legeislação Geral da PTV da IN 54/2007 para IN 28/2016
- [DB]: Atualiza os requisitos fitossanitários para Cancro Cítrico conforme a IN 37/2016

## 2.1.0

- Use in Mobx 'useStrict'

/\*\*

- === REGRAS PARA EDIÇÃO ===
- 1 - Toda haspa dupla (") dentro do texto deve ser precedida de uma barra invertida (Ex.: texto \"texto\" texto) <=
- 2 - Para inserir uma quebra de linha dentro de um item, inserir "\n" (Ex.: texto \n texto ou texto \ntexto) <=
- 3 - Uma lista de itens (array) é definida colocando-se os itens entre colchetes (Ex.: ["a", "b", "c"]). <=
- 4 - Os itens da lista devem estar entre hastas duplas (") e separados por vírgula.
- 5 - Cada regra deve conter os seguintes campos: desc, hosp[], part[], orig[], dest[], prag, pragc, exig[], leg, link
- 6 - Cada campo da regra deve ser seguido pela sua definição após dois pontos (:), e os campos separados por vírgula.
- 7 - Cada regra deve ter seus campos agrupados dentro de chaves ({...}), e separado de outras regras por uma vírgula.  
  \*/

/_
VSCODE
Ctrl+Z : Voltar
Ctrl+S : Salvar
Alt+Z : Quebrar a linha (só para vizualização)
_/
