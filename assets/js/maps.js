/**** REGION MAP****/

/* OSM MAP */
var osm = new ol.layer.Tile({
  title: 'OpenStreetMap',
  type: 'base',
  visible: true,
  source: new ol.source.OSM(),
});

var bingRoads = new ol.layer.Tile({
  title: 'Bing Maps—Roads',
  type: 'base',
  visible: false,
  source: new ol.source.BingMaps({
    key: 'AoS1kZrQgXQz5Og68YTgyGI9HW0XiZ3xrqOYZglv2X-MyCF1I5Ci3c-RGvvsgZJn',
    imagerySet: 'Road'
  })
});

var bingAerial = new ol.layer.Tile({
  title: 'Bing Maps—Aerial',
  type: 'base',
  visible: false,
  source: new ol.source.BingMaps({
    key: 'AoS1kZrQgXQz5Og68YTgyGI9HW0XiZ3xrqOYZglv2X-MyCF1I5Ci3c-RGvvsgZJn',
    imagerySet: 'Aerial'
  })
});

/* Region layer */
var region = new ol.layer.Image({
  title: 'Region',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:region' },
  }),
});

/* Region map */
var region_map = new ol.Map({
  target: document.getElementById("region_map"),
  layers: [osm, region],
  view: new ol.View({
    center: ol.proj.fromLonLat([10.34, 46.40]),
    zoom: 11.7
  })
});

/**** LAYERS ****/

/* DTM layer */
var dtm = new ol.layer.Image({
  title:'DTM',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:dtm' },
  }),
});

/* NDVI layer */
var ndvi = new ol.layer.Image({
  title:'NDVI',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:ndvi' },
  }),
});

/* Aspect layer */
var aspect = new ol.layer.Image({
  title:'Aspect',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:aspect' },
  }),
});

/* DUSAF layer */
var dusaf = new ol.layer.Image({
  title:'Dusaf',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:dusaf' },
  }),
});

/* Faults layer */
var faults = new ol.layer.Image({
  title:'Faults',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:faults' },
  }),
});

/* Plan layer */
var plan = new ol.layer.Image({
  title:'Plan',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:plan' },
  }),
});

/* Profile layer */
var profile = new ol.layer.Image({
  title:'Profile',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:profile' },
  }),
});

/* Rivers layer */
var rivers = new ol.layer.Image({
  title:'Rivers',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:rivers' },
  }),
});

/* Roads layer */
var roads= new ol.layer.Image({
  title:'Roads',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:roads' },
  }),
});

/* Slope layer */
var slope = new ol.layer.Image({
  title:'Slope',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:slope' },
  }),
});

/* NLZ layer */
var nlz = new ol.layer.Image({
  title:'NLZ',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:nlz' },
  }),
});

/* Buildings layer */
var buildings = new ol.layer.Image({
  title:'Buildings',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:buildings' },
  }),
});

/* Population layer */
var population = new ol.layer.Image({
  title:'Population',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:population' },
  }),
});


/* trainingPointsSampled layer */
var training10007030 = new ol.layer.Image({
  title:'Training points(1000/70:30)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:tr10007030' },
  }),
});

/* testingPointsSampled layer */
var testing10007030 = new ol.layer.Image({
  title:'Testing points(1000/70:30)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:ts10007030' },
  }),
});

/* trainingPointsSampled layer */
var training20007030 = new ol.layer.Image({
  title:'Training points(2000/70:30)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:tr20007030' },
  }),
});

/* testingPointsSampled layer */
var testing20007030 = new ol.layer.Image({
  title:'Testing points(2000/70:30)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:ts20007030' },
  }),
});

/* trainingPointsSampled layer */
var training10008020 = new ol.layer.Image({
  title:'Training points(1000/80:20)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:tr10008020' },
  }),
});

/* testingPointsSampled layer */
var testing10008020 = new ol.layer.Image({
  title:'Testing points(1000/80:20)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:ts10008020' },
  }),
});

/* trainingPointsSampled layer */
var training20008020 = new ol.layer.Image({
  title:'Training points(2000/80:20)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:tr20008020' },
  }),
});

/* testingPointsSampled layer */
var testing20008020 = new ol.layer.Image({
  title:'Testing points(2000/80:20)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'GIS3:ts20008020' },
  }),
});

/*RES SUS MAPS*/
var susres10007030 = new ol.layer.Image({
  title:'Reclassified Susceptibility map(1000/70:30)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'susres10007030' },
  }),
});

var susres20007030 = new ol.layer.Image({
  title:'Reclassified Susceptibility map(2000/70:30)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'susres20007030' },
  }),
});

/*SUS MAPS*/
var sus10007030 = new ol.layer.Image({
  title:'Susceptibility map(1000/70:30)',
  visible: true,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'sus10007030' },
  }),
});

var sus10008020 = new ol.layer.Image({
  title:'Susceptibility map(1000/80:20)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'sus10008020' },
  }),
});

var sus20007030 = new ol.layer.Image({
  title:'Susceptibility map(2000/70:30)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'sus20007030' },
  }),
});

var sus20008020 = new ol.layer.Image({
  title:'Susceptibility map(2000/80:20)',
  visible: false,
  source: new ol.source.ImageWMS({
    url: "http://localhost:9000/geoserver/GIS3/wms",
    params: { LAYERS: 'sus20008020' },
  }),
});



/**** MAPS ****/

/* Results Map */

var sus_map = new ol.Map({
  target: document.getElementById("sus_map"),
  layers: [
    new ol.layer.Group({
      title: 'Base Maps',
      layers: [osm,bingAerial, bingRoads]
    }), new ol.layer.Group({
      title: 'Susceptibility maps',
      layers: [sus10007030,sus10008020,sus20007030,sus20008020]
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([10.34, 46.40]),
    zoom: 11.7
  }),
  controls: ol.control.defaults().extend([
    new ol.control.ScaleLine(),
    new ol.control.FullScreen(),
    new ol.control.OverviewMap({layers: [osm]}),
    new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: 'EPSG:4326'
      })
  ])
});
var layerSwitcher = new ol.control.LayerSwitcher({});
sus_map.addControl(layerSwitcher); 


var data_map = new ol.Map({
  target: document.getElementById("data_map"),
  layers: [
    new ol.layer.Group({
      title: 'Base Maps',
      layers: [osm,bingAerial, bingRoads]
    }), new ol.layer.Group({
      title: 'Clipped layers for exposure assesment',
      layers: [buildings, population]
    }), new ol.layer.Group({
      title: 'Reclassified susceptibility maps',
      layers: [susres10007030,susres20007030]
    }), new ol.layer.Group({
      title: 'Training Points',
      layers: [training10007030,training10008020,training20007030,training20008020]
    }), new ol.layer.Group({
      title: 'Testing Points',
      layers: [testing10007030,testing10008020,testing20007030,testing20008020]
    }), new ol.layer.Group({
      title: 'Clipped Environmental factors',
      layers: [dtm,roads,faults,rivers]
    }), new ol.layer.Group({
      title: 'Derived from DTM',
      layers: [aspect,slope,nlz,plan,profile,ndvi,dusaf]
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([10.34, 46.40]),
    zoom: 11.7
  }),
  controls: ol.control.defaults().extend([
    new ol.control.ScaleLine(),
    new ol.control.FullScreen(),
    new ol.control.OverviewMap({layers: [osm]}),
  ])
});
var layerSwitcher = new ol.control.LayerSwitcher({});
data_map.addControl(layerSwitcher); 


