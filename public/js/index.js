var __defineProperty = Object.defineProperty;
var __getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result2 = kind > 1 ? void 0 : kind ? __getOwnPropertyDescriptor(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result2 = (kind ? decorator(target, key, result2) : decorator(result2)) || result2;
  if (kind && result2)
    __defineProperty(target, key, result2);
  return result2;
};

// src/utils.ts
function flatten(list, depth, mapperFn, mapperCtx) {
  if (depth === 0) {
    return list;
  }
  return list.reduce((accumulator, item, i) => {
    if (mapperFn) {
      item = mapperFn.call(mapperCtx || list, item, i, list);
    }
    if (Array.isArray(item)) {
      accumulator.push(...flatten(item, depth - 1));
    } else {
      accumulator.push(item);
    }
    return accumulator;
  }, []);
}
if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth = Infinity) {
    return flatten(this, depth);
  };
}
if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function(callback, thisArg) {
    return flatten(this, 1, callback, thisArg);
  };
}

// src/store.ts
import {observable, computed, configure, action, runInAction} from "mobx";
configure({enforceActions: "observed"});
class Store {
  constructor() {
    this.dbRegras = [];
    this.dbHospedeiros = [];
    this.dbPragas = [];
    this.db = [];
    this.estados = [];
    this.dados = {hospSci: "", hospVul: "", prod: "", orig: "", dest: ""};
    this.handleChanges = (event) => {
      const target = event.currentTarget;
      switch (target.name) {
        case "hospSci":
          const hospVulg = this.dbHospedeiros.find((hosp) => hosp.nomeSci === target.value);
          this.dados.hospVul = hospVulg ? hospVulg.nomeVul : "";
          break;
        case "hospVul":
          const hospSci = this.dbHospedeiros.find((hosp) => hosp.nomeVul === target.value);
          this.dados.hospSci = hospSci ? hospSci.nomeSci : "";
          break;
        default:
          break;
      }
      this.dados[target.name] = target.value;
    };
  }
  async getDb() {
    const {regras, pragas, hospedeiros, estados} = await import("./db.js");
    runInAction(() => {
      this.dbHospedeiros = hospedeiros;
      this.dbRegras = regras;
      this.dbPragas = pragas;
      this.estados = estados;
      this.db = this.dbRegras.map((regra) => ({
        ...this.dbPragas.find((item) => item.prag === regra.prag),
        ...regra
      }));
    });
  }
  get hospedeirosPragas() {
    return this.dbPragas.flatMap((praga) => praga.hosp);
  }
  get hospedeirosRegulamentados() {
    return this.dbHospedeiros.filter((hospedeiro) => this.hospedeirosPragas.includes(hospedeiro.nomeSci));
  }
  get listaNomesSci() {
    return this.hospedeirosRegulamentados.map((v) => v.nomeSci).filter((i, x, a) => a.indexOf(i) === x).sort((a, b) => a.localeCompare(b));
  }
  get listaNomesVul() {
    return this.hospedeirosRegulamentados.map((v) => v.nomeVul).filter((i, x, a) => a.indexOf(i) === x).sort((a, b) => a.localeCompare(b));
  }
  get empty() {
    return this.result.length === 0;
  }
  get origem() {
    return this.estados.filter((estado) => estado.UF !== this.dados.dest || estado.UF === "");
  }
  get destino() {
    return this.estados.filter((estado) => estado.UF !== this.dados.orig || estado.UF === "");
  }
  get gender() {
    return this.dados.hospSci.split(" ")[0];
  }
  get completed() {
    return Boolean(this.dados.hospSci) && Boolean(this.dados.hospVul) && Boolean(this.dados.prod) && Boolean(this.dados.orig) && Boolean(this.dados.dest);
  }
  get partes() {
    return this.db.filter((exigen) => exigen.hosp.includes(this.dados.hospSci) || exigen.hosp.includes(`${this.gender} sp.`) || exigen.hosp.includes(`${this.gender} spp.`)).flatMap((v) => v.part).filter((i, x, a) => a.indexOf(i) === x).concat([""]).sort((a, b) => a.localeCompare(b));
  }
  get result() {
    return this.db.filter((exigen) => {
      return (exigen.hosp.includes(this.dados.hospSci) || exigen.hosp.includes(`${this.gender} sp.`) || exigen.hosp.includes(`${this.gender} spp.`)) && exigen.orig.includes(this.dados.orig) && exigen.dest.includes(this.dados.dest) && exigen.part.includes(this.dados.prod);
    });
  }
  clean() {
    this.dados.hospSci = "";
    this.dados.hospVul = "";
    this.dados.prod = "";
    this.dados.orig = "";
    this.dados.dest = "";
  }
}
__decorate([
  observable
], Store.prototype, "dbRegras", 2);
__decorate([
  observable
], Store.prototype, "dbHospedeiros", 2);
__decorate([
  observable
], Store.prototype, "dbPragas", 2);
__decorate([
  observable
], Store.prototype, "db", 2);
__decorate([
  observable
], Store.prototype, "estados", 2);
__decorate([
  observable
], Store.prototype, "dados", 2);
__decorate([
  computed
], Store.prototype, "hospedeirosPragas", 1);
__decorate([
  computed
], Store.prototype, "hospedeirosRegulamentados", 1);
__decorate([
  computed
], Store.prototype, "listaNomesSci", 1);
__decorate([
  computed
], Store.prototype, "listaNomesVul", 1);
__decorate([
  computed
], Store.prototype, "empty", 1);
__decorate([
  computed
], Store.prototype, "origem", 1);
__decorate([
  computed
], Store.prototype, "destino", 1);
__decorate([
  computed
], Store.prototype, "gender", 1);
__decorate([
  computed
], Store.prototype, "completed", 1);
__decorate([
  computed
], Store.prototype, "partes", 1);
__decorate([
  computed
], Store.prototype, "result", 1);
__decorate([
  action
], Store.prototype, "handleChanges", 2);
__decorate([
  action
], Store.prototype, "clean", 1);
const store = new Store();
store.getDb();

