var entweedler = function() {
	
	if (typeof(window.TwineToUnity) == "undefined") {
		
		window.TwineToUnity = {
		
			converted: false,
		
			convert: function() {
				if (window.TwineToUnity.converted)
					return
				
				window.TwineToUnity.converted = true
				
				var output = window.document.getElementById("output")

				output.innerHTML = this.export()
			},

			
			export: function() {
				var buffer = []

				var storyData = window.document.getElementsByTagName("tw-storydata")[0]
				if (storyData && storyData.hasAttributes())
				{
					buffer.push(this.buildPassage("StoryTitle","",storyData.getAttribute("name")))

					var properties = {}
					var simpleProperties = ['ifid','format','format-version','startnode','zoom']
					
					simpleProperties.forEach(a => {
						if (storyData.hasAttribute(a))
							properties[a] = storyData.getAttribute(a)})
					
					if (properties.hasOwnProperty("startnode"))
					{
						var startPassage = window.document.querySelector(`tw-passagedata[pid="${properties["startnode"]}"]`)
						if (startPassage && startPassage.hasAttribute("name"))
							properties["start"] = startPassage.getAttribute("name")
					}

					var tagElements = Array.from(window.document.getElementsByTagName("tw-tag"))
					if (tagElements.length > 0)
					{
						var tagColors = {};
						tagElements.forEach(
							e => tagColors[e.getAttribute("name")] = e.getAttribute("color"))

						properties["tag-colors"] = tagColors
					}

					buffer.push(this.buildPassage("StoryData", "", JSON.stringify(properties, null, 1)))
				}

				/*
				var userScript = window.document.getElementById("twine-user-script")
				if (userScript)
					buffer.push(this.buildPassage("UserScript","script",userScript.innerHTML))

				var userStylesheet = window.document.getElementById("twine-user-stylesheet")
				if (userStylesheet)
					buffer.push(this.buildPassage("UserStylesheet","stylesheet",userStylesheet.innerHTML))
				*/

				var passages = window.document.getElementsByTagName("tw-passagedata")
				for (var i = 0; i < passages.length; ++i)
					buffer.push(this.buildPassageFromElement(passages[i]))

				return buffer.join('')
			},

			
			buildPassageFromElement: function(passage) {
				var name = passage.getAttribute("name")
				if (!name)
					name = "Untitled Passage"

				var tags = passage.getAttribute("tags")
				var pos  = passage.getAttribute("position");
				var size = passage.getAttribute("size");
				var meta = (pos || size) ? {position: pos, size: size} : '';
				var content = passage.textContent;
				
				return this.buildPassage(name, tags, content, meta)
			},
	
	
			buildPassage: function(title, tags, content, meta) {
				var result = []
				
				result.push(":: ",title)
				if (tags)
					result.push(" [",tags,"]")
				/*
				if (meta)
					result.push(" ", JSON.stringify(meta));
				*/	
				result.push("\r\n", this.scrub(content))
				
				return result.join('')
			},

			
			scrub: function(content) {
				if (content) {
					content = content	
						.replace(/^::/gm, " ::")
						.replace(/\</gm, "&lt;")
						.replace(/\>/gm, "&gt;")
				}
				return content
			}

		}			
	}

	window.TwineToUnity.convert()
}	

window.onload = entweedler
setTimeout(entweedler, 1000)