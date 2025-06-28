export default async function ContactService(data: FormData) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_CONTACT}`, {
    method: "POST",
    body: data,
  });
  return response;
}