// src/uistore.ts
import {observable as observable2, action as action2, configure as configure2} from "mobx";
configure2({enforceActions: "observed"});
class UiStore {
  constructor() {
    this.exibeBase = false;
    this.searched = false;
    this.handleMenu = (i) => {
      if (i === "Base") {
        this.exibeBase = !this.exibeBase;
      }
      if (i === "Nova") {
        store.clean();
        this.searched = false;
      }
      if (i === "Voltar") {
        this.searched = false;
      }
      if (i === "Print") {
        window.print();
      }
      if (i === "Download") {
        window.open("CEFiTI.zip");
      }
    };
    this.handleSearch = (event) => {
      if (false) {
        window.ga("send", "event", "search", "click", store.dados.hospSci);
      }
      this.searched = true;
      event.preventDefault();
    };
  }
}
__decorate([
  observable2
], UiStore.prototype, "exibeBase", 2);
__decorate([
  observable2
], UiStore.prototype, "searched", 2);
__decorate([
  action2
], UiStore.prototype, "handleMenu", 2);
__decorate([
  action2
], UiStore.prototype, "handleSearch", 2);
const uiStore = new UiStore();

// src/base.tsx
import React from "react";
import {observer} from "mobx-react-lite";
const Base = () => {
  return uiStore.exibeBase ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("table", {
    style: {width: "100%"},
    className: "table-grid"
  }, /* @__PURE__ */ React.createElement("caption", null, "Exigências"), /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    style: {width: "10%"}
  }, "Descrição"), /* @__PURE__ */ React.createElement("th", {
    style: {width: "20%"}
  }, "Hospedeiro"), /* @__PURE__ */ React.createElement("th", {
    style: {width: "10%"}
  }, "Partida"), /* @__PURE__ */ React.createElement("th", {
    style: {width: "10%"}
  }, "Origem"), /* @__PURE__ */ React.createElement("th", {
    style: {width: "10%"}
  }, "Destino"), /* @__PURE__ */ React.createElement("th", {
    style: {width: "15%"}
  }, "Legislação"), /* @__PURE__ */ React.createElement("th", {
    style: {width: "30%"}
  }, "Exigências"))), /* @__PURE__ */ React.createElement("tbody", null, store.db.map((item, i) => {
    return /* @__PURE__ */ React.createElement("tr", {
      key: i
    }, /* @__PURE__ */ React.createElement("td", {
      style: {width: "10%"}
    }, /* @__PURE__ */ React.createElement("span", null, item.desc)), /* @__PURE__ */ React.createElement("td", {
      style: {width: "20%"},
      className: "italic"
    }, /* @__PURE__ */ React.createElement("span", null, item.hosp.toString())), /* @__PURE__ */ React.createElement("td", {
      style: {width: "10%"}
    }, /* @__PURE__ */ React.createElement("span", null, item.part.toString())), /* @__PURE__ */ React.createElement("td", {
      style: {width: "10%"}
    }, /* @__PURE__ */ React.createElement("span", null, item.orig.toString())), /* @__PURE__ */ React.createElement("td", {
      style: {width: "10%"}
    }, /* @__PURE__ */ React.createElement("span", null, item.dest.toString())), /* @__PURE__ */ React.createElement("td", {
      style: {width: "15%"}
    }, item.files.map((file) => /* @__PURE__ */ React.createElement("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      key: file.link,
      href: `leg/${file.link}`
    }, file.leg)), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", null, item.pragc), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", {
      className: "italic"
    }, item.prag)), /* @__PURE__ */ React.createElement("td", {
      style: {width: "30%"}
    }, /* @__PURE__ */ React.createElement("div", {
      style: {margin: "6px"}
    }, item.exig.map((exigen, ix) => {
      return /* @__PURE__ */ React.createElement("p", {
        key: ix
      }, ix + 1, " - ", exigen);
    }))));
  })), /* @__PURE__ */ React.createElement("tfoot", {
    className: "form-barra-botoes"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null))))) : /* @__PURE__ */ React.createElement("div", null);
};
var base_default = observer(Base);

