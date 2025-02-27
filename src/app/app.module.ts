import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConceitosManualModule } from 'src/conceitos-manual/conceitos-manual.modules';
// import { ConceitosAutomaticoModule } from 'src/conceitos-automatico/conceitos-automatico.module';
import { RecadosModule } from 'src/recados/recados.module';

@Module({
  imports: [RecadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
