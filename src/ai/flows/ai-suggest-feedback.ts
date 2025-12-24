'use server';

/**
 * @fileOverview A Genkit flow that suggests constructive feedback for Draft tier users.
 *
 * - suggestFeedback - A function that suggests constructive feedback on a user's work.
 * - SuggestFeedbackInput - The input type for the suggestFeedback function.
 * - SuggestFeedbackOutput - The return type for the suggestFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestFeedbackInputSchema = z.object({
  workDescription: z
    .string()
    .describe('The description of the user work for which feedback is requested.'),
  workContent: z
    .string()
    .describe('The content of the user work, could be text or a data URI for images.'),
});
export type SuggestFeedbackInput = z.infer<typeof SuggestFeedbackInputSchema>;

const SuggestFeedbackOutputSchema = z.object({
  feedback: z
    .string()
    .describe('Constructive feedback to help the user improve their work.'),
});
export type SuggestFeedbackOutput = z.infer<typeof SuggestFeedbackOutputSchema>;

export async function suggestFeedback(input: SuggestFeedbackInput): Promise<SuggestFeedbackOutput> {
  return suggestFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestFeedbackPrompt',
  input: {schema: SuggestFeedbackInputSchema},
  output: {schema: SuggestFeedbackOutputSchema},
  prompt: `You are a helpful AI assistant that provides constructive feedback to artists in the AfriStory Draft tier, helping them to improve their skills and get recognition.

  Given the following description and content of their work, provide constructive feedback. The feedback should be encouraging and specific, focusing on areas for improvement and suggesting concrete steps the artist can take.

  Description: {{{workDescription}}}
  Content: {{{workContent}}}
  `,
});

const suggestFeedbackFlow = ai.defineFlow(
  {
    name: 'suggestFeedbackFlow',
    inputSchema: SuggestFeedbackInputSchema,
    outputSchema: SuggestFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
