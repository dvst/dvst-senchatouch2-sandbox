Ext.define('Contact',{
	extend: 'Ext.data.Model',
	config: {
		fields: ['valor']
	}
});

var datos = Ext.create('Ext.data.Store', {
	storeId: 'ListStore',
	id: 'ListStore',
	model: 'Contact',
	sorters: 'valor',
	grouper: function(record){
		return record.get('valor')[0];
	},
	data: [
		{valor: 'Accesorios para Vehículos'},
		{valor: 'Animales y Mascotas'},
		{valor: 'Bebés'},
		{valor: 'Cámaras y Accesorios'},
		{valor: 'Celulares y Teléfonos'},
		{valor: 'Coleccionables y Hobbies'},
		{valor: 'Computación'},
		{valor: 'Consolas y Videojuegos'},
		{valor: 'Deportes y Fitness'},
		{valor: 'Electrodomésticos'},
		{valor: 'Electrónica,  Audio y Video'},
		{valor: 'Hogar y Muebles'},
		{valor: 'Industrias'},
		{valor: 'Instrumentos Musicales'},
		{valor: 'Juegos y Juguetes'},
		{valor: 'Libros, Música y Películas'},
		{valor: 'Relojes, Joyas y Bisutería'},
		{valor: 'Ropa, Zapatos y Accesorios'},
		{valor: 'Salud y Belleza'},
		{valor: 'Otras Categorías'}
	]
});

Ext.define("sts.view.Categorias", {
    extend: 'Ext.Panel',
    xtype: 'tipoCategorias',
    config: {
    	items: [
		{
		xtype: 'toolbar',
		docked: 'top',
		items: [{ xtype: 'spacer'},
			{ xtype: 'searchfield', placeHolder: 'Filtrar'},
			{ xtype: 'spacer'}]
		},
		{
		xtype: 'list',
		width:'100',
		height:650,
		itemTpl: '<div class="contact">{valor}</div>',
		store: 'ListStore'
		}
	]
    }
});
