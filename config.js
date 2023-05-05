var config = {
  style: "mapbox://styles/willchilders1/cleotdexr00m001qxnol5hhbn",
  accessToken:
    "pk.eyJ1Ijoid2lsbGNoaWxkZXJzMSIsImEiOiJjbGVvdWR3cGkwMmljM3JwNGt6NTY5eGQxIn0.hp7TC4XE9jylFxvvBn4YVA",
  showMarkers: false,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "A Comparison of Health Factors and Income Level in Massachusetts Towns",
  subtitle:
    "Income is almost always a driving factor in rates of both obesity and depression. Even in Massachusetts, a ",
  byline: "By Will Childers",
  footer:
    'Sources: <br> <a href="https://commons.wikimedia.org/wiki/File:Newton_City_Hall,_Massachusetts.jpg">Kenneth C. Zirkel</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons, <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. <br> <a href="https://chronicdata.cdc.gov/500-Cities-Places/PLACES-Place-Data-GIS-Friendly-Format-2022-release/vgc8-iyc4">CDC Place Data</a>     <br> <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4939441/">The Relationship between Childhood Obesity, Low Socioeconomic Status, and Race/Ethnicity: Lessons from Massachusetts</a> <br> <a href="https://www.cdc.gov/nccdphp/dch/programs/communitiesputtingpreventiontowork/communities/profiles/both-ma_boston.htm">CDC - Community Profile - Boston, MA - Communities Putting Prevention to Work</a> <br> <a href="https://www.newtonma.gov/government/health-human-services/social-services/food-resources">Newton Freedge</a> <br> <a href="https://www.baystatebanner.com/2011/11/16/a-question-of-access/">A question of access - The Bay State Banner</a> <br> <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6195011/">Identifying Stress Landscapes in Boston Neighborhoods</a> <br> <a href="https://www.hsph.harvard.edu/news/features/asthma-obesity-boston-communities/">Tackling the asthma-obesity link in Boston | News | Harvard T.H. Chan School of Public Health</a> <br> <a href="https://www.wbur.org/news/2022/08/08/2022-kids-count-survey-massachusetts-ranks-first-anxiety-rises">Massachusetts kids overall well-being is trending up. So are anxiety and depression rates</a> <br> <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5775138/">Income inequality and depression: a systematic review and meta‐analysis of the association and a scoping review of mechanisms</a> <br> <a href="https://www.wgbh.org/news/2017/08/31/local-news/massachusetts-obesity-rates-among-nations-lowest">Massachusetts Obesity Rates Among Nations Lowest</a>     <br> <a href="https://www.masslive.com/springfield/2022/10/square-one-receives-993k-grant-to-provide-locally-grown-food-to-children-and-families.html">Locally Grown food Grant for Springfield, MA</a> <br> <a href="https://valleyadvocate.com/2015/11/09/food-deserts-of-springfield/">Food Deserts of Springfield</a> <br> <a href="https://ceufast.com/blog/the-us-cities-with-the-highest-prevalence-of-depression"></a>',

    // <br> <a href=""></a>
    
  chapters: [
    {
      id: "intro",
      alignment: "fully",
      hidden: false,
      title: "     Obesity, Depression, and Income Levels in Massachusetts: an Observation",
      description:"Massachusetts is culturally and economically divided in half, each portion having developed their own unique cultures and industries. With Boston’s importance to the development of the country it has become extremely economically developed, with a thriving financial district and longstanding port access to the Atlantic Ocean. The city boasts hundreds of years of tangible history, buildings integral to the early days of the United States dotting the tight, winding streets. Unfortunately the same cannot be said for much of the western half of the state, though the area has been inhabited by colonizers for nearly as long. There is a clear divide between the Boston metropolitan area, best exemplified by the income, obesity and depression disparities pictured below.",
      image: "",
      location: {
        center: [-71.925258, 42.377117],
        zoom: 8,
        pitch: 20,
        bearing: 0,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      // onChapterEnter: [
      //   {
      //     layer: "income",
      //     opacity: 1,
      //     duration: 500,
      //   },
      // ],
      // onChapterExit: [
      //   {
      //     layer: "income",
      //     opacity: 0,
      //     duration: 500,
      //   },
      // ],
    },
    {
      id: "chapter-00",
      alignment: "left",
      hidden: false,
      title: "Massachusetts Income Disparity",
      description:
        "While Massachusetts boasts some of the highest average income levels in the country, there are still areas throughout the state that suffer from much lower tax brackets. Within these areas both obesity and depression have a tendency to be on the higher end of state metrics, particularly in spots without proper access to grocery stores and/or medical intervention. This is concentrated in the western half of the state, though the disparity can also be found in certain areas of Boston Metro.",
      image: "",
      location: {
        center: [-71.925258, 42.377117],
        zoom: 8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "income",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "income",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "chapter-1",
      alignment: "left",
      hidden: false,
      title: "Massachusetts Depression",
      image: "",
      description: " Depression is prevalent in the United States, and has been shown to spike in areas of lower socio-economic status and obesity, though these are by no means the only driving factors. Depression is an extremely complex disease and research on it, though well-funded, has yet to make the breakthrough that solves this increasingly large issue. Depression is also an area where Massachusetts is better than average on the national scale. While this is a positive statistic, the number of young adults diagnosed with depression/anxiety has risen by more than 50% since 2016 per the Kids Count data book report in 2022. Data from Blue Cross Blue Shield shows that millennials in particular are more likely than any other state to be diagnosed with depression, contradicting the rest of the population. ",
      location: {
        center: [-71.925258, 42.377117],
        zoom: 8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "depression",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "depression",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "chapter-2",
      alignment: "left",
      hidden: false,
      title: "Massachusetts Obesity",
      image: "",
      description: "Obesity is an area of concern across the country, and Massachusetts is no exception. Though it is ranked among the least obese states in the country, it still struggles with health factors related to high BMI. Areas of particular concern are most of the western half of the state, in addition to areas around the south coast. Though the southeast portion of the state is traditionally higher income, it still suffers from higher rates of obesity than its northeasterly regional neighbor. There are also higher rates of obesity in areas just to the south of Boston proper, areas historically known as lower income areas of the metropolitan area. ",
      location: {
        center: [-71.925258, 42.377117],
        zoom: 8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "obesity",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "obesity",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "chapter-3",
      alignment: "left",
      hidden: false,
      title: "Springfield Income",
      image: "",
      description: "Springfield, the largest city in Massachusetts west of Worcester, has fallen far behind the eastern cities in both health and economic metrics. While the per capita income is still above that of the rest of the country at $42,000 per capita, it falls well below the Boston metro area where median income can reach up to $190,000. This creates a host of issues, not least of which the disparity in cost-of-living. Massachusetts is also one of the most expensive states in the country for cost-of-living, negating the slightly higher-than-national income entirely. Additionally, there is difficulty with opioid addiction in the area, adding further stressors to the community. There is, however, an interestingly high median income in the suburban areas of Springfield, suggesting that the city itself has been underdeveloped economically in recent years as higher-earning individuals trade suburban space for that of the city proper.",
      location: {
        center: [-72.53952002, 42.11550322],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "springfield",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "income",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "springfield",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "income",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "chapter-4",
      alignment: "left",
      hidden: false,
      title: "Depression in Springfield",
      image: "",
      description: "While Springfield ranks on the higher end of the state demographics with regards to depression, it is not the most depressed area in the state. The city reported 24% of Springfield’s residents suffered from depression in 2022. Though much higher than the national average it is relatively lower than areas like Amherst, a similar environment in western Massachusetts. Median income is still higher than more rural areas in the state; the area is thus able to afford some of the things that make life inherently easier, access to emergency services and easier transportation among them. Though not as affected as smaller areas in the western part of the state, Springfield still found its way into the most top twenty depressed cities in the United States at number sixteen. The aforementioned obesity and particularly income levels have both been cited as driving factors in this statistic, and there has been little improvement in the 2020s.",
      location: {
        center: [-72.53952002, 42.11550322],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "springfield",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "depression",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "springfield",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "depression",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "chapter-5",
      alignment: "left",
      hidden: false,
      title: "Obesity in Springfield",
      image: "",
      description: "Obesity in Springfield is among the highest in the entire country, with an estimated 36% of individuals classified as obese in the city. This falls in line with the income and depression statistics as the city also holds a spot on the most depressed cities in the country as of 2022. A number of factors are thought to be at work that contribute to this number, primary among them the lack of grocery stores readily available for most neighborhoods. There have been efforts to tackle the obesity problem in Springfield specifically, with near one million in state funding being allocated to the distribution of healthy, locally-grown foods in 2022; it remains to be seen if this and similar efforts will create lower rates of obesity in the area. ",
      location: {
        center: [-72.53952002, 42.11550322],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "springfield",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "obesity",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "springfield",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "obesity",
          opacity: 0,
          duration: 500,
        },
      ],
    },

    {
      id: "chapter-6",
      alignment: "left",
      hidden: false,
      title: "Newton Income",
      image: "",
      description: "Newton is recognized as one of the most affluent towns in the entire country with a median income of nearly $185,000. This affords an extremely high tax bracket, allowing for incredibly well-funded schools and public health education programs. Newton is roughly eight miles outside Boston city center, the perfect location for those with high-income positions in the city but far enough away to utilize the suburban landscape. Driving through the area it is obvious the wealth relative to other areas in the state, with perfectly manicured gardens and boutique shops lining the main streets.",
      location: {
        center: [-71.20842576, 42.33160123],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "newton",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "income",
          opacity: 1,
          duration: 500,
        },

      ],
      onChapterExit: [
        {
          layer: "newton",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "income",
          opacity: 0,
          duration: 500,
        },

      ],
    },
    {
      id: "chapter-7",
      alignment: "left",
      hidden: false,
      title: "Newton Depression",
      image: "",
      description: "Tellingly, Newton is also ranked on the lower end of the depression spectrum in the state, with only an average of 16% of individuals reported having suffered from depression. This is far less than areas in the west half of the state and even significantly lower than Boston itself, merely a few miles away. There is the easy access to healthcare via the Newton-Wellesley Hospital system and a strong emphasis on community put forth by the local government. This is possible due to the high tax bracket and the citys ability to implement public works/initiatives as a result. ",
      location: {
        center: [-71.20842576, 42.33160123],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "newton",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "depression",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "newton",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "depression",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "chapter-8",
      alignment: "left",
      hidden: false,
      title: "Newton Obesity",
      image: "",
      description: "Newton Obesity rates are also among the lowest in the state, ranking higher than only Lexington and Williamstown. This makes sense as the area houses both a highly prestigious hospital in the Newton-Wellesley Hospital system and an overabundance of food stores; several which like Whole Foods, Trader Joe’s and Mom’s Organic Market provide health-focused options. There is also the Freedge, a free service for the area that provides household essentials to any resident, no questions asked.",
      location: {
        center: [-71.20842576, 42.33160123],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "newton",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "obesity",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "newton",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "obesity",
          opacity: 0,
          duration: 500,
        },
      ],
    },

    {
      id: "chapter-9",
      alignment: "left",
      hidden: false,
      title: "Boston Income",
      image: "",
      description: "Boston is the largest city in Massachusetts by a good margin, with a population of 665,000 in 2022. Boston’s status as an old port city allows for a high tax bracket and higher than average cost of living. Boston is built in a semi-circular formation, unusual civic design for a large city in the United States. This is due to its age and the roads having been built for horses and horse-carriages. This causes for the city itself to become striated, with the areas closest to the port having the highest levels of median income. Back Bay and Seaport, two of the most affluent neighborhoods in the country, have median incomes of $141,000 and $151,000 respectively.",
      location: {
        center: [-71.057083, 42.361145],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "boston",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "income",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "boston",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "income",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "chapter-10",
      alignment: "left",
      hidden: false,
      title: "Boston Depression",
      image: "",
      description: "Boston fares particularly well when compared to the national average rates of depression for large cities. The city of Boston only reports 19.1% of individuals having suffered from depression, while the statewide rate is far higher at 30%. This is an especially interesting statistic given that survey have placed Boston in the top 10 gloomiest cities in the United States. This gloomy status is given due to the long, seemingly never-ending winters and the harsh nor’easters that sweep across the northwest. The natural landscapes surrounding the city may be a mitigating factor in the low depression rates relative to the climate, with extra consideration given to green space by state and local governments.",
      location: {
        center: [-71.057083, 42.361145],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "boston",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "depression",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "boston",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "depression",
          opacity: 0,
          duration: 500,
        },
      ],
    },

    {
      id: "chapter-11",
      alignment: "left",
      hidden: false,
      title: "Boston Obesity",
      image: "",
      description: "Boston is also one of the healthier cities in the country, with just 22% of individuals classified as obese. This is due to the abundance of farmers markets, grocery stores and healthy eating establishments. Seaport, Back Bay, Fenway, and many of the other areas in the north half of the city. Additionally, some of the best hospitals in the entire world are located mere minutes from the center of Boston. Mass General Hospital and Brigham and Women’s Hospital are both world-renowned, and the effect they have on the surrounding area is palpable. It is quite easy to find healthcare options, often with a branch of one of the aforementioned hospitals within a mile.",
      location: {
        center: [-71.057083, 42.361145],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "boston",
          opacity: 1,
          duration: 500,
        },
        {
          layer: "obesity",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "boston",
          opacity: 0,
          duration: 500,
        },
        {
          layer: "obesity",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "chapter-12",
      alignment: "left",
      hidden: false,
      title: "South Boston Income",
      image: "",
      description: "The area just south of Boston, occupied by Dorchester and surrounding neighborhoods, has a much lower comparative median income than areas only a few miles north in the center of the city. With a median income of $93,000 the area still fares far better than areas in the western half of the state, though the cost-of-living within the city is also far higher. Dorchester is a very diverse area, housing large Black, Latino and LGBTQ+ populations. Historically, this area was also highly segregated from other neighborhoods in Boston, being a large part of the desegregation bussing events of the mid-1970s.",
      location: {
        center: [-71.072105, 42.302708],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "income",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "income",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "chapter-13",
      alignment: "left",
      hidden: false,
      title: "South Boston Depression",
      image: "",
      description: "The South of Boston falls in line with the rest of the city proper when it comes to depression. Boston is a dense city that is difficult to navigate. Adding to this is the lower income bracket of Dorchester and the surrounding neighborhoods, which has been shown to be a factor in depression within a population. Though the area is slowly improving, there are still fewer resources per capita when compared to the affluent neighborhoods further out; This statistic is not surprising given the stressors of the area.",
      location: {
        center: [-71.072105, 42.302708],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "depression",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "depression",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "chapter-14",
      alignment: "left",
      hidden: false,
      title: "South Boston Obesity",
      image: "",
      description: "The South Boston neighborhoods are also higher than the surrounding areas with regards to obesity rates, with Dorchester reporting 31% of individuals as obese compared with 21% in the city overall. This is primarily due to the lack of healthy food stores in the area. Though it fares better than areas more removed from distribution centers (see Springfield, MA) it is still on the higher end of the state when compared to more connected and affluent neighborhoods. Food access and insecurity is a continuing issue in much of the world, and even neighborhoods in large, wealthy American cities are not immune.",
      location: {
        center: [-71.072105, 42.302708],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "obesity",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "obesity",
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: "chapter-15",
      alignment: "fully",
      hidden: false,
      title: "Conclusion",
      image: "",
      description: "Income inequality and the related health issues that arise as a result are ongoing issues across the country. Even within regions the difference in standards of living can be drastically different. Massachusetts, though a small state geographically, exemplifies this economic disparity. As shown above, food deserts and costs-of-living out of whack with income levels can create communities with substantial health issues. Obesity in an important factor in the United States’ leading cause of death-heart disease-and suicide is among the most prevalent causes of death in men. These issues are pervasive and affect nearly everyone in the United States, though they disproportionately affect those without disposable income. Using data from the CDC and the concepts and tools of digital mapping we are able to track these disproportionate areas. Health factor mapping is important to the understanding of not just the demographics of a geographic area, but the holistic understanding of the region through a visual medium.",
      location: {
        center: [-71.925258, 42.377117],
        zoom: 8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "",
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: "",
          opacity: 0,
          duration: 500,
        },
      ],
    },

    // {
    //   id: "Sources and Citations",
    //   alignment: "fully",
    //   hidden: false,
    //   title: "Sources",
    //   description: "",
    //   location: {
    //     center: [-71.925258, 42.377117],
    //     zoom: 8,
    //     pitch: 0,
    //     bearing: 0,
    //   },
    //   mapAnimation: "flyTo",
    //   rotateAnimation: false,
    //   callback: "",
    //   onChapterEnter: [
    //     {
    //       layer: "",
    //       opacity: 1,
    //       duration: 500,
    //     },
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: "",
    //       opacity: 0,
    //       duration: 500,
    //     },
    //   ],
    // },
  ],
};
