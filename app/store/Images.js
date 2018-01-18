Ext.define('ExtSample01.store.Images', {
    extend: 'Ext.data.Store',

    alias: 'store.images',

    fields: [
        'name', 'imageUrl'
    ],

    data: { items: [

        // {name: "Picture_1",imageUrl: '../../resources/images/RK_1.jpg'}
        // {name: "Picture_2",imageUrl:' <img src = "http://4.bp.blogspot.com/-8iGyCfFuLuU/T5QA-1t4QTI/AAAAAAAAAXg/izbeFI2PvC0/s1600/korea.jpg"/>'},
        {name: "Picture_3",imageUrl: 'http://www.dynamicdrive.com/cssexamples/media/ocean.jpg'},
        {name: "Picture_4",imageUrl: 'http://media.lonelyplanet.com/lpi/24744/24744-14/469x264.jpg'},
        {name: "Picture_5",imageUrl: 'http://3.bp.blogspot.com/-kyrXb2orUgA/Te9KO0AxR5I/AAAAAAAAErY/X_XkbgU107Q/s1600/Blue_Ocean_17723522_std.jpg'},
        {name: "Picture_6",imageUrl: 'http://1.bp.blogspot.com/-iOPb28o8svc/TpvN-dWORKI/AAAAAAAAAuw/8pPLujrCSQ0/s1600/toronto.jpg'},
        {name: "Picture_7",imageUrl: 'http://www.nyspsych.org/SiteCollectionImages/NYCSkylinelandingpage.jpg'},
        {name: "Picture_8",imageUrl: 'http://www.ebaytemplate.info/wp-content/gallery/germany/elbe-river-dresden-germany.jpg'},
        {name: "Picture_9",imageUrl: 'http://www.feratel.com/uploads/pics/Italien_1_01.jpg'},
        {name: "Picture_10",imageUrl: 'http://blog.educationusa.or.kr/wp-content/uploads/2008/07/dokdo-islets.jpg'},
        // {name: "Picture_11",imageUrl: 'http://www.yarbridgeinn.co.uk/user/sites/yarbridgeinn.co.uk/files/UK%20Travel%20on%20a%20Shoestring%20Budget.jpg'},
        // {name: "Picture_12",imageUrl: 'http://villaluxe.com/wp-content/gallery/pamillaretreat/maxico-palmilla-04.jpg'},
        // {name: "Picture_13",imageUrl: 'http://www.cbrconnection.com/agent_files/Hawaii%20web9.jpg'}
       
    ]},


    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
