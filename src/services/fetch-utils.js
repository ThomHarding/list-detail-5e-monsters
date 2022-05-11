import { client, checkError } from './client';

export async function getMonsters(from = 0, to = 20, orderBy) {
  const response = await client
    .from('Monsters')
    .select()
    .range(from, to)
    .order(orderBy);
    //I had to relearn regex and spend an hour and a half cleaning data to make this line of code work

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