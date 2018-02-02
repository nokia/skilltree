import * as Env from 'env-var';
import {
	Controller,
	Get,
	HttpStatus,
	Param,
	Req,
	Res
	} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('*')
export class IndexController {
	@Get()
	getIndex(@Req() req: Request, @Res() res: Response) {
		res.render('app', { title: 'Skill Tree' });
	}
}