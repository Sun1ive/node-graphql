import faker from 'faker';

faker.seed(100);
const fake = faker.fake('{{database.engine}}, {{name.firstName}} {{name.suffix}}');
export default fake;