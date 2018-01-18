/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('ExtSample01.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'ExtSample01.view.main.MainController',
        'ExtSample01.view.main.MainModel',
        'ExtSample01.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        },
        {
            title: 'Gallery',
            iconCls: 'x-fa fa-camera',
            layout: 'fit',
           items: [{
                xtype: 'imagelist'
            }
            // ,{
            //     xtype: 'image',
            //     tpl:  new Ext.XTemplate('<div style ="float :left;">{imageUrl} </div> '), 
            // }
            
            ]
            
        }
    ]
});
