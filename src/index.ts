/*
import {
    pauseCard
} from './infraestructure/corebanking/pauseAdapter';

pauseCard('123154654564564','2222').then(a=>console.log(a));
*/

import {find} from './infraestructure/repositories/card/';

find('1').then(e=>console.log('--->',e))