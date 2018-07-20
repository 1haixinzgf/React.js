// 连接mysql
const Sequelize = require('sequelize')

// 数据库 sql
// koa 从数据方面 json obj
const sequelize = new Sequelize('antd', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
}) // 数据库的映射对象，在路由之前执行，先连好数据库 伺服
// antd 数据库的名字  root 账号  123456 密码  host: 数据库位置 operatorsAliases 默认参数

sequelize
    .authenticate()
    .then(() => {
        // console.log('Connection has been authenicate successfully')
    })
    .catch(err => {
        console.log('unable', err)
    })

module.exports = sequelize
