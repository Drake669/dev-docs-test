```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Example Embedding a YouTube video

<div
  style={{
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
    marginBottom: "1rem",
  }}
>
  <iframe
    width="100%"
    height="770"
    src="https://www.youtube.com/embed/AlzO1k7paD0"
    title="CFO AI video"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## Easily understand code sections

- `tab` (MacOS) / `tab` (Windows)

![autocomplete](/img/autocomplete.gif)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

```js
const axios = require("axios");

const fetchData = async () => {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log(response.data); // The data returned from the API
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
{
  "amount": 10000,
  "currency": "NGN"
}
```

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

<div
  style={{
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
    marginBottom: "1rem",
  }}
>
  <video
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
    controls
  >
    <source src="/videos/cmd+i-documentation.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
</div>

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Move to the next

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