// src/result.tsx
import React2 from "react";
import {observer as observer2} from "mobx-react-lite";
function Result() {
  return /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("div", {
    className: store.completed && uiStore.searched ? "" : "hidden"
  }, /* @__PURE__ */ React2.createElement("br", null), /* @__PURE__ */ React2.createElement("h3", null, "Exigências Fitossanitárias para o trânsito de ", store.dados.prod, " de ", store.dados.hospVul, " ", /* @__PURE__ */ React2.createElement("i", null, "(", store.dados.hospSci, ")"), " do ", store.dados.orig, " para ", store.dados.dest), /* @__PURE__ */ React2.createElement("div", {
    className: store.empty ? "" : "hidden"
  }, /* @__PURE__ */ React2.createElement("br", null), /* @__PURE__ */ React2.createElement("br", null), /* @__PURE__ */ React2.createElement("span", {
    className: "empty"
  }, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("p", null, "SEM EXIGÊNCIAS PARA O TRÂNSITO"))), /* @__PURE__ */ React2.createElement("br", null)), /* @__PURE__ */ React2.createElement("span", null, uiStore.searched), store.result.map((item, i) => {
    return /* @__PURE__ */ React2.createElement("div", {
      key: `${item.prag}${i}`
    }, /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement("h4", {
      className: "h4",
      style: {textAlign: "left", float: "left"}
    }, /* @__PURE__ */ React2.createElement("i", null, item.prag), " - ", item.pragc), /* @__PURE__ */ React2.createElement("a", {
      className: "small",
      target: "_blank",
      rel: "noopener noreferrer",
      href: `https://www.google.com.br/search?site=imghp&tbm=isch&q=${item.prag}`,
      style: {textAlign: "right", float: "right"}
    }, "[FOTOS DA PRAGA]"), "        ", "          ", /* @__PURE__ */ React2.createElement("br", null), item.files.map((file, iii) => {
      return /* @__PURE__ */ React2.createElement("div", {
        key: file.link.concat(iii.toString())
      }, /* @__PURE__ */ React2.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: `leg/${file.link}`
      }, file.leg), /* @__PURE__ */ React2.createElement("br", null));
    }), /* @__PURE__ */ React2.createElement("span", {
      className: "small underline"
    }, item.desc), item.exig.map((exig, ii) => {
      return /* @__PURE__ */ React2.createElement("div", {
        style: {margin: "6px"},
        key: exig.concat(ii.toString())
      }, /* @__PURE__ */ React2.createElement("span", {
        title: `De: ${item.orig} para ${item.dest}`
      }, ii + 1, " - ", exig));
    }), /* @__PURE__ */ React2.createElement("br", null));
  }), /* @__PURE__ */ React2.createElement("div", {
    className: store.empty ? "hidden" : ""
  }, /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement("h4", {
    className: "h4"
  }, "TRÂNSITO NACIONAL DE PARTIDA IMPORTADA"), /* @__PURE__ */ React2.createElement("div", {
    style: {margin: "6px"}
  }, /* @__PURE__ */ React2.createElement("span", null, "1 – SE A PARTIDA AINDA NÃO FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO A UMA ÁREA ALFANDEGADA NO INTERIOR DO BRASIL:"), /* @__PURE__ */ React2.createElement("br", null), /* @__PURE__ */ React2.createElement("span", null, "- Certificado Fitossanitário ou Certificado Fitossanitário de Reexportação;")), /* @__PURE__ */ React2.createElement("div", {
    style: {margin: "6px"}
  }, /* @__PURE__ */ React2.createElement("span", null, "2 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO AO PONTO DE DESTINO DECLARADO NA IMPORTAÇÃO:"), /* @__PURE__ */ React2.createElement("br", null), /* @__PURE__ */ React2.createElement("span", null, "- Cópia autenticada do Certificado Fitossanitário ou do Certificado Fitossanitário de Reexportação;", " "), /* @__PURE__ */ React2.createElement("br", null), /* @__PURE__ */ React2.createElement("span", null, "- Original ou cópia autenticada do Requerimento para Fiscalização de Produtos Agropecuários, emitido pelo MAPA;")), /* @__PURE__ */ React2.createElement("div", {
    style: {margin: "6px"}
  }, /* @__PURE__ */ React2.createElement("span", null, "3 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER SAINDO DO DESTINO DECLARADO NA IMPORTAÇÃO, EM DIREÇÃO A QUALQUER UF:"), /* @__PURE__ */ React2.createElement("br", null), /* @__PURE__ */ React2.createElement("span", null, "- Cumprir os requisitos fitossanitários para o trânsito interestadual.")), /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement("h4", {
    className: "h4"
  }, "TRÂNSITO NACIONAL DE PARTIDA EXPORTADA"), /* @__PURE__ */ React2.createElement("div", {
    style: {margin: "6px"}
  }, /* @__PURE__ */ React2.createElement("span", null, "1 – SE A PARTIDA JÁ ESTIVER COM CERTIFICADO FITOSSANITÁRIO NO INTERIOR DO BRASIL, EM TRÂNSITO PARA PONTO DE EGRESSO:"), /* @__PURE__ */ React2.createElement("span", null, "- Certificado Fitossanitário.")), /* @__PURE__ */ React2.createElement("hr", null), /* @__PURE__ */ React2.createElement("h4", {
    className: "h4"
  }, "LEGISLAÇÃO GERAL"), /* @__PURE__ */ React2.createElement("a", {
    target: "_blank",
    href: "leg/IN28-2016.pdf",
    rel: "noreferrer"
  }, "Instrução Normativa MAPA Nº 28, de 24 de agosto de 2016"), /* @__PURE__ */ React2.createElement("br", null), /* @__PURE__ */ React2.createElement("br", null), /* @__PURE__ */ React2.createElement("a", {
    target: "_blank",
    href: "leg/IN38-2018.pdf",
    rel: "noreferrer"
  }, "Instrução Normativa MAPA Nº 38, de 01 de outubro de 2018"), /* @__PURE__ */ React2.createElement("br", null), /* @__PURE__ */ React2.createElement("hr", null)), /* @__PURE__ */ React2.createElement("div", {
    style: {textAlign: "center"}
  }, /* @__PURE__ */ React2.createElement("button", {
    onClick: uiStore.handleMenu.bind(void 0, "Voltar"),
    className: "form-button",
    disabled: false
  }, "Voltar"), "      ", /* @__PURE__ */ React2.createElement("button", {
    onClick: uiStore.handleMenu.bind(void 0, "Nova"),
    className: "form-button",
    disabled: false
  }, "Nova Consulta"))));
}
var result_default = observer2(Result);

