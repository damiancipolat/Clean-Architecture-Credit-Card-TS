import { Router } from 'express';

import { 
    request,
    enable,
    pause
} from '../controller/';

const router:Router = Router();

router.post('/', request);
router.patch('/pause/:card_id', pause);
router.patch('/enable/:card_id', enable);

export = router;