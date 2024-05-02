import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const getAnswer = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          prompt: question,
          max_tokens: 100,
          temperature: 0.7,
          n: 1,
          stop: '\n',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'sk-proj-rs0dR4PMgYLrGYgSaGbuT3BlbkFJPrGqOtDu5UZOV4yGPyC8',
          },
        }
      );

      setAnswer(response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error fetching answer:', error);
      setAnswer("Sorry, I couldn't retrieve an answer at the moment.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <label htmlFor="question" className="block mb-2">Ask your question:</label>
      <textarea id="question" name="question" className="w-full p-2 mb-4 border border-gray-300 rounded-md" rows="4" cols="50" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
      <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded" onClick={getAnswer}>Get Answer</button>
      
      <div className="mt-4">
        {answer && <div className="bg-gray-100 p-4 rounded-md">{answer}</div>}
      </div>
    </div>
  );
};

export default QuestionForm;
