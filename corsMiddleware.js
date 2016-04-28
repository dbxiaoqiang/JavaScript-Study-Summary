'use strict';
import * as env from '../env';
import * as cors from 'cors';

class CorsFilter {
    createMiddleWare() {
        let config = env.corsConfiguration;
        let whiteList = config.whitelist instanceof Array ? config.whitelist : [];
        let domain = config.domain;
        let corsHandler = cors({
            origin: true
        });
        return (req, res, next) => {
            let origin = req.header('Origin');
            if (origin === domain) {
                next();
            } else if (origin && whiteList.indexOf(origin) !== -1) {
                corsHandler(req, res, next);
            } else {
                res.status(500).send('this is a invalid domain.');
            }
        };
    }
}
let corsFilter = new CorsFilter();
export = corsFilter;