import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

@Entity({ schema: 'nesttest', name: 'audits' })
export class Audit {
  @ApiProperty({
    example: '1',
    description: 'Primary key ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

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