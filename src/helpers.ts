export async function translate(text: string): Promise<string> {
  try {
    const res = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURI(
        text
      )}`
    );

    const data = await res.json();

    return data[0][0][0];
  } catch (error: unknown) {
    return error as string;
  }
}
