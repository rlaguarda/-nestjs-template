import { Module } from '@nestjs/common';
import { AuditsController } from './audits.controller';
import { AuditsService } from './audits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Audit } from 'src/entities/audit.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Audit])],
  controllers: [AuditsController],
  providers: [AuditsService]
})
export class AuditsModule {}
