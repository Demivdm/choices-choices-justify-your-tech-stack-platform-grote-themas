<script context="module">
  // voor de const zou ik een apart bestand aan kunnen maken wanneer het teveel queries worden.
  const query = `
  query getPosts {
  posts {
    nodes {
      title
    }
  }
}
`;
  // er wordt een verzoek om te data te laden verstuurd. dit wordt gedefinieerd in de functie.
  // De load functie ontvangt fetch, hierbij wordt gebruik gemaakt van de fetch api
  export async function load({ fetch }) {
    const response = await fetch(
      // er wordt een request gedaan naar het env bestand met een variabel met de url daarin
      import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL,
      {
        // het type verzoek is posten omdat de data opgehaald en gepost wordt op de pagina
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // de query (het data verzoek) wordt opgezet in json?
        body: JSON.stringify({ query }),
      }
    );
    if (response.ok) {
      const responseObj = await response.json();
      const posts = responseObj.data.posts.nodes;

      return {
        props: { posts },
      };
    }
    return {
      status: response.status,
      error: new Error(`Could not load ${URL}`),
    };
  }
</script>

<script>
  export let posts;
</script>

<h1>Werkvormen</h1>

{#if posts}
  <ul>
    {#each posts as post}
      <li>
        <!-- <werkvorm {post} /> -->
        <p>{post.title}</p>
      </li>
    {/each}
  </ul>
{:else}
  <p>Oeps er zijn geen werkvormen beschikbaar</p>
{/if}
