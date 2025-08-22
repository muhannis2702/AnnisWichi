var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DATABM_1 = new ol.format.GeoJSON();
var features_DATABM_1 = format_DATABM_1.readFeatures(json_DATABM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATABM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DATABM_1.addFeatures(features_DATABM_1);
var lyr_DATABM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DATABM_1, 
                style: style_DATABM_1,
                popuplayertitle: 'DATA BM',
                interactive: true,
                title: '<img src="styles/legend/DATABM_1.png" /> DATA BM'
            });

lyr_ESRIWorldImagery_0.setVisible(true);lyr_DATABM_1.setVisible(true);
var layersList = [lyr_ESRIWorldImagery_0,lyr_DATABM_1];
lyr_DATABM_1.set('fieldAliases', {'Titik BM': 'Titik BM', 'Grid Northing (m)': 'Grid Northing (m)', 'Grid Easting (m)': 'Grid Easting (m)', 'Elevation (m)': 'Elevation (m)', 'FOTO': 'FOTO', });
lyr_DATABM_1.set('fieldImages', {'Titik BM': 'TextEdit', 'Grid Northing (m)': 'TextEdit', 'Grid Easting (m)': 'TextEdit', 'Elevation (m)': 'TextEdit', 'FOTO': 'TextEdit', });
lyr_DATABM_1.set('fieldLabels', {'Titik BM': 'inline label - always visible', 'Grid Northing (m)': 'inline label - visible with data', 'Grid Easting (m)': 'inline label - visible with data', 'Elevation (m)': 'inline label - visible with data', 'FOTO': 'no label', });
lyr_DATABM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});