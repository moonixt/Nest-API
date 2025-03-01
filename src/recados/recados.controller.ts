import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly Recadoservicos : RecadosService,){}

  @Get()
  findALL() {
    return 'Essa rota retorna todos os recados';
  }
  @Get('/busca/:id')
  findOne(@Param('id') id:string) {
    console.log(id);
    return `Essa rota retorna o ${id}`;
  }

  @Post()
    create(@Body() body:any) {
      console.log(body);
    return body;
     }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body:any) {
      return {
        id,
        ...body,
      }
    }
    @Delete(':id')
    remover(@Param('id') id: string) {
      return `Removendo o recado ${id}`;
    }

  @Get('teste1')
  testeRender(): string {
    return this.Recadoservicos.estaFuncional()
  }
}
