# Depression and Obesity in Massachusetts: A Comparison
This project will attempt to track the correlation between smoking, obesity and depression in the state of Massachusetts. 
The initial data was collected using place data from the Centers for Disease Control, specifically using the CDC 'Place Data' https://chronicdata.cdc.gov/500-Cities-Places/PLACES-Place-Data-GIS-Friendly-Format-2022-release/vgc8-iyc4
While this data would eventually be parsed, it was originally a smattering of health data from across the entire country. I used QGIS as a data parsing tool, first loading the raw .csv files for both town and county data and editing their tables to only include smoking, depression, and obesity data.![QGIS data example](https://user-images.githubusercontent.com/63604107/222976544-9435f286-e9e7-4541-86e9-a1902ca0fe22.jpg) Following this, the data for both town and county were exported to the geojson format for use in populating the next step: creating visualized data in Mapbox Studio and using Mapbox's storytelling API: https://github.com/mapbox/storytelling/blob/main/README.md


Sources: https://www.wbur.org/news/2022/08/08/2022-kids-count-survey-massachusetts-ranks-first-anxiety-rises
https://quotewizard.com/news/seasonal-depression

