import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
  getKabum(): string {
    return 'Kabum';
  }
}
