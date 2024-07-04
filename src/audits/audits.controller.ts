import { BadRequestException, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuditsService } from './audits.service';
import { Audit } from 'src/entities/audit.entity';

@ApiTags('Audit')
@Controller('audits')
export class AuditsController {
    constructor(private auditService : AuditsService) {}

    @Get()
    async findAll(): Promise<Audit[]> {
      return await this.auditService.findAll();
    }
    @ApiOperation({ summary: 'Get Audit' })
    @ApiParam({
      name: 'id',
      required: true,
      description: 'audit id',
    })
    @ApiResponse({
      status: 200,
      description: 'ok',
      type: Audit,
    })
    @ApiNotFoundResponse({ description: 'Audit not found' })
    @Get('/:id')
    async getOneUser(@Param('id') id: number) {
      if (!id) {
        return  new BadRequestException("id is required")
      }
      const audit = await this.auditService.findById(id);
      if(!audit) {
        return new NotFoundException("Audit not found")
      }
      return audit;
    }

    @Post()
    create() {
        return 'create audit!';
    }
}
