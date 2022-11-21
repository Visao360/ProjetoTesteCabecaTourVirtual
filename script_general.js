(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"start":"this.playAudioList([this.audio_8FC433C5_9C23_15BA_41D3_3AACE22BF589], true); this.init()","borderSize":0,"propagateClick":false,"scrollBarOpacity":0.5,"scrollBarColor":"#000000","defaultVRPointer":"laser","gap":10,"width":"100%","desktopMipmappingEnabled":false,"mobileMipmappingEnabled":false,"paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"definitions": [{"idleSequence":"this.sequence_8C70F0B7_9C23_73C7_41B7_35CF84023823","automaticZoomSpeed":10,"hoverFactor":0,"initialPosition":{"class":"PanoramaCameraPosition","yaw":-174.09,"hfov":120,"pitch":-11.93},"initialSequence":"this.sequence_8C70F0B7_9C23_73C7_41B7_35CF84023823","manualRotationSpeed":200,"class":"PanoramaCamera","timeToIdle":5000,"manualZoomSpeed":4,"id":"panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE_camera"},{"idleSequence":"this.sequence_8C70B0B7_9C23_73C7_41DD_294773B048E2","automaticZoomSpeed":10,"hoverFactor":0,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_8C70B0B7_9C23_73C7_41DD_294773B048E2","manualRotationSpeed":200,"class":"PanoramaCamera","timeToIdle":5000,"manualZoomSpeed":4,"id":"panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6_camera"},{"adjacentPanoramas":[{"distance":100,"yaw":10.05,"panorama":"this.panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE","data":{"overlayID":"overlay_887564DF_9C21_1346_41D4_F7B212720E31"},"class":"AdjacentPanorama","select":"this.overlay_887564DF_9C21_1346_41D4_F7B212720E31.get('areas').forEach(function(a){ a.trigger('click') })"}],"partial":false,"hfov":360,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2048,"width":12288,"url":"media/panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"height":1024,"width":6144,"url":"media/panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"height":512,"width":3072,"url":"media/panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"height":1536,"width":9216,"url":"media/panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"height":2048,"width":12288,"url":"media/panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6,"rowCount":1}]},"thumbnailUrl":"media/panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85_t.jpg"}],"vfov":180,"hfovMin":"135%","pitch":0,"id":"panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85","thumbnailUrl":"media/panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85_t.jpg","overlays":["this.overlay_887564DF_9C21_1346_41D4_F7B212720E31"],"label":trans('panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85.label'),"class":"Panorama","hfovMax":130,"data":{"label":"1"}},{"subtitlesOpacity":1,"progressHeight":10,"borderSize":0,"surfaceReticleOpacity":0.6,"progressBorderSize":0,"subtitlesTop":0,"class":"ViewerArea","progressBarBorderRadius":0,"toolTipPaddingLeft":6,"toolTipShadowHorizontalLength":0,"displayTooltipInSurfaceSelection":true,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundColorDirection":"vertical","width":"100%","paddingLeft":0,"subtitlesEnabled":true,"data":{"name":"Main Viewer"},"subtitlesGap":0,"id":"MainViewer","progressRight":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"surfaceReticleSelectionColor":"#FFFFFF","toolTipBorderSize":1,"paddingRight":0,"subtitlesBackgroundColor":"#000000","progressBarBorderSize":0,"toolTipShadowVerticalLength":0,"toolTipTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"progressOpacity":1,"progressBackgroundOpacity":1,"progressBarBackgroundColorDirection":"vertical","subtitlesHorizontalAlign":"center","surfaceReticleSelectionOpacity":1,"subtitlesFontSize":"3vmin","progressBarBackgroundColorRatios":[0],"subtitlesVerticalAlign":"bottom","subtitlesTextShadowVerticalLength":1,"progressBarBorderColor":"#000000","playbackBarLeft":0,"subtitlesBackgroundOpacity":0.2,"progressBorderRadius":0,"playbackBarHeadHeight":15,"playbackBarHeadShadowBlurRadius":3,"subtitlesBottom":50,"subtitlesTextShadowOpacity":1,"subtitlesPaddingRight":5,"toolTipShadowColor":"#333138","subtitlesPaddingBottom":5,"transitionDuration":500,"toolTipPaddingRight":6,"toolTipFontFamily":"Arial","subtitlesPaddingLeft":5,"progressBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","playbackBarHeadShadowColor":"#000000","toolTipFontColor":"#606060","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipTextShadowOpacity":0,"subtitlesBorderColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","height":"100%","playbackBarBackgroundOpacity":1,"toolTipDisplayTime":600,"subtitlesBorderSize":0,"toolTipFontStyle":"normal","minWidth":100,"firstTransitionDuration":0,"minHeight":50,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"progressLeft":0,"vrPointerSelectionTime":2000,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","progressBorderColor":"#000000","subtitlesTextDecoration":"none","toolTipFontSize":"1.11vmin","playbackBarHeadShadow":true,"subtitlesTextShadowBlurRadius":0,"toolTipFontWeight":"normal","borderRadius":0,"translationTransitionDuration":1000,"subtitlesFontColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","displayTooltipInTouchScreens":true,"paddingBottom":0,"playbackBarHeadBorderRadius":0,"paddingTop":0,"playbackBarHeadOpacity":1,"subtitlesFontFamily":"Arial","toolTipOpacity":1,"playbackBarOpacity":1,"playbackBarHeadBorderColor":"#000000","toolTipTextShadowBlurRadius":3,"toolTipShadowSpread":0,"progressBackgroundColor":["#FFFFFF"],"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowVerticalLength":0,"playbackBarBottom":5,"playbackBarProgressOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"subtitlesPaddingTop":5,"doubleClickAction":"toggle_fullscreen","subtitlesShadow":false,"subtitlesFontWeight":"normal","toolTipShadowBlurRadius":3,"playbackBarProgressBackgroundColorDirection":"vertical","progressBarOpacity":1,"toolTipPaddingBottom":4,"toolTipShadowOpacity":1,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"surfaceReticleColor":"#FFFFFF","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadShadowHorizontalLength":0,"transitionMode":"blending","propagateClick":false,"playbackBarHeadWidth":6,"progressBottom":0,"toolTipBorderRadius":3,"playbackBarProgressBorderSize":0,"shadow":false},{"adjacentPanoramas":[{"distance":100,"yaw":-158.89,"panorama":"this.panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6","data":{"overlayID":"overlay_888B1164_9C23_157A_41DA_6A964A8BCF35"},"class":"AdjacentPanorama","select":"this.overlay_888B1164_9C23_157A_41DA_6A964A8BCF35.get('areas').forEach(function(a){ a.trigger('click') })"},{"distance":9.68,"yaw":32.83,"panorama":"this.panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE","data":{"overlayID":"overlay_89772A6C_9C27_374A_41AE_EEDEEA3AF6A9"},"class":"AdjacentPanorama","select":"this.overlay_89772A6C_9C27_374A_41AE_EEDEEA3AF6A9.get('areas').forEach(function(a){ a.trigger('click') })"}],"partial":false,"hfov":360,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2048,"width":12288,"url":"media/panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"height":1024,"width":6144,"url":"media/panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"height":512,"width":3072,"url":"media/panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"height":1536,"width":9216,"url":"media/panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"height":2048,"width":12288,"url":"media/panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6,"rowCount":1}]},"thumbnailUrl":"media/panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A_t.jpg"}],"vfov":180,"hfovMin":"135%","pitch":0,"id":"panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A","thumbnailUrl":"media/panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A_t.jpg","overlays":["this.overlay_888B1164_9C23_157A_41DA_6A964A8BCF35","this.overlay_89772A6C_9C27_374A_41AE_EEDEEA3AF6A9"],"label":trans('panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A.label'),"class":"Panorama","hfovMax":130,"data":{"label":"3"}},{"minHeight":20,"borderSize":0,"propagateClick":false,"scrollBarOpacity":0.5,"overflow":"scroll","gap":20,"width":"99.713%","paddingLeft":0,"paddingTop":0,"paddingBottom":0,"id":"Container_8E04E3F2_9C23_155E_41C8_ECD0F638BDAD","data":{"name":"Container5275"},"paddingRight":0,"borderRadius":0,"children":["this.IconButton_8ED796DD_9C61_1F4A_41A5_6DC8B022E16D","this.IconButton_8F8D0EEC_9C63_0F4A_41DC_7CB317E6AC51","this.IconButton_8F46A96D_9C62_F54A_41D4_5C12562611BF"],"scrollBarWidth":10,"contentOpaque":false,"horizontalAlign":"center","verticalAlign":"middle","bottom":"0%","height":"36.65%","backgroundOpacity":0,"layout":"horizontal","scrollBarMargin":2,"toolTipHorizontalAlign":"center","scrollBarColor":"#000000","scrollBarVisible":"rollOver","minWidth":20,"shadow":false,"class":"Container","right":"0.12%"},{"borderSize":0,"data":{"name":"LOCALIZA\u00c7\u00c3O"},"width":40,"iconURL":"skin/IconButton_8F46A96D_9C62_F54A_41D4_5C12562611BF.png","cursor":"hand","paddingLeft":0,"id":"IconButton_8F46A96D_9C62_F54A_41D4_5C12562611BF","paddingTop":0,"paddingBottom":0,"backgroundColorRatios":[],"paddingRight":0,"borderRadius":0,"horizontalAlign":"center","backgroundColorDirection":"vertical","transparencyActive":true,"height":120,"backgroundOpacity":0.3,"verticalAlign":"middle","backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_88184097_9C61_13C6_41C4_6BD38FE695DE.source'), '_blank')","toolTipHorizontalAlign":"center","mode":"push","class":"IconButton","minWidth":1,"propagateClick":false,"minHeight":1,"shadow":false},{"adjacentPanoramas":[{"distance":100,"yaw":-141.53,"panorama":"this.panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A","data":{"overlayID":"overlay_88B88B69_9C21_354A_41CA_A8FD2B9024DA"},"class":"AdjacentPanorama","select":"this.overlay_88B88B69_9C21_354A_41CA_A8FD2B9024DA.get('areas').forEach(function(a){ a.trigger('click') })"}],"partial":false,"hfov":360,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2048,"width":12288,"url":"media/panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"height":1024,"width":6144,"url":"media/panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"height":512,"width":3072,"url":"media/panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"height":1536,"width":9216,"url":"media/panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"height":2048,"width":12288,"url":"media/panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6,"rowCount":1}]},"thumbnailUrl":"media/panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6_t.jpg"}],"vfov":180,"hfovMin":"135%","pitch":0,"id":"panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6","thumbnailUrl":"media/panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6_t.jpg","overlays":["this.overlay_88B88B69_9C21_354A_41CA_A8FD2B9024DA"],"label":trans('panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6.label'),"class":"Panorama","hfovMax":130,"data":{"label":"4"}},{"aaEnabled":true,"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","displayPlaybackBar":true,"viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"class":"PlayList","items":["this.PanoramaPlayListItem_8A018408_9C21_12CA_41E2_A4E03E669BB9","this.PanoramaPlayListItem_8A00C408_9C21_12CA_41A2_33D236BEE55E","this.PanoramaPlayListItem_8A009408_9C21_12CA_4184_3012E97C4D34","this.PanoramaPlayListItem_8A006408_9C21_12CA_41D1_9C5ABEF66C33"],"id":"mainPlayList"},{"borderSize":0,"data":{"name":"WHATSAPP"},"width":50,"iconURL":"skin/IconButton_8ED796DD_9C61_1F4A_41A5_6DC8B022E16D.png","cursor":"hand","paddingLeft":0,"id":"IconButton_8ED796DD_9C61_1F4A_41A5_6DC8B022E16D","paddingTop":0,"paddingBottom":0,"backgroundColorRatios":[],"paddingRight":0,"borderRadius":0,"horizontalAlign":"center","backgroundColorDirection":"vertical","transparencyActive":true,"height":200,"backgroundOpacity":0.3,"verticalAlign":"middle","backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_8FB68F90_9C63_0DDA_41D2_88871892E5B0.source'), '_blank')","toolTipHorizontalAlign":"center","mode":"push","class":"IconButton","minWidth":1,"propagateClick":false,"minHeight":1,"shadow":false},{"borderSize":0,"right":"44.54%","textDecoration":"none","fontColor":"#000000","width":"9.579%","paddingLeft":0,"fontFamily":"Bahnschrift Light","paddingTop":0,"paddingBottom":0,"text":trans('Label_8AE6D1D7_9C3F_1546_41DD_8128DE68794B.text'),"data":{"name":"Label16113"},"paddingRight":0,"borderRadius":0,"top":"12.94%","horizontalAlign":"center","id":"Label_8AE6D1D7_9C3F_1546_41DD_8128DE68794B","height":"4.975%","backgroundOpacity":0,"verticalAlign":"middle","fontSize":"1.56vmin","toolTipHorizontalAlign":"center","fontStyle":"normal","minWidth":30,"propagateClick":false,"minHeight":16,"class":"Label","fontWeight":"bold","shadow":false},{"idleSequence":"this.sequence_8C7090B7_9C23_73C7_41B0_A09D991F2473","automaticZoomSpeed":10,"hoverFactor":0,"initialPosition":{"class":"PanoramaCameraPosition","yaw":-116.82,"pitch":-2.56},"initialSequence":"this.sequence_8C7090B7_9C23_73C7_41B0_A09D991F2473","manualRotationSpeed":200,"class":"PanoramaCamera","timeToIdle":5000,"manualZoomSpeed":4,"id":"panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A_camera"},{"autoplay":true,"loop":false,"class":"MediaAudio","audio":"this.audiores_88183E6A_9C23_0F4E_41C5_CFF8BADDF963","data":{"label":"Audio Final"},"id":"audio_8FC433C5_9C23_15BA_41D3_3AACE22BF589"},{"automaticZoomSpeed":10,"hoverFactor":0,"initialSequence":"this.sequence_8C0C60B7_9C23_73C7_41D5_3EBF1A2FDD1D","manualRotationSpeed":200,"class":"PanoramaCamera","timeToIdle":5000,"manualZoomSpeed":4,"initialPosition":{"class":"PanoramaCameraPosition","yaw":-1.21,"hfov":120,"pitch":-3.83},"displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000,"easing":"linear"},{"targetStereographicFactor":0,"targetHfov":120,"targetPitch":-3.83,"easing":"cubic_in_out","class":"TargetRotationalCameraDisplayMovement","duration":3000}],"idleSequence":"this.sequence_8C0C60B7_9C23_73C7_41D5_3EBF1A2FDD1D","displayOriginPosition":{"class":"RotationalCameraDisplayPosition","yaw":-1.21,"hfov":165,"pitch":-90,"stereographicFactor":1},"id":"panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85_camera"},{"borderSize":0,"data":{"name":"INSTAGRAM"},"width":50,"iconURL":"skin/IconButton_8F8D0EEC_9C63_0F4A_41DC_7CB317E6AC51.png","cursor":"hand","paddingLeft":0,"id":"IconButton_8F8D0EEC_9C63_0F4A_41DC_7CB317E6AC51","paddingTop":0,"paddingBottom":0,"backgroundColorRatios":[],"paddingRight":0,"borderRadius":0,"horizontalAlign":"center","backgroundColorDirection":"vertical","transparencyActive":true,"height":83,"backgroundOpacity":0.3,"verticalAlign":"middle","backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_8FE00573_9C67_1D5E_41A2_F94D3E7273FD.source'), '_blank')","toolTipHorizontalAlign":"center","mode":"push","class":"IconButton","minWidth":1,"propagateClick":false,"minHeight":1,"shadow":false},{"adjacentPanoramas":[{"distance":3.87,"yaw":-168.5,"panorama":"this.panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A","data":{"overlayID":"overlay_8828DBFC_9C21_154A_41D2_7EBF19E140C3"},"class":"AdjacentPanorama","select":"this.overlay_8828DBFC_9C21_154A_41D2_7EBF19E140C3.get('areas').forEach(function(a){ a.trigger('click') })"},{"distance":6.76,"yaw":2.6,"panorama":"this.panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85","data":{"overlayID":"overlay_894E99C3_9C27_35BE_41B2_8FE44E1C8E2E"},"class":"AdjacentPanorama","select":"this.overlay_894E99C3_9C27_35BE_41B2_8FE44E1C8E2E.get('areas').forEach(function(a){ a.trigger('click') })"}],"partial":false,"hfov":360,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":2048,"width":12288,"url":"media/panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":24,"rowCount":4},{"height":1024,"width":6144,"url":"media/panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"height":512,"width":3072,"url":"media/panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"height":1536,"width":9216,"url":"media/panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE_0/{face}/vr/0.jpg","tags":"mobilevr","class":"TiledImageResourceLevel","colCount":6,"rowCount":1},{"height":2048,"width":12288,"url":"media/panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","class":"TiledImageResourceLevel","colCount":6,"rowCount":1}]},"thumbnailUrl":"media/panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE_t.jpg"}],"vfov":180,"hfovMin":"135%","pitch":0,"id":"panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE","thumbnailUrl":"media/panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE_t.jpg","overlays":["this.overlay_8828DBFC_9C21_154A_41D2_7EBF19E140C3","this.overlay_894E99C3_9C27_35BE_41B2_8FE44E1C8E2E"],"label":trans('panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE.label'),"class":"Panorama","hfovMax":130,"data":{"label":"2"}},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":295,"yawSpeed":5.31,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31,"easing":"cubic_out"}],"id":"sequence_8C70F0B7_9C23_73C7_41B7_35CF84023823"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":295,"yawSpeed":5.31,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31,"easing":"cubic_out"}],"id":"sequence_8C70B0B7_9C23_73C7_41DD_294773B048E2"},{"data":{"hasPanoramaAction":true,"label":"Circle Arrow 03"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8A1C433C_9C21_16CA_41C2_768A58C1067D","distance":100,"yaw":10.05,"class":"HotspotPanoramaOverlayImage","rotationX":9.25,"hfov":11.92,"vfov":14.85,"data":{"label":"Circle Arrow 03"},"roll":-1.5,"verticalAlign":"middle","horizontalAlign":"center","pitch":-0.84,"scaleMode":"fit_inside"}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_8803A59A_9C21_1DCE_41D4_A5930986285E"],"id":"overlay_887564DF_9C21_1346_41D4_F7B212720E31"},{"data":{"label":"Circle Arrow 03"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8A1CC33C_9C21_16CA_41D1_E20648512EFA","distance":100,"yaw":-158.89,"rotationY":-61.38,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"vfov":10.5,"data":{"label":"Circle Arrow 03"},"verticalAlign":"middle","horizontalAlign":"center","pitch":1.08,"scaleMode":"fit_inside"}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_888CF164_9C23_157A_4196_58236DD46883"],"id":"overlay_888B1164_9C23_157A_41DA_6A964A8BCF35"},{"data":{"hasPanoramaAction":true,"label":"Circle Arrow 04 Right"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"hfov":10.5,"vfov":10.5,"roll":3.04,"horizontalAlign":"center","pitch":-9.96,"image":"this.AnimatedImageResource_8A1C833C_9C21_16CA_41E1_1E77B94E89F6","distance":50,"yaw":32.83,"rotationY":24.28,"class":"HotspotPanoramaOverlayImage","rotationX":5.84,"data":{"label":"Circle Arrow 04 Right"},"verticalAlign":"middle","scaleMode":"fit_inside"}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_89482A6C_9C27_374A_41E1_DCA6D0DB5FB0"],"id":"overlay_89772A6C_9C27_374A_41AE_EEDEEA3AF6A9"},{"data":{"hasPanoramaAction":true,"label":"Circle Arrow 03"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8A03533C_9C21_16CA_41D0_F8FE7E3F676D","distance":100,"yaw":-141.53,"rotationY":43.95,"class":"HotspotPanoramaOverlayImage","hfov":10.5,"vfov":10.5,"data":{"label":"Circle Arrow 03"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-0.37,"scaleMode":"fit_inside"}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_888B6B69_9C21_354A_41E2_A4C5AB379AD1"],"id":"overlay_88B88B69_9C21_354A_41CA_A8FD2B9024DA"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85_camera","media":"this.panorama_8E1CC024_9C23_F2FA_41A1_4B695984AF85","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","id":"PanoramaPlayListItem_8A018408_9C21_12CA_41E2_A4E03E669BB9"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE_camera","media":"this.panorama_8C1DD68A_9C23_1FCE_41D5_96F64E4AE0EE","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","id":"PanoramaPlayListItem_8A00C408_9C21_12CA_41A2_33D236BEE55E"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A_camera","media":"this.panorama_8C1E2494_9C23_33DA_41BA_AD6DECBCAF6A","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","id":"PanoramaPlayListItem_8A009408_9C21_12CA_4184_3012E97C4D34"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6_camera","media":"this.panorama_8C1EF1D2_9C23_155E_41D6_46550265ACA6","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_8A006408_9C21_12CA_41D1_9C5ABEF66C33"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":295,"yawSpeed":5.31,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31,"easing":"cubic_out"}],"id":"sequence_8C7090B7_9C23_73C7_41B0_A09D991F2473"},{"class":"AudioResource","mp3Url":trans('audiores_88183E6A_9C23_0F4E_41C5_CFF8BADDF963.mp3Url'),"id":"audiores_88183E6A_9C23_0F4E_41C5_CFF8BADDF963"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":295,"yawSpeed":5.31,"easing":"linear"},{"class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31,"easing":"cubic_out"}],"id":"sequence_8C0C60B7_9C23_73C7_41D5_3EBF1A2FDD1D"},{"data":{"hasPanoramaAction":true,"label":"Circle Arrow 04 Right"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8A1C133C_9C21_16CA_41D1_34B09B051956","distance":50,"yaw":-168.5,"class":"HotspotPanoramaOverlayImage","rotationX":15.62,"hfov":14.12,"vfov":19.25,"data":{"label":"Circle Arrow 04 Right"},"roll":2.16,"verticalAlign":"middle","horizontalAlign":"center","pitch":-23.69,"scaleMode":"fit_inside"}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_8811EC2B_9C21_12CE_41C0_BE26D3595DAE"],"id":"overlay_8828DBFC_9C21_154A_41D2_7EBF19E140C3"},{"data":{"hasPanoramaAction":true,"label":"Circle Arrow 03"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_8A1CF33C_9C21_16CA_41E0_EAFC29026751","distance":100,"yaw":2.6,"class":"HotspotPanoramaOverlayImage","hfov":15.84,"vfov":16.47,"data":{"label":"Circle Arrow 03"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-14.1,"scaleMode":"fit_inside"}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_8954C9E2_9C27_357E_4174_DD73CE5BB2E6"],"id":"overlay_894E99C3_9C27_35BE_41B2_8FE44E1C8E2E"},{"levels":[{"class":"ImageResourceLevel","width":800,"height":1200,"url":"media/res_8AD403B3_9C21_F5DE_41C9_1F1E13A29E02_0.png"}],"rowCount":6,"class":"AnimatedImageResource","frameCount":24,"colCount":4,"frameDuration":41,"id":"AnimatedImageResource_8A1C433C_9C21_16CA_41C2_768A58C1067D"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_8A00C408_9C21_12CA_41A2_33D236BEE55E, -176.12307692307692, 0.7731663685152066, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_8803A59A_9C21_1DCE_41D4_A5930986285E"},{"levels":[{"class":"ImageResourceLevel","width":800,"height":1200,"url":"media/res_8AD403B3_9C21_F5DE_41C9_1F1E13A29E02_0.png"}],"rowCount":6,"class":"AnimatedImageResource","frameCount":24,"colCount":4,"frameDuration":41,"id":"AnimatedImageResource_8A1CC33C_9C21_16CA_41D1_E20648512EFA"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_8A006408_9C21_12CA_41D1_9C5ABEF66C33, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)","id":"HotspotPanoramaOverlayArea_888CF164_9C23_157A_4196_58236DD46883"},{"levels":[{"class":"ImageResourceLevel","width":536,"height":804,"url":"media/res_8AD423B3_9C21_F5DE_41DD_44192918CFB8_0.png"}],"rowCount":6,"class":"AnimatedImageResource","frameCount":24,"colCount":4,"frameDuration":41,"id":"AnimatedImageResource_8A1C833C_9C21_16CA_41E1_1E77B94E89F6"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_8A00C408_9C21_12CA_41A2_33D236BEE55E, 0, 0, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_89482A6C_9C27_374A_41E1_DCA6D0DB5FB0"},{"levels":[{"class":"ImageResourceLevel","width":800,"height":1200,"url":"media/res_8AD403B3_9C21_F5DE_41C9_1F1E13A29E02_0.png"}],"rowCount":6,"class":"AnimatedImageResource","frameCount":24,"colCount":4,"frameDuration":41,"id":"AnimatedImageResource_8A03533C_9C21_16CA_41D0_F8FE7E3F676D"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_8A009408_9C21_12CA_4184_3012E97C4D34, 45.41538461538462, -3.1062611806797844, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_888B6B69_9C21_354A_41E2_A4C5AB379AD1"},{"levels":[{"class":"ImageResourceLevel","width":536,"height":804,"url":"media/res_8AD423B3_9C21_F5DE_41DD_44192918CFB8_0.png"}],"rowCount":6,"class":"AnimatedImageResource","frameCount":24,"colCount":4,"frameDuration":41,"id":"AnimatedImageResource_8A1C133C_9C21_16CA_41D1_34B09B051956"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_8A009408_9C21_12CA_4184_3012E97C4D34, -143.44615384615383, -0.3352415026833623, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_8811EC2B_9C21_12CE_41C0_BE26D3595DAE"},{"levels":[{"class":"ImageResourceLevel","width":800,"height":1200,"url":"media/res_8AD403B3_9C21_F5DE_41C9_1F1E13A29E02_0.png"}],"rowCount":6,"class":"AnimatedImageResource","frameCount":24,"colCount":4,"frameDuration":41,"id":"AnimatedImageResource_8A1CF33C_9C21_16CA_41E0_EAFC29026751"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_8A018408_9C21_12CA_41E2_A4E03E669BB9, 0, 0, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_8954C9E2_9C27_357E_4174_DD73CE5BB2E6"}],"paddingBottom":0,"backgroundColorRatios":[0],"overflow":"hidden","paddingRight":0,"borderRadius":0,"scripts":{"translate":TDV.Tour.Script.translate,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMainViewer":TDV.Tour.Script.getMainViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"textToSpeech":TDV.Tour.Script.textToSpeech,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"registerKey":TDV.Tour.Script.registerKey,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"cloneBindings":TDV.Tour.Script.cloneBindings,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"getKey":TDV.Tour.Script.getKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"cloneCamera":TDV.Tour.Script.cloneCamera,"init":TDV.Tour.Script.init,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"existsKey":TDV.Tour.Script.existsKey,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getOverlays":TDV.Tour.Script.getOverlays,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"downloadFile":TDV.Tour.Script.downloadFile,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playAudioList":TDV.Tour.Script.playAudioList,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"executeJS":TDV.Tour.Script.executeJS,"quizShowScore":TDV.Tour.Script.quizShowScore,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"shareSocial":TDV.Tour.Script.shareSocial,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setLocale":TDV.Tour.Script.setLocale,"setValue":TDV.Tour.Script.setValue,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPixels":TDV.Tour.Script.getPixels,"getComponentByName":TDV.Tour.Script.getComponentByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showWindow":TDV.Tour.Script.showWindow,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"historyGoForward":TDV.Tour.Script.historyGoForward,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizFinish":TDV.Tour.Script.quizFinish,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"mixObject":TDV.Tour.Script.mixObject},"scrollBarWidth":10,"contentOpaque":false,"horizontalAlign":"left","children":["this.MainViewer","this.Container_8E04E3F2_9C23_155E_41C8_ECD0F638BDAD","this.Label_8AE6D1D7_9C3F_1546_41DD_8128DE68794B"],"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorDirection":"vertical","height":"100%","backgroundOpacity":1,"verticalAlign":"top","backgroundColor":["#FFFFFF"],"vrPolyfillScale":0.75,"layout":"absolute","backgroundPreloadEnabled":true,"scrollBarMargin":2,"toolTipHorizontalAlign":"center","mediaActivationMode":"window","class":"Player","downloadEnabled":true,"minWidth":0,"shadow":false,"minHeight":0,"scrollBarVisible":"rollOver","left":352.4,"data":{"defaultLocale":"pt","name":"Player4352","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnInfoWindow":false,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Mon Nov 21 2022