import { Game } from './Game';
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Game, (game) => game.genre)
  @JoinColumn()
  games: Game[];
}
