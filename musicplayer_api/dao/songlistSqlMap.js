var songlistSqlMap = {
    // add: 'insert into yy_song(username, password) values(?, ?)',
    // deleteById: 'delete from user where id = ?',
    // update: 'update user set username=?, password=? where id=?',
    list: 'select * from yy_songlist',
    getById: 'select * from yy_songlist where id = ?'
};

module.exports = songlistSqlMap;