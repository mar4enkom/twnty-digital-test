export function queryFetcher<T extends Maybe<Object>>(endpoint = '', options?: any) {
    return fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, options)
      .then(async (result) => {
        const data = await result.json();
  
        if (result.status >= 400) {
            throw new Error(data)
        }
  
        return data as T;
      })
      .catch((e: Error) => {
        throw e;
      });
}