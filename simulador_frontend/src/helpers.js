const getUrl =(filename, query)=>{
    let url = `http://127.0.0.1:8000/api/${filename}`;
      if (Object.keys(query).length > 0) {
        let params = "?";
        for (const key in query) {
          params += `${key}=${query[key]}&`
        }
        params = params.slice(0, -1);
        url += params
      }
    return url
  }

  export {getUrl}