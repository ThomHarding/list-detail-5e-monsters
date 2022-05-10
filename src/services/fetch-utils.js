import { client, checkError } from './client';

export async function getMonsters(from = 0, to = 20) {
  const response = await client
    .from('Monsters')
    .select()
    .range(from, to);

  return checkError(response);
}

export async function getSingleMonster(id) {
  const response = await client
    .from('Monsters')
    .select()
    .match({ id })
    .single();

  return checkError(response);

}