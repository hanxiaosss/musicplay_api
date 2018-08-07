var commonSqlMap = {
    top6List: 'select sid,sname,singer,songpicture,albumname from yy_song  order by create_time desc limit 0,6',
    recommandList: 'select id,listname,playCount,listPicture from yy_songlist limit 0,6',
};

module.exports = commonSqlMap;