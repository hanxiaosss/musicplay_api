var songSqlMap = {
    // add: 'insert into yy_song(username, password) values(?, ?)',
    // deleteById: 'delete from user where id = ?',
    // update: 'update user set username=?, password=? where id=?',
    list: 'select * from yy_song',
    getById: 'select * from yy_song where sid = ?',
    getNameById: 'select sid,sname,singer,albumname from yy_song where sid = ?'
};

module.exports = songSqlMap;