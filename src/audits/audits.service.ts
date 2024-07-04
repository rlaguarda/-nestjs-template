import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Audit } from 'src/entities/audit.entity';
import { Repository } from 'typeorm';
import { AuditDto } from './dto/audit.dto';

@Injectable()
export class AuditsService {

    constructor(@InjectRepository(Audit) private auditRepsitory : Repository<Audit>) {}

    async findAll() {
        const audits = await this.auditRepsitory.find();
        return audits;
      }

    async findById(id: number): Promise<Audit | undefined> {
        const audit = await this.auditRepsitory.findOne({ where: { id } });
        if (audit) {
          return audit;
        }
        throw new HttpException('Not found',HttpStatus.NOT_FOUND,);
      }

}
