import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9, //This module/value is a way of directing openai to be more or less creative.If its value is very low, more of a direct answer will be given, and vice versa.
      top_p: 1, //used along with temperature to constraint the the creativity of response.
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `ChatGPT was undable to find an answer for that! (Error:${err.message})`
    );

  return res;
};

export default query;

//chatId is not used. It can be used to build prompt, on all the previous prompt, contextual message. .
