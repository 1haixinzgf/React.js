// import Loki from 'lokijs'
// db 配置，初始化，连接及数据查询
// db是一个句柄 代表着数据库  数据库名（一个项目一个库，一堆表） new的过程就得到了这个collections（table的别称， -> rows（数据记录） ->column（列名））
// // sql查询, 典型的异步操作， 用promise来封装  连接数据库要时间  查询要时间 返回结果 都要时间
// export const db = new Loki('notes', {
//     autoload: true, //自动加载
//     autoloadCallback: databaseInitialize,
//     autosave: true, // 自动保存
//     autosaveInterval: 3000,  //保存间隔
//     persistenceMethods: 'localStroage'
// })

// function databaseInitialize () {
//     const notes = db.getCollection('notes') // 得到数据库中的表
//     if (notes === null) {
//         db.addCollection('notes') // 创建表
//     }
// }

// export function loadCollection(collection) { // 数据库操作都是异步操作
//     return new Promise(resolve => {
//         db.loadDatabase({}, () => {
//             const _collection = db.getCollection(collection) || db.addCollection(collection)
//             resolve(_collection)
//         })
//     })
// }


import Loki from 'lokijs';
// db 配置，初始化,连接及数据查询
// db 句柄 代表着数据库 数据库名(一个项目一个库)->collections(table的别称,)->rows(数据记录)-> columns(列名)
// sql查询, 典型的异步操作， 用promise 来封装吧， 连接数据库要时间，查询要时间， 反回结果，要路上的时间

export const db = new Loki('notes', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage'
})

function databaseInitialize () {
  const notes = db.getCollection('notes');
  if (notes === null) {
    db.addCollection('notes')
  }
}

export function loadCollection(collection) {
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const _collection = db.getCollection(collection) || db.addCollection(collection);
      resolve(_collection);
    })
  })
}



