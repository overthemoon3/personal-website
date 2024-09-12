# Goals: 

The goal of this project is not to show off my calibur as a web developer, it's mainly to get a solid understanding of the subject and to be able to find my way around web app code if the need arises. 
Since I know nothing about next.js or react or SQL or how to make a fully functional web app, I will be chat-gpt-ing the basic framework and then adding things to it as I see fit. 

# My Notes: 

node_modules contains all 3rd party libraries and dependencies so you don't need to worry about it 

public folder is how we shit out code into the browser (whatever that means)
    this is where images, static files go 

src folder contains all of the source code files 
    layout.tsx has typical html tags 

    page.tsx: everything must eventually be compiled here 

dependencies I installed: (this will show up in package.json)
default ones are react, react-dom, and next , also typescript and other dev dependencies listed separately. 

'npm i (install) bootstrap bootstrap-icons (icon) boxicons glightbox react-countup react-typed (automatic typing effect) swiper'

## step 1: install packages is DONE

* next steps: import bootstrap icons, bootstrap, glightbox
* rename project 
*   inter -> raleway

# Tip: try to find and make detailed components and subcomponents 

- using the api folder to load up the backend 
- using components to store code for all of the subcomponents 
- using data for all the static data
in another project, you can use the api to connect to a genuine database like SQL or mongoDB, dynamoDB, firebase 
- sections folder will hold all... sections lol

## step 2: make preparations is DONE 

# Next.js's instructions: 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
