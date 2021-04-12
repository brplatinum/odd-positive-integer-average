import express from 'express';
import { averageOddPositiveIntegers } from './util';

/**
 * This file should default export the express application - this is for `index.spec.ts` to be able to test it.
 */
const app = express();

app.use(express.json())

function isInputGood(input: any[]): boolean{
    return input.every(item => Number.isInteger(item));
}

app.post('/odd-positive-average', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (isInputGood(req.body)) {
        res.send({average: averageOddPositiveIntegers(req.body)});
    } else {
        res.status(400).send({message: "Must input integers only"});
    }
})

app.listen(process.env.port || 3680, () => {
    console.log('Now listening :)');
})
