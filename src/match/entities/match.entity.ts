import { Column, Entity } from "typeorm";

@Entity("match")
export class Match {
  @Column("uuid")
  id: string;

  @Column("uuid", { name: "id_user_1" })
  idUser1: string;

  @Column("uuid", { name: "id_user_2" })
  idUser2: string;

  @Column("jsonb", { nullable: true })
  data: Record<string, any>;
}
