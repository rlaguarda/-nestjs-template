import { Injectable } from '@nestjs/common';
import { Audit } from './entities/audit.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuditDto } from './audits/dto/audit.dto';

@Injectable()
export class AppService {


  constructor(@InjectRepository(Audit) private auditRepsitory : Repository<Audit>) {}


  getHealth(): string {
    return 'Healthy';
  }
  
  createAudit(audit: AuditDto): Promise<Audit> {
      const newAudit = this.auditRepsitory.create(audit);
      return this.auditRepsitory.save(newAudit);
  }
  
}
