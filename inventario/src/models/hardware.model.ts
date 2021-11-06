import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Hardware extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;


  @property({
    type: 'string',
    required: true,
  })
  procesador: string;

  @property({
    type: 'string',
    required: true,
  })
  memoriaCache: string;

  @property({
    type: 'string',
    required: true,
  })
  memoriaRam: string;

  @property({
    type: 'string',
    required: true,
  })
  almacenamiento: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoDisco: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaCompra: Date;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Hardware>) {
    super(data);
  }
}

export interface HardwareRelations {
  // describe navigational properties here
}

export type HardwareWithRelations = Hardware & HardwareRelations;
