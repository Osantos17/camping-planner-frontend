import { useEffect, useState } from "react"
import axios from "axios"

export function Content () {
  const [articles, setArticles] = useState ([])

  const getNewsData = () =>
  console.log("getting news..");
  axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2023-08-11&sortBy=publishedAt&apiKey=dd5a933ac34242388394ced6a56497a6`).then(response => {
    console.log(response.data.articles);
    setArticles(response.data.articles)
  } )

  useEffect(getNewsData, [])
  return(
    <div>
      {articles.map(article =>(
        <div key = {article.title}>
          <p>{article.title}</p>
        </div>
      ))}
    </div>
  )
}