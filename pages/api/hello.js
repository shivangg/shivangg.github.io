import { withSentry } from '@sentry/nextjs';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (req, res) => {
  console.log("I'm sending in john Doe!")
  res.status(200).json({ name: 'John Doe' })
}

export default withSentry(handler);