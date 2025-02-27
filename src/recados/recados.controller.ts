import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findALL() {
    return 'Essa rota retorna todos os recados';
  }
  @Get(':id')
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
}
