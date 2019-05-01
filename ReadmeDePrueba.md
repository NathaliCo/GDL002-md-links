

# Markdown Links

With markdown you can identify all the links that are inside of a file with .md extension or web page, and also helps you to identify broken and live links, and get a stats about those links like; how many links are inside your file, how many of them are alive, and wich ones are repeated. 

With this tool you can also search for all the .md files inside a directory and perform all the aformentioned tasks.  

At the end, it will generate a file called mdLinks.txt located inside the same directory where you are executing the file from, with a response to your request.

MarkdownLinks uses:
Markdown to transform the .md in HTML ($npm install markdown)
Cheerio to extract the links ($Cheerio npm install)
node-fetch for the HTTP request ($npm i node-fetch)

Prerequisites: Node.js 11.13.4.

You can install markdown links using:
$npm install nathalis-mdLinks

You can install MarkdownLinks local or global (using $npm install nathalis-mdLinks --global). 

How to use it

$ mdLinks (path, options)

Arguments

path: absolute or relative path for a file, directory or URL. If the route is relative it resolves respect to the current working directory.

options:
  --validate: if you want to validate the found links.
  --stats: if you want to know the statistics about the links
    total links.
    total unique links.

--validate--stats: to show the statistics about the links including validation
  total links.
  total unique links.
  total true links (not broken);

  Response
  
  All links in the next format 
  {
    href: URL.
    text: Text in the link
    line: line where the link was found 
    file: Path
  }

  CLI (Command Line Interface)
  For start, enter the following comand:

  md-links <path-to-file> [options]

  Example:
without options
  $ mdLinks "/file.md"

  Print in the CMD the found links in the file and create a document with a list of all them, each link object include the href, text, line and file.

with options
$ mdLinks "/file.md" --validate 
 Prints in  the console a list of all the links included in the file, and also creates a file with all the links inside of it, each link object include the href, text, line, file, and available.

$ mdLinks "/file.md"--stats 
Prints in the console a list of all the links included in the file,  the found links in the file and create a document with a list of all them, each link object include the href, text, line and file, includes the statistics: 
 total links.
    total unique links.

$ mdLinks "/file.md" --validate--stats
Prints in the console a list of all the links included in the file,  the found links in the file and create a document with a list of all them, each link object include the href, text, line and file, and available, inclides the statistics: total links.
  total unique links.
  total true links(not broken);

 Flow diagram 
