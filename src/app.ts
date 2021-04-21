import express from 'express';
import { isInputGood, averageOddPositiveIntegers } from './util';

export function initExpressApp(): express.Express{
    const app = express();
    app.use(express.json())


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

    return app;
}


