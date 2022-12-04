import { Game } from './../../games/entities/Game';
import { Entity, JoinColumn, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';

import { User } from './User';

@Entity()
export class Order {
  @PrimaryColumn('uuid')
  id: string;

  @OneToMany(() => User, (user) => user.orders)
  user: User;

  @ManyToMany(() => Game, (game) => game.orders)
  @JoinColumn()
  games: Game[];
}
