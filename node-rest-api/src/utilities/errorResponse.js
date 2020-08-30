import extractedErrorMessage from './extractedErrorMessage';

const errorResponse = (response, error) => response.status(400)
  .json({ errors: extractedErrorMessage(error) });

export default errorResponse;
