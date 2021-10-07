'use strict';

var response = require ('./res');
var connection = require('./index');

exports.index =function(req,res){
    response.ok("Aplikasi REST API ku berjalan!",res)
};

//menampilkan semua data siswa
exports.tampilsemuatbl_user = function(req,res){
    connection.query('SELECT * FROM tbl_user',function(error, rows, fileds){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data siswa berdasarkan id
exports.tampilberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_user WHERE id_tbl_user = ?', [id],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res)
            }
        });
    
};


//menambahkan data siswa
exports.tambahtbl_userr = function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var name = req.body.name;
    var role = req.body.role;
    var alamat = req.body.alamat;
    var email = req.body.email;
    var HP = req.body.HP;

    connection.query('INSERT INTO tbl_userr (username,password,name,role,alamat,email,HP) VALUES(?,?,?)',
    [username,password,name,role,alamat,email,HP],
        function(error, rows, fields){
            if(error){
            console.log(error);
        }else{
            response.ok("berhasil menambahkan data!",res)
        
        }
    });

};

//mengubah data berdasarkan id
exports.ubahtbl_userr = function(req,res){
    var id = req.body.id_user;
    var username = req.body.username;
    var password = req.body.password;
    var name = req.body.name;
    var role = req.body.role;
    var alamat = req.body.alamat;
    var email = req.body.email;
    var HP = req.body.HP;

    connection.query('UPDATE tbl_userr SET username=?, password=?, name=?, role=?, alamat=?, email=?, HP=? WHERE id_user=?',[username,password,name,role,alamat,email,HP],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("berhasil ubah data",res)
            }
        });
};


//menghapus data berdasarkan id
exports.hapustbl_userr = function(req,res){
    var id = req.body.id_user;
    connection.query('DELETE FROM tbl_userr WHERE id_user=?',[id],
    function(error, rows, fields){
        if(error) {
            console.log(error);
        }else{
            response.ok("berhasil menghapus data",res)
        }
    });
};