// import { Hono } from 'hono'

// const app = new Hono()

// app.get('/', async (c) => {
//   const body = await c.req.json()
//   console.log(body);
//   console.log(c.req.header("Authorization"));
//   console.log(c.req.query("param"));

//   return c.text('Hello Hono!')
// })

// export default app
// import { Hono, Next } from 'hono'
// import { Context } from 'hono/jsx';

// const app = new Hono()

// async function authMiddleware (c:any, next:any) {
//   // c means context of this request,response object
//   if (c.req.header("Authorization")) {
//     const initTime=new Date();

//     // Do validation
//     await next()
//     const totalTime=(new Date().getTime()-initTime.getTime())/1000
//     console.log(`it took ${totalTime} seconds`)
//   } else {
//     return c.text("You dont have acces");
//   }
// }


// app.get('/',authMiddleware, async (c) => {
//   const body = await c.req.parseBody()
//   console.log(body);
//   console.log(c.req.header("Authorization"));
//   console.log(c.req.query("param"));

//   return c.json({msg: "as"})
// })


// export default app
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  const styledText = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f0f0;
            text-align: center;
            padding: 20px;
            display:flex;
            align-item:center;
            justify-content:center;
          }
          
          h1 {
            color: #3498db;
          }
        </style>
      </head>
      <body>
        <h1>Hello Hono!</h1>
      </body>
    </html>
  `;

  return c.html(styledText);
});

export default app;
