export default function (eleventyConfig) {
  // Files/directories that Eleventy should copy unchanged into _site/.
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon.png");

  // Repository documentation is for us, not part of the public site.
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("GITHUB-SETUP.md");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
}
