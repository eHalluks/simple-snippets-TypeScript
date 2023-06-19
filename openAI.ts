import {Configuration, CreateCompletionRequest, CreateCompletionResponse, OpenAIApi} from "openai";

const parameters: CreateCompletionRequest = {
    n: 1, // Ilość odpowiedzi
    top_p: 1, // Różnorodność (!)
    temperature: 0.35, // Temperatura (!)
    max_tokens: 400, // Maksymalna ilość tokenów, jaką chcemy zapłacić za ODPOWIEDŹ
    best_of: 1, // Najlepszy z N tekstów
    stream: false, // Możliwość streamowania odpowiedzi (jak ChatGPT)
    model: 'gpt-3.5-turbo', // Wybrany model (nazwa z dokumentacji / poprzednich slajdów)
};

const openAIConfig = {
    apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxx', // Klucze wygenerowane na https://platform.openai.com/account/api-keys
    parameters,
};

const extractFirstChoiceText = (data: CreateCompletionResponse): string | null => (
    data?.choices?.[0]?.text ?? null
);

const throwForNoAnswer = (answer: any, prompt: string) => {
    if (!answer) {
        throw new Error(`OpenAI have no answers for prompt! Prompt was ${prompt} and parameters were ${JSON.stringify(OpenAIConfig.parameters)}`);
    }
};

export const generateOpenAiTextCompletition = async (openai: OpenAIApi, prompt: string, overrides: Partial<CreateCompletionRequest> = {}): Promise<string | null> => {
    const {data} = await openai.createCompletion({
        ...openAIConfig.parameters,
        prompt,
        ...overrides,
    });

    const s = extractFirstChoiceText(data);

    throwForNoAnswer(s, prompt);

    return s;
};

(async() => {
    const openai = new OpenAIApi(new Configuration({
        apiKey: openAIConfig.apiKey,
    }));

    console.log(await generateOpenAiTextCompletition(openai, `Napisz wierszyk o tym, że JavaScript wymiata, ale najbardziej wymiata jak się w nim używa OpenAI.`));
})();