// src/form.tsx
import React3 from "react";
import {observer as observer3} from "mobx-react-lite";
function Select({value, source, name, empty}) {
  return /* @__PURE__ */ React3.createElement("select", {
    style: name === "prod" ? {minWidth: "145px"} : {},
    id: name,
    className: name === "hospSci" ? "italic form-select" : "form-select",
    value,
    name,
    onChange: store.handleChanges
  }, empty && /* @__PURE__ */ React3.createElement("option", {
    value: "",
    "aria-selected": "true"
  }), source.map((option) => {
    return /* @__PURE__ */ React3.createElement("option", {
      value: option,
      key: option,
      "aria-selected": "false"
    }, option);
  }));
}
function Form() {
  return uiStore.searched ? /* @__PURE__ */ React3.createElement("div", null) : /* @__PURE__ */ React3.createElement("form", null, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("label", {
    className: "form",
    htmlFor: "hospSci"
  }, "Espécie Vegetal (nome científico):"), /* @__PURE__ */ React3.createElement(Select, {
    value: store.dados.hospSci,
    name: "hospSci",
    source: store.listaNomesSci,
    empty: true
  })), /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("label", {
    className: "form",
    htmlFor: "hospVul"
  }, "Espécie Vegetal (nome vulgar):"), /* @__PURE__ */ React3.createElement(Select, {
    value: store.dados.hospVul,
    name: "hospVul",
    source: store.listaNomesVul,
    empty: true
  })), /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("label", {
    className: "form",
    htmlFor: "prod"
  }, "Parte da Planta:"), /* @__PURE__ */ React3.createElement(Select, {
    value: store.dados.prod,
    name: "prod",
    source: store.partes,
    empty: false
  })), /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("label", {
    className: "form",
    htmlFor: "orig"
  }, "Origem:"), /* @__PURE__ */ React3.createElement("select", {
    id: "orig",
    className: "form-select",
    name: "orig",
    value: store.dados.orig,
    onChange: store.handleChanges
  }, store.origem.map((option, i) => {
    return /* @__PURE__ */ React3.createElement("option", {
      value: option.UF,
      key: i,
      "aria-selected": "false"
    }, option.estado);
  }))), /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("label", {
    className: "form",
    htmlFor: "dest"
  }, "Destino:"), /* @__PURE__ */ React3.createElement("select", {
    id: "dest",
    className: "form-select",
    name: "dest",
    value: store.dados.dest,
    onChange: store.handleChanges
  }, store.destino.map((option, i) => {
    return /* @__PURE__ */ React3.createElement("option", {
      value: option.UF,
      key: i,
      "aria-selected": "false"
    }, option.estado);
  }))), /* @__PURE__ */ React3.createElement("br", null), /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("a", {
    style: {marginBottom: "10px"},
    target: "_blank",
    rel: "noopener noreferrer",
    href: `https://www.google.com.br/search?site=imghp&tbm=isch&q=${store.dados.hospSci}+plant+OR+planta+ORfruto+OR+fruit+OR+flor+OR+flower`
  }, "Fotos da Espécie Vegetal"), /* @__PURE__ */ React3.createElement("button", {
    onClick: uiStore.handleSearch,
    className: "form-button margin-left-100",
    disabled: false
  }, "Pesquisar")));
}
var form_default = observer3(Form);

