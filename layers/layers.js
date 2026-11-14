var wms_layers = [];

var format_Zone_PLU_0 = new ol.format.GeoJSON();
var features_Zone_PLU_0 = format_Zone_PLU_0.readFeatures(json_Zone_PLU_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone_PLU_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_PLU_0.addFeatures(features_Zone_PLU_0);
var lyr_Zone_PLU_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone_PLU_0, 
                style: style_Zone_PLU_0,
                popuplayertitle: 'Zone_PLU',
                interactive: true,
    title: 'Zone_PLU<br />\
    <img src="styles/legend/Zone_PLU_0_0.png" /> Zone A (Agricole)<br />\
    <img src="styles/legend/Zone_PLU_0_1.png" /> Zone Ah (Agricole - habitat / secteur protégé)<br />\
    <img src="styles/legend/Zone_PLU_0_2.png" /> Zone AUc (À urbaniser à vocation commerciale/future)<br />\
    <img src="styles/legend/Zone_PLU_0_3.png" /> Zone AUs (À urbaniser sous conditions)<br />\
    <img src="styles/legend/Zone_PLU_0_4.png" /> Zone N (Naturelle et forestière)<br />\
    <img src="styles/legend/Zone_PLU_0_5.png" /> Zone Nd (Naturelle - secteur de loisir/détente)<br />\
    <img src="styles/legend/Zone_PLU_0_6.png" /> Zone Nh (Naturelle - habitat en zone naturelle)<br />\
    <img src="styles/legend/Zone_PLU_0_7.png" /> Zone U (Urbaine)<br />' });
var format_Limite_Brulain_1 = new ol.format.GeoJSON();
var features_Limite_Brulain_1 = format_Limite_Brulain_1.readFeatures(json_Limite_Brulain_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Brulain_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Brulain_1.addFeatures(features_Limite_Brulain_1);
var lyr_Limite_Brulain_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_Brulain_1, 
                style: style_Limite_Brulain_1,
                popuplayertitle: 'Limite_Brulain',
                interactive: true,
                title: 'Limite_Brulain'
            });
var group_Final = new ol.layer.Group({
                                layers: [lyr_Zone_PLU_0,lyr_Limite_Brulain_1,],
                                fold: 'open',
                                title: 'Final'});

lyr_Zone_PLU_0.setVisible(true);lyr_Limite_Brulain_1.setVisible(true);
var layersList = [group_Final];
lyr_Zone_PLU_0.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'gpu_doc_id': 'gpu_doc_id', 'gpu_status': 'gpu_status', 'gpu_timestamp': 'gpu_timestamp', 'partition': 'partition', 'libelle': 'libelle', 'libelong': 'libelong', 'typezone': 'typezone', 'destdomi': 'destdomi', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'insee': 'insee', 'datappro': 'datappro', 'datvalid': 'datvalid', 'idurba': 'idurba', 'idzone': 'idzone', 'lib_idzone': 'lib_idzone', 'formdomi': 'formdomi', 'destoui': 'destoui', 'destcdt': 'destcdt', 'destnon': 'destnon', 'symbole': 'symbole', });
lyr_Limite_Brulain_1.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'code_insee_de_l_arrondissement': 'code_insee_de_l_arrondissement', 'code_insee_de_la_collectivite_terr': 'code_insee_de_la_collectivite_terr', 'code_insee_du_departement': 'code_insee_du_departement', 'code_insee_de_la_region': 'code_insee_de_la_region', 'population': 'population', 'code_postal': 'code_postal', 'nom_officiel': 'nom_officiel', 'chef_lieu_d_arrondissement': 'chef_lieu_d_arrondissement', 'chef_lieu_de_collectivite_terr': 'chef_lieu_de_collectivite_terr', 'chef_lieu_de_departement': 'chef_lieu_de_departement', 'chef_lieu_de_region': 'chef_lieu_de_region', 'capitale_d_etat': 'capitale_d_etat', 'date_du_recensement': 'date_du_recensement', 'organisme_recenseur': 'organisme_recenseur', 'code_siren': 'code_siren', 'lien_vers_chef_lieu': 'lien_vers_chef_lieu', });
lyr_Zone_PLU_0.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'gpu_doc_id': 'TextEdit', 'gpu_status': 'TextEdit', 'gpu_timestamp': 'DateTime', 'partition': 'TextEdit', 'libelle': 'TextEdit', 'libelong': 'TextEdit', 'typezone': 'TextEdit', 'destdomi': 'TextEdit', 'nomfic': 'TextEdit', 'urlfic': 'TextEdit', 'insee': 'TextEdit', 'datappro': 'TextEdit', 'datvalid': 'TextEdit', 'idurba': 'TextEdit', 'idzone': 'TextEdit', 'lib_idzone': 'TextEdit', 'formdomi': 'TextEdit', 'destoui': 'TextEdit', 'destcdt': 'TextEdit', 'destnon': 'TextEdit', 'symbole': 'TextEdit', });
lyr_Limite_Brulain_1.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'code_insee_de_l_arrondissement': 'TextEdit', 'code_insee_de_la_collectivite_terr': 'TextEdit', 'code_insee_du_departement': 'TextEdit', 'code_insee_de_la_region': 'TextEdit', 'population': 'Range', 'code_postal': 'TextEdit', 'nom_officiel': 'TextEdit', 'chef_lieu_d_arrondissement': 'CheckBox', 'chef_lieu_de_collectivite_terr': 'CheckBox', 'chef_lieu_de_departement': 'CheckBox', 'chef_lieu_de_region': 'CheckBox', 'capitale_d_etat': 'CheckBox', 'date_du_recensement': 'DateTime', 'organisme_recenseur': 'TextEdit', 'code_siren': 'TextEdit', 'lien_vers_chef_lieu': 'TextEdit', });
lyr_Zone_PLU_0.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'gpu_doc_id': 'no label', 'gpu_status': 'no label', 'gpu_timestamp': 'no label', 'partition': 'no label', 'libelle': 'no label', 'libelong': 'no label', 'typezone': 'no label', 'destdomi': 'no label', 'nomfic': 'no label', 'urlfic': 'no label', 'insee': 'no label', 'datappro': 'no label', 'datvalid': 'no label', 'idurba': 'no label', 'idzone': 'no label', 'lib_idzone': 'no label', 'formdomi': 'no label', 'destoui': 'no label', 'destcdt': 'no label', 'destnon': 'no label', 'symbole': 'no label', });
lyr_Limite_Brulain_1.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_insee': 'no label', 'code_insee_de_l_arrondissement': 'no label', 'code_insee_de_la_collectivite_terr': 'no label', 'code_insee_du_departement': 'no label', 'code_insee_de_la_region': 'no label', 'population': 'no label', 'code_postal': 'no label', 'nom_officiel': 'no label', 'chef_lieu_d_arrondissement': 'no label', 'chef_lieu_de_collectivite_terr': 'no label', 'chef_lieu_de_departement': 'no label', 'chef_lieu_de_region': 'no label', 'capitale_d_etat': 'no label', 'date_du_recensement': 'no label', 'organisme_recenseur': 'no label', 'code_siren': 'no label', 'lien_vers_chef_lieu': 'no label', });
lyr_Limite_Brulain_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});