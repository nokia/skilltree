import { Request, Response } from 'express';
import { ControllerDecorator, GetDecorator } from 'quartzfw';

@ControllerDecorator()
export default class IndexController {
	@GetDecorator()
	private test(req: Request, res: Response) {
		res.send('')
	}
}