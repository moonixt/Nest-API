import { Controller, Get } from '@nestjs/common';
import { ConceitosAutomaticoService } from './conceitos-automatico.service';

@Controller('conceitos-automatico')
export class ConceitosAutomaticoController {
  constructor(
    private readonly conceitosAutomaticoService: ConceitosAutomaticoService,
  ) {}
  @Get('automatico')
  metodoAutomatico(): string {
    return 'Conceitos-Automatiico';
  }

  @Get('kabum')
  getKabum() {
    return this.conceitosAutomaticoService.getKabum();
  }
}
