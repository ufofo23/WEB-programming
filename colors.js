var links = {
    setColor : function(color) {
        // var alinks = document.querySelectorAll('a');
        // for (var i=0; i< alinks.length; ++i) {
        //     alinks[i].style.color = color;
        // }
        $('a').css('color', color);
    }
}

var body = {
    setColor : function(color) {
    //     document.querySelector('body').style.color = color;

        $('body').css('color', color);
    },
    backgroundSetColor : function(color) {
        // document.querySelector('body').style.backgroundColor = color;  
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(self) {
    if (self.value === 'night' ) {
        body.backgroundSetColor('black');
        body.setColor('white');
        links.setColor('powderblue');
        self.value = 'day';
    } else {
        body.backgroundSetColor('white');
        body.setColor('black');
        links.setColor('blue');
        self.value = 'night';
    }
}
