# Depression and Obesity in Massachusetts: A Comparison
Obesity and depression heavily affect the United States, with 8% of adults suffering from depression and 36% of adults listed as obese. These numbers are staggering, particularly when tracked against their real-world implications. Heart disease is the number one cause of death in the United States, and suicide is top three for death among men. 
The initial data was collected using place data from the Centers for Disease Control, specifically using the CDC 'Place Data' https://chronicdata.cdc.gov/500-Cities-Places/PLACES-Place-Data-GIS-Friendly-Format-2022-release/vgc8-iyc4
While this data would eventually be parsed, it was originally a smattering of health data from across the entire country. I used QGIS as a data parsing tool, first loading the raw .csv files for both town and county data and editing their tables to only include smoking, depression, and obesity data.![QGIS data example](https://user-images.githubusercontent.com/63604107/222976544-9435f286-e9e7-4541-86e9-a1902ca0fe22.jpg) Following this, the data for both town and county were exported to the geojson format for use in populating the next step: creating visualized data in Mapbox Studio and using Mapbox's storytelling API: https://github.com/mapbox/storytelling/blob/main/README.md

This map was developed into a web browser-based interactive map for use primarily on PC


Sources: https://www.wbur.org/news/2022/08/08/2022-kids-count-survey-massachusetts-ranks-first-anxiety-rises
https://quotewizard.com/news/seasonal-depression

Mapbox Studio was the tool used to develop the maps themselves shown on the webmap. To create these maps I used the data collected from the CDC for Obesity, Depression, and Income levels by tract. Because Massachusetts has very few counties grouping these factors by county was sufficient to make clear inferences. These maps form the front end of the webmap, with the mapbox storytelling template making up the back end.
![obesity map](https://user-images.githubusercontent.com/63604107/236213387-b48d5281-21e5-44fd-a5f3-b794b4da5164.jpg)
![income map](https://user-images.githubusercontent.com/63604107/236213398-9717bad8-1558-4f81-8dbb-209b20fe8dd2.jpg)
![depresiion map](https://user-images.githubusercontent.com/63604107/236213410-91c2319b-2ad2-4eaa-a947-26c946ebb0c6.jpg)
These maps are populated by the crude prevalence of each factor (depression, obesityt, income) so as to show the base level as reported to health and economic authorities.

The webpage was created using Mapbox Studio's Storytelling template linked above. The template provided both an html template and javascript configuration file, the two main building blocks of the webmap. The configuration file was used to inject the points of interest, with the template providing guidance on creating an interactive, fly-to-location map as the user scrolls.
C:\Users\Will\Documents\School\NewMapsPlus\Winter 2023\Mapping-Final-Project\config.js
For this configuration file to work I developed a different 'coordinate block' for each location in Mapbox Studio, and further divided each up by the data needing to be represented. These were referenced within the configuration file as layers, opacity being turned off and on depending on the map in question. These blocks were paired with descriptions of the data and relevant information for each location.


