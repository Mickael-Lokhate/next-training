import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/Layout";

function SearchForm() {
  // const [searchQuery, setSearchQuery] = useState("react");
  const [values, setValue] = useState({
    text: "react",
    coolMsg: "",
  });
  const router = useRouter();

  const handleTextChange = (e, name) => {
    setValue({ ...values, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/news/?searchTerm=${values.text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={values.text}
        onChange={(e) => handleTextChange(e, "text")}
      />
      <input
        type="text"
        placeHolder="Write something..."
        value={values.coolMsg}
        onChange={(e) => handleTextChange(e, "coolMsg")}
      />
      <button>Search</button>
    </form>
  );
}

function News({ news }) {
  return (
    <Layout mainTitle={"News"}>
      <div>
        <h2>List of news</h2>
        <SearchForm />
        <hr />
        {news.map((n, i) => {
          return (
            <p key={i}>
              <a href={n.url} target="_blank">
                {n.title}
              </a>
            </p>
          );
        })}
      </div>
    </Layout>
  );
}

News.getInitialProps = async ({ query }) => {
  let news;
  try {
    const res = await fetch(
      `http://hn.algolia.com/api/v1/search?query=${query.searchTerm}`
    );

    news = await res.json();
  } catch (error) {
    console.log("Error : ", error);
    news = [];
  }
  return {
    news: news.hits,
  };
};

export default News;
