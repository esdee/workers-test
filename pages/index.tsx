
type IndexProps = {
  message: string;
};

export async function getEdgeProps() {
  const endpoint = '/api/messages';
  const response = await fetch(endpoint, {headers: {'Content-Type': 'application/json'}});
  console.log(JSON.stringify(response, null, 2));
  //const message = await response.json();
  return {
    props: {
      message: `Status : ${response.status} HERE!!`
    } as IndexProps,
  };
}

export default function Index({message}: IndexProps) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}