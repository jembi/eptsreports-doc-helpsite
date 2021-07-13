# eptsreports-doc-helpsite
Documentation of epts report module

Overview
--------
A simple prototype website for publishing changes that take place during the report programming

Usage
-----
All website data is fetch from a file called `content.json` in the site root directory. 
Create this file with the following format:

```json
{ 
	"site": { 
		"title": "Site Title",
		"description": "Site description etc" 
	},

	"resources": [
	  	{ 
	  		"name": "MER 2.5 requirements", 
	  		"file": "mer2.5_requirements.pdf",
	  		"apps": [] 
	  	},
	  	{ 
	  		"name": "Changes in 2.6 enhancements", 
	  		"file": "ehnacements.pdf",
	  		"apps": []  
	  	},
		...
	]
}
``` 
