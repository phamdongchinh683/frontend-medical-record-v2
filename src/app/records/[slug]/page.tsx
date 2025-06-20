export default async function DetailRecordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>{slug}</h1>
      <p>{slug}</p>
    </div>
  );
}
