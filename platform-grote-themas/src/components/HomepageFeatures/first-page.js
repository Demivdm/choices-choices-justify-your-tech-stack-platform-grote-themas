import React from "react";
import Layout from "@theme/Layout";
import { firstPost } from ".";

// Example using the WordPress REST API
fetch("http://localhost/wp-headless/server/wordpress/wp-json/wp/v2/posts")
  .then((response) => response.json())
  .then((data) => {})
  .catch((error) =>
    console.error("Error fetching data from WordPress:", error)
  );

export function Post() {
  return (
    <Layout>
      <h1>Werkvormen{data.posts.slug}</h1>
      <p>Dit is een werkvorm</p>
    </Layout>
  );
}
export default firstPost;
