'use server';

/**
 * @fileOverview AI-powered moderation flow for detecting harmful content in community uploads.
 *
 * - moderateContent - A function that moderates content and returns a moderation result.
 * - ModerateContentInput - The input type for the moderateContent function.
 * - ModerateContentOutput - The return type for the moderateContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModerateContentInputSchema = z.object({
  text: z.string().describe('The text content to be moderated.'),
});

export type ModerateContentInput = z.infer<typeof ModerateContentInputSchema>;

const ModerateContentOutputSchema = z.object({
  isSafe: z.boolean().describe('Whether the content is considered safe.'),
  hateSpeech: z.boolean().describe('Whether the content contains hate speech.'),
  sexuallyExplicit: z.boolean().describe('Whether the content contains sexually explicit content.'),
  violence: z.boolean().describe('Whether the content contains violent content.'),
});

export type ModerateContentOutput = z.infer<typeof ModerateContentOutputSchema>;

export async function moderateContent(input: ModerateContentInput): Promise<ModerateContentOutput> {
  return moderateContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'moderateContentPrompt',
  input: {schema: ModerateContentInputSchema},
  output: {schema: ModerateContentOutputSchema},
  prompt: `You are an AI content moderation expert.

You will receive text content and determine whether it is safe for the AfriStory platform.

Consider the following categories:
- Hate Speech: Content that promotes hatred, discrimination, or violence against individuals or groups based on attributes such as race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics.
- Sexually Explicit: Content that contains nudity, sexual acts, or depictions intended to cause arousal.
- Violence: Content that promotes, glorifies, or depicts graphic violence, including acts of physical harm, torture, or abuse.

Based on these categories, analyze the provided text content and set the corresponding output fields to true if the content violates the guidelines.

Text content: {{{text}}}
`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const moderateContentFlow = ai.defineFlow(
  {
    name: 'moderateContentFlow',
    inputSchema: ModerateContentInputSchema,
    outputSchema: ModerateContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
