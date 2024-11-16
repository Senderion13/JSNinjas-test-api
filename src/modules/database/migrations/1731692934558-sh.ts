import { MigrationInterface, QueryRunner } from 'typeorm';

export class Sh1731692934558 implements MigrationInterface {
  name = 'Sh1731692934558';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "asset" ("id" SERIAL NOT NULL, "uri" character varying(500) NOT NULL, "description" character varying(150) NOT NULL, CONSTRAINT "PK_1209d107fe21482beaea51b745e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "superhero" ("id" SERIAL NOT NULL, "nickname" character varying(30) NOT NULL, "real_name" character varying(30) NOT NULL, "origin_description" character varying(150) NOT NULL, "superpowers" character varying(100) NOT NULL, "catch_phrase" character varying(50) NOT NULL, CONSTRAINT "PK_b92ff773465116c2b5e215bb910" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "superhero_assets" ("id" SERIAL NOT NULL, "assetId" integer, "superheroId" integer, CONSTRAINT "PK_1aecced3a039f38375cc3cf577e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero_assets" ADD CONSTRAINT "FK_b4059d0c9d5b203983a77e51747" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero_assets" ADD CONSTRAINT "FK_f63be65544651c1809e859cea30" FOREIGN KEY ("superheroId") REFERENCES "superhero"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "superhero_assets" DROP CONSTRAINT "FK_f63be65544651c1809e859cea30"`);
    await queryRunner.query(`ALTER TABLE "superhero_assets" DROP CONSTRAINT "FK_b4059d0c9d5b203983a77e51747"`);
    await queryRunner.query(`DROP TABLE "superhero_assets"`);
    await queryRunner.query(`DROP TABLE "superhero"`);
    await queryRunner.query(`DROP TABLE "asset"`);
  }
}
