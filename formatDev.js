window.storyFormat({"name":"TwineToUnity-dev","version":"1.0.0","author":"<a href=\"\">CptArthur and originally by Michael McCollum</a>","description":"Free utility format to export your story into Twee 3 format.","image":"icon.svg","url":"","license":"MIT License","proofing":false,"source":"<html>\r\n\t<head>\r\n\t\t<title>{{STORY_NAME}}</title>\r\n\t\t<meta charset=\"UTF-8\">\r\n\t\t<!--\r\nEntweedle - Twine 2 Twee Export Story Format\n\nCopyright (c) 2021 Michael McCollum\n\nhttps://www.maximumverbosity.net/twine/Entweedle/\n\nThis license applies exclusively to the Entweedle story format for Twine 2. No ownership of, nor\nlicensing restrictions on, the content withiln the generated story are stated or implied.\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and\nassociated documentation files (the \"Software\"), to deal in the Software without restriction,\nincluding without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,\nand/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial\nportions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT\nLIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\nIN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\nWHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\nSOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\t\t\r\n\t\t-->\r\n\t\t<script type=\"text/javascript\">\r\nvar entweedler = function() {\r\n\t\r\n\tif (typeof(window.TwineToUnity) == \"undefined\") {\r\n\t\t\r\n\t\twindow.TwineToUnity = {\r\n\t\t\r\n\t\t\tconverted: false,\r\n\t\t\r\n\t\t\tconvert: function() {\r\n\t\t\t\tif (window.TwineToUnity.converted)\r\n\t\t\t\t\treturn\r\n\t\t\t\t\r\n\t\t\t\twindow.TwineToUnity.converted = true\r\n\t\t\t\t\r\n\t\t\t\tvar output = window.document.getElementById(\"output\")\r\n\r\n\t\t\t\toutput.innerHTML = this.export()\r\n\t\t\t},\r\n\r\n\t\t\t\r\n\t\t\texport: function() {\r\n\t\t\t\tvar buffer = []\r\n\r\n\t\t\t\tvar storyData = window.document.getElementsByTagName(\"tw-storydata\")[0]\r\n\t\t\t\tif (storyData && storyData.hasAttributes())\r\n\t\t\t\t{\r\n\t\t\t\t\tbuffer.push(this.buildPassage(\"StoryTitle\",\"\",storyData.getAttribute(\"name\")))\r\n\r\n\t\t\t\t\tvar properties = {}\r\n\t\t\t\t\tvar simpleProperties = ['ifid','format','format-version','startnode','zoom']\r\n\t\t\t\t\t\r\n\t\t\t\t\tsimpleProperties.forEach(a => {\r\n\t\t\t\t\t\tif (storyData.hasAttribute(a))\r\n\t\t\t\t\t\t\tproperties[a] = storyData.getAttribute(a)})\r\n\t\t\t\t\t\r\n\t\t\t\t\tif (properties.hasOwnProperty(\"startnode\"))\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tvar startPassage = window.document.querySelector(`tw-passagedata[pid=\"${properties[\"startnode\"]}\"]`)\r\n\t\t\t\t\t\tif (startPassage && startPassage.hasAttribute(\"name\"))\r\n\t\t\t\t\t\t\tproperties[\"start\"] = startPassage.getAttribute(\"name\")\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tvar tagElements = Array.from(window.document.getElementsByTagName(\"tw-tag\"))\r\n\t\t\t\t\tif (tagElements.length > 0)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tvar tagColors = {};\r\n\t\t\t\t\t\ttagElements.forEach(\r\n\t\t\t\t\t\t\te => tagColors[e.getAttribute(\"name\")] = e.getAttribute(\"color\"))\r\n\r\n\t\t\t\t\t\tproperties[\"tag-colors\"] = tagColors\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tbuffer.push(this.buildPassage(\"StoryData\", \"\", JSON.stringify(properties, null, 1)))\r\n\t\t\t\t}\r\n\r\n\t\t\t\t/*\r\n\t\t\t\tvar userScript = window.document.getElementById(\"twine-user-script\")\r\n\t\t\t\tif (userScript)\r\n\t\t\t\t\tbuffer.push(this.buildPassage(\"UserScript\",\"script\",userScript.innerHTML))\r\n\r\n\t\t\t\tvar userStylesheet = window.document.getElementById(\"twine-user-stylesheet\")\r\n\t\t\t\tif (userStylesheet)\r\n\t\t\t\t\tbuffer.push(this.buildPassage(\"UserStylesheet\",\"stylesheet\",userStylesheet.innerHTML))\r\n\t\t\t\t*/\r\n\r\n\t\t\t\tvar passages = window.document.getElementsByTagName(\"tw-passagedata\")\r\n\t\t\t\tfor (var i = 0; i < passages.length; ++i)\r\n\t\t\t\t\tbuffer.push(this.buildPassageFromElement(passages[i]))\r\n\r\n\t\t\t\treturn buffer.join('')\r\n\t\t\t},\r\n\r\n\t\t\t\r\n\t\t\tbuildPassageFromElement: function(passage) {\r\n\t\t\t\tvar name = passage.getAttribute(\"name\")\r\n\t\t\t\tif (!name)\r\n\t\t\t\t\tname = \"Untitled Passage\"\r\n\r\n\t\t\t\tvar tags = passage.getAttribute(\"tags\")\r\n\t\t\t\tvar pos  = passage.getAttribute(\"position\");\r\n\t\t\t\tvar size = passage.getAttribute(\"size\");\r\n\t\t\t\tvar meta = (pos || size) ? {position: pos, size: size} : '';\r\n\t\t\t\tvar content = passage.textContent;\r\n\t\t\t\t\r\n\t\t\t\treturn this.buildPassage(name, tags, content, meta)\r\n\t\t\t},\r\n\t\r\n\t\r\n\t\t\tbuildPassage: function(title, tags, content, meta) {\r\n\t\t\t\tvar result = []\r\n\t\t\t\t\r\n\t\t\t\tresult.push(\":: \",title)\r\n\t\t\t\tif (tags)\r\n\t\t\t\t\tresult.push(\" [\",tags,\"]\")\r\n\t\t\t\t/*\r\n\t\t\t\tif (meta)\r\n\t\t\t\t\tresult.push(\" \", JSON.stringify(meta));\r\n\t\t\t\t*/\t\r\n\t\t\t\tresult.push(\"\\r\\n\", this.scrub(content))\r\n\t\t\t\t\r\n\t\t\t\treturn result.join('')\r\n\t\t\t},\r\n\r\n\t\t\t\r\n\t\t\tscrub: function(content) {\r\n\t\t\t\tif (content) {\r\n\t\t\t\t\tcontent = content\t\r\n\t\t\t\t\t\t.replace(/^::/gm, \" ::\")\r\n\t\t\t\t\t\t.replace(/\\</gm, \"&lt;\")\r\n\t\t\t\t\t\t.replace(/\\>/gm, \"&gt;\")\r\n\t\t\t\t}\r\n\t\t\t\treturn content\r\n\t\t\t}\r\n\r\n\t\t}\t\t\t\r\n\t}\r\n\r\n\twindow.TwineToUnity.convert()\r\n}\t\r\n\r\nwindow.onload = entweedler\r\nsetTimeout(entweedler, 1000)\t\t\r\n\t\t</script>\r\n\t</head>\r\n\t<body>\r\n\t\t<pre id=\"output\"></pre>\r\n\t\t<div id=\"storyData\" style=\"display: none;\">\r\n\t\t\t{{STORY_DATA}}\r\n\t\t</div>\r\n\t</body>\r\n</html>"})