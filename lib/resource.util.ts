export const getHeadings = (source: string) => {
  // console.log(source);
  const regex = /^#{2,3}\s(.*)$/gm;
  const check = source.match(regex);
  if (check) {
    return check.map((heading) => {
      const headingText = heading.replace(/^#+\s/, "");
      return headingText;
    });
  }

  return [];
};

const convertToURI = (str: string) => str.split(/\s/).join("-").toLowerCase();
export const convertToAnchorLink = (str: string) =>
  "#".concat(convertToURI(str));

export function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word characters except for -
    .replace(/--+/g, "-"); // Replace multiple - with single -
}
