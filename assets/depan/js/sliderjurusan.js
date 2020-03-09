var playvid = function(slider) {
    var vid = slider.$currentPage.find('video');
    if (vid.length) {
        // autoplay
        vid[0].play();
    }
};

$('.sliderjurusan').anythingSlider({

    // Autoplay video in initial panel, if one exists
    onInitialized: function(e, slider) {
        playvid(slider);
    },
    // pause video when out of view
    onSlideInit: function(e, slider) {
        var vid = slider.$lastPage.find('video');
        if (vid.length && typeof(vid[0].pause) !== 'undefined') {
            vid[0].pause();
        }
    },
    // play video
    onSlideComplete: function(slider) {
        playvid(slider);
    },
    // pause slideshow if video is playing
    isVideoPlaying: function(slider) {
        var vid = slider.$currentPage.find('video');
        return (vid.length && typeof(vid[0].pause) !== 'undefined' && !vid[0].paused && !vid[0].ended);
    }

});
