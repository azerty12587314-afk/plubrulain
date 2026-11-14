var wms_layers = [];

var lyr_PlanIGN_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Plan IGN',
                            popuplayertitle: 'Plan IGN',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGN_0, 0]);
var format_zone_urbadcoup_1 = new ol.format.GeoJSON();
var features_zone_urbadcoup_1 = format_zone_urbadcoup_1.readFeatures(json_zone_urbadcoup_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zone_urbadcoup_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zone_urbadcoup_1.addFeatures(features_zone_urbadcoup_1);
var lyr_zone_urbadcoup_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zone_urbadcoup_1, 
                style: style_zone_urbadcoup_1,
                popuplayertitle: 'zone_urba — dcoup',
                interactive: true,
    title: 'zone_urba — dcoup<br />\
    <img src="styles/legend/zone_urbadcoup_1_0.png" /> A<br />\
    <img src="styles/legend/zone_urbadcoup_1_1.png" /> Ah<br />\
    <img src="styles/legend/zone_urbadcoup_1_2.png" /> AUc<br />\
    <img src="styles/legend/zone_urbadcoup_1_3.png" /> AUs<br />\
    <img src="styles/legend/zone_urbadcoup_1_4.png" /> N<br />\
    <img src="styles/legend/zone_urbadcoup_1_5.png" /> Nd<br />\
    <img src="styles/legend/zone_urbadcoup_1_6.png" /> Nh<br />\
    <img src="styles/legend/zone_urbadcoup_1_7.png" /> U<br />\
    <img src="styles/legend/zone_urbadcoup_1_8.png" /> <br />' });
var format_travparcelles_2 = new ol.format.GeoJSON();
var features_travparcelles_2 = format_travparcelles_2.readFeatures(json_travparcelles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_travparcelles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_travparcelles_2.addFeatures(features_travparcelles_2);
var lyr_travparcelles_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_travparcelles_2,
maxResolution:1.4002233076130983,
 
                style: style_travparcelles_2,
                popuplayertitle: 'trav — parcelles',
                interactive: true,
                title: '<img src="styles/legend/travparcelles_2.png" /> trav — parcelles'
            });
var format_batiments_3 = new ol.format.GeoJSON();
var features_batiments_3 = format_batiments_3.readFeatures(json_batiments_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batiments_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batiments_3.addFeatures(features_batiments_3);
var lyr_batiments_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batiments_3,
maxResolution:7.00111653806549,
 
                style: style_batiments_3,
                popuplayertitle: 'batiments',
                interactive: true,
                title: '<img src="styles/legend/batiments_3.png" /> batiments'
            });
var format_analyse_densificationcouche_issue_de_la_jointure_4 = new ol.format.GeoJSON();
var features_analyse_densificationcouche_issue_de_la_jointure_4 = format_analyse_densificationcouche_issue_de_la_jointure_4.readFeatures(json_analyse_densificationcouche_issue_de_la_jointure_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_analyse_densificationcouche_issue_de_la_jointure_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_analyse_densificationcouche_issue_de_la_jointure_4.addFeatures(features_analyse_densificationcouche_issue_de_la_jointure_4);
var lyr_analyse_densificationcouche_issue_de_la_jointure_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_analyse_densificationcouche_issue_de_la_jointure_4, 
                style: style_analyse_densificationcouche_issue_de_la_jointure_4,
                popuplayertitle: 'analyse_densification — couche_issue_de_la_jointure',
                interactive: true,
    title: 'analyse_densification — couche_issue_de_la_jointure<br />\
    <img src="styles/legend/analyse_densificationcouche_issue_de_la_jointure_4_0.png" /> grand terrain (5000m)<br />\
    <img src="styles/legend/analyse_densificationcouche_issue_de_la_jointure_4_1.png" /> Dent creuse<br />\
    <img src="styles/legend/analyse_densificationcouche_issue_de_la_jointure_4_2.png" /> Division parcellaire (BIMBY)<br />\
    <img src="styles/legend/analyse_densificationcouche_issue_de_la_jointure_4_3.png" /> Déjà densifié / Lotissement<br />\
    <img src="styles/legend/analyse_densificationcouche_issue_de_la_jointure_4_4.png" /> <br />' });