// src/menu.tsx
import React4 from "react";
import {observer as observer4} from "mobx-react-lite";
const Menu = () => {
  return /* @__PURE__ */ React4.createElement("div", {
    id: "moldura-navegacao-global"
  }, /* @__PURE__ */ React4.createElement("div", {
    id: "navegacao-global"
  }, /* @__PURE__ */ React4.createElement("p", null, /* @__PURE__ */ React4.createElement("span", null, /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    onClick: uiStore.handleMenu.bind(void 0, "Base")
  }, "Ver Base de Dados")), /* @__PURE__ */ React4.createElement("span", {
    title: "Baixar o sistema para uso off-line. Descompacte o arquivo CEFiTI.zip e acesse o arquivo index.html"
  }, /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    onClick: uiStore.handleMenu.bind(void 0, "Download")
  }, "Download")), /* @__PURE__ */ React4.createElement("span", {
    title: "Para salvar o resultado como PDF, utilize o navegador Chrome, e altere a impressora para 'Salvar como PDF' na página de impressão"
  }, /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    onClick: uiStore.handleMenu.bind(void 0, "Print")
  }, "Imprimir")), /* @__PURE__ */ React4.createElement("span", null, /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    onClick: uiStore.handleMenu.bind(void 0, "Nova")
  }, "NOVA CONSULTA")))));
};
var menu_default = observer4(Menu);

