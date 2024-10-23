import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryColumn("uuid")
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  password: string;

  @Column("varchar", { name: "google_id" })
  googleId;
}
