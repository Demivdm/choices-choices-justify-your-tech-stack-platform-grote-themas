// import React from "react";
// import Layout from "@theme/Layout";
// import { firstPost } from ".";

// fetch("http://localhost/wp-headless/server/wordpress/wp-json/wp/v2/posts")
//   .then((response) => response.json())
//   .then((data) => {})
//   .catch((error) =>
//     console.error("Error fetching data from WordPress:", error)
//   );

// export function Post() {
//   return (
//     <Layout>
//       <h1>Werkvormen{data.posts.slug}</h1>
//       <p>Dit is een werkvorm</p>
//     </Layout>
//   );
// }
// export default firstPost;

import React, { Component } from "react";
import axios from "axios";

export class werkvormen extends Component {
  state = {
    werkvormen: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost/wp-headless/server/wordpress/wp-json/wp/v2/werkvormen"
      )
      .then((res) =>
        this.setState({
          werkvormen: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.state);
    return <div></div>;
  }
}
