var config = {
  style: 'mapbox://styles/willchilders1/cleotdexr00m001qxnol5hhbn',
  accessToken:
    'pk.eyJ1Ijoid2lsbGNoaWxkZXJzMSIsImEiOiJjbGVvdWR3cGkwMmljM3JwNGt6NTY5eGQxIn0.hp7TC4XE9jylFxvvBn4YVA',
  showMarkers: true,
  markerColor: '#3FB1CE',
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  theme: 'dark',
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: 'The Title Text of this Story',
  subtitle:
    'Income is almost always a driving factor in rates of both obesity and depression. Even in Massachusetts, a ',
  byline: 'By a Digital Storyteller',
  footer:
    'Sources: <a href="https://commons.wikimedia.org/wiki/File:Newton_City_Hall,_Massachusetts.jpg">Kenneth C. Zirkel</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons, <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: 'chapter-0',
      alignment: 'right',
      hidden: false,
      title: 'Massachusetts Income Disparity',
      description:
        'While Massachusetts boasts some of the highest average income levels in the country, there are still areas throughout the state that suffer from much lower tax brackets. Within these areas both obesity and depression have a tendency to be on the higher end of state metrics, particularly in spots without proper access to grocery stores and/or medical intervention. This is concentrated in the western half of the state, though the disparity can also be found in certain areas of Boston Metro.',
      image: '',
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
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'income',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'income',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-1',
      alignment: 'fully',
      hidden: false,
      title: 'Massachusetts Depression',
      image: '',
      description: '',
      location: {
        center: [-71.925258, 42.377117],
        zoom: 8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'depression',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'depression',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-2',
      alignment: 'fully',
      hidden: false,
      title: 'Massachusetts Obesity',
      image: '',
      description: '',
      location: {
        center: [-71.925258, 42.377117],
        zoom: 8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'obesity',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'obesity',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-3',
      alignment: 'right',
      hidden: false,
      title: 'Springfield Income',
      image: '',
      description: '',
      location: {
        center: [-72.53952002, 42.11550322],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'income',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'income',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-4',
      alignment: 'left',
      hidden: false,
      title: 'Depression in Springfield',
      image: '',
      description: '',
      location: {
        center: [-72.53952002, 42.11550322],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'depression',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'depression',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-5',
      alignment: 'left',
      hidden: false,
      title: 'Obesity in Springfield',
      image: '',
      description: '',
      location: {
        center: [-72.53952002, 42.11550322],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'obesity',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'obesity',
          opacity: 0,
          duration: 500,
        },
      ],
    },

    {
      id: 'chapter-6',
      alignment: 'right',
      hidden: false,
      title: 'Newton Income',
      image: '',
      description: '',
      location: {
        center: [-71.20842576, 42.33160123],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'income',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'income',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-7',
      alignment: 'right',
      hidden: false,
      title: 'Newton Depression',
      image: '',
      description: '',
      location: {
        center: [-71.20842576, 42.33160123],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'depression',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'depression',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-8',
      alignment: 'left',
      hidden: false,
      title: 'Newton Obesity',
      image: '',
      description: '',
      location: {
        center: [-71.20842576, 42.33160123],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'obesity',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'obesity',
          opacity: 0,
          duration: 500,
        },
      ],
    },

    {
      id: 'chapter-9',
      alignment: 'left',
      hidden: false,
      title: 'Boston Income',
      image: '',
      description: '',
      location: {
        center: [-71.057083, 42.361145],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'income',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'income',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-10',
      alignment: 'left',
      hidden: false,
      title: 'Boston Obesity',
      image: '',
      description: '',
      location: {
        center: [-71.057083, 42.361145],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'obesity',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'obesity',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-11',
      alignment: 'left',
      hidden: false,
      title: 'Boston Depression',
      image: '',
      description: '',
      location: {
        center: [-71.057083, 42.361145],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'depression',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'depression',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-12',
      alignment: 'left',
      hidden: false,
      title: 'South of Boston Obesity',
      image: '',
      description: '',
      location: {
        center: [-71.072105, 42.302708],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'obesity',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'obesity',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-13',
      alignment: 'left',
      hidden: false,
      title: 'South of boston Depression',
      image: '',
      description: '',
      location: {
        center: [-71.072105, 42.302708],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'depression',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'depression',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-14',
      alignment: 'left',
      hidden: false,
      title: 'South Boston Income',
      image: '',
      description: '',
      location: {
        center: [-71.072105, 42.302708],
        zoom: 11,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'income',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: 'income',
          opacity: 0,
          duration: 500,
        },
      ],
    },
    {
      id: 'chapter-15',
      alignment: 'left',
      hidden: false,
      title: 'Conclusion',
      image: '',
      description: '',
      location: {
        center: [-71.925258, 42.377117],
        zoom: 8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: '',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: '',
          opacity: 0,
          duration: 500,
        },
      ],
    },

    {
      id: 'Sources and Citations',
      alignment: 'fully',
      hidden: false,
      title: 'Sources',
      description: '',
      location: {
        center: [-71.925258, 42.377117],
        zoom: 8,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: '',
          opacity: 1,
          duration: 500,
        },
      ],
      onChapterExit: [
        {
          layer: '',
          opacity: 0,
          duration: 500,
        },
      ],
    },
  ],
};
