import { withSentry } from '@sentry/nextjs';

const handler = async (req, res) => {
  throw new Error("Error from the serverless Next.js lamba")
}

export default withSentry(handler);