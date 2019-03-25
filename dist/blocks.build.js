!function(e){function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);n.n(o),n(2),n(4),n(6),n(10),n(13)},function(e,t){var n=wp.blocks.updateCategory,o=wp.components,l=o.Path,r=o.SVG;n("bootstrap-blocks",{icon:wp.element.createElement(r,{viewBox:"0 0 612 612",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement(l,{fill:"#563D7C",d:"M612 510c0 56.1-45.9 102-102 102H102C45.9 612 0 566.1 0 510V102C0 45.9 45.9 0 102 0h408c56.1 0 102 45.9 102 102v408z"}),wp.element.createElement(l,{fill:"#FFF",d:"M166.3 133h173.5c32 0 57.7 7.3 77 22s29 36.8 29 66.5c0 18-4.4 33.4-13.2 46.2-8.8 12.8-21.4 22.8-37.8 29.8v1c22 4.7 38.7 15.1 50 31.2 11.3 16.2 17 36.4 17 60.8 0 14-2.5 27.1-7.5 39.2-5 12.2-12.8 22.7-23.5 31.5s-24.3 15.8-41 21-36.5 7.8-59.5 7.8h-164V133zm62.5 149.5h102c15 0 27.5-4.2 37.5-12.8s15-20.8 15-36.8c0-18-4.5-30.7-13.5-38s-22-11-39-11h-102v98.6zm0 156.5h110.5c19 0 33.8-4.9 44.2-14.8 10.5-9.8 15.8-23.8 15.8-41.8 0-17.7-5.2-31.2-15.8-40.8s-25.2-14.2-44.2-14.2H228.8V439z"}))})},function(e,t,n){"use strict";var o=n(3),l=(n.n(o),wp.blocks.registerBlockType),r=wp.editor,a=r.RichText,s=r.InspectorControls,c=r.BlockControls,i=r.AlignmentToolbar,p=wp.components,u=p.SelectControl,m=p.PanelBody,b=p.ToggleControl,w=wp.i18n.__;l("bootstrap-blocks/alert",{title:w("Alert"),icon:"info",category:"bootstrap-blocks",keywords:[w("Alert"),w("Notice"),w("Warning")],attributes:{text:{type:"string"},style:{type:"string"},dismissible:{type:"boolean"},alignment:{type:"string"}},getEditWrapperProps:function(e){return{"data-alignment":e.alignment}},edit:function(e){var t=e.attributes,n=e.setAttributes,o=t.alignment,l=t.dismissible,r=t.style,p=t.text,f=[{label:w("Primary"),value:"primary"},{label:w("Secondary"),value:"secondary"},{label:w("Success"),value:"success"},{label:w("Warning"),value:"warning "},{label:w("Danger"),value:"danger"},{label:w("Info"),value:"info"},{label:w("Light"),value:"light"},{label:w("Dark"),value:"dark"}];return wp.element.createElement("div",null,wp.element.createElement("div",{className:"alert alert-"+(r||"primary")+(l?" alert-dismissible":"")},wp.element.createElement(a,{placeholder:w("Add them text\u2026"),value:p,onChange:function(e){return n({text:e})},formattingControls:["bold","italic","strikethrough","link"],keepPlaceholderOnFocus:!0}),l&&wp.element.createElement("button",{type:"button",className:"close alert__close--editor"},wp.element.createElement("span",{"aria-hidden":"true"},"\xd7"))),wp.element.createElement(c,null,wp.element.createElement(i,{value:o,onChange:function(e){return n({alignment:e})}})),wp.element.createElement(s,null,wp.element.createElement(m,{title:w("Optionen")},wp.element.createElement(u,{label:w("Kontext"),value:r,options:f,onChange:function(e){return n({style:e})}}),wp.element.createElement(b,{label:w("Ausblendbar"),help:l?"Alert kann via Klick auf x ausgeblendet werden":"Alert kann nicht ausgeblendet werden",checked:l,onChange:function(e){return n({dismissible:e})}}))))},save:function(){return null}})},function(e,t){},function(e,t,n){"use strict";var o=n(5),l=(n.n(o),wp.i18n.__),r=wp.blocks.registerBlockType,a=wp.editor,s=a.InnerBlocks,c=a.InspectorControls,i=wp.components,p=i.SelectControl,u=i.CheckboxControl,m=i.PanelBody,b=wp.element.Fragment,w=wp.hooks.applyFilters,f=w("bootstrapBlocks.container.useFluidContainerPerDefault",!0),d=[{label:l("Small","bootstrap-blocks"),value:"mb-2"},{label:l("Medium","bootstrap-blocks"),value:"mb-3"},{label:l("Large","bootstrap-blocks"),value:"mb-5"}];d=w("bootstrapBlocks.container.customMarginOptions",d);var k=[{label:l("None","bootstrap-blocks"),value:"mb-0"}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(d));r("bootstrap-blocks/container",{title:l("Container","bootstrap-blocks"),icon:"feedback",category:"bootstrap-blocks",keywords:[l("Bootstrap Blocks","bootstrap-blocks"),l("Bootstrap","bootstrap-blocks"),l("Container","bootstrap-blocks")],supports:{align:!1},attributes:{isFluid:{type:"boolean"},marginAfter:{type:"string",default:k[0].value}},edit:function(e){var t=e.className,n=e.attributes,o=e.setAttributes,r=n.isFluid,a=n.marginAfter;return void 0===r&&o({isFluid:f}),wp.element.createElement(b,null,wp.element.createElement(c,null,wp.element.createElement(m,null,wp.element.createElement(u,{label:l("Fluid","bootstrap-blocks"),checked:r,onChange:function(e){o({isFluid:e})}}),wp.element.createElement(p,{label:l("Margin After","bootstrap-blocks"),value:a,options:k,onChange:function(e){o({marginAfter:e})}}))),wp.element.createElement("div",{className:t},wp.element.createElement(s,null)))},save:function(){return wp.element.createElement(s.Content,null)}})},function(e,t){},function(e,t,n){"use strict";var o=n(7),l=wp.i18n.__,r=wp.blocks.registerBlockType,a=wp.editor.InnerBlocks;r("bootstrap-blocks/column",{title:l("Column","bootstrap-blocks"),icon:"menu",category:"bootstrap-blocks",keywords:[l("Bootstrap Blocks","bootstrap-blocks"),l("Bootstrap","bootstrap-blocks"),l("Column","bootstrap-blocks")],parent:["bootstrap-blocks/row"],attributes:{sizeXl:{type:"integer",default:0},sizeLg:{type:"integer",default:0},sizeMd:{type:"integer",default:0},sizeSm:{type:"integer",default:0},sizeXs:{type:"integer",default:12}},getEditWrapperProps:function(e){var t=e.sizeXl,n=e.sizeLg,o=e.sizeMd,l=e.sizeSm;return{"data-size-xs":e.sizeXs,"data-size-sm":l,"data-size-md":o,"data-size-lg":n,"data-size-xl":t}},edit:o.a,save:function(){return wp.element.createElement(a.Content,null)}})},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n(8),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=wp.i18n.__,p=wp.editor,u=p.InnerBlocks,m=p.InspectorControls,b=wp.components,w=b.PanelBody,f=b.RangeControl,d=wp.element,k=d.Component,g=d.Fragment,v=wp.compose.compose,y=function(e){var t=e.label,n=e.attributeName,o=e.value,l=e.setAttributes;return wp.element.createElement(f,{label:t,value:o,onChange:function(e){l(a({},n,e))},min:0,max:12})},h=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.className,o=e.setAttributes,l=t.sizeXl,r=t.sizeLg,a=t.sizeMd,s=t.sizeSm,c=t.sizeXs;return wp.element.createElement(g,null,wp.element.createElement(m,null,wp.element.createElement(w,null,wp.element.createElement(y,{label:i("Xl Columns","bootstrap-blocks"),attributeName:"sizeXl",value:l,setAttributes:o}),wp.element.createElement(y,{label:i("Lg Columns","bootstrap-blocks"),attributeName:"sizeLg",value:r,setAttributes:o}),wp.element.createElement(y,{label:i("Md Columns","bootstrap-blocks"),attributeName:"sizeMd",value:a,setAttributes:o}),wp.element.createElement(y,{label:i("Sm Columns","bootstrap-blocks"),attributeName:"sizeSm",value:s,setAttributes:o}),wp.element.createElement(y,{label:i("Xs Columns","bootstrap-blocks"),attributeName:"sizeXs",value:c,setAttributes:o}))),wp.element.createElement("div",{className:n},wp.element.createElement(u,{templateLock:!1})))}}]),t}(k);t.a=v(Object(s.a)(function(e){return{clientId:e.clientId}}))(h)},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(9),l=(n.n(o),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),r=wp.element.createContext,a=wp.compose.createHigherOrderComponent,s=r({name:"",isSelected:!1,focusedElement:null,setFocusedElement:o.noop,clientId:null}),c=s.Consumer,i=function(e){return a(function(t){return function(n){return wp.element.createElement(c,null,function(o){return wp.element.createElement(t,l({},n,e(o,n)))})}},"withBlockEditContext")}},function(e,t){e.exports=lodash},function(e,t,n){"use strict";var o=n(11),l=(n.n(o),n(12)),r=(n.n(l),wp.i18n.__),a=wp.blocks.registerBlockType,s=wp.editor,c=s.InnerBlocks,i=s.InspectorControls,p=s.BlockControls,u=s.AlignmentToolbar,m=wp.components,b=m.SelectControl,w=m.CheckboxControl,f=m.PanelBody,d=m.Path,k=m.SVG,g=wp.element.Fragment,v=wp.data,y=v.dispatch,h=v.select,C=wp.hooks.applyFilters,E=["bootstrap-blocks/column"],z={"1-1":{label:r("2 Columns (1:1)","bootstrap-blocks"),templateLock:"all",blocks:[["bootstrap-blocks/column",{sizeMd:6}],["bootstrap-blocks/column",{sizeMd:6}]]},"1-2":{label:r("2 Columns (1:2)","bootstrap-blocks"),templateLock:"all",blocks:[["bootstrap-blocks/column",{sizeMd:4}],["bootstrap-blocks/column",{sizeMd:8}]]},"2-1":{label:r("2 Columns (2:1)","bootstrap-blocks"),templateLock:"all",blocks:[["bootstrap-blocks/column",{sizeMd:8}],["bootstrap-blocks/column",{sizeMd:4}]]},"1-1-1":{label:r("3 Columns (1:1:1)","bootstrap-blocks"),templateLock:"all",blocks:[["bootstrap-blocks/column",{sizeMd:4}],["bootstrap-blocks/column",{sizeMd:4}],["bootstrap-blocks/column",{sizeMd:4}]]}};z=C("bootstrapBlocks.bootstrapRowTemplates",z),C("bootstrapBlocks.enableCustomTemplate",!0)&&(z.custom={label:r("Custom","bootstrap-blocks"),templateLock:!1,blocks:[["bootstrap-blocks/column"]]});var B=function(e){return z[e]?z[e].blocks:[]},A=function(e){return!!z[e]&&z[e].templateLock};a("bootstrap-blocks/row",{title:r("Row","bootstrap-blocks"),icon:"layout",category:"bootstrap-blocks",keywords:[r("Bootstrap Blocks","bootstrap-blocks"),r("Bootstrap","bootstrap-blocks"),r("Row","bootstrap-blocks")],supports:{align:["full"]},attributes:{template:{type:"string",default:Object.keys(z)[0]},noGutters:{type:"boolean",default:!1},alignment:{type:"string"},verticalAlignment:{type:"string"}},getEditWrapperProps:function(e){return{"data-alignment":e.alignment,"data-vertical-alignment":e.verticalAlignment}},edit:function(e){var t=e.className,n=e.attributes,o=e.setAttributes,l=e.clientId,a=n.template,s=n.noGutters,m=n.alignment,v=n.verticalAlignment,C=[];Object.keys(z).forEach(function(e){C.push({label:z[e].label,value:e})});var x=function(e){h("core/editor").getBlocksByClientId(l)[0].innerBlocks.forEach(function(t,n){if(z[e]&&z[e].blocks.length>n){var o=z[e].blocks[n][1];y("core/editor").updateBlockAttributes(t.clientId,o)}}),o({template:e})},_=function(e){o({noGutters:e})},M=[{icon:wp.element.createElement(k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60"},wp.element.createElement(d,{d:"M51.542,9.5H36.458C34.551,9.5,33,11.051,33,12.958v29.083c0,1.907,1.551,3.458,3.458,3.458h15.083 c1.907,0,3.458-1.551,3.458-3.458V12.958C55,11.051,53.449,9.5,51.542,9.5z M53,13.5v6v6v6v6v4.542 c0,0.804-0.654,1.458-1.458,1.458H36.458C35.654,43.5,35,42.846,35,42.042V12.958c0-0.804,0.654-1.458,1.458-1.458h15.083 c0.804,0,1.458,0.654,1.458,1.458V13.5z"}),wp.element.createElement(d,{d:"M23.542,9.5H8.458C6.551,9.5,5,11.051,5,12.958v39.083C5,53.949,6.551,55.5,8.458,55.5h15.083 c1.907,0,3.458-1.551,3.458-3.458V12.958C27,11.051,25.449,9.5,23.542,9.5z"}),wp.element.createElement(d,{d:"M59,4.5H1c-0.552,0-1,0.448-1,1s0.448,1,1,1h58c0.552,0,1-0.448,1-1S59.552,4.5,59,4.5z"})),title:r("Align top","bootstrap-blocks"),align:"top"},{icon:wp.element.createElement(k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60"},wp.element.createElement(d,{d:"M59,29h-4V15.458C55,13.551,53.448,12,51.541,12H36.458C34.551,12,33,13.551,33,15.458V29h-6V10.458 C27,8.551,25.449,7,23.542,7H8.458C6.551,7,5,8.551,5,10.458V29H1c-0.552,0-1,0.448-1,1s0.448,1,1,1h4v18.542 C5,51.449,6.551,53,8.458,53h15.083C25.449,53,27,51.449,27,49.542V31h6v13.542C33,46.449,34.551,48,36.458,48h15.083 C53.449,48,55,46.449,55,44.542V31h4c0.553,0,1-0.448,1-1S59.553,29,59,29z M53,34v6v4.542C53,45.346,52.346,46,51.542,46H36.458 C35.654,46,35,45.346,35,44.542V15.458C35,14.654,35.654,14,36.458,14h15.083C52.346,14,53,14.654,53,15.458V16v6v6V34z"})),title:r("Align center","bootstrap-blocks"),align:"center"},{icon:wp.element.createElement(k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60"},wp.element.createElement(d,{d:"M36.458,50.5L36.458,50.5h15.083h0.001c1.669,0,3.065-1.188,3.388-2.762C54.976,47.513,55,47.28,55,47.042V17.958 c0-1.907-1.551-3.458-3.458-3.458H36.459C34.552,14.5,33,16.051,33,17.958v29.083c0,0.238,0.024,0.471,0.07,0.696 C33.393,49.312,34.789,50.5,36.458,50.5z M35,17.958c0-0.804,0.654-1.458,1.459-1.458h15.083c0.804,0,1.458,0.654,1.458,1.458V18.5 v6v6v6v6v4.542c0,0.201-0.041,0.393-0.115,0.567c-0.222,0.523-0.741,0.891-1.344,0.891H36.459c-0.604,0-1.122-0.368-1.344-0.891 C35.041,47.434,35,47.243,35,47.042V17.958z"}),wp.element.createElement(d,{d:"M8.458,50.5h15.083c1.907,0,3.459-1.551,3.459-3.458V7.958C27,6.051,25.449,4.5,23.542,4.5H8.459 C6.552,4.5,5,6.051,5,7.958v39.083C5,48.949,6.551,50.5,8.458,50.5z"}),wp.element.createElement(d,{d:"M59,53.5H1c-0.553,0-1,0.448-1,1s0.447,1,1,1h58c0.553,0,1-0.448,1-1S59.553,53.5,59,53.5z"})),title:r("Align bottom","bootstrap-blocks"),align:"bottom"}];return wp.element.createElement(g,null,wp.element.createElement(i,null,wp.element.createElement(f,null,wp.element.createElement(b,{label:r("Template","bootstrap-blocks"),value:a,options:C,onChange:function(e){x(e)}}),wp.element.createElement(w,{label:r("No Gutters","bootstrap-blocks"),checked:s,onChange:function(e){_(e)}}))),wp.element.createElement(p,null,wp.element.createElement(u,{value:m,onChange:function(e){return o({alignment:e})}}),wp.element.createElement(u,{value:v,onChange:function(e){return o({verticalAlignment:e})},alignmentControls:M})),wp.element.createElement("div",{className:t},wp.element.createElement(c,{allowedBlocks:E,template:B(a),templateLock:A(a)})))},save:function(){return wp.element.createElement(c.Content,null)}})},function(e,t){},function(e,t){},function(e,t,n){"use strict";var o=n(14),l=(n.n(o),n(15)),r=wp.i18n.__,a=wp.blocks.registerBlockType,s=wp.components,c=s.G,i=s.Path,p=s.SVG;a("bootstrap-blocks/button",{title:r("Button","bootstrap-blocks"),icon:wp.element.createElement(p,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement(i,{fill:"none",d:"M0 0h24v24H0V0z"}),wp.element.createElement(c,null,wp.element.createElement(i,{d:"M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"}))),category:"bootstrap-blocks",keywords:[r("Bootstrap Blocks","bootstrap-blocks"),r("Bootstrap","bootstrap-blocks"),r("Button","bootstrap-blocks")],attributes:{url:{type:"string"},text:{type:"string"},style:{type:"string"},alignment:{type:"string"}},getEditWrapperProps:function(e){return{"data-alignment":e.alignment}},edit:l.a,save:function(){return null}})},function(e,t){},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=wp.i18n.__,c=wp.element,i=c.Component,p=c.Fragment,u=wp.editor,m=u.RichText,b=u.URLInput,w=u.InspectorControls,f=u.BlockControls,d=u.AlignmentToolbar,k=wp.components,g=k.Dashicon,v=k.IconButton,y=k.SelectControl,h=k.PanelBody,C=wp.hooks.applyFilters,E=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.className,o=e.setAttributes,l=e.isSelected,r=t.url,a=t.text,c=t.style,i=t.alignment,u=[{label:s("Primary","bootstrap-blocks"),value:"primary"},{label:s("Secondary","bootstrap-blocks"),value:"secondary"}];return u=C("bootstrapBlocks.buttonStyleOptions",u),wp.element.createElement(p,null,wp.element.createElement("div",{className:n,"data-alignment":i},wp.element.createElement(m,{placeholder:s("Add text\u2026"),value:a,onChange:function(e){return o({text:e})},formattingControls:[],keepPlaceholderOnFocus:!0}),wp.element.createElement(w,null,wp.element.createElement(h,null,wp.element.createElement(y,{label:s("Style","bootstrap-blocks"),value:c,options:u,onChange:function(e){o({style:e})}}))),wp.element.createElement(f,null,wp.element.createElement(d,{value:i,onChange:function(e){return o({alignment:e})}}))),l&&wp.element.createElement("form",{className:"wp-block-bootstrap-blocks-button-link",onSubmit:function(e){return e.preventDefault()}},wp.element.createElement(g,{icon:"admin-links"}),wp.element.createElement(b,{value:r,onChange:function(e){return o({url:e})}}),wp.element.createElement(v,{icon:"editor-break",label:s("Apply"),type:"submit"})))}}]),t}(i);t.a=E}]);