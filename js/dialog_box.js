/*
 license: MIT-style

 authors:
 - scott (sgz) <sgz@163.com>

 requires:
 - core/1.4.4
 - more/1.4.0.1 Drag
 - more/1.4.0.1 Drag.Move

 provides:
 - DialogBox
 */


WizUi.DialogBox = new Class({
    Extends:WizUi.Widget,
    options:{
        className:'dialog-box',
        resizable:true,
        draggable:true,
        hidden:true,
        width:640,
        height:360,
        title:''
    },
    initialize:function (options) {
        this.parent(options);
        //this.content.update(this.options.load);
    },
    doRender:function () {
        this.buildTitleBar();
        this.buildContent();
        this.buildResizer();
        this.el.position();
        this.el.makeDraggable({'handle':this.titleBar});
    },
    buildTitleBar:function () {
        this.titleBar = new Element('div', {
            'class':'header',
            html:'<h1 class="title">' + this.options.title + '</h1>'
        });
        this.closeButton = new Element('a', {
            text:'X',
            href:'#',
            'class':'close-button',
            events:{
                'click':function () {
                    this.hide();
                }.bind(this)
            }
        });
        this.closeButton.inject(this.titleBar);
        this.titleBar.inject(this.el);
    },
    buildResizer:function () {
        this.resizer = new Element('div', {id:'resizer', 'class':'resize'});
        this.resizer.inject(this.el);
        this.el.makeResizable({'handle':this.resizer});
    },
    buildContent:function () {
        this.content = new Element('div', {'class':'content'});
        this.content.inject(this.el);
    },

    close:function () {
        this.el.dispose();
    },
    setContent:function (method, source, options) {

    }
});
