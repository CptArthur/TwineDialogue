let formatName = 'TwineToUnity'

var storyFormat = {
    'name': formatName,
    'version': '1.0.0',
    'author': '<a href="">CptArthur and originally by Michael McCollum</a>',
	'description': 'Free utility format to export your story into Twee 3 format.',
    'image': 'icon.svg',
    'url': '',
    'license': 'MIT License',
    'proofing': false
}

let fs = require('fs')
let uglifier = require('uglify-js')
let minifier = require('html-minifier')

let script = fs.readFileSync('./Entweedle.js').toString()
let page = fs.readFileSync('./template.html').toString()
let license = fs.readFileSync('./license.txt').toString()

let devStorySource = page
    .replace('{{LICENSE}}', license)
    .replace('{{SCRIPT}}', script)

storyFormat.name = formatName + '-dev'
storyFormat.source = devStorySource
fs.writeFileSync('./formatDev.js',  'window.storyFormat(' + JSON.stringify(storyFormat) + ')')
    
let processedScript = uglifier.minify(script).code
let processedPage = minifier.minify(page, { collapseWhitespace: true })
let processedLicense = ''
license.split('\n\n').forEach((p) => { processedLicense += p.replace(/\n/g, ' ') + '\n\n' })

let storySource = processedPage
    .replace('{{LICENSE}}', processedLicense)
    .replace('{{SCRIPT}}', processedScript)

storyFormat.name = formatName
storyFormat.source = storySource
fs.writeFileSync('./format.js', 'window.storyFormat(' + JSON.stringify(storyFormat) + ')')
