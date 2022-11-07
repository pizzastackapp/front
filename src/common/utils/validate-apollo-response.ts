import { QueryResult } from '@apollo/client';

export const validateApolloResponse = (queryResult: QueryResult<any, any>) => {
  if (queryResult.error) {
    throw new Error('Упс, щось пішло не так 🥲 Спробуйте, будь ласка, пізніше.');
  }
};
