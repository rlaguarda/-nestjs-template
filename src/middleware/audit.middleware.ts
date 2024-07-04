import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppService } from 'src/app.service';
import { AuditDto } from 'src/audits/dto/audit.dto';

@Injectable()
export class AuditMiddleware implements NestMiddleware {

  private readonly ORIGIN : string = 'NestJS';
  constructor(private auditService : AppService) {}
  
  use(req: Request, res: Response, next: NextFunction) {
    this.addAudit(req);
    next();
  }

  private addAudit(req: Request) {
    const auditDto = new AuditDto();
    auditDto.ip = req['socket']?.remoteAddress,
    auditDto.route = req.baseUrl;
    auditDto.method = req.method;
    auditDto.origin = this.ORIGIN
    this.auditService.createAudit(auditDto);
  }
}
