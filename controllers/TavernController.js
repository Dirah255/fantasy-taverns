const sql = require('mssql');
const bcrypt = require('bcrypt');
const bcryptPromise = require('bcrypt-promise');
const { poolPromise } = require('../data/db');
const jwt = require('jsonwebtoken');

const roomlist = async function (req, res){
    console.log('I was here')

    res.setHeader('Content-Type','application/json');
    let rlist;

    const pool = await poolPromise;
    console.log(req.query.RoomName);

    try{
        rlist = await pool
        .request()
        .input('TavernID', sql.Int, req.user.TavernID)
        //.input('RoomName', req.query.RoomName)
        .query(
            'Select * from Rooms Where TavernID = @TavernID',
        );
        rmlist = rlist.recordset; 
        console.log(rlist.recordset);
    } catch (e) {
        returnError (res, e, 'No Room List');
    }
    return res.json(rmlist);
    
}
    module.exports.roomlist = roomlist;

    
    const roomdetails = async function (req, res){
        console.log('I was here room details')
    
        res.setHeader('Content-Type','application/json');
        let rlist;
    
        const pool = await poolPromise;
    
        try{
            rd = await pool
            .request()
            .input('TavernID', sql.Int, req.user.TavernID)
            .query(
                'Select RoomName, DailyRate from Rooms Where TavernID = @TavernID',
            );
            rminfo = rd.recordset; 
            console.log(rd.recordset);
        } catch (e) {
            returnError (res, e, 'No Room List');
        }
        return res.json(rminfo);
        
    }
        module.exports.roomdetails = roomdetails;

        const newroom = async function (req, res){
            console.log('I was here newroom')
        
            res.setHeader('Content-Type','application/json');
            let rm = req.body;
            let RoomId;

            console.log(rm);
        
            const pool = await poolPromise;
        
            try {
                result = await pool
                    .request()
                    .input('TavernId', sql.Int, req.user.TavernId)
                    .query(
                        'SELECT max(ID) as RoomId from Rooms where TavernId = @TavernId'
                    );
                RoomId = result.recordset.shift().RoomId;
            } catch (e) {
                throwError(e.message);
            }

            RoomId = RoomId || RoomId == 0 ? RoomId + 1 : 0;
            console.log(rm.Rate);
            try {
                result = await pool
                    .request()
                    .input('RoomName', sql.VarChar, rm.RoomName)
                    .input('DailyRate', sql.VarChar, rm.DailyRate)
                    .input('TavernId', sql.Int, req.user.TavernID)
                    .input('RoomID', sql.Int, RoomId)
                    .query(
                        'INSERT INTO Rooms (RoomName, DailyRate, TavernId, RoomStatus) values(@RoomName, @DailyRate, @TavernId, 1)',
                    );
                rm = result.recordset;
                console.log(rm);
            } catch (e) {
                throwError(e.message);
            }
            return res.json(rm);
        }

            module.exports.newroom = newroom;
