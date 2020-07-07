const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

app.use(serve('./web'));
app.use(async ctx => {
  ctx.redirect('/index.html')
});

app.listen(3003);