var format_limite_communebdcarto_v5commune_5 = new ol.format.GeoJSON();
var features_limite_communebdcarto_v5commune_5 = format_limite_communebdcarto_v5commune_5.readFeatures(json_limite_communebdcarto_v5commune_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_communebdcarto_v5commune_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_communebdcarto_v5commune_5.addFeatures(features_limite_communebdcarto_v5commune_5);
var lyr_limite_communebdcarto_v5commune_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_communebdcarto_v5commune_5, 
                style: style_limite_communebdcarto_v5commune_5,
                popuplayertitle: 'limite_commune — bdcarto_v5commune',
                interactive: true,
                title: 'limite_commune — bdcarto_v5commune'
            });
var group_Final = new ol.layer.Group({
                                layers: [lyr_PlanIGN_0,lyr_zone_urbadcoup_1,lyr_travparcelles_2,lyr_batiments_3,lyr_analyse_densificationcouche_issue_de_la_jointure_4,lyr_limite_communebdcarto_v5commune_5,],
                                fold: 'open',
                                title: 'Final'});

lyr_PlanIGN_0.setVisible(true);lyr_zone_urbadcoup_1.setVisible(true);lyr_travparcelles_2.setVisible(true);lyr_batiments_3.setVisible(true);lyr_analyse_densificationcouche_issue_de_la_jointure_4.setVisible(true);lyr_limite_communebdcarto_v5commune_5.setVisible(true);
var layersList = [group_Final];
lyr_zone_urbadcoup_1.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'gpu_doc_id': 'gpu_doc_id', 'gpu_status': 'gpu_status', 'gpu_timestamp': 'gpu_timestamp', 'partition': 'partition', 'libelle': 'libelle', 'libelong': 'libelong', 'typezone': 'typezone', 'destdomi': 'destdomi', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'insee': 'insee', 'datappro': 'datappro', 'datvalid': 'datvalid', 'idurba': 'idurba', 'idzone': 'idzone', 'lib_idzone': 'lib_idzone', 'formdomi': 'formdomi', 'destoui': 'destoui', 'destcdt': 'destcdt', 'destnon': 'destnon', 'symbole': 'symbole', });
lyr_travparcelles_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'created': 'created', 'updated': 'updated', });
lyr_batiments_3.set('fieldAliases', {'commune': 'commune', 'nom': 'nom', 'type': 'type', 'created': 'created', 'updated': 'updated', });
lyr_analyse_densificationcouche_issue_de_la_jointure_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'created': 'created', 'updated': 'updated', 'libelle': 'libelle', 'typezone': 'typezone', 'type_count': 'type_count', 'categorie': 'categorie', });
lyr_limite_communebdcarto_v5commune_5.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'code_insee_de_l_arrondissement': 'code_insee_de_l_arrondissement', 'code_insee_de_la_collectivite_terr': 'code_insee_de_la_collectivite_terr', 'code_insee_du_departement': 'code_insee_du_departement', 'code_insee_de_la_region': 'code_insee_de_la_region', 'population': 'population', 'code_postal': 'code_postal', 'nom_officiel': 'nom_officiel', 'chef_lieu_d_arrondissement': 'chef_lieu_d_arrondissement', 'chef_lieu_de_collectivite_terr': 'chef_lieu_de_collectivite_terr', 'chef_lieu_de_departement': 'chef_lieu_de_departement', 'chef_lieu_de_region': 'chef_lieu_de_region', 'capitale_d_etat': 'capitale_d_etat', 'date_du_recensement': 'date_du_recensement', 'organisme_recenseur': 'organisme_recenseur', 'code_siren': 'code_siren', 'lien_vers_chef_lieu': 'lien_vers_chef_lieu', });
lyr_zone_urbadcoup_1.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'gpu_doc_id': 'TextEdit', 'gpu_status': 'TextEdit', 'gpu_timestamp': 'DateTime', 'partition': 'TextEdit', 'libelle': 'TextEdit', 'libelong': 'TextEdit', 'typezone': 'TextEdit', 'destdomi': 'TextEdit', 'nomfic': 'TextEdit', 'urlfic': 'TextEdit', 'insee': 'TextEdit', 'datappro': 'TextEdit', 'datvalid': 'TextEdit', 'idurba': 'TextEdit', 'idzone': 'TextEdit', 'lib_idzone': 'TextEdit', 'formdomi': 'TextEdit', 'destoui': 'TextEdit', 'destcdt': 'TextEdit', 'destnon': 'TextEdit', 'symbole': 'TextEdit', });
lyr_travparcelles_2.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'commune': 'TextEdit', 'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', });
lyr_batiments_3.set('fieldImages', {'commune': 'TextEdit', 'nom': 'TextEdit', 'type': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', });
lyr_analyse_densificationcouche_issue_de_la_jointure_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'commune': 'TextEdit', 'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', 'libelle': 'TextEdit', 'typezone': 'TextEdit', 'type_count': 'TextEdit', 'categorie': 'TextEdit', });
lyr_limite_communebdcarto_v5commune_5.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'code_insee_de_l_arrondissement': 'TextEdit', 'code_insee_de_la_collectivite_terr': 'TextEdit', 'code_insee_du_departement': 'TextEdit', 'code_insee_de_la_region': 'TextEdit', 'population': 'Range', 'code_postal': 'TextEdit', 'nom_officiel': 'TextEdit', 'chef_lieu_d_arrondissement': 'CheckBox', 'chef_lieu_de_collectivite_terr': 'CheckBox', 'chef_lieu_de_departement': 'CheckBox', 'chef_lieu_de_region': 'CheckBox', 'capitale_d_etat': 'CheckBox', 'date_du_recensement': 'DateTime', 'organisme_recenseur': 'TextEdit', 'code_siren': 'TextEdit', 'lien_vers_chef_lieu': 'TextEdit', });
lyr_zone_urbadcoup_1.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'gpu_doc_id': 'no label', 'gpu_status': 'no label', 'gpu_timestamp': 'no label', 'partition': 'no label', 'libelle': 'no label', 'libelong': 'no label', 'typezone': 'no label', 'destdomi': 'no label', 'nomfic': 'no label', 'urlfic': 'no label', 'insee': 'no label', 'datappro': 'no label', 'datvalid': 'no label', 'idurba': 'no label', 'idzone': 'no label', 'lib_idzone': 'no label', 'formdomi': 'no label', 'destoui': 'no label', 'destcdt': 'no label', 'destnon': 'no label', 'symbole': 'no label', });
lyr_travparcelles_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'commune': 'no label', 'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'contenance': 'no label', 'created': 'no label', 'updated': 'no label', });
lyr_batiments_3.set('fieldLabels', {'commune': 'no label', 'nom': 'no label', 'type': 'no label', 'created': 'no label', 'updated': 'no label', });
lyr_analyse_densificationcouche_issue_de_la_jointure_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'commune': 'no label', 'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'contenance': 'no label', 'created': 'no label', 'updated': 'no label', 'libelle': 'no label', 'typezone': 'no label', 'type_count': 'no label', 'categorie': 'no label', });
lyr_limite_communebdcarto_v5commune_5.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_insee': 'no label', 'code_insee_de_l_arrondissement': 'no label', 'code_insee_de_la_collectivite_terr': 'no label', 'code_insee_du_departement': 'no label', 'code_insee_de_la_region': 'no label', 'population': 'no label', 'code_postal': 'no label', 'nom_officiel': 'no label', 'chef_lieu_d_arrondissement': 'no label', 'chef_lieu_de_collectivite_terr': 'no label', 'chef_lieu_de_departement': 'no label', 'chef_lieu_de_region': 'no label', 'capitale_d_etat': 'no label', 'date_du_recensement': 'no label', 'organisme_recenseur': 'no label', 'code_siren': 'no label', 'lien_vers_chef_lieu': 'no label', });
lyr_limite_communebdcarto_v5commune_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});