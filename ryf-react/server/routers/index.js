const router = require('koa-router')();
const koaBody = require('koa-body')
const User = require('../model/user')
// 后端路由 get post   ctx可以传任何东西 （json，对象，文本...）
router.get('/', async (ctx) => {
    ctx.body = '首页'
});

router.get('/users', async (ctx) => {
    const users = await User.findAll({// 找到全部的
        where: { // 查询条件
            isdelete: 0
        }
    })
    ctx.body = users
})

router.post('/user', koaBody(), async (ctx) => {
    // console.log(ctx.request.body)
    const user = await User.build(ctx.request.body).save();// 将前端传过来的数据存在数据中
    ctx.body = user
})
module.exports = router;
