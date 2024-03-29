import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UnauthorizedException } from '@nestjs/common';
import { HelloService } from './hello.service';
import { CreateHelloDto } from './dto/create-hello.dto';
import { UpdateHelloDto } from './dto/update-hello.dto';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Post()
  create(@Body() createHelloDto: CreateHelloDto) {
    return this.helloService.create(createHelloDto);
  }

  @Get()
  findAll(@Req()request) {    
    if(request.admin){
      return this.helloService.findAll();

    }
    throw new UnauthorizedException()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHelloDto: UpdateHelloDto) {
    return this.helloService.update(+id, updateHelloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helloService.remove(+id);
  }
}
