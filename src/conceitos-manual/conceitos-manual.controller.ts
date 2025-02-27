import { Controller, Get } from '@nestjs/common';
import { ConceitosManualService } from './conceitos-manual.service';

@Controller('conceitos-manual')
export class ConceitosManualController {
  constructor(
    private readonly ConceitosManualService: ConceitosManualService,
  ) {}

  @Get('conceitosmanual')
  metodo(): string {
    return this.ConceitosManualService.solucionaProblema();
  }
}
