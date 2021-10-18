import { Router } from 'express';
import health from './health';
import card from './card';

const router: Router = Router();

router.use('/health', health);
router.use('/card', card);

//router.use(errorHandler)
//router.get('*', notFound);

export = router;