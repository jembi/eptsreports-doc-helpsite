HelpSite [Prototype]
===============

Overview
--------
A simple prototype website for publishing training materials.

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
	  		"name": "How to Create a Patient Record", 
	  		"file": "K_JobAid_1_CreatePt_13.2.pdf",
	  		"apps": [ "kenyaemr.registration" ] 
	  	},
	  	{ 
	  		"name": "How to Search for a Patient Record", 
	  		"file": "K_JobAid_2_SearchPt_13.2.pdf",
	  		"apps": [ "kenyaemr.registration", "kenyaemr.intake", "kenyaemr.medicalEncounter" ]  
	  	},
		...
	]
}
``` 
