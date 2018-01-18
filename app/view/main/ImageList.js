/**
 * This view is an example list of people.
 */
Ext.define('ExtSample01.view.main.ImageList', {
    extend: 'Ext.dataview.List',

    xtype: 'imagelist',

    requires: [
        'ExtSample01.store.Images'
    ],

    // title: 'Images',

    store: {
        type: 'images'
    },


    config : {
 fullscreen: true,
    itemTpl: new Ext.XTemplate(
                    "<div ><div style='float:left'>{name}</div><div style='float:right'><img src='{imageUrl}' style='height: 50px; width: 50px'/></div></div>",
                ),
    },

   

    // listeners : {
//     itemtap: function(view, index, target, record, event) {
//         debugger;
//         console.log("you clicked on " + record.data.url);
//         // secondView.add({
//         //     xtype:'button',
//         //     title: 'my btn on 2 '
//         // })
//         var panel = Ext.create('Ext.Panel', {
//         floating: true,
//         centered: true,
//         width: 200,
//         height: 200,
//         html: 'Hello world!'
//     });

//     Ext.Viewport.add(panel);
//     panel.show();
//     }
// },
    // data: [
    //     { title: 'Item 1', url:'http://media.lonelyplanet.com/lpi/24744/24744-14/469x264.jpg' },
    //     { title: 'Item 2', url:'http://3.bp.blogspot.com/-kyrXb2orUgA/Te9KO0AxR5I/AAAAAAAAErY/X_XkbgU107Q/s1600/Blue_Ocean_17723522_std.jpg' },
    //     { title: 'Item 3', url:'http://1.bp.blogspot.com/-iOPb28o8svc/TpvN-dWORKI/AAAAAAAAAuw/8pPLujrCSQ0/s1600/toronto.jpg' },
    //     { title: 'Item 4', url:'http://www.nyspsych.org/SiteCollectionImages/NYCSkylinelandingpage.jpg' }
    // ]





});
