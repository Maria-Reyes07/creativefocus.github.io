# HTML Basics: Intorduction

## Outline

- What is markup?
    contains texts and some tags (HTML)
    the tags represents whether we are talking about title, unorder list
- How do Markdown and HTML represent markup?
    Markdown: what this is called
    you can go to https://dillinger.io - markdown site
- Your first HTML page
explaination of doctype, meta, etc.

*to get the basic code of html written hit ! then tab*

## Guidelines

- Focus on content not on style
- Knowing everything is not neccesary!
- VS code: Emmet, Live Server, "html:5"
    - `mkdir xyz` - > `cd xyz` - > `code .`
    - Clean work environment
- Alternative online environment: https://codesandbox.io/

## Documentation 

- https://www.w3schools.com/
- https://devdocs.io/
- https://htmlcheatsheet.com/
- https://validtor.w3.org/

## Tags 

- Tags: `<tagname> ... </tagename>`

- Headings: `<h1> ... </h1>` (only one)
- Paragraphs: `<p> ... </p>` (block level elements)

- Spaces in VS Code and browser 

- VS Code: "lorem50", Alt+z / option+z (text format), lorem5*4 = 4 sentences with five words each.
- VS Code: `p*3`, `(p>lorem5)*3' = 3 paragraphs with senteces that have 5 words in them.

- Browser: development tools

- Italic: `<em> ... </em>` - and not `<i> ... </i>`
- Bold: `<strong> ... </strong>` - and not `<b> ... </b>`

## Lists
- `<ul> ... </ul>`, `<ol> ... </ol>`
- `<li> ... <li>`
- VS Code: `ul>li*6`

## Images
- VS Code: `img`
- `<img src="./images" alt="descripton of photo">` - we don't need to close images
    - alt is to help the people who cant see know what is on the website. so you will put in the description in there.
- Relative paths: `src`, `"images/profile.jpg"`, `"./images/profile.jpg"`, `"../images/profile.jpg"'
- URL path (link)
- Accessibility: `alt`
- Size: `width="250" height="300"`. Don't distort the aspect ratio! 

## Ids and Links
- Tag ID: e.g. `id="skill-table"`
- In the browser: e.g. `https://http://127.0.0.1:5500/index.html#skill-table`

-Internal Links:
    - Same file: e.g. `<a herf="#skill-table">My programming skills</a>`
    - Another file: e.g. `<a herf="projects.html">My projects</a>`
    - Another file with an anchor: `<a herf="#skill-table">My programming skills</a>`
    - Image in another project directory: e.g. `<a herf="./images/profile.jpg">Me</a>`

-External Links: `<a herf="./images/profile.jpg">Me</a>`
-In new tab: `target="_blank"`
