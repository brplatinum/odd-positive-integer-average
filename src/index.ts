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
    if (req.body instanceof Array) { //Make sure the input is in the form of an array
        if (isInputGood(req.body)) {
            res.status(200).send({average: averageOddPositiveIntegers(req.body)});
        } else {
            res.status(400).send({message: "Must input integers only"});
        }
    } else {
        res.status(400).send({message: "Must input an array"});
    }   
})

app.listen(process.env.port || 3680, () => {
    console.log('Now listening :)');
})

export default app;
