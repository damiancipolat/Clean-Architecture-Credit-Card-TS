import { Request, Response } from 'express';

/**
 * Health controller.
 * @param {object} req request object.
 * @param {object} res response object.
 */
const health = async (req: Request, res: Response) => {
  res.status(200).json({ health: 'OK' });
};

export default health;