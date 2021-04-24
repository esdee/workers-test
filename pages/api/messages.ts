export default async (event) => {
  return {hello: 'world'};
//  return new Response(JSON.stringify({ hello: 'world !!' }), { headers: { 'content-type': 'application/json' }});
};