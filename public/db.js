// CEFiTI db
'use strict'

var version = '18'

if (typeof module === 'object') {
  exports.version = vsersion
}

/**
 * === REGRAS PARA EDIÇÃO ===
 * 1 - Toda haspa dupla (") dentro do texto deve ser precedida de uma barra invertida (Ex.: texto \"texto\" texto) <=
 * 2 - Para inserir uma quebra de linha dentro de um item, inserir "\n" (Ex.: texto \n texto ou texto \ntexto)     <=
 * 3 - Uma lista de itens (array) é definida colocando-se os itens entre colchetes (Ex.: ["a", "b", "c"]).         <=
 * 4 - Os itens da lista devem estar entre hastas duplas (") e separados por vírgula. 
 * 5 - Cada regra deve conter os seguintes campos: desc, hosp[], part[], orig[], dest[], prag, pragc, exig[], leg, link
 * 6 - Cada campo da regra deve ser seguido pela sua definição após dois pontos (:), e os campos separados por vírgula.
 * 7 - Cada regra deve ter seus campos agrupados dentro de chaves ({...}), e separado de outras regras por uma vírgula.  
 */

 /* 
 VSCODE
 Ctrl+Z : Voltar
 Ctrl+S : Salvar
 Alt+Z : Quebrar a linha (só para vizualização)
 */

/*
#MUDANÇAS DE VERSÃO: 

##Versão 11:
- Alterou a regra de Sigatoka Negra excluindo as regras de "DE área de ocorrência PARA área livre de Sigatoka", substituindo a regra para "DE área de ocorrência de Sigatoka Negra PARA demais áreas", para atender ao art. 2º, VI, da IN nº 17/2007  

##Versão 12:
- Cancro Cítrico: Santa Catarina passa de Área de Risco Desconhecido para Área sob Mitigação de Risco, conforme a Resolução 12/2017

##Versão 13:
- Alteração do status fitossanitário dos Estados Bahia, Ceará, Goiás, Minas Gerais, Pará, Paraná, Rio Grande do Norte, São Paulo, Sergipe e no Distrito Federal, de ausente para presente da praga Ácaro Vermelho ('Raoiella indica'), conforme processo SEI 21000.022348/2017-84.

##Versão 14:
- Alteração da regra "DE área com ocorrência de Sigatoka Negra PARA demais áreas" para "DE área com ocorrência de Sigatoka Negra PARA área livre de Sigatoka Negra", pois estava havendo sobreposição com a regra "DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra". Por exemplo, frutos de banana de RO pa MT gerava dois requisitos: "sem PTV"" e "PTV com SMR", gerando dúvida fiscal em qual aplicar. Com a modificação "PTV com SMR" será exigido apenas para ALP, sendo para as demais áreas com ocorrência "transito livre sem PTV", ressalvada o trânsito por ALP.

##Versão 15
- Correção na regra  "DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra" para incluir o SMR como opção.

##Versão 16:
- Inclusão da regra para Cancro Cítrico "DE Sistema de Manejo de Risco (SMR) de Cancro Cítrico PARA qualquer UF" para material de propagação, sendo o trânsito proibido.
- Amazonas e Distrito Federal passam de Área de Risco Desconhecido de Cancro Cítrico para Área com Ausência de Praga, conforme as Resoluções 14/2017 e 15/2017.
- Ceará passa de Área de Risco Desconhecido de Cancro Cítrico para Área sob Erradicação ou Supressão, conforme a Resolução 13/2017.
- DE Área com Cancro Cítrico Ausente PARA qualquer UF teve a exigência alterada de PTV para SEM EXIGÊNCIAS PARA O TRÂNSITO.

##Versão 17
- Unificação das regras para Ácaro Indu para frutos de citros e outros hospedeiros ( a regra existente estava sendo aplicada a todas as partes da planta e não apenas a frutos de citros)
- Separação e normalização da base de dados em três arquivos: Pragas, Hospedeiros e Regras, para evitar repetição de dados e facilitar a manutenção.
- Implementação da possibilidade de acrescentar mais de um arquivo PED de legislação por praga
- Inclusão do arquivo PDF do Ofício Circular 15/2017 de Ácaro Vermelho

##Versão 18
- Alteração do status de Pernambuco e Sergipe para Cancro Cítrico de Risco Desconhecido para Área com praga ausente, conforme as Resoluções nº 16 de 20/09/17 e 17 de 28/09/17.

*/
