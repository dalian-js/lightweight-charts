"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34945"],{89220:function(i,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"plugins/pixel-perfect-rendering/widths/crosshair","title":"Crosshair and Grid Line Width Calculations","description":"Describes the calculation for the crosshair line and grid line widths","source":"@site/versioned_docs/version-5.0/plugins/pixel-perfect-rendering/widths/crosshair.md","sourceDirName":"plugins/pixel-perfect-rendering/widths","slug":"/plugins/pixel-perfect-rendering/widths/crosshair","permalink":"/lightweight-charts/docs/plugins/pixel-perfect-rendering/widths/crosshair","draft":false,"unlisted":false,"tags":[],"version":"5.0","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"sidebar_label":"Crosshair","pagination_title":"Crosshair Widths","title":"Crosshair and Grid Line Width Calculations","description":"Describes the calculation for the crosshair line and grid line widths","keywords":["plugins","extensions","rendering","canvas","bitmap","media","pixels","crosshair","grid","line","width"]},"sidebar":"docsSidebar","previous":{"title":"Columns","permalink":"/lightweight-charts/docs/plugins/pixel-perfect-rendering/widths/columns"},"next":{"title":"Full Bar Width","permalink":"/lightweight-charts/docs/plugins/pixel-perfect-rendering/widths/full-bar-width"}}'),t=n("85893"),s=n("50065");let a={sidebar_position:0,sidebar_label:"Crosshair",pagination_title:"Crosshair Widths",title:"Crosshair and Grid Line Width Calculations",description:"Describes the calculation for the crosshair line and grid line widths",keywords:["plugins","extensions","rendering","canvas","bitmap","media","pixels","crosshair","grid","line","width"]},o=void 0,l={},d=[];function c(i){let e={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.a)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsxs)(e.p,{children:["It is recommend that you first read the ",(0,t.jsx)(e.a,{href:"/lightweight-charts/docs/plugins/pixel-perfect-rendering/",children:"Pixel Perfect Rendering"})," page."]})}),"\n",(0,t.jsx)(e.p,{children:"The following functions can be used to get the calculated width that the library would use for a crosshair or grid line at a specific device pixel ratio."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-typescript",children:"/**\n * Default grid / crosshair line width in Bitmap sizing\n * @param horizontalPixelRatio - horizontal pixel ratio\n * @returns default grid / crosshair line width in Bitmap sizing\n */\nexport function gridAndCrosshairBitmapWidth(\n    horizontalPixelRatio: number\n): number {\n    return Math.max(1, Math.floor(horizontalPixelRatio));\n}\n\n/**\n * Default grid / crosshair line width in Media sizing\n * @param horizontalPixelRatio - horizontal pixel ratio\n * @returns default grid / crosshair line width in Media sizing\n */\nexport function gridAndCrosshairMediaWidth(\n    horizontalPixelRatio: number\n): number {\n    return (\n        gridAndCrosshairBitmapWidth(horizontalPixelRatio) / horizontalPixelRatio\n    );\n}\n\n"})})]})}function h(i={}){let{wrapper:e}={...(0,s.a)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(c,{...i})}):c(i)}},50065:function(i,e,n){n.d(e,{Z:function(){return o},a:function(){return a}});var r=n(67294);let t={},s=r.createContext(t);function a(i){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof i?i(e):{...e,...i}},[e,i])}function o(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:a(i.components),r.createElement(s.Provider,{value:e},i.children)}}}]);