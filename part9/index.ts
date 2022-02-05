import express from 'express';
const app = express();

import calculateBmi from './bmiCalculator'

app.get('/', (_req, res) => {
    
  res.send('Hello Full Stack');
});
app.get('/bmi', (_req, res) => {
    const weight = Number (_req.query.weight)
    const height = Number (_req.query.height)
 
    if(!weight || !height){
        return res
        .status(400)
        .json({
            error: 'malformatted parameters',
        })
        .end()
    }
    try {
        const bmi = calculateBmi(weight, height)
        return res.status(200).json({ weight, height, bmi }).end()
      } catch (error) {
        return res
          .status(400)
          .type('application/json')
          .json({
            error: 'malformatted parameters',
          })
          .end()
      }
    })




const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});