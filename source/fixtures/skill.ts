import { Connection, getConnection, Repository } from 'typeorm';
import { Skill } from '../entities';

export const SkillFixture = async () => {
  const dbConnection: Connection =
    getConnection('serverConnection');

  // Connect to the database if disconnected
  if (!dbConnection.isConnected)
    await dbConnection.connect();

  const skillRepository: Repository<Skill> =
    dbConnection.getRepository(Skill);

  let fixtures: Skill[] = [];

  for (let index = 0; index < 30; ++index) {
    let skill: Skill = new Skill();
    skill.description = Math.random().toString(36).substr(2, 30);
    skill.label = Math.random().toString(36).substr(2, 30);
    skill.maxLevel = 10;
    skill.links = [];
    let max = Math.random() * 3;
    for (let index = 0; index < max; ++index) {
      let url = `http://${Math.random().toString(36).substr(2, 30)}.gg`
      skill.links.push(url);
    }
    skill.imageUrl = `https://robohash.org/${
      Math.random().toString(36).substr(2, 30)}.png`
    if (fixtures.length > 1) {
      skill.parents = [fixtures[
        fixtures.length - Math.floor(Math.random() * (3 - 1) + 1)
      ]];
      console.log(skill.parents)
    }
    let savedSkill = await skillRepository.save(skill);
    fixtures.push(savedSkill);
  }
}