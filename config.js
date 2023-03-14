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
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Sources: <a href="https://commons.wikimedia.org/wiki/File:Newton_City_Hall,_Massachusetts.jpg">Kenneth C. Zirkel</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons, <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Depression in Amherst',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Town_Hall%2C_Amherst_MA.jpg',
            description: 'Population: 19,065. This will talk about the prevalence of depression on college campuses',
            location: {
                center: [-72.51884558, 42.375687],
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
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Springfield',
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
                layer: 'smoking',
                opacity: 1,
                duration: 5000
            }],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Newton/Boston Suburbs',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Newton_City_Hall%2C_Massachusetts.jpg',
            description: 'Population:85,146',
            location: {
                center: [-71.20842576, 42.33160123],
                zoom: 10,
                pitch: 8.01,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Fall River',
            image: '',
            description: '',
            location: {
                center: [-71.10257763, 41.72762402],
                zoom: 9,
                pitch: 60,
                bearing: 10
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
            title: 'Dover',
            image: './path/to/image/source.png',
            description: 'Population: 2,265',
            location: {
                center: [-71.27416772, 42.24744324],
                zoom: 12,
                pitch: 40,
                bearing: 40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
