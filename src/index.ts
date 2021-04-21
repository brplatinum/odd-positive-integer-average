import { initExpressApp } from './app';

const app = initExpressApp();
const port = process.env.port ?? 8080;

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})

export default app;
