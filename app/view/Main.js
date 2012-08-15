Ext.define("sts.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Panel',
        'Ext.field.Search',
        'Ext.List',
	'Ext.form.FieldSet',
	'Ext.SegmentedButton',
	'Ext.dataview.NestedList',
	'Ext.form.Panel'
    ],
    config: {
        tabBarPosition: 'bottom',
	layout: {
		animation: {
			type: 'fade'
		}
	},

        items: [
            {
		xtype: 'tipoCategorias',
                title: 'Categorias',
                iconCls: 'more',
            },
            {
		xtype: 'nestedlist',
                title: 'Actividades',
                iconCls: 'time'
            },
	    {
		xtype: 'panel',
	    	title: 'Buscar',
		iconCls: 'search',
		layout: 'vbox',
	    	items: [
			{title: 'detalle', html: 'detalle de producto', style: 'color:white; background-color: black', height: 100},
			{
				xtype: 'toolbar',
				items: [
					{ xtype: 'spacer'},
					{
						xtype: 'segmentedbutton',
						align:'center',
						allowDepress: false,
						items: [
							{text:'Ver todos', pressed: true},
							{text:'Sólo amigos'}
						]
					},
					{ xtype: 'spacer'}
				]
			},
			{
				flex: 4,
				xtype: 'panel',
				layout: 'hbox',
				defaults: {flex: 1},

				items: [
					{title: 'pros',html: 'lista', style: 'background-color:#3b7e00'},
					{title: 'cons',html: 'listado', style: 'background-color:#b22222'}
				]

			}
		]
	    },
	    {
	    	title: 'Preferencias',
		iconCls: 'settings'
	    },
	    {
		xtype: 'formpanel',
	    	title: 'Cuenta',
		iconCls: 'user',
		url: 'tusabes.php',
		layout: 'vbox',

		items: [
			{
				xtype: 'fieldset',
				title: 'Contactanos',
				instructions: '(La direccion de correo es opcional)',
				items: [
					{xtype: 'textfield', label: 'Nombre'},
					{xtype: 'textfield', label: 'Correo'},
					{xtype: 'textareafield', label: 'Mensaje'}
				],
			
			},
			{
				xtype: 'button',
				text: 'enviar',
				ui: 'confirm',
				handler: function(){
					this.up('formpanel').submit();
				}
			}
		]
	    }
        ]
    }
});
