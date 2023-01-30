export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'a72e5d4fe3msh69c7d0f5d87a150p1307b6jsn785683d62cce'
    }
  };
  

export const fetchData =async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}