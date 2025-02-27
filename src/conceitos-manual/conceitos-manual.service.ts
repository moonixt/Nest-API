import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosManualService {
  solucionaProblema(): string {
    return 'Problema solucionado';
  }
}
