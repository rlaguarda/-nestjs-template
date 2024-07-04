import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

export class AuditDto {
  @ApiProperty({
    example: '/test',
    description: 'route',
  })
  @Column()
  route: string;

  @ApiProperty({
    example: '192.168.1.1',
    description: 'ip',
  })
  @Column()
  ip: string;

  @ApiProperty({
    example: 'post',
    description: 'method',
  })
  @Column()
  method: string;
  @ApiProperty({
    example: 'NestJS',
    description: 'Origin',
  })
  @Column()
  origin: string;
}