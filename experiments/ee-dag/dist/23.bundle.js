var _0x141c=["^\\s*\x3c!--\\s*#endregion\\b.*--\x3e","metatag","@doctype","comment","delimiter","tag","@script","@style","@otherTag","metatag.content","@pop","comment.content","attribute.value","attribute.name","@scriptAfterType","@scriptEmbedded","text/javascript","@scriptAfterTypeEquals","@scriptWithCustomType.$1","@rematch","@scriptEmbedded.$S2","@styleAfterType","text/css","@styleAfterTypeEquals","@styleEmbedded","@styleWithCustomType.$1","$S2","webpackJsonp","push","conf","monaco","area","col","embed","img","input","link","menuitem","meta","param","source","track","wbr","\x3c!--","--\x3e","join","))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","IndentAction","IndentOutdent","<(?!(?:","))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","languages","Indent","^\\s*\x3c!--\\s*#region\\b.*--\x3e"];!function(e,x){!function(x){for(;--x;)e.push(e.shift())}(++x)}(_0x141c,459);var _0xbe59=function(e,x){return _0x141c[e-=0]};(self[_0xbe59("0x0")]=self[_0xbe59("0x0")]||[])[_0xbe59("0x1")]([[23],{215:function(e,x,t){"use strict";t.r(x),t.d(x,_0xbe59("0x2"),function(){return _}),t.d(x,"language",function(){return o});var b="undefined"==typeof monaco?self[_0xbe59("0x3")]:monaco,n=[_0xbe59("0x4"),"base","br",_0xbe59("0x5"),_0xbe59("0x6"),"hr",_0xbe59("0x7"),_0xbe59("0x8"),"keygen",_0xbe59("0x9"),_0xbe59("0xa"),_0xbe59("0xb"),_0xbe59("0xc"),_0xbe59("0xd"),_0xbe59("0xe"),_0xbe59("0xf")],_={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,comments:{blockComment:[_0xbe59("0x10"),"--\x3e"]},brackets:[["\x3c!--",_0xbe59("0x11")],["<",">"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],onEnterRules:[{beforeText:new RegExp("<(?!(?:"+n[_0xbe59("0x12")]("|")+_0xbe59("0x13"),"i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:b.languages[_0xbe59("0x14")][_0xbe59("0x15")]}},{beforeText:new RegExp(_0xbe59("0x16")+n[_0xbe59("0x12")]("|")+_0xbe59("0x17"),"i"),action:{indentAction:b[_0xbe59("0x18")][_0xbe59("0x14")][_0xbe59("0x19")]}}],folding:{markers:{start:new RegExp(_0xbe59("0x1a")),end:new RegExp(_0xbe59("0x1b"))}}},o={defaultToken:"",tokenPostfix:".html",ignoreCase:!0,tokenizer:{root:[[/<!DOCTYPE/,_0xbe59("0x1c"),_0xbe59("0x1d")],[/<!--/,_0xbe59("0x1e"),"@comment"],[/(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,[_0xbe59("0x1f"),_0xbe59("0x20"),"",_0xbe59("0x1f")]],[/(<)(script)/,[_0xbe59("0x1f"),{token:_0xbe59("0x20"),next:_0xbe59("0x21")}]],[/(<)(style)/,["delimiter",{token:"tag",next:_0xbe59("0x22")}]],[/(<)((?:[\w\-]+:)?[\w\-]+)/,[_0xbe59("0x1f"),{token:_0xbe59("0x20"),next:_0xbe59("0x23")}]],[/(<\/)((?:[\w\-]+:)?[\w\-]+)/,[_0xbe59("0x1f"),{token:_0xbe59("0x20"),next:"@otherTag"}]],[/</,_0xbe59("0x1f")],[/[^<]+/]],doctype:[[/[^>]+/,_0xbe59("0x24")],[/>/,_0xbe59("0x1c"),_0xbe59("0x25")]],comment:[[/-->/,_0xbe59("0x1e"),_0xbe59("0x25")],[/[^-]+/,_0xbe59("0x26")],[/./,_0xbe59("0x26")]],otherTag:[[/\/?>/,"delimiter",_0xbe59("0x25")],[/"([^"]*)"/,_0xbe59("0x27")],[/'([^']*)'/,_0xbe59("0x27")],[/[\w\-]+/,_0xbe59("0x28")],[/=/,_0xbe59("0x1f")],[/[ \t\r\n]+/]],script:[[/type/,_0xbe59("0x28"),_0xbe59("0x29")],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,_0xbe59("0x27")],[/[\w\-]+/,_0xbe59("0x28")],[/=/,_0xbe59("0x1f")],[/>/,{token:_0xbe59("0x1f"),next:_0xbe59("0x2a"),nextEmbedded:_0xbe59("0x2b")}],[/[ \t\r\n]+/],[/(<\/)(script\s*)(>)/,["delimiter","tag",{token:"delimiter",next:"@pop"}]]],scriptAfterType:[[/=/,_0xbe59("0x1f"),_0xbe59("0x2c")],[/>/,{token:_0xbe59("0x1f"),next:_0xbe59("0x2a"),nextEmbedded:_0xbe59("0x2b")}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value",switchTo:_0xbe59("0x2d")}],[/'([^']*)'/,{token:_0xbe59("0x27"),switchTo:_0xbe59("0x2d")}],[/>/,{token:_0xbe59("0x1f"),next:_0xbe59("0x2a"),nextEmbedded:_0xbe59("0x2b")}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:_0xbe59("0x2e"),next:_0xbe59("0x25")}]],scriptWithCustomType:[[/>/,{token:_0xbe59("0x1f"),next:_0xbe59("0x2f"),nextEmbedded:"$S2"}],[/"([^"]*)"/,_0xbe59("0x27")],[/'([^']*)'/,_0xbe59("0x27")],[/[\w\-]+/,_0xbe59("0x28")],[/=/,_0xbe59("0x1f")],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptEmbedded:[[/<\/script/,{token:_0xbe59("0x2e"),next:_0xbe59("0x25"),nextEmbedded:_0xbe59("0x25")}],[/[^<]+/,""]],style:[[/type/,"attribute.name",_0xbe59("0x30")],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,_0xbe59("0x27")],[/[\w\-]+/,_0xbe59("0x28")],[/=/,"delimiter"],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:_0xbe59("0x31")}],[/[ \t\r\n]+/],[/(<\/)(style\s*)(>)/,[_0xbe59("0x1f"),_0xbe59("0x20"),{token:"delimiter",next:_0xbe59("0x25")}]]],styleAfterType:[[/=/,_0xbe59("0x1f"),_0xbe59("0x32")],[/>/,{token:_0xbe59("0x1f"),next:_0xbe59("0x33"),nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:_0xbe59("0x2e"),next:_0xbe59("0x25")}]],styleAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value",switchTo:_0xbe59("0x34")}],[/'([^']*)'/,{token:_0xbe59("0x27"),switchTo:_0xbe59("0x34")}],[/>/,{token:_0xbe59("0x1f"),next:_0xbe59("0x33"),nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:_0xbe59("0x25")}]],styleWithCustomType:[[/>/,{token:_0xbe59("0x1f"),next:"@styleEmbedded.$S2",nextEmbedded:_0xbe59("0x35")}],[/"([^"]*)"/,_0xbe59("0x27")],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,_0xbe59("0x28")],[/=/,_0xbe59("0x1f")],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:_0xbe59("0x2e"),next:_0xbe59("0x25")}]],styleEmbedded:[[/<\/style/,{token:_0xbe59("0x2e"),next:_0xbe59("0x25"),nextEmbedded:_0xbe59("0x25")}],[/[^<]+/,""]]}}}}]);