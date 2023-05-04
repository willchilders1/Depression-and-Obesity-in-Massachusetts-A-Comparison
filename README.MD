# Depression and Obesity in Massachusetts: A Comparison
**Introduction**
Obesity and depression heavily affect the United States, with 8% of adults suffering from depression and 36% of adults listed as obese. These numbers are staggering, particularly when tracked against their real-world implications. Heart disease is the number one cause of death in the United States, and suicide is top three for death among men. This interactive map was developed out of the need for better visual understanding of how these factors correlate with one another in a specific area, namely the state where I currently reside. 


**Data Stack**
QGIS
Mapbox Studio
Windows 11
Microsoft Excel
Microsoft Word


**Data Collection and Implementation**
The initial health data was collected using place data from the Centers for Disease Control, specifically using the CDC 'Place Data' https://chronicdata.cdc.gov/500-Cities-Places/PLACES-Place-Data-GIS-Friendly-Format-2022-release/vgc8-iyc4
Tract level income data was collected using the U.S. Census Bureau https://www.census.gov/topics/income-poverty/income/data/tables.html
While this data would eventually be parsed, it was originally a smattering of health data from across the entire country. I used QGIS as a data parsing tool, first loading the raw .csv files for both town and county data and editing their tables to only include smoking, depression, and obesity data.![QGIS data example](https://user-images.githubusercontent.com/63604107/222976544-9435f286-e9e7-4541-86e9-a1902ca0fe22.jpg) Following this, the data for both town and county were exported to the geojson format for use in populating the next step: creating visualized data in Mapbox Studio and using Mapbox's storytelling API: https://github.com/mapbox/storytelling/blob/main/README.md
Research data was primarily collected using the Google search engine and Google Scholar, with some government data gleaned through searching the Census Bureau website. The data used was from myriad sources, from research articles to independent journalistic statistical endeavors



Mapbox Studio was the tool used to develop the maps themselves shown on the webmap. To create these maps I used the data collected from the CDC for Obesity, Depression, and Income levels by tract. Because Massachusetts has very few counties grouping these factors by county was sufficient to make clear inferences. These maps form the front end of the webmap, with the mapbox storytelling template making up the back end.
![obesity map](https://user-images.githubusercontent.com/63604107/236213387-b48d5281-21e5-44fd-a5f3-b794b4da5164.jpg)
![income map](https://user-images.githubusercontent.com/63604107/236213398-9717bad8-1558-4f81-8dbb-209b20fe8dd2.jpg)
![depresiion map](https://user-images.githubusercontent.com/63604107/236213410-91c2319b-2ad2-4eaa-a947-26c946ebb0c6.jpg)
These maps are populated by the crude prevalence of each factor (depression, obesityt, income) so as to show the base level as reported to health and economic authorities. A choropleth layout was used for all three maps as it was the most efficient way to visualize tract-level data for the entire state. This visual representation allows for the user to interpret each layer with reference to the surrounding tracts as well as between the separate layers 

The webpage was created using Mapbox Studio's Storytelling template linked above. The template provided both an html template and javascript configuration file, the two main building blocks of the webmap. The configuration file was used to inject the points of interest, with the template providing guidance on creating an interactive, fly-to-location map as the user scrolls.
C:\Users\Will\Documents\School\NewMapsPlus\Winter 2023\Mapping-Final-Project\config.js
For this configuration file to work I developed a different 'coordinate block' for each location in Mapbox Studio, and further divided each up by the data needing to be represented. These were referenced within the configuration file as layers, opacity being turned off and on depending on the map in question. These blocks were paired with descriptions of the data and relevant information for each location.


**User Experience**

Income level was referenced as the driving factor behind the health issues presented in the webmap, with source research showing links between depression and income as well as obesity and income. It is meant to be a jumping-off point for learning how health factors are affected by income levels, specifically within a small region. Users will read through the storytelling map to develop an initial understanding of how each of these factors affects the communities in question and how they can be compared to other areas in the same region. This is not meant to be a scientific study and is only an aggregate, pulling first-person research from sources listed below. The National Institute of Health, Center for Disease Control and the U.S. Census Bureau were all integral sources as they provide the most comprehensive source of health and income data. 
This map was developed into a web browser-based interactive map for use primarily on PC. The itention is to see the entirety of the map with the text and legend overlayed, something difficult to present in a visually pleasing manner on mobile devices. 


**Conclusion**
. Massachusetts is often cited as one of the healthiest states in the country, though this claim is only viewing the state as a whole. As this map has presented, the issue is much more complex when zoomed in; areas around Boston skew this data, while the western areas of the state present an entirely different reality. Couple this with Massachusetts' extremely high cost of living and the situation in much of Western Massachusetts is as difficult as any low-income region in the country.


**Sources**

https://chronicdata.cdc.gov/500-Cities-Places/PLACES-Place-Data-GIS-Friendly-Format-2022-release/vgc8-iyc4

https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4939441/

https://www.cdc.gov/nccdphp/dch/programs/communitiesputtingpreventiontowork/communities/profiles/both-ma_boston.html

https://www.newtonma.gov/government/health-human-services/social-services/food-resources

https://www.baystatebanner.com/2011/11/16/a-question-of-access/

https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6195011/

https://www.hsph.harvard.edu/news/features/asthma-obesity-boston-communities/

https://www.wbur.org/news/2022/08/08/2022-kids-count-survey-massachusetts-ranks-first-anxiety-rises

https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5775138/

https://www.wgbh.org/news/2017/08/31/local-news/massachusetts-obesity-rates-among-nations-lowest

https://www.masslive.com/springfield/2022/10/square-one-receives-993k-grant-to-provide-locally-grown-food-to-children-and-families.html

https://valleyadvocate.com/2015/11/09/food-deserts-of-springfield/






