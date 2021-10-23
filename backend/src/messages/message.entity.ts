import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class MessageEnt extends Model<MessageEnt> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message: string;
}