// package.json
var version = "5.2.27";

// src/head.tsx
import React5 from "react";
const Head = () => /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement("div", {
  id: "moldura-topo"
}, /* @__PURE__ */ React5.createElement("div", {
  id: "topo"
}, /* @__PURE__ */ React5.createElement("div", {
  id: "identificacao-ministerio"
}, /* @__PURE__ */ React5.createElement("span", null, /* @__PURE__ */ React5.createElement("div", {
  id: "imagemGov"
}, /* @__PURE__ */ React5.createElement("a", {
  href: "http://www.brasil.gov.br",
  target: "_blank",
  rel: "noopener noreferrer",
  id: "brasilgov"
})))), /* @__PURE__ */ React5.createElement("div", {
  id: "identificacao-sistema",
  style: {float: "none"}
}, /* @__PURE__ */ React5.createElement("br", null), /* @__PURE__ */ React5.createElement("div", {
  style: {float: "right", color: "#fff", padding: "5px 10px 5px 15px"}
}, /* @__PURE__ */ React5.createElement("p", null, "Versão ", version)), /* @__PURE__ */ React5.createElement("h1", null, "CEFiTI"), /* @__PURE__ */ React5.createElement("div", {
  style: {float: "right", color: "#fff", padding: "5px 10px 5px 15px"}
}, /* @__PURE__ */ React5.createElement("p", null, "Data: ", new Date().toLocaleDateString())), /* @__PURE__ */ React5.createElement("h2", null, "Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual")), /* @__PURE__ */ React5.createElement("div", {
  id: "dados-login"
}))), /* @__PURE__ */ React5.createElement(menu_default, null));

// src/botton.tsx
import React6 from "react";
const Botton = () => /* @__PURE__ */ React6.createElement("div", {
  id: "botton"
}, /* @__PURE__ */ React6.createElement("p", {
  className: "small center"
}, "As informações apresentadas não substituem o texto legal vigente, publicado em Diário Oficial da União, e referem-se a requisitos fitossanitários, não dispensando outras exigências estabelecidas em normas específicas. No caso de interceptação de praga, serão adotados os procedimentos constantes do Decreto 24.114, de 12 de abril de 1934. Quando se tratar de material de multiplicação ou propagação vegetal deverá ser observada a Legislação de Sementes e Mudas."), /* @__PURE__ */ React6.createElement("br", null), /* @__PURE__ */ React6.createElement("p", {
  className: "small red center "
}, "Em caso de dúvida, sugestão de melhoria ou de correção, entrar em contato no e-mail abaixo."), /* @__PURE__ */ React6.createElement("br", null), /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("h5", {
  className: "center"
}, "Departamento de Sanidade Vegetal - DSV/SDA/MAPA"), /* @__PURE__ */ React6.createElement("h5", {
  className: "center"
}, "Desenvolvido pelo SSV-MT -", /* @__PURE__ */ React6.createElement("a", {
  href: "mailto:ssv-mt@agricultura.gov.br"
}, "ssv-mt@agricultura.gov.br")), /* @__PURE__ */ React6.createElement("h6", {
  className: "center"
}, "Código fonte:", /* @__PURE__ */ React6.createElement("a", {
  href: "https://github.com/cefiti/cefiti"
}, "https://github.com/cefiti/cefiti"))));

// src/app.tsx
import React7 from "react";
const App = () => /* @__PURE__ */ React7.createElement("div", {
  id: "resolucao"
}, /* @__PURE__ */ React7.createElement(Head, null), /* @__PURE__ */ React7.createElement("div", {
  id: "corpo"
}, /* @__PURE__ */ React7.createElement("div", {
  id: "conteúdo"
}, /* @__PURE__ */ React7.createElement(form_default, null), /* @__PURE__ */ React7.createElement(result_default, null), /* @__PURE__ */ React7.createElement(base_default, null))), /* @__PURE__ */ React7.createElement(Botton, null));

// src/index.tsx
import React8 from "react";
import ReactDom from "react-dom";
ReactDom.render(/* @__PURE__ */ React8.createElement(App, null), document.getElementById("root"));
