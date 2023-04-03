var config = {
    style: 'mapbox://styles/willchilders1/cleotdexr00m001qxnol5hhbn',
    accessToken: 'pk.eyJ1Ijoid2lsbGNoaWxkZXJzMSIsImEiOiJjbGVvdWR3cGkwMmljM3JwNGt6NTY5eGQxIn0.hp7TC4XE9jylFxvvBn4YVA',
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
    subtitle: 'Income is almost always a driving factor in rates of both obesity and depression. Even in Massachusetts, a ',
    byline: 'By a Digital Storyteller',
    footer: 'Sources: <a href="https://commons.wikimedia.org/wiki/File:Newton_City_Hall,_Massachusetts.jpg">Kenneth C. Zirkel</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons, <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'mass-obesity',
            alignment: 'right',
            hidden: false,
            title: 'Massachusetts Income Disparity',
            description: 'Income is almost always a driving factor in rates of both obesity and depression. Even in Massachusetts, a ',
            image:'',
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
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [                {
                layer: 'smoking',
                opacity: 1,
                duration: 500
            }],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Massachusetts Depression',
            image: '',
            description: '',
            location: {
                center: [-71.925258, 42.377117],
                zoom: 8,
                pitch: 20,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Massachusetts Obesity',
            image: '',
            description: '',
            location: {
                center: [-71.925258, 42.377117],
                zoom: 8,
                pitch: 20,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Springfield Income',
            alignment: 'right',
            hidden: false,
            title: 'Springfield Income',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/City_Hall_-_Springfield%2C_MA_-_DSC03296.JPG',
            description: 'Population: 153,060. This will talk about the high prevalence of both depression and smoking in Western Massachusetts',
            location: {
                center: [-72.53952002, 42.11550322],
                zoom: 11,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [                {
                layer: 'ma-merged-places-9z82zp',
                opacity: 1,
                duration: 5000
            }],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Depression in Springfield',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Town_Hall%2C_Amherst_MA.jpg',
            description: 'Population: 19,065. This will talk about the prevalence of depression on college campuses',
            location: {
                center: [-72.53952002, 42.11550322],
                zoom: 11,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Obesity in Springfield',
            image: '',
            description: '',
            location: {
                center: [-72.53952002, 42.11550322],
                zoom: 11,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Newton Income',
            image: '',
            description: '',
            location: {
                center: [-71.20842576, 42.33160123],
                zoom: 10,
                pitch: 60,
                bearing: 40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
            
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Newton Depression',
            image: '',
            description: '',
            location: {
                center: [-71.20842576, 42.33160123],
                zoom: 11,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Newton Obesity',
            image: '',
            description: '',
            location: {
                center: [-71.20842576, 42.33160123],
                zoom: 10,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
   
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Boston Income',
            image: '',
            description: '',
            location: {
                center: [-71.057083, 42.361145],
                zoom: 13,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Boston Obesity',
            image: '',
            description: '',
            location: {
                center: [-71.057083, 42.361145],
                zoom: 13,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Boston Depression',
            image: '',
            description: '',
            location: {
                center: [-71.057083, 42.361145],
                zoom: 13,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'South of Boston Obesity',
            image: '',
            description: '',
            location: {
                center: [-71.072105, 42.302708],
                zoom: 12,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'South of boston Depression',
            image: '',
            description: '',
            location: {
                center: [-71.072105, 42.302708],
                zoom: 12,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'tenth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'South Boston Obesity',
            image: '',
            description: '',
            location: {
                center: [-71.072105, 42.302708],
                zoom: 12,
                pitch: 60,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'eleventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description: '',
            location: {
                center: [-71.925258, 42.377117],
                zoom: 8,
                pitch: 20,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
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
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
    ]
};
