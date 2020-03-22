const sql = require('mssql');
const bcrypt = require('bcrypt');
const bcryptPromise = require('bcrypt-promise');
const { poolPromise } = require('../data/db');
const jwt = require('jsonwebtoken');

const roomlist = async function (req, res){

    res.setHeader('Content-Type','application/json');
    let rlist;

    const pool = await poolPromise;

    try{
        rlist = await pool
        .request()
        .query(
            'Select * from Rooms Where TavernID = 1' 
        );
        roomlist = rlist.recordset; 
        console.log(rlist.recordset);
    } catch (e) {
        returnError (res, e, 'No Room List');
    }
    return res.json(roomlist);
    
}
    module.exports.roomlist = roomlist;