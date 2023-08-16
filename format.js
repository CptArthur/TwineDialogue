window.storyFormat({"name":"TwineToUnity","version":"1.0.0","author":"<a href=\"\">CptArthur and originally by Michael McCollum</a>","description":"Free utility format to export your story into Twee 3 format.","image":"icon.svg","url":"","license":"MIT License","proofing":false,"source":"<html><head><title>{{STORY_NAME}}</title><meta charset=\"UTF-8\"><!--\r\nEntweedle - Twine 2 Twee Export Story Format\n\nCopyright (c) 2021 Michael McCollum\n\nhttps://www.maximumverbosity.net/twine/Entweedle/\n\nThis license applies exclusively to the Entweedle story format for Twine 2. No ownership of, nor licensing restrictions on, the content withiln the generated story are stated or implied.\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\t\t\r\n\t\t--><script type=\"text/javascript\">var entweedler=function(){void 0===window.Entweedle&&(window.Entweedle={converted:!1,convert:function(){window.Entweedle.converted||(window.Entweedle.converted=!0,window.document.getElementById(\"output\").innerHTML=this.export())},export:function(){for(var e,t,n,r=[],o=window.document.getElementsByTagName(\"tw-storydata\")[0],a=(o&&o.hasAttributes()&&(r.push(this.buildPassage(\"StoryTitle\",\"\",o.getAttribute(\"name\"))),e={},[\"ifid\",\"format\",\"format-version\",\"startnode\",\"zoom\"].forEach(t=>{o.hasAttribute(t)&&(e[t]=o.getAttribute(t))}),e.hasOwnProperty(\"startnode\")&&(t=window.document.querySelector(`tw-passagedata[pid=\"${e.startnode}\"]`))&&t.hasAttribute(\"name\")&&(e.start=t.getAttribute(\"name\")),0<(t=Array.from(window.document.getElementsByTagName(\"tw-tag\"))).length&&(n={},t.forEach(t=>n[t.getAttribute(\"name\")]=t.getAttribute(\"color\")),e[\"tag-colors\"]=n),r.push(this.buildPassage(\"StoryData\",\"\",JSON.stringify(e,null,1)))),window.document.getElementsByTagName(\"tw-passagedata\")),i=0;i<a.length;++i)r.push(this.buildPassageFromElement(a[i]));return r.join(\"\")},buildPassageFromElement:function(t){var e=(e=t.getAttribute(\"name\"))||\"Untitled Passage\",n=t.getAttribute(\"tags\"),r=t.getAttribute(\"position\"),o=t.getAttribute(\"size\"),t=t.textContent;return this.buildPassage(e,n,t,r||o?{position:r,size:o}:\"\")},buildPassage:function(t,e,n,r){var o=[];return o.push(\":: \",t),e&&o.push(\" [\",e,\"]\"),o.push(\"\\r\\n\",this.scrub(n)),o.join(\"\")},scrub:function(t){return t=t&&t.replace(/^::/gm,\" ::\").replace(/\\</gm,\"&lt;\").replace(/\\>/gm,\"&gt;\")}}),window.Entweedle.convert()};window.onload=entweedler,setTimeout(entweedler,1e3);</script></head><body><pre id=\"output\"></pre><div id=\"storyData\" style=\"display: none;\">{{STORY_DATA}}</div></body></html>"})