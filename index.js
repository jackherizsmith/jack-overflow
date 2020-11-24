const input = document.querySelector("input");
const output = document.querySelector("output");
async function getAnswers(search) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyBpEjOjqf_x0AhvplpjrDqcQT0oIViKnXc&cx=aea8ce3a3154d4ec4&q="${search}`
  );
  const data = await res.json();
  const results = data.items;
  return results.map((results) => results.htmlTitle);
}
input.addEventListener("keydown", async (e) => {
  let results;
  if (e.key === "Enter") {
    results = await getAnswers(input.value);
    output.innerHTML = results.join("<hr>");
  }
});
