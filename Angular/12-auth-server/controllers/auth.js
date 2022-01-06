const bcrypt = require("bcryptjs/dist/bcrypt");
const { response  } = require("express");
const { generarJWT } = require("../helpers/jwt");
const { db } = require("../models/Usuario");
const Usuario = require ("../models/Usuario")



const crearUsuario = async(req, res = response)=>{

    

    const {email, name, password} = req.body;

    try{


     //verificar que correo no se repita
    let usuario = await Usuario.findOne({email})

    if(usuario){
        return res.status(400).json({
            ok: false,
            msg: 'El usuario ya existe'
        })
    }

    //Crear usuario con modelo
    const dbUser = new Usuario(req.body);


    //Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync( password, salt )

    //Generar JWT

    const token = await generarJWT(dbUser.id, name)

    //crear usuario de DB
    await dbUser.save();

    //Generar respuesta exitosa

    return res.status(201).json({
        ok:true,
        uid: dbUser.id,
        name,
        token
    })


    console.log(error)
    }catch (error){
        return res.status(500).json({
            ok:false,
            msg: 'Por favor hable con el admin'
        })
    }


    


    return res.json({
        ok:true,
        msg: 'Crear usuario /new'
    })

}

const loginUsuario = async(req, res)=>{


    const {email, password} = req.body;

    try{

        const dbUser = await Usuario.findOne({email});

        if(!dbUser){
            return res.status(400).json({
                ok: false,
                msg: 'credenciales no son validas'
            })
        }
        //COnfirmar si password hace amtch
        const validPassword = bcrypt.compareSync(password, dbUser.password )

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'credenciales no son validas'
            })
        }

         //Generar JWT
        const token = await generarJWT(dbUser.id, dbUser.name)


        return res.json({
            ok:true,
            uid: dbUser.id,
            name: dbUser.name,
            token
        })


    }catch(error){
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el admin'
        })
    }

} 


const revalidarToken = async(req, res)=>{

    const {uid, name} = req;

     //Generar JWT
     const token = await generarJWT(uid, name)


    return res.json({
        ok:true,
        uid,
        name,
        token
    })

}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}
