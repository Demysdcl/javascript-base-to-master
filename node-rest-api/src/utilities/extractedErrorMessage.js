// eslint-disable-next-line no-nested-ternary
const extractedErrorMessage = (error) => (error.errors
  ? error.errors.map((err) => err.message)
  : error.message
    ? [error.message]
    : ['We had an internal problem']);

export default extractedErrorMessage;
