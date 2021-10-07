'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

        app.route('/tampil')
            .get(jsonku.tampilsemuatbl_userr);

         app.route('/tampil/:id')
         .get(jsonku.tampilberdasarkanid);

         app.route('/tambah')
         .post(jsonku.tambahtbl_userr);
         
         app.route('/ubah')
         .put(jsonku.ubahtbl_userr);

         app.route('/hapus')
         .delete(jsonku.hapustbl_userr);
    }