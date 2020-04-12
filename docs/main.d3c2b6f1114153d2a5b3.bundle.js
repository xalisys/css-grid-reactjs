(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeClassName=args=>args.join(" ")},272:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importDefault(__webpack_require__(34));exports.GridContext=react_1.default.createContext({columnCount:0,setColumnCount:value=>{}})},274:function(module,exports,__webpack_require__){__webpack_require__(275),__webpack_require__(421),module.exports=__webpack_require__(422)},339:function(module,exports){},422:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(111),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(273);const req=__webpack_require__(629);const optionsCallback=options=>({panelExclude:[...options.panelExclude,/(Warning|exp)/]});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)((storyFn,context)=>Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_1__.withConsole)(optionsCallback)(storyFn)(context)),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach(filename=>req(filename))}),module)}.call(this,__webpack_require__(423)(module))},629:function(module,exports,__webpack_require__){var map={"./components/basic-example.story.tsx":630};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=629},630:function(module,exports,__webpack_require__){"use strict";(function(module){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var withSourceLoader=__webpack_require__(271).withSource,__STORY__=(__webpack_require__(271).addSource,'import React from "react";\nimport { storiesOf } from "@storybook/react";\nimport { HeaderRow, HeaderCell, Cell, Grid, Row } from ".."; //"css-grid-reactjs"\n\nconst BasicExample = () => {\n    const onSort = (field: string) => {\n        console.log(`onSort has been called for data-field:${field}`);\n    };\n    return (\n        <Grid>\n            <HeaderRow>\n                <HeaderCell onSort={onSort} dataField="name">\n                    Name\n                </HeaderCell>\n                <HeaderCell onSort={onSort} dataField="address">\n                    Address\n                </HeaderCell>\n                <HeaderCell onSort={onSort} dataField="city">\n                    City\n                </HeaderCell>\n                <HeaderCell dataField="state">State</HeaderCell>\n                <HeaderCell dataField="zip">Zip</HeaderCell>\n                <HeaderCell dataField="year">Year</HeaderCell>\n            </HeaderRow>\n            <Row>\n                <Cell>John Doe</Cell>\n                <Cell>23 Randolph St</Cell>\n                <Cell>San Francisco</Cell>\n                <Cell>CA</Cell>\n                <Cell>1234</Cell>\n                <Cell>2015</Cell>\n            </Row>\n            <Row>\n                <Cell>Dexter White</Cell>\n                <Cell>918 Windsor Avenue</Cell>\n                <Cell>Ashland</Cell>\n                <Cell>OH</Cell>\n                <Cell>44805</Cell>\n                <Cell>2018</Cell>\n            </Row>\n            <Row>\n                <Cell>Henrietta Burke</Cell>\n                <Cell>40 Hilldale Ave</Cell>\n                <Cell>Atlanta</Cell>\n                <Cell>GA</Cell>\n                <Cell>30303</Cell>\n                <Cell>2019</Cell>\n            </Row>\n            <Row>\n                <Cell>Mary Elliott</Cell>\n                <Cell>386 Trusel St</Cell>\n                <Cell>Newburgh</Cell>\n                <Cell>NY</Cell>\n                <Cell>12550</Cell>\n                <Cell>2017</Cell>\n            </Row>\n            <Row>\n                <Cell>Jo Freeman</Cell>\n                <Cell>8 Griffin Court</Cell>\n                <Cell>Middletown</Cell>\n                <Cell>CT</Cell>\n                <Cell>06457</Cell>\n                <Cell>2016</Cell>\n            </Row>\n        </Grid>\n    );\n};\n\nstoriesOf("Grid", module).add("Basic Example", () => <BasicExample />);\n'),__ADDS_MAP__={"grid--basic-example":{startLoc:{col:30,line:69},endLoc:{col:69,line:69},startBody:{col:47,line:69},endBody:{col:69,line:69}}};const react_1=__importDefault(__webpack_require__(34)),react_2=__webpack_require__(111),__1=__webpack_require__(633),BasicExample=()=>{const onSort=field=>{console.log("onSort has been called for data-field:"+field)};return react_1.default.createElement(__1.Grid,null,react_1.default.createElement(__1.HeaderRow,null,react_1.default.createElement(__1.HeaderCell,{onSort:onSort,dataField:"name"},"Name"),react_1.default.createElement(__1.HeaderCell,{onSort:onSort,dataField:"address"},"Address"),react_1.default.createElement(__1.HeaderCell,{onSort:onSort,dataField:"city"},"City"),react_1.default.createElement(__1.HeaderCell,{dataField:"state"},"State"),react_1.default.createElement(__1.HeaderCell,{dataField:"zip"},"Zip"),react_1.default.createElement(__1.HeaderCell,{dataField:"year"},"Year")),react_1.default.createElement(__1.Row,null,react_1.default.createElement(__1.Cell,null,"John Doe"),react_1.default.createElement(__1.Cell,null,"23 Randolph St"),react_1.default.createElement(__1.Cell,null,"San Francisco"),react_1.default.createElement(__1.Cell,null,"CA"),react_1.default.createElement(__1.Cell,null,"1234"),react_1.default.createElement(__1.Cell,null,"2015")),react_1.default.createElement(__1.Row,null,react_1.default.createElement(__1.Cell,null,"Dexter White"),react_1.default.createElement(__1.Cell,null,"918 Windsor Avenue"),react_1.default.createElement(__1.Cell,null,"Ashland"),react_1.default.createElement(__1.Cell,null,"OH"),react_1.default.createElement(__1.Cell,null,"44805"),react_1.default.createElement(__1.Cell,null,"2018")),react_1.default.createElement(__1.Row,null,react_1.default.createElement(__1.Cell,null,"Henrietta Burke"),react_1.default.createElement(__1.Cell,null,"40 Hilldale Ave"),react_1.default.createElement(__1.Cell,null,"Atlanta"),react_1.default.createElement(__1.Cell,null,"GA"),react_1.default.createElement(__1.Cell,null,"30303"),react_1.default.createElement(__1.Cell,null,"2019")),react_1.default.createElement(__1.Row,null,react_1.default.createElement(__1.Cell,null,"Mary Elliott"),react_1.default.createElement(__1.Cell,null,"386 Trusel St"),react_1.default.createElement(__1.Cell,null,"Newburgh"),react_1.default.createElement(__1.Cell,null,"NY"),react_1.default.createElement(__1.Cell,null,"12550"),react_1.default.createElement(__1.Cell,null,"2017")),react_1.default.createElement(__1.Row,null,react_1.default.createElement(__1.Cell,null,"Jo Freeman"),react_1.default.createElement(__1.Cell,null,"8 Griffin Court"),react_1.default.createElement(__1.Cell,null,"Middletown"),react_1.default.createElement(__1.Cell,null,"CT"),react_1.default.createElement(__1.Cell,null,"06457"),react_1.default.createElement(__1.Cell,null,"2016")))};react_2.storiesOf("Grid",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/basic-example.story.tsx",[],{},"/home/xalisys/projects/xalisys/css-grid-reactjs/src/components",{})).add("Basic Example",()=>react_1.default.createElement(BasicExample,null))}).call(this,__webpack_require__(62)(module))},633:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function __export(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}(__webpack_require__(634))},634:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var grid_1=__webpack_require__(635);exports.Grid=grid_1.Grid;var row_1=__webpack_require__(639);exports.HeaderRow=row_1.HeaderRow,exports.Row=row_1.Row;var cell_1=__webpack_require__(642);exports.HeaderCell=cell_1.HeaderCell,exports.Cell=cell_1.Cell,function __export(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}(__webpack_require__(645))},635:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__(34)),grid_scss_1=__importDefault(__webpack_require__(636)),context_1=__webpack_require__(272),utils_1=__webpack_require__(169);exports.Grid=props=>{const{children:children,className:className,overrideStyles:overrideStyles}=props,[columnCount,setColumnCount]=react_1.useState(0),classes=utils_1.makeClassName([grid_scss_1.default.grid,className]);return react_1.default.createElement(context_1.GridContext.Provider,{value:{columnCount:columnCount,setColumnCount:setColumnCount}},react_1.default.createElement("div",{style:overrideStyles,className:classes},children))}},636:function(module,exports,__webpack_require__){var content=__webpack_require__(637);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(168)(content,options);content.locals&&(module.exports=content.locals)},637:function(module,exports,__webpack_require__){(exports=__webpack_require__(167)(!0)).push([module.i,".src-components-grid__grid--3LFPm{display:grid;margin:0 auto;box-shadow:0 5px 15px 0 rgba(0,0,0,0.2);align-items:top;background:rgba(250,250,250,0.9);border-radius:0.5rem}\n","",{version:3,sources:["/home/xalisys/projects/xalisys/css-grid-reactjs/src/components/grid.scss"],names:[],mappings:"AAAA,kCACE,YAAa,CAEb,aAAc,CACd,uCAA2C,CAC3C,eAAgB,CAChB,gCAAwB,CACxB,oBAAqB",file:"grid.scss",sourcesContent:[".grid {\n  display: grid;\n  //justify-content: stretch;\n  margin: 0 auto;\n  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.2);\n  align-items: top;\n  background: rgba(#fafafa, 0.9);\n  border-radius: 0.5rem;\n}\n"]}]),exports.locals={grid:"src-components-grid__grid--3LFPm"},module.exports=exports},639:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__(34)),row_scss_1=__importDefault(__webpack_require__(640)),context_1=__webpack_require__(272),utils_1=__webpack_require__(169);exports.HeaderRow=props=>{const{className:className,children:children,overrideStyles:overrideStyles}=props,context=react_1.useContext(context_1.GridContext),classes=`${row_scss_1.default.headerRow} ${className||""} `;return react_1.useEffect(()=>{context.setColumnCount(react_1.default.Children.count(children))},[children]),react_1.default.createElement(exports.Row,{overrideStyles:overrideStyles,className:classes},children)},exports.Row=props=>{const{className:className,children:children,overrideStyles:overrideStyles}=props,context=react_1.useContext(context_1.GridContext),columnsClass=row_scss_1.default["columns-"+context.columnCount],classes=utils_1.makeClassName([row_scss_1.default.row,columnsClass,className]);return react_1.default.createElement("div",{style:overrideStyles,className:classes},children)}},640:function(module,exports,__webpack_require__){var content=__webpack_require__(641);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(168)(content,options);content.locals&&(module.exports=content.locals)},641:function(module,exports,__webpack_require__){(exports=__webpack_require__(167)(!0)).push([module.i,".src-components-row__row--3oc8z{display:grid}.src-components-row__row--3oc8z:not(:last-child){border-bottom:1px solid #ddd}.src-components-row__header-row--Qzu4n{border-radius:0.5rem 0.5rem 0 0;background:rgba(204,204,204,0.5);font-weight:bold}.src-components-row__columns-1--2hVho{grid-template-columns:repeat(1, 1fr)}.src-components-row__columns-2--2v7_o{grid-template-columns:repeat(2, 1fr)}.src-components-row__columns-3--AFoWK{grid-template-columns:repeat(3, 1fr)}.src-components-row__columns-4--55mNi{grid-template-columns:repeat(4, 1fr)}.src-components-row__columns-5--FaBHU{grid-template-columns:repeat(5, 1fr)}.src-components-row__columns-6--34rxE{grid-template-columns:repeat(6, 1fr)}.src-components-row__columns-7--1yzkF{grid-template-columns:repeat(7, 1fr)}.src-components-row__columns-8--3blmY{grid-template-columns:repeat(8, 1fr)}.src-components-row__columns-9--3RIDs{grid-template-columns:repeat(9, 1fr)}.src-components-row__columns-10--2G9qE{grid-template-columns:repeat(10, 1fr)}.src-components-row__columns-11--1a7Ch{grid-template-columns:repeat(11, 1fr)}.src-components-row__columns-12--39Zuw{grid-template-columns:repeat(12, 1fr)}.src-components-row__columns-13--2I0Q6{grid-template-columns:repeat(13, 1fr)}.src-components-row__columns-14--250_j{grid-template-columns:repeat(14, 1fr)}.src-components-row__columns-15--cTZmC{grid-template-columns:repeat(15, 1fr)}.src-components-row__columns-16--2xTBV{grid-template-columns:repeat(16, 1fr)}.src-components-row__columns-17--3jD83{grid-template-columns:repeat(17, 1fr)}.src-components-row__columns-18--36jPw{grid-template-columns:repeat(18, 1fr)}.src-components-row__columns-19--hDfe-{grid-template-columns:repeat(19, 1fr)}.src-components-row__columns-20--2hZut{grid-template-columns:repeat(20, 1fr)}.src-components-row__columns-21--sJeJp{grid-template-columns:repeat(21, 1fr)}.src-components-row__columns-22--1MxKo{grid-template-columns:repeat(22, 1fr)}.src-components-row__columns-23--zuZ8W{grid-template-columns:repeat(23, 1fr)}.src-components-row__columns-24--2y4g_{grid-template-columns:repeat(24, 1fr)}.src-components-row__columns-25--1V9I3{grid-template-columns:repeat(25, 1fr)}\n","",{version:3,sources:["/home/xalisys/projects/xalisys/css-grid-reactjs/src/components/row.scss"],names:[],mappings:"AAAA,gCACE,YAAa,CADf,iDAII,4BAA6B,CAC9B,uCAID,+BAAgC,CAChC,gCAAqB,CACrB,gBAAiB,CAClB,sCAIC,oCAAqC,CACtC,sCAEC,oCAAqC,CACtC,sCAGC,oCAAqC,CACtC,sCAGC,oCAAqC,CACtC,sCAGC,oCAAqC,CACtC,sCAGC,oCAAqC,CACtC,sCAGC,oCAAqC,CACtC,sCAEC,oCAAqC,CACtC,sCAGC,oCAAqC,CACtC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC,CACvC,uCAGC,qCAAsC",file:"row.scss",sourcesContent:[".row {\n  display: grid;\n\n  &:not(:last-child) {\n    border-bottom: 1px solid #ddd;\n  }\n}\n\n.header-row {\n  border-radius: 0.5rem 0.5rem 0 0;\n  background: rgba(#ccc, 0.5);\n  font-weight: bold;\n}\n\n//Columns\n.columns-1 {\n  grid-template-columns: repeat(1, 1fr);\n}\n.columns-2 {\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.columns-3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.columns-4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.columns-5 {\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.columns-6 {\n  grid-template-columns: repeat(6, 1fr);\n}\n\n.columns-7 {\n  grid-template-columns: repeat(7, 1fr);\n}\n.columns-8 {\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.columns-9 {\n  grid-template-columns: repeat(9, 1fr);\n}\n\n.columns-10 {\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.columns-11 {\n  grid-template-columns: repeat(11, 1fr);\n}\n\n.columns-12 {\n  grid-template-columns: repeat(12, 1fr);\n}\n\n.columns-13 {\n  grid-template-columns: repeat(13, 1fr);\n}\n\n.columns-14 {\n  grid-template-columns: repeat(14, 1fr);\n}\n\n.columns-15 {\n  grid-template-columns: repeat(15, 1fr);\n}\n\n.columns-16 {\n  grid-template-columns: repeat(16, 1fr);\n}\n\n.columns-17 {\n  grid-template-columns: repeat(17, 1fr);\n}\n\n.columns-18 {\n  grid-template-columns: repeat(18, 1fr);\n}\n\n.columns-19 {\n  grid-template-columns: repeat(19, 1fr);\n}\n\n.columns-20 {\n  grid-template-columns: repeat(20, 1fr);\n}\n\n.columns-21 {\n  grid-template-columns: repeat(21, 1fr);\n}\n\n.columns-22 {\n  grid-template-columns: repeat(22, 1fr);\n}\n\n.columns-23 {\n  grid-template-columns: repeat(23, 1fr);\n}\n\n.columns-24 {\n  grid-template-columns: repeat(24, 1fr);\n}\n\n.columns-25 {\n  grid-template-columns: repeat(25, 1fr);\n}\n"]}]),exports.locals={row:"src-components-row__row--3oc8z","header-row":"src-components-row__header-row--Qzu4n",headerRow:"src-components-row__header-row--Qzu4n","columns-1":"src-components-row__columns-1--2hVho",columns1:"src-components-row__columns-1--2hVho","columns-2":"src-components-row__columns-2--2v7_o",columns2:"src-components-row__columns-2--2v7_o","columns-3":"src-components-row__columns-3--AFoWK",columns3:"src-components-row__columns-3--AFoWK","columns-4":"src-components-row__columns-4--55mNi",columns4:"src-components-row__columns-4--55mNi","columns-5":"src-components-row__columns-5--FaBHU",columns5:"src-components-row__columns-5--FaBHU","columns-6":"src-components-row__columns-6--34rxE",columns6:"src-components-row__columns-6--34rxE","columns-7":"src-components-row__columns-7--1yzkF",columns7:"src-components-row__columns-7--1yzkF","columns-8":"src-components-row__columns-8--3blmY",columns8:"src-components-row__columns-8--3blmY","columns-9":"src-components-row__columns-9--3RIDs",columns9:"src-components-row__columns-9--3RIDs","columns-10":"src-components-row__columns-10--2G9qE",columns10:"src-components-row__columns-10--2G9qE","columns-11":"src-components-row__columns-11--1a7Ch",columns11:"src-components-row__columns-11--1a7Ch","columns-12":"src-components-row__columns-12--39Zuw",columns12:"src-components-row__columns-12--39Zuw","columns-13":"src-components-row__columns-13--2I0Q6",columns13:"src-components-row__columns-13--2I0Q6","columns-14":"src-components-row__columns-14--250_j",columns14:"src-components-row__columns-14--250_j","columns-15":"src-components-row__columns-15--cTZmC",columns15:"src-components-row__columns-15--cTZmC","columns-16":"src-components-row__columns-16--2xTBV",columns16:"src-components-row__columns-16--2xTBV","columns-17":"src-components-row__columns-17--3jD83",columns17:"src-components-row__columns-17--3jD83","columns-18":"src-components-row__columns-18--36jPw",columns18:"src-components-row__columns-18--36jPw","columns-19":"src-components-row__columns-19--hDfe-",columns19:"src-components-row__columns-19--hDfe-","columns-20":"src-components-row__columns-20--2hZut",columns20:"src-components-row__columns-20--2hZut","columns-21":"src-components-row__columns-21--sJeJp",columns21:"src-components-row__columns-21--sJeJp","columns-22":"src-components-row__columns-22--1MxKo",columns22:"src-components-row__columns-22--1MxKo","columns-23":"src-components-row__columns-23--zuZ8W",columns23:"src-components-row__columns-23--zuZ8W","columns-24":"src-components-row__columns-24--2y4g_",columns24:"src-components-row__columns-24--2y4g_","columns-25":"src-components-row__columns-25--1V9I3",columns25:"src-components-row__columns-25--1V9I3"},module.exports=exports},642:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const react_1=__importStar(__webpack_require__(34)),cell_scss_1=__importDefault(__webpack_require__(643)),utils_1=__webpack_require__(169);exports.Cell=props=>{const{className:className,children:children,overrideStyles:overrideStyles}=props,classes=utils_1.makeClassName([cell_scss_1.default.cell,className]);return react_1.default.createElement("div",{style:overrideStyles,className:classes},children)},exports.HeaderCell=props=>{const{overrideStyles:overrideStyles,onSort:onSort,className:className,children:children,dataField:dataField}=props,sortable=onSort?cell_scss_1.default.sortable:null,classes=utils_1.makeClassName([cell_scss_1.default.cell,cell_scss_1.default.headerCell,className,sortable]),onClick=react_1.useCallback(e=>{sortable&&onSort(dataField)},[sortable]);return react_1.default.createElement("div",{style:overrideStyles,onClick:onClick,className:classes},children)}},643:function(module,exports,__webpack_require__){var content=__webpack_require__(644);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(168)(content,options);content.locals&&(module.exports=content.locals)},644:function(module,exports,__webpack_require__){(exports=__webpack_require__(167)(!0)).push([module.i,".src-components-cell__cell--kXRWD{padding:1rem;word-break:break-word}.src-components-cell__cell--kXRWD:not(:last-child){border-right:1px solid #ddd}.src-components-cell__header-cell--3J2_w:not(:last-child){border-right:1px solid #ddcfcf}.src-components-cell__sortable--3GpNS{cursor:pointer}\n","",{version:3,sources:["/home/xalisys/projects/xalisys/css-grid-reactjs/src/components/cell.scss"],names:[],mappings:"AAAA,kCACE,YAAa,CACb,qBAAsB,CAFxB,mDAII,2BAA4B,CAC7B,0DAKC,8BAA+B,CAChC,sCAID,cAAe",file:"cell.scss",sourcesContent:[".cell {\n  padding: 1rem;\n  word-break: break-word;\n  &:not(:last-child) {\n    border-right: 1px solid #ddd;\n  }\n}\n\n.header-cell {\n  &:not(:last-child) {\n    border-right: 1px solid #ddcfcf;\n  }\n}\n\n.sortable {\n  cursor: pointer;\n}\n"]}]),exports.locals={cell:"src-components-cell__cell--kXRWD","header-cell":"src-components-cell__header-cell--3J2_w",headerCell:"src-components-cell__header-cell--3J2_w",sortable:"src-components-cell__sortable--3GpNS"},module.exports=exports},645:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0})}},[[274,1,2]]]);
//# sourceMappingURL=main.d3c2b6f1114153d2a5b3.bundle.js